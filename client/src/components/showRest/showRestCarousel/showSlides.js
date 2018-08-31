import React from "react";
import PropTypes from "prop-types";
import { ShowCard } from "./showCard";

export const ShowSlides = props => {
  console.log("slides");
  console.log(props);
  return (
    <div className={`carousel-item ${props.active}`}>
      <div className="row justify-content-center">
        {props.data.map((rest, index) => (
          <ShowCard key={`${props.k}_${index}`} {...rest} />
        ))}
      </div>
    </div>
  );
};

ShowSlides.propTypes = {
  active: PropTypes.string,
  data: PropTypes.array,
  k: PropTypes.number
};
