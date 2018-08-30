import React, { Component } from "react";
import "./App.css";
import AfterLoginHome from "./pages/afterLogin/home";

class App extends Component {
  testData = [
    {
      img: "images/rest1.png",
      url: "#",
      restName: "Hoho",
      rating: "2/10",
      address: "10710 Research Blvd #200, Austin, TX 78759"
    },
    {
      img: "images/rest2.png",
      url: "#",
      restName: "Sushi",
      rating: "5/10",
      address: "10710 Research Blvd #200, Austin, TX 78759"
    },
    {
      img: "images/rest3.png",
      url: "#",
      restName: "Wanango",
      rating: "8/10",
      address: "10710 Research Blvd #200, Austin, TX 78759"
    },
    {
      img: "images/rest3.png",
      url: "#",
      restName: "Wanango",
      rating: "8/10",
      address: "10710 Research Blvd #200, Austin, TX 78759"
    }
  ];

  render() {
    return (
      <div className="App">
        <AfterLoginHome data={this.testData} />
      </div>
    );
  }
}

export default App;
