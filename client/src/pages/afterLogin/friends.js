import React, { Component } from "react";
import PropTypes from "prop-types";
import Nav from "../../components/nav/navigation";
import FindFriends from "../../components/friends/findFriends";
import ShowAllFriends from "../../components/friends/showAllFriends";

class FriendPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Nav />
        <div className="row justify-content-center">
          {/* show restaurants */}
          <div className="col-12 col-md-5">
            <div className="col-12">
                <ShowAllFriends data={this.state.allFriends} />
            </div>   
          </div>

          {/* search restaurants and find friends */}
          <div className="col-12 col-md-6">           
            <FindFriends />       
          </div>
        </div>
      </div>
    );
  }
}

FriendPage.propTypes = {
  data: PropTypes.array,
  friends: PropTypes.array
};

export default FriendPage;
