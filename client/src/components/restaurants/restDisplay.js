import React from "react";
import PropTypes from "prop-types";
import API from "../../utils/API";


export const DisplayResults = props => {


//   // When save restaurant button is clicked, add restaurant to db
const handleSaveButton = (id) => {
  const findRestaurantByID = props.data;
  console.log("findArticleByID: ", findRestaurantByID);
  const newSave = {restName: findRestaurantByID.name, 
                   cuisine: findRestaurantByID.cuisines, 
                   location: findRestaurantByID.location.address,
                   photos: findRestaurantByID.photos_url,
                   rates: findRestaurantByID.user_rating.aggregate_rating,
                   rest_id: findRestaurantByID.id};
  API.saveRestaurant(newSave)
  // .then(result => {
  //   console.log(result)
  // })
  .then(result=>{
    console.log(result)
  });
}

  return (
    // <div className="container">
    //  <div className= "row">
      <div className = "col-md-6">
      <li className="list-group-item">
        <h4>
          <span>
            <ul>
            <li>Restaurant: {props.data.name}</li> 
            <li>Cuisine: {props.data.cuisines}</li>
            <li>Address: {props.data.location.address}</li>
            <li>Rating: {props.data.user_rating.aggregate_rating}</li>
            </ul>
          </span>
          <span className="btn-group pull-right">
            <img src={props.data.thumb} target="_blank" />
          </span>
        </h4>
       
      </li>
      <button className="btn btn-primary" onClick={() => handleSaveButton(props.data.id)}>Save</button>
      {/* <nav aria-label="Page navigation example">
        <ul className="pagination">
         <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
         </li>
         <li className="page-item"><a className="page-link" href="#">1</a></li>
         <li className="page-item"><a className="page-link" href="#">2</a></li>
         <li className="page-item"><a className="page-link" href="#">3</a></li>
         <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
         </li>
        </ul>
      </nav> */}
     </div>
     
  //   </div>
  //  </div>

  );
};

DisplayResults.propTypes = {
  data: PropTypes.array
};
