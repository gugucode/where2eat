import React, { Component } from "react";
import PropTypes from "prop-types";
import Nav from "../../components/nav/navigation";
import FindFriends from "../../components/friends/findFriends";

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
        <FindFriends />       
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
