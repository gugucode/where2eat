import React from "react";
import $ from "jquery";
import API from "../../utils/API";



class FindFriends extends React.Component {
  constructor(props) {
    super(props);
  }

  // handle add friend request, searchKey cannot be empty and searchKey must be in the potentialFriends list
  unfriend = event => {
    
  }

  render() {
    return (
        <div id="favorite-places">
            <h6 className="text-left my-0">
                Your Friends <hr style={{ margin: "0 0 2em 0" }} />
            </h6>

            <ul>
                {this.props.data.map((friend, index) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center list-group-item py-0" key={index}>
                        {friend}
                        <a onClick={this.unfriend}>
                            <i className="fas fa-trash-alt" value={friend}></i>
                        </a>
                    </li>
                ))}
            </ul>
      </div>
    );
  }
}

export default FindFriends;
