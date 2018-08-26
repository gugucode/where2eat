import React from "react";
import PropTypes from "prop-types";

export const ShowRestList = props => {
  return (
    <li className="list-group-item">
      <div className="row justify-content-start">
        <div className="col-3 col-md-2">
          <img
            // className="card-img-top"
            src={props.img}
            alt="Error"
          />
        </div>

        <div className="col-8 col-md-10 text-left">
          <p className="my-0">{`Name: ${props.restName}`}</p>
          <p className="my-0">{`Rating: ${props.rating}`}</p>
          <p className="my-0">{`Address: ${props.address}`}</p>
          <a href={props.url} className="badge badge-info btn-sm">
            Detail
          </a>
        </div>
      </div>
    </li>
  );
};

ShowRestList.propTypes = {
  img: PropTypes.string,
  restName: PropTypes.string,
  rating: PropTypes.string,
  address: PropTypes.string,
  url: PropTypes.string
};
