import React from "react";
import PropTypes from "prop-types";
import API from "../../utils/API";
// import noimage from "../../../public/img/noimage"


export const DisplayResults = props => {


//   // When save restaurant button is clicked, add restaurant to db
const handleSaveButton = (id) => {
  const findRestaurantByID = props.data;
  console.log("findArticleByID: ", findRestaurantByID);
  // const newSave = props.data;
  const newSave = {restName: findRestaurantByID.name, 
                   cuisine: findRestaurantByID.cuisines, 
                   location: findRestaurantByID.location.address,
                   photos: findRestaurantByID.thumb,
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
      <div id={props.divID} className = "card-container">
        <div className='card' onClick={() => props.pickRest(props.data.id)} style={{width: "100%"}}>
          <div className='image-div-result'>
            <img className='card-img-top' src={ props.data.thumb || (window.location.origin + '/img/noimage.jpg')} alt="RestaurantImage"/>
          </div>
        
          <div className="card-body">
            <div className="nameNtype">
              <div className='result-element result-name'>
                <h4>{props.data.name}</h4>
              </div>
              <div className='result-element result-type'>
                <h5>{props.data.cuisines}</h5>
              </div>
            </div>
            <div className='result-element result-cost-rate'>
              <h6><span>Avg cost for two<br/></span> ${props.data.average_cost_for_two}</h6>
              <h6><span>User rating</span><br/>{props.data.user_rating.aggregate_rating}</h6>
            </div>


            <div className='result-element result-address'>
              <p><i className="fas fa-map-marker-alt"></i>  {props.data.location.address}</p>
            </div>
          </div>
                  <button className="btn btn-primary" onClick={() => handleSaveButton(props.data.id)}>Save</button>
        </div>     
     </div>
     

  );
};

DisplayResults.propTypes = {
  data: PropTypes.object
};
