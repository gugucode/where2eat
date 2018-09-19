import React from "react";
import PropTypes from "prop-types";
import Saved from "../../comments/addComment";
import ShowComments from "../../comments/showComments";

export const ShowRestList = props => {
  return (
    <div id="favorite-places">
      <h6 className="text-left my-0">
        Your favorite places <hr style={{ margin: "0 0 2em 0" }} />
      </h6>
      <ul>
        {props.data.map((rest, index) => (
          rest.restaurant ? (
          <li key={index} className="list-group-item">
            <div className="row justify-content-start">
              <div className="col-5">
                <img src={rest.restaurant.thumb} alt="Error" style={{ width: "100%" }} />
              </div>

              <div className="col-7 text-sm-left">
                <p className="my-0">{`Name: ${rest.restaurant.name}`}</p>
                <p className="my-0">{`Rating: ${rest.restaurant.cuisines}`}</p>
                <p className="my-0">{`Rating: ${rest.restaurant.cuisines}`}</p>
                <p className="my-0">{`Address: ${rest.restaurant.location.address}`}</p>
                
                {/* <a href={rest.url} className="badge badge-info btn-sm">
                  Detail
                </a> */}
              </div>
            </div>
          </li>
          ) : (
            <li id={`rest${rest.id}`} key={index} className="list-group-item">
            <div className="row justify-content-start">
              <div className="col-5">
                <img src={rest.photos} alt="Error" style={{ width: "100%" }} />
              </div>

              <div className="col-7 text-sm-left">
                <p className="my-0">{`Name: ${rest.restName}`}</p>
                <p className="my-0">{`Rating: ${rest.rates}`}</p>
                <p className="my-0">{`Cuisine: ${rest.cuisine}`}</p>
                <p className="my-0">{`Address: ${rest.location}`}</p>
                <button type="button" className="btn btn-primary" data-toggle="collapse" data-target={`#${rest.id}`} data-whatever="@mdo">Add Comment</button>
                <Saved id={rest.id} user={props.user}/>
                <button type="button" className="btn btn-primary" data-toggle="collapse" data-target="accordionExample" data-whatever="@mdo">Show Comment</button>
                <ShowComments />
                {/* <a href={rest.url} className="badge badge-info btn-sm">
                  Detail
                </a> */}
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
