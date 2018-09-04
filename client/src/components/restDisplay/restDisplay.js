import React from "react";
import PropTypes from "prop-types";

export const DisplayResults = props => {
  return (
    <div className="container">
      <li className="list-group-item">
        <h4>
            <em>{props.data.name}</em>
        </h4>
        <p>
          <em>{props.data.cuisines}</em>
        </p>
        <img src={props.data.photos_url} />

      </li>
    </div>
  );
};

DisplayResults.propTypes = {
  data: PropTypes.array
};
