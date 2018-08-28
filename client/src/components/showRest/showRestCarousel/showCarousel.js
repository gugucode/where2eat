import React from "react";
import PropTypes from "prop-types";
import { ShowSlides } from "./showSlides";

export const ShowCarousel = props => {
  const createSlides = restData => {
    console.log(restData);
    let result = [];
    let k = 1;
    for (let i = 0; i < restData.length; i += 3) {
      // Pass every 3 restaurants to ShowSLides component
      let active = i === 0 ? "active" : "";
      if (i + 3 < restData.length) {
        result.push(
          <ShowSlides
            key={k}
            k={k}
            active={active}
            data={restData.slice(i, i + 3)}
          />
        );
      } else {
        result.push(
          <ShowSlides key={k} k={k} active={active} data={restData.slice(i)} />
        );
      }
      k++;
    }
    return result;
  };

  return (
    <div
      id="multi-item-example"
      className="carousel slide carousel-multi-item"
      data-ride="carousel"
    >
      {/* Slides */}
      <div className="carousel-inner" role="listbox">
        {createSlides(props.data)}
      </div>

      {/* Controls */}
      <div className="controls-top">
        <a
          className="carousel-control-prev"
          href="#multi-item-example"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            style={{ background: "blue" }}
          >
            <i className="fas fa-angle-left" />
          </span>
        </a>
        <a
          className="carousel-control-next"
          href="#multi-item-example"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            style={{ background: "blue" }}
          >
            <i className="fas fa-angle-right" />
          </span>
        </a>
      </div>
    </div>
  );
};

ShowCarousel.propTypes = {
  data: PropTypes.array
};
