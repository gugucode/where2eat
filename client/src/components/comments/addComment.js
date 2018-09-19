import React from "react";
import API from "../../utils/API";
import $ from "jquery";
import ShowComments from "./showComments";



class Saved extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      comment: "",
      id: ''
    }
  }

   // When delete article button is clicked, remove article from db
  handleDeleteButton = (id) => {
    API.deleteRestaurant(id)
      .then(result => {
          console.log(result);
          if(result.status === 200){
              $(`#rest${id}`).remove();
          }
      });
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
    const newComment = {
        comment: this.state.comment,
        restId: this.props.id,
        creator: this.props.user,
    };

    API.saveComment(newComment)
    .then(result => {
      console.log(result);
      $(".collapse-footer").append ("You saved comment!");

    })
  
  
  }

  render() {
  
  return (
  <div className="container">
    {/* <li className="list-group-item">
      <h4>
      <span>
        <ul>
            <li>{this.newSave}</li>  */}
            {/* <li>{this.props.findRestaurantByID.cuisines}</li>
            <li>{this.props.findRestaurantByID.location.address}</li>
          <li className="btn-group pull-right">
            <img href={this.props.data.thumb} target="_blank" />
          </li> */}
          {/* </ul> */}
     {/* </span> */}
          
          
         
          <button className="btn btn-primary" onClick={() => this.handleDeleteButton(this.props.id)}>Delete</button>
      
      {/* </h4>   */}
    {/* </li> */}

  {/* collapse for add comment */}
  <div className="collapse" id={`${this.props.id}`} tabindex="-1" role="dialog">

    <div className="collapse-content">
      {/* <form> */}
      <div className="collapse-header">
        <h5 className="collapse-title">Add Comment Here...</h5>
        <button type="button" className="close" data-dismiss="collapse" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="collapse-body">
        <textarea className ="form-control" name="comment" value={this.state.comment} onChange={this.handInputChange}/>
      </div>
      <div className="collapse-footer">
   
        <button className="btn btn-primary" onClick={this.saveCommentButton}>Save Comment</button>
      </div>
      {/* </form> */}
    </div>
  
</div>


  </div>
  )}
}
export default Saved;
