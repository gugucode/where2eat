import React from "react";
import API from "../../utils/API";

 // When delete article button is clicked, remove article from db
const handleDeleteButton = (id) => {
  API.deleteRestaurant(id)
    // .then(this.deleteRestaurant());
}

const addCommentButton = (id) => {

}

const Saved = props =>(
  <div className="container">
    <li className="list-group-item">
      <h4>
      <span>
            <em>{props.data.name}</em> 
            <em>{props.data.cuisines}</em>
            <em>{props.data.user_rating.aggregate_rating}</em>
          </span>
          <span className="btn-group pull-right">
            <img href={props.data.thumb} target="_blank" />
          </span>
          
            <button className="btn btn-default" onClick={() => addCommentButton(props.data.id)}>Add Comment</button>
         
          <button className="btn btn-primary" onClick={() => handleDeleteButton(props.data.id)}>Delete</button>
      
      </h4>  
    </li>

  {/* modal for add comment */}
  <div className="modal" tabindex="-1" role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <p></p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save Comment</button>
      </div>
    </div>
  </div>
</div>


  </div>
  )
export default Saved;
