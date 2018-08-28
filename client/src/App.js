import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ShowRestList } from "./components/showRest/showRestList/showRestList";
import { ShowCarousel } from "./components/showRest/showRestCarousel/";

class App extends Component {
  testData = [
    {
      img: "images/rest1.png",
      url: "#",
      restName: "Hoho",
      rating: "2/10"
    },
    {
      img: "images/rest2.png",
      url: "#",
      restName: "Sushi",
      rating: "5/10"
    },
    {
      img: "images/rest3.png",
      url: "#",
      restName: "Wanango",
      rating: "8/10"
    },
    {
      img: "images/rest2.png",
      url: "#",
      restName: "Pizza",
      rating: "7/10"
    },
    {
      img: "images/rest3.png",
      url: "#",
      restName: "Noodle",
      rating: "9/10"
    },
    {
      img: "images/rest1.png",
      url: "#",
      restName: "Haha",
      rating: "8/10"
    }
    
  ];

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
        <ShowCarousel data={this.testData} />
      </div>
    );
  }
}

export default App;
