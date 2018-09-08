import React from "react";
import $ from "jquery";
import API from "../../utils/API";
import Moment from "moment-timezone";

class FindFriends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      summary: "",
      location: "",
      start: "",
      end: "",
      description: "",
      searchKey: "",
      searchResult: [],
      attendees: []
    };
  }

  d = new Date();

  handlInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleStartTimeChange = event => {
    const {name,value} = event.target;
    this.setState({
      [name]: {
        dateTime: value,
        timeZone: Moment.tz.guess()
      }
    })
  }

  handleEndTimeChange = event => {
    const {name,value} = event.target;
    this.setState({
      [name]: {
        dateTime: value,
        timeZone: Moment.tz.guess()
      }
    })
  }

  // set searchKey and send request to retrive a list of potential friends
  handleFriendSearch = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      API.searchFriends(this.state.searchKey)
      .then(result => {
        this.setState({ searchResult: result.data })
      });
    });
  };

  verifyAttendeeInDB = name =>{
    const searchResult = this.state.searchResult;
    for(let i=0; i < searchResult.length; i++){
      if(searchResult[i].username === name){
        return true;
      }
    }
    return false;
  };

  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  handleAddattendee = event => {
    const attendee = this.state.searchKey;
    $("#add-att-status").remove();
    let message = $("<p id='add-att-status' style={{fontSize: '.5m'}}>");

    // allow user to add attendee if that attendee haven't been invited yet
    if(this.state.attendees.indexOf(attendee) !== -1){
      message.text(`You have added ${attendee} to the invite list`)
      $("#searchAtt").append(message);
      return;
    }

    // allow user to add attendee if that attendee has an accout with us
    if(!this.verifyAttendeeInDB(attendee) && !this.validateEmail(attendee)) {
      message.text(`${attendee} is not a valid email address or valid user`)
      $("#searchAtt").append(message);
      return; 
    }
  
    this.setState((pre,props) => {
        return {
          attendees : [attendee].concat(pre.attendees)
        }
    })
  }

  // Delete attendee from attendee list
  deleteAttendee = event => {
    const value = event.target.getAttribute("value");

    this.setState((pre,props) => {
      const index = pre.attendees.indexOf(value)
      pre.attendees.splice(index,1)
      return {
        attendee: pre.attendees
      }
    })
  }

  // handle add friend request, searchKey cannot be empty and searchKey must be in the potentialFriends list
  handleSubmit = event => {
    console.log(this.state);
    // const searchKey = this.state.searchKey;
    // if(this.state.searchKey && this.verifyFriendInDB(this.state.searchKey)){
    //   // const searchKey = this.state.searchKey;
    //   API.addFriend({
    //     user: "erin",
    //     friend: searchKey
    //   }).then(result => {
    //     console.log(result);
    //       $("#addStatus").text(result.data)
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     $("#addStatus").text(`Add Friend request failed`)
    //   });
    // }else{
    //   $("#addStatus").text(`Sorry, we don't have a user named '${searchKey}'!`);
    // }
  }

  render() {
    return (
      <div
        className="modal fade"
        id="createEvent"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          {/* title and close button */}
          <div className="modal-content p-1">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Create A Dinning Event
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
                    {/* Summary */}
                    <label  className="col-form-label">
                        Event Summary
                    </label>
                    <input
                        onChange={this.handlInputChange}
                        value={this.state.summary}
                        type="text"
                        className="form-control"
                        name="summary"
                    />
                    {/* location */}
                    <label  className="col-form-label">
                        Where
                    </label>
                    <input
                        onChange={this.handlInputChange}
                        value={this.state.location}
                        type="text"
                        className="form-control"
                        name="location"
                    />

                    {/* start and end datetime */}
                    <div className="row">
                        <div className="col-6 pr-1">
                            <label className="col-form-label">
                                Start time
                            </label>
                            <input
                                onChange={this.handleStartTimeChange}
                                value={this.state.start.dateTime}
                                type="datetime-local"
                                className="form-control px-0"
                                name="start"
                                placeholder="Start datetime"
                            />
                        </div>
                        <div className="col-6 pl-1">
                            <label className="col-form-label">
                                End time
                            </label>
                            <input
                                onChange={this.handleEndTimeChange}
                                value={this.state.end.dateTime}
                                type="datetime-local"
                                className="form-control px-0"
                                name="end"
                                placeholder="End datatime"
                            />
                        </div>
                    </div>

                    {/* add event description */}
                    <label  className="col-form-label">
                        Event description
                    </label>
                    <textarea
                        rows="3"
                        onChange={this.handlInputChange}
                        value={this.state.description}
                        type="text"
                        className="form-control"
                        name="description"
                    />

                    {/* add attendees */}
                    <label  className="col-form-label">
                        Invite Friend to event
                    </label>
                    <div className="row align-items-center">
                      {/* <form> */}
                        <div className="col-9" id="searchAtt">
                          <input
                              onChange={this.handleFriendSearch}
                              value={this.state.searchKey}
                              type="text"
                              className="form-control"
                              name="searchKey"
                              placeholder="username/email"
                          />
                          {/* <p id="add-att-status" style={{fontSize: ".5m"}}></p> */}
                        </div>
                        <div className="col-2">
                          <button onClick={this.handleAddattendee} type="button" className="btn btn-primary bnt-sm"> add </button>
                        </div>
                      {/* </form> */}
                    </div>
                    
                    {/* display selected attendees here */}
                    <div id="attendees">
                      You have invited:
                      <ul className="list-group list-group-flush">
                        {
                          this.state.attendees.map(attendee => (
                              <li id={attendee} className="list-group-item d-flex justify-content-between align-items-center list-group-item py-0" key={attendee}>
                                {attendee}
                                <a onClick={this.deleteAttendee}>
                                    <i className="fas fa-trash-alt" value={attendee}></i>
                                </a>
                              </li>
                          ))
                        }
                    </ul>
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
              <button onClick={this.handleSubmit} type="button" className="btn btn-primary">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FindFriends;
