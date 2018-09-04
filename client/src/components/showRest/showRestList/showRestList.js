import React from "react";
import PropTypes from "prop-types";

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
            <li key={index} className="list-group-item">
            <div className="row justify-content-start">
              <div className="col-5">
                <img src={rest.photos_url} alt="Error" style={{ width: "100%" }} />
              </div>

              <div className="col-7 text-sm-left">
                <p className="my-0">{`Name: ${rest.name}`}</p>
                <p className="my-0">{`Rating: ${rest.cuisines}`}</p>
                <p className="my-0">{`Rating: ${rest.cuisines}`}</p>
                <p className="my-0">{`Address: ${rest.location.address}`}</p>
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
