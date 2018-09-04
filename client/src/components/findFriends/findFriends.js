import React from "react";
import $ from "jquery";
import API from "../../utils/API";



class FindFriends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: "",
      potentialFriends: []
    };
  }

  // set searchKey and send request to retrive a list of potential friends
  handleSearchKeyChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      API.searchFriends(this.state.searchKey)
      .then(result => {
        console.log(result.data);
        this.setState({ potentialFriends: result.data });
      });
    });
  };

  // When option is selected, change searchKey
  handleSelect = event => {
    // console.log(value)
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  verifyFriendInDB = name =>{
    const friends = this.state.potentialFriends;
    for(let i=0; i < friends.length; i++){
      if(friends[i].username === name){
        return true;
      }
    }
    return false;
  }
  // handle add friend request, searchKey cannot be empty and searchKey must be in the potentialFriends list
  handleSubmit = event => {
    const searchKey = this.state.searchKey;
    if(this.state.searchKey && this.verifyFriendInDB(this.state.searchKey)){
      // const searchKey = this.state.searchKey;
      API.addFriend({
        user: "erin",
        friend: searchKey
      }).then(result => {
        console.log(result);
          $("#addStatus").text(result.data)
      })
      .catch(err => {
        console.log(err);
        $("#addStatus").text(`Add Friend request failed`)
      });
    }else{
      $("#addStatus").text(`Sorry, we don't have a user named '${searchKey}'!`);
    }
  }

  render() {
    return (
      <div
        className="modal fade"
        id="findFriendComp"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          {/* title and close button */}
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Find New Friends
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            {/* body */}
            <div className="modal-body">
              <form>

                {/* Enter search key here */}
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Find frind by user name:
                  </label>
                  <input
                    onChange={this.handleSearchKeyChange}
                    value={this.state.searchKey}
                    type="text"
                    className="form-control"
                    name="searchKey"
                    list="searchFriends"
                  />
                </div>

                {/* print suggested friends here */}
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">
                    Suggested result:
                  </label>
                  <div>
                    <select id="searchFriends" name="searchKey" onChange={this.handleSelect} className="border border-info" multiple style={{width:"100%"}}>
                      {this.state.potentialFriends.map(user => (
                        <option key={user.id} value={user.username} >
                          {user.username}
                        </option>
                      ))}
                    </select>                  
                  </div>
                  <p id="addStatus"></p>
                </div>
              </form>
            </div>

            {/* footer: display close and add buttons */}
            <div className="modal-footer" id="modal-addFriend">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button onClick={this.handleSubmit} type="button" className="btn btn-primary">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FindFriends;
