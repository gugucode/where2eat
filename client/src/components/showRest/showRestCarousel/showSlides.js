import React from "react";
import PropTypes from "prop-types";
import { ShowCard } from "./showCard";

export const ShowSlides = props => {
  return (
    <div className="carousel-item active">
      {props.data.map(rest => (
        <ShowCard key={1} rest={rest} />
      ))}
    </div>
  );
};

ShowSlides.propTypes = {
  data: PropTypes.array
};
