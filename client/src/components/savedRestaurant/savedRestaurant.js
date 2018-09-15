import React from "react";
import API from "../../utils/API";
import $ from "jquery";

 // When delete article button is clicked, remove article from db
const handleDeleteButton = (id) => {
  API.deleteRestaurant(id)
    // .then(this.deleteRestaurant());
}


class Saved extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      comment: "",
      id: ''
    }
  }

  handInputChange = (event) => {
    const { name , value } = event.target;
    this.setState({
      [name] : value
    })
  }

  saveCommentButton = (event) => {
    
    console.log ("saveComment: ", this.state.comment);
    // const newComment = {
    //   comment: saveComments.comments
    // }
    const newComment = {comment: this.state.comment};
    API.saveRestaurant(newComment)
    .then(result => {
      console.log(result);
      $(".modal-footer").append ("You saved comment!");

    })
  
  
  }

  render() {
  
  return (
  <div className="container">
    <li className="list-group-item">
      <h4>
      <span>
        <ul>
            <li>{this.newSave}</li> 
            {/* <li>{this.props.findRestaurantByID.cuisines}</li>
            <li>{this.props.findRestaurantByID.location.address}</li>
          <li className="btn-group pull-right">
            <img href={this.props.data.thumb} target="_blank" />
          </li> */}
          </ul>
      </span>
          
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Add Comment</button>
         
          <button className="btn btn-primary" onClick={() => handleDeleteButton(this.props.data.id)}>Delete</button>
      
      </h4>  
    </li>

  {/* modal for add comment */}
  <div className="modal" id="exampleModal" tabindex="-1" role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      {/* <form> */}
      <div className="modal-header">
        <h5 className="modal-title">Add Comment Here...</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <textarea className ="form-control" name="comment" value={this.state.comment} onChange={this.handInputChange}/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button className="btn btn-primary" onClick={this.saveCommentButton}>Save Comment</button>
      </div>
      {/* </form> */}
    </div>
  </div>
</div>


  </div>
  )}
}
export default Saved;
