import React from "react";
import $ from "jquery";
import API from "../../utils/API";
import Moment from "moment-timezone";
import ShowEvents from "./showEvents"
import EventForm from "./eventForm";

class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedEvents: [],
    };
  }

  d = new Date();

  componentDidMount = () =>{
    this.getAllEvents();
  }

  getAllEvents = () => {
    API.getAllEvents()
    .then(result => {
      console.log(result)
      if(Array.isArray(result.data)){
        result.data.forEach(event =>{
          if(event.attendees){
            event.attendees = event.attendees.split(",")
          }else{
            event.attendees = []
          }
        });
        console.log(result.data)
        this.setState({
          savedEvents: result.data,
          // attendees: []
        })
      }
    })
  }

 
  // handle add friend request, searchKey cannot be empty and searchKey must be in the potentialFriends list
  handleCreateEvent = data => {
    // console.log(this.state);
    // const data = {...this.state}
    // console.log(data)
    API.createEvent(data)
    .then(result =>{
      this.getAllEvents();
    }).catch(err => {
      console.log(err);
    })

  }

  handleUpdateEvent = data => {
    // console.log(this.state);
    // const data = {...this.state}
    // console.log(data)
    API.updateEvent(data)
    .then(result =>{
      this.getAllEvents();
    }).catch(err => {
      console.log(err);
    })

  }

  render() {
    return (
      <div className="row justify-content-center m-4">
        {/* show friends */}
        <div className="col-12 col-md-5">
              <ShowEvents handleSubmit={this.handleUpdateEvent} data={this.state.savedEvents}/>
        </div>

        <div className="col-12 col-md-6"> 
          <form>
            <div className="form-group">
              <h5 className="modal-title" id="exampleModalLabel">
                Create A Dinning Event
              </h5>
            </div>

            <EventForm handleSubmit={this.handleCreateEvent} eventName={"Create"} />

            {/* <button onClick={this.handleSubmit} type="button" className="btn btn-primary">
              Create
            </button> */}

          </form>
        </div>
      </div>
    );
  }
}

export default CreateEvent;
