import React from "react";
import PropTypes from "prop-types";
import { ShowSlides } from "./showSlides";

export const ShowCarousel = props => {
  const createSlides = restData => {
    let result = "";
    for (let i = 0; i < restData.length; i += 3) {
      // Pass every 3 restaurants to ShowSLides component
      if (i + 3 < restData.length) {
        result += <ShowSlides data={restData.slice(i, i + 3)} />;
      } else {
        result += <ShowSlides data={restData.slice(i)} />;
      }
    }
    return result;
  };

  return (
    <div
      id="multi-item-example"
      className="carousel slide carousel-multi-item"
      data-ride="carousel"
    >
      {/* Controls */}
      <div className="controls-top">
        <a
          className="btn-floating"
          href="#multi-item-example"
          data-slide="prev"
        >
          <i className="fa fa-chevron-left" />
        </a>
        <a
          className="btn-floating"
          href="#multi-item-example"
          data-slide="next"
        >
          <i className="fa fa-chevron-right" />
        </a>
      </div>

      {/* Indicators */}
      <ol className="carousel-indicators">
        <li
          data-target="#multi-item-example"
          data-slide-to="0"
          className="active"
        />
        <li data-target="#multi-item-example" data-slide-to="1" />
        <li data-target="#multi-item-example" data-slide-to="2" />
      </ol>

      {/* Slides */}
      <div className="carousel-inner" role="listbox">
        {createSlides(props.data)}
      </div>
    </div>
  );
};

ShowCarousel.propTypes = {
  data: PropTypes.array
};
