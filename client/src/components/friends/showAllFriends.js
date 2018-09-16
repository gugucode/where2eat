import React from "react";
import $ from "jquery";
import API from "../../utils/API";

class ShowFriends extends React.Component {
  constructor(props) {
    super(props);
  }

  // handle add friend request, searchKey cannot be empty and searchKey must be in the potentialFriends list
  unfriend = event => {
    const friend = event.target.getAttribute("value");
    console.log(friend)
    API.deleteFriend({
        friend: friend
    }).then(result => {
        console.log(result)
        if(result.status === 200){
            $(`#${friend}`).remove();
        }
    })
  }

  render() {
    return (
        <div id="favorite-places">
            <h5 className="text-left my-0">
                Your Friends <hr style={{ margin: "0 0 2em 0" }} />
            </h5>

            <ul>
                {this.props.data.map((friend, index) => (
                    // friend ?
                    // (
                        <li className="list-group-item d-flex justify-content-between align-items-center list-group-item py-0" key={index} id={friend}>
                            {friend}
                            <button onClick={this.unfriend}>
                                <i className="fas fa-trash-alt" value={friend}></i>
                            </button>
                        </li>
                    // ) : ("haha")
                ))}
            </ul>
      </div>
    );
  }
}

export default ShowFriends;
