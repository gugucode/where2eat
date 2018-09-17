import React, { Component } from "react";
import "./App.css";
import AfterLoginHome from "./pages/afterLogin/home";
import Friend from "./pages/afterLogin/friends";
import Events from "./pages/afterLogin/events";
import MainRest from "./pages/afterLogin/rest";
import Home from './pages/home/home';
import Signup from './pages/signUp/signUp';
import NoMatch from "./pages/noMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

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

  constructor(props){
    super(props);
    this.state= {
      loggedIn: false,
      username: ""
    }
  }
  
  componentWillMount= () =>{
    axios.get("/api/auth").then((result)=>{
      console.log(result)
      if(result.data.passport){
        this.setState({
          loggedIn:true,
          username: result.data.passport.user.username
        });
      }else{
        // window.location.href= ("/");
        this.setState({loggedIn:false});
      }
    })
  }

  render() {
    return (
      this.state.loggedIn ? 
      (
        <Router> 
          <div className="App">
            <Switch>
              <Route path="/events" render={()=> <Events username={this.state.username}/>} />
              <Route path="/friends" render={()=> <Friend username={this.state.username}/>} />
              <Route path="/rest/:cuisine/:zipCode" render={({match})=> <MainRest username={this.state.username} cuisine={match.params.cuisine} zipCode={match.params.zipCode}/>} />
              <Route path="/" render={() => <AfterLoginHome username={this.state.username} data={this.testData} friends={this.friends} />} />
              <Route exact path="/dashboard" render={() => <AfterLoginHome username={this.state.username} data={this.testData} friends={this.friends} />} />
              <Route component={NoMatch} />
            </Switch>
          </div>  
        </Router> 
        ) : (
          <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" render={()=> <Home />} />            
              <Route path="/signup" render={()=> <Signup />} />
              <Route component={NoMatch} />
            </Switch>
          </div>  
        </Router>
      )
    );
  }
}

export default App;
