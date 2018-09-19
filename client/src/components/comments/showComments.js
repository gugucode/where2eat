import React from "react";
import $ from "jquery";
import API from "../../utils/API";
import Saved from "./addComment";

class ShowComments extends React.Component {
  constructor(props) {
    super(props);
  }

  // handle add friend request, searchKey cannot be empty and searchKey must be in the potentialFriends list
  deletecomment = comment => {
    const id = comment.target.getAttribute("value");
    console.log(id)
    API.deletecomment({
        id: id
    }).then(result => {
        console.log(result)
        $(`#card_${id}`).remove();
        
    })
  }

  render() {
    return (
        <div id="favorite-places">
            <h5 className="text-left my-0">
                Comments <hr style={{ margin: "0 0 2em 0" }} />
            </h5>

            <div className="accordion" id="accordionExample">
                {   
                    Array.isArray(this.props.data) ? (
                    this.props.data.map((comment, index) => (
                        <div className="card" key={index} id={`card_${comment.id}`}> 
                            <div className="card-header d-flex justify-content-between align-items-center" id="headingOne">
                                <h5 className="mb-0">
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#${index}`} aria-expanded="true" aria-controls="collapseOne">
                                        {comment.summary}
                                    </button>
                                </h5>
                                <a onClick={this.deletecomment}>
                                    <i className="fas fa-trash-alt" value={comment.id}></i>
                                </a>
                            </div>

                            <div id={index} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
            
                            </div>
                        </div>
                    ))) : ("")
                }
            </div>
           
      </div>
    );
  }
}

export default ShowComments;
