import React from "react";
import PropTypes from "prop-types";

export const ShowCard = props => {
  console.log(props);

  const imgStyle = {
    maxWidth: "70%",
    margin: "auto"
  };

  return (
    <div className="col-3 col-sm-2 p-1">
      <div className="card border-white">
        <img
          className="card-img-top rounded-circle"
          src={props.img}
          alt="Card"
          style={imgStyle}
        />
        <div className="card-body p-0">
          <a href={props.url} className="card-title small">
            {props.restName}
          </a>
          <p className="card-text small">{props.rating}</p>
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
