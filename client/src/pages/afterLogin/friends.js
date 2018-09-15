import React, { Component } from "react";
import PropTypes from "prop-types";
import Nav from "../../components/nav/navigation";
import FindFriends from "../../components/friends/findFriends";
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
        <Nav /> 
        <FindFriends />       
      </div>
    );
  }
}

FriendPage.propTypes = {
  data: PropTypes.array,
  friends: PropTypes.array
};

export default FriendPage;
