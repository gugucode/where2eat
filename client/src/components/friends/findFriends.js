import React from "react";
import $ from "jquery";
import API from "../../utils/API";
import ShowFriends from "../../components/friends/showAllFriends";


class FindFriends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: "",
      potentialFriends: [],
      allFriends: []
    };
  }

  componentDidMount = () =>{
    console.log("mount")
    this.getAllFriends();
  }

  getAllFriends = () => {
    API.getAllFriends()
    .then(result => {
      // console.log("mount")
      console.log(result);
      if(Array.isArray(result.data) && result.data.length > 0){
        console.log("set")
        this.setState({
          allFriends: result.data.filter(f => f.length > 0) 
        }, ()=>{
          console.log(this.state.allFriends)
        })
      }
    })
    .catch(err =>{
      console.log(err)
    })
  }
  // set searchKey and send request to retrive a list of potential friends
  handleSearchKeyChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      if(this.state.searchKey){
        API.searchFriends(this.state.searchKey)
        .then(result => {
          console.log(result);
          if(Array.isArray(result.data)){
            this.setState({ potentialFriends: result.data},()=>{
              console.log(this.state.allFriends)
            });
          }
        });
      }
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
        friend: searchKey
      }).then(result => {
        console.log(result);
          $("#addStatus").text(result.data)
          this.getAllFriends();
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
      <div className="row justify-content-center m-4">
        {/* show friends */}
        <div className="col-12 col-md-6">
              <ShowFriends data={this.state.allFriends} />
        </div>

        <div className="col-12 col-md-4"> 
          <form>
            {/* title and close button */}
            <div className="form-group">
              <h5 className="modal-title" id="exampleModalLabel">
                Find New Friends
                <hr style={{ margin: "0 0 2em 0" }} />
              </h5>             
            </div>

            {/* body */}
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

            <button onClick={this.handleSubmit} type="button" className="btn btn-primary">
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default FindFriends;
