import React, { Component } from "react";
import PropTypes from "prop-types";
import Nav from "../../components/nav/navigation";
import DisplaySearch from "../../components/restaurants/displaySearch";


class RestPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      allFriends: []
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <Nav username={this.props.username}/> 
        <DisplaySearch username={this.props.username} cuisine={this.props.cuisine} zipCode={this.props.zipCode}/>       
      </div>
    );
  }
}

RestPage.propTypes = {
  cuisine: PropTypes.string,
  zipCode: PropTypes.string,
  friends: PropTypes.string,
  username: PropTypes.string,
};

export default RestPage;
