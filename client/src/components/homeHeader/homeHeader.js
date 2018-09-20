import React from "react";
import "./homeHeader.css";

export const HomeHeader = props => (
  <div className="header">
    <a href="/"><div className="icon"><img src="./img/icon.png" /></div></a>
    <div className="nav">
      <a href="/signup">Signup</a>
      
      {
        props.isSignup ? 
        (
          <a href="/">Login</a>
        ):(
          <a href="#" data-toggle="collapse" data-target="#login">Login</a>
        )
      }
    </div>
  </div>
);

