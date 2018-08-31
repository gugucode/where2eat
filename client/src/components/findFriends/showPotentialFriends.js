import React from "react";

export const ShowPotentialFriends = props => {
  return (
    <div>
      {props.data.map(p => {
        <a key={p} href="#" style={{ display: "block" }}>
          {p}
        </a>;
      })}
    </div>
  );
};
