import React from "react";
import PropTypes from "prop-types";

// When save restaurant button is clicked, add restaurant to db
handleSaveButton = (id) => {
  const findRestaurantByID = this.state.restaurants.find((el) => el._id === id);
  console.log("findArticleByID: ", findRestaurantByID);
  const newSave = {restName: findRestaurantByID.data.name, 
                   cuisine: findRestaurantByID.data.cuisines, 
                   photos: findRestaurantByID.data.photos_url,
                   rates: findRestaurantByID.data.user_rating.aggregate_rating};
  API.saveRestaurant(newSave)
  .then(this.getSavedRestaurant());
}

export const DisplayResults = props => {
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
            <img href={props.data.photos_url} target="_blank" />
          </span>
        </h4>
      </li>
      <button className="btn btn-primary" onClick={() => props.handleSaveButton(props._id)}>Save</button>
    </div>
  );
};

DisplayResults.propTypes = {
  data: PropTypes.array
};
