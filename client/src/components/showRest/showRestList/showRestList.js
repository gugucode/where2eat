import React from "react";
import PropTypes from "prop-types";
import Saved from "../../comments/addComment";
import ShowComments from "../../comments/showComments";
import $ from "jquery";
import API from "../../../utils/API";

export const ShowRestList = props => {
  const style = {
    fontSize: ".7em"
  }

  const imgStyle = {
    minWidth: "8em",
    minHeight: "8em",
    maxWidth: "11em",
    maxHeight: "11em",
    overflow: "hidden",
    borderRadius: "50%"
  }

   // When delete article button is clicked, remove article from db
  const handleDeleteButton = (id) => {
    API.deleteRestaurant(id)
      .then(result => {
          console.log(result);
          if(result.status === 200){
              $(`#rest${id}`).remove();
          }
      });
  }

  return (
    <div id="favorite-places">
      <h6 className="text-left my-0">
        {props.header} <hr style={{ margin: "0 0 2em 0" }} />
      </h6>
      <ul className="px-1">
        {props.data.map((rest, index) => (
          rest.restaurant ? (
            // print restaurants info when pull from zomatos
          <li key={index} className="list-group-item">
            <div className="restList-row row justify-content-around">
              <div className="col-5">
                <img src={rest.restaurant.thumb || (window.location.origin + "/img/noimage.jpg")} alt="Error" style={{ ...imgStyle, width: "100%" }} />
              </div>

              <div className="col-6  col-md-5 text-sm-left">
                <p className="my-0" style={style}>{`Name: ${rest.restaurant.name}`}</p>
                <p className="my-0" style={style}>{`Rating: ${rest.restaurant.cuisines}`}</p>
                <p className="my-0" style={style}>{`Address: ${rest.restaurant.location.address}`}</p>
                <a href={rest.restaurant.url} className="badge badge-info btn-sm" target="_blank">
                  Detail
                </a>
              </div>
            </div>
          </li>
          ) : (
            // print
            <li id={`rest${rest.id}`} key={index} className="list-group-item">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 px-0">
                <div className="row justify-content-around">
                  <div className="col-5 col-md-4 px-0">
                    <img src={rest.photos || (window.location.origin + "/img/noimage.jpg")} alt="Error" style={{ width: "100%" }} />
                  </div>

                  <div className="col-7 col-md-5 text-sm-left">
                    <p className="my-0">{`Name: ${rest.restName}`}</p>
                    <p className="my-0">{`Rating: ${rest.rates}`}</p>
                    <p className="my-0">{`Cuisine: ${rest.cuisine}`}</p>
                    <p className="my-0">{`Address: ${rest.location}`}</p>
                    <button className="btn btn-primary btn-sm mx-0" onClick={() => handleDeleteButton(rest.id)}>Delete</button>
                    <button type="button" className="btn btn-primary btn-sm" data-toggle="collapse" data-target={`#${rest.id}`} data-whatever="@mdo">Add Comment</button>
                    {/* <button type="button" className="btn btn-primary btn-sm" onClick={() => handleLikeButton(rest.id)}><i class="fas fa-thumbs-up">({this.state.numlike})</i></button> */}
                    <Saved id={rest.id} user={props.user}/>
                  </div>
                </div>
              </div>
            </div>
          </li>
          ) 

        ))}
      </ul>
    </div>
  );
};

ShowRestList.propTypes = {
  data: PropTypes.array
};
