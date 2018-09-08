import React, { Component } from "react";
import "./App.css";
import AfterLoginHome from "./pages/afterLogin/home";
import Home from './pages/home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {

  testData = [
    {
      photos_url: "images/rest1.png",
      url: "#",
      name: "Hoho",
      rating: "2/10",
      cuisines: "BBQ",
      location: {address: "10710 Research Blvd #200, Austin, TX 78759"}
    },
    {
      photos_url: "images/rest2.png",
      url: "#",
      name: "Sushi",
      rating: "5/10",
      cuisines: "BBQ",
      location: { address: "10710 Research Blvd #200, Austin, TX 78759"}
    },
    {
      photos_url: "images/rest3.png",
      url: "#",
      name: "Wanango",
      rating: "8/10",
      cuisines: "BBQ",
      location: {address: "10710 Research Blvd #200, Austin, TX 78759"}
    },
    {
      photos_url: "images/rest3.png",
      url: "#",
      name: "Wanango",
      rating: "8/10",
      cuisines: "BBQ",
      location: { address: "10710 Research Blvd #200, Austin, TX 78759"}
    }
  ];

  friends = [
    { label: "meiyuechang@gmail.com" },
    { label: "Tom" },
    { label: "Frank" }
  ];

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" render={() => <AfterLoginHome data={this.testData} friends={this.friends} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
