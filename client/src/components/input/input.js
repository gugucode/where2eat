import React from "react";
import "./input.css";

export const Input = props => (
  <div className="myform-group">
    <label className="form-label"> {props.label}</label>
    <input className="form-control" {...props} />
  </div>
);

