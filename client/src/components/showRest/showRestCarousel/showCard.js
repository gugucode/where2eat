import React from "react";
import PropTypes from "prop-types";

export const ShowCard = props => {
  return (
    <div className="col-md-4">
      <div className="card mb-2">
        <img className="card-img-top" src={props.img} alt="Card" />
        <div className="card-body">
          <a href={props.url} className="card-title">
            {props.restName}
          </a>
          <p className="card-text">{props.rating}</p>
        </div>
      </div>
    </div>
  );
};

ShowCard.propTypes = {
  img: PropTypes.string,
  restName: PropTypes.string,
  rating: PropTypes.string,
  address: PropTypes.string,
  url: PropTypes.string
};
