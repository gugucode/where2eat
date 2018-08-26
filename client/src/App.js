import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ShowRestList } from "./components/showRest/showRestList/showRestList";
import { ShowCarousel } from "./components/showRest/showRestCarousel/";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ShowRestList />
        <ShowCarousel />
      </div>
    );
  }
}

export default App;
