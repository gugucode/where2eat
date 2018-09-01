import React from "react";
import PropTypes from "prop-types";

export const DisplayResults = props => {
  return (
    <div className="container">
      <li className="list-group-item">
        <h4>
          <span>
            <em>{props.data.restName}</em>
            <em>{props.data.cuisine}</em>
          </span>
          <span className="btn-group pull-right">
            <img href={props.data.photos} target="_blank" />
          </span>
        </h4>
      </li>
    </div>
  );
};

DisplayResults.propTypes = {
  data: PropTypes.array
};
