import React from "react";
import $ from "jquery";
import API from "../../utils/API";
import Saved from "./addComment";

class ShowComments extends React.Component {
  constructor(props) {
    super(props);
  }

  // handle add friend request, searchKey cannot be empty and searchKey must be in the potentialFriends list
  deletecomment = event => {
    const id = event.target.getAttribute("value");
    API.deleteComment(id)
        .then(result => {
        console.log(result)
        $(`#card_${id}`).remove();        
    })
  }

  render() {
    return (
        // <div>
            <div className="collapse" id={`comments${this.props.id}`}>
                {   
                    Array.isArray(this.props.data) ? (
                    this.props.data.map((comment, index) => (
                        <div className="card" key={index} id={`card_${comment.id}`}> 
                            <div className="card-header d-flex justify-content-between align-items-center" id="headingOne">
                                <p className="mb-0">                                  
                                    <span style={{fontWeight: "bold"}}>{comment.creator}</span> : {comment.comment} <br/>
                                    <span style={{fontStyle: "oblique", fontSize: ".5em"}}>{comment.createdAt}</span>
                                </p>
                                <a onClick={this.deletecomment}>
                                    <i className="fas fa-trash-alt" value={comment.id}></i>
                                </a>
                            </div>
                        </div>
                    ))) : ("")
                }
            </div>
           
    //   </div>
    );
  }
}

export default ShowComments;
