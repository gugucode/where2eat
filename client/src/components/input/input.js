import React from "react";

export const Input = props => (
  <div className="form-group">
    <label className="form-control"> {props.label}</label>
    <input className="form-control" {...props} />
  </div>
);

