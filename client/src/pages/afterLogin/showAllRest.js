import React, { Component } from "react";
import PropTypes from "prop-types";
import Nav from "../../components/nav/navigation";
import {ShowRestList} from "../../components/showRest/showRestList/showRestList";
import RestSearch from "../../components/restaurants/restSearch";

import API from "../../utils/API";

class ShowAll extends Component {

  constructor(props){
    super(props);
    this.state = {
      allRest: []
    }
  }
   

  componentDidMount = () =>{
      this.getAllRests();
  }
  
  getAllRests = () => {
    API.getAllRests()
    .then(result => {
      console.log(result)
        this.setState({
            allRest: result.data,
          
        })
      
    })
  }
  

  render() {
    return (
      <div className="container-fluid">
        <Nav username={this.props.username}/> 
        <ShowRestList data={this.state.allRest} user={this.props.username}/> 
        <RestSearch />

      </div>
    );
  }
}


export default ShowAll;
