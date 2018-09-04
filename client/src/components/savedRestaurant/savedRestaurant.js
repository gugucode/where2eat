import React from "react";

 // When delete article button is clicked, remove article from db
 handleDeleteButton = (id) => {
    API.deleteRestaurant(id)
      .then(this.getSavedRestaurants());
  }


const Saved = props =>
  <div className="container">
    <li className="list-group-item">
      <h4>
      <span>
            <em>{props.data.name}</em> 
            <em>{props.data.cuisines}</em>
            <em>{props.data.user_rating.aggregate_rating}</em>
          </span>
          <span className="btn-group pull-right">
            <img href={props.data.photos_url} target="_blank" />
          </span>
          
            <button className="btn btn-default ">View Restaurant</button>
         
          <button className="btn btn-primary" onClick={() => props.handleDeleteButton(props._id)}>Delete</button>
      
      </h4>
     
    </li>
 
       

   
  </div>

export default Saved;
