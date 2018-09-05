import React from "react";
import PropTypes from "prop-types";
import API from "../../utils/API";

export const DisplayResults = props => {

  // When save restaurant button is clicked, add restaurant to db
const handleSaveButton = (id) => {
  const findRestaurantByID = props.data;
  console.log("findArticleByID: ", findRestaurantByID);
  const newSave = {restName: findRestaurantByID.name, 
                   cuisine: findRestaurantByID.cuisines, 
                   photos: findRestaurantByID.photos_url,
                   rates: findRestaurantByID.user_rating.aggregate_rating,
                   rest_id: findRestaurantByID.id};
  API.saveRestaurant(newSave)
  .then(result => {
    console.log(result)
  })
  // .then(this.getSavedRestaurant());
}

  return (
    <div className="container">
      <li className="list-group-item">
        <h4>
          <span>
            <em>{props.data.name}</em> 
            <em>{props.data.cuisines}</em>
            <em>{props.data.user_rating.aggregate_rating}</em>
          </span>
          <span className="btn-group pull-right">
            <img src={props.data.thumb} target="_blank" />
          </span>
        </h4>
       

      </li>
      <button className="btn btn-primary" onClick={() => handleSaveButton(props.data.id)}>Save</button>
    </div>
  );
};

DisplayResults.propTypes = {
  data: PropTypes.array
};
