import React from "react";
import API from "../../utils/API";

 // When delete article button is clicked, remove article from db
const handleDeleteButton = (id) => {
  API.deleteRestaurant(id)
    // .then(this.deleteRestaurant());
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
          
            <button className="btn btn-default ">View Restaurant</button>
         
          <button className="btn btn-primary" onClick={() => handleDeleteButton(props.data.id)}>Delete</button>
      
      </h4>
     
    </li>
  </div>
  )
export default Saved;
