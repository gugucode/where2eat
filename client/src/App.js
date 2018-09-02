import React, { Component } from "react";
import "./App.css";
import AfterLoginHome from "./pages/afterLogin/home";
import Home from './pages/home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


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
