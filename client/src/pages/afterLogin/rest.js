import React, { Component } from "react";
import PropTypes from "prop-types";
import Nav from "../../components/nav/navigation";
import DisplaySearch from "../../components/restaurants/displaySearch";
import ShowFriends from "../../components/friends/showAllFriends";
import API from "../../utils/API";

class FriendPage extends Component {

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
        <DisplaySearch {...this.props}/>       
      </div>
    );
  }
}

FriendPage.propTypes = {
  data: PropTypes.array,
  friends: PropTypes.array,
  username: PropTypes.string,
};

export default FriendPage;
