import React from "react";
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
      API.searchFriends(this.state.searchKey, result => {
        console.log(result);
        this.setState({ potentialFriends: result });
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

  // handle add friend request, searchKey cannot be empty and searchKey must be in the potentialFriends list
  handleSubmit = event => {
    if(this.state.searchKey && this.state.potentialFriends.indexOf(this.state.searchKey) !== -1){
      API.addFriend(this.state.searchKey)
      .then(result => {
        console.log(result);
        this.setState({ potentialFriends: result });
      })
      .catch(err => {
        console.log(err);
      });
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
                        <option key={user} value={user} >
                          {user}
                        </option>
                      ))}
                    </select>                  
                  </div>
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
              <button onSubmit={this.handleSubmit} type="button" className="btn btn-primary">
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
