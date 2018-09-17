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
      <div className = "col-12 col-md-5">
        <div className='card'  style={{width: "100%"}}>
          <div className='image-div-result'>
            <img className='card-img-top' src={props.data.thumb} />
          </div>
        
          <div className="card-body">
            <div className='result-element result-name'>
              <h5>{props.data.name}</h5>
            </div>
          
            <div className='result-element result-vote'>
              <h5>{props.data.cuisines}</h5>
            </div>

            <div className='result-element result-vote'>
              <h5>{props.data.user_rating.aggregate_rating}</h5>
            </div>

            <div className='result-element result-vote'>
              <h6>{props.data.location.address}</h6>
            </div>
          </div>
        
          <button className="btn btn-primary" onClick={() => props.pickRest(props.data.id)}>Yes</button>
        </div>     
     </div>
     

  );
};

DisplayResults.propTypes = {
  data: PropTypes.array
};
