import React from "react";
import PropTypes from "prop-types";

export const ShowRestList = props => {
  const style = {
    fontSize: ".7em"
  }

  const imgStyle = {
    minWidth: "100px",
    minHeight: "100px",
    maxWidth: "150px",
    maxHeight: "150px",
    overflow: "hidden",
    borderRadius: "50%"
  }

  return (
    <div id="favorite-places">
      <h6 className="text-left my-0">
        {props.header} <hr style={{ margin: "0 0 2em 0" }} />
      </h6>
      <ul className="px-1">
        {props.data.map((rest, index) => (
          rest.restaurant ? (
          <li key={index} className="list-group-item">
            <div className="row justify-content-start">
              <div className="col-5">
                <img src={rest.restaurant.thumb} alt="Error" style={{ ...imgStyle, width: "100%" }} />
              </div>

              <div className="col-7 text-sm-left">
                <p className="my-0" style={style}>{`Name: ${rest.restaurant.name}`}</p>
                <p className="my-0" style={style}>{`Rating: ${rest.restaurant.cuisines}`}</p>
                <p className="my-0" style={style}>{`Address: ${rest.restaurant.location.address}`}</p>
                <a href={rest.restaurant.url} className="badge badge-info btn-sm" target="_blank">
                  Detail
                </a>
              </div>
            </div>
          </li>
          ) : (
            <li key={index} className="list-group-item">
            <div className="row justify-content-start">
              <div className="col-5">
                <img src={rest.photos_url} alt="Error" style={{ width: "100%" }} />
              </div>

              <div className="col-7 text-sm-left">
                <p className="my-0" style={style}>{`Name: ${rest.name}`}</p>
                <p className="my-0" style={style}>{`Rating: ${rest.cuisines}`}</p>
                <p className="my-0" style={style}>{`Address: ${rest.location.address}`}</p>
                {/* <a href={rest.url} className="badge badge-info btn-sm">
                  Detail
                </a> */}
              </div>
            </div>
          </li>
          ) 

        ))}
      </ul>
    </div>
  );
};

ShowRestList.propTypes = {
  data: PropTypes.array
};
