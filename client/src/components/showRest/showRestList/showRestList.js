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
          <li key={index} className="list-group-item">
            <div className="row justify-content-start">
              <div className="col-5">
                <img src={rest.img} alt="Error" style={{ width: "100%" }} />
              </div>

              <div className="col-7 text-sm-left">
                <p className="my-0">{`Name: ${rest.restName}`}</p>
                <p className="my-0">{`Rating: ${rest.rating}`}</p>
                <p className="my-0">{`Address: ${rest.address}`}</p>
                <a href={rest.url} className="badge badge-info btn-sm">
                  Detail
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

ShowRestList.propTypes = {
  data: PropTypes.array
};
