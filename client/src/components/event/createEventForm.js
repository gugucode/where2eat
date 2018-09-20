import React from "react";
import API from "../../utils/API";
import ShowEvents from "./showEvents"
import EventForm from "./eventForm";
import $ from "jquery";

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
  // handleCreateEvent = data => {
  //   API.createEvent(data)
  //   .then(result =>{
  //     this.getAllEvents();
  //   }).catch(err => {
  //     console.log(err);
  //   })

  // }

  handleCreateEvent = data => {
    const att = data.attendees;
    const sendEmailData = {
        sender: this.props.username, // need to get sender
        reciever: att, // need check if erciever has signed up
        receiverEmail: att,
        inviteUrl: "#", // need to compose the invite url
        restInfo: {name: data.summary, location: {address: data.location}},
        startTime: data.startDateTime,
        endDateTime: data.endDateTime,
        description: data.description
    };

    API.createEvent(data)
    .then(result =>{
        console.log(result);
        $("#eventStatus").text("Event has been created");
        this.sendInviteEmail(sendEmailData)
        this.getAllEvents();
    }).catch(err => {
      console.log(err);
    })

  }

  sendInviteEmail = data => {
      API.sendEventInvite(data).then(result => {
        console.log(result);
        if (result.data.code === 400) {
          $("#sendStatus").text("Send invite failed");
        } else {
          $("#sendStatus").text("Invitation has been sent");
        }
      });
  };

  handleUpdateEvent = (data) => {
    const att = data.attendees;
    const sendEmailData = {
      sender: this.props.username, // need to get sender
      reciever: att, // need check if erciever has signed up
      receiverEmail: att,
      inviteUrl: "#", // need to compose the invite url
      restInfo: {name: data.summary, location: {address: data.location}},
      startTime: data.startDateTime,
      endDateTime: data.endDateTime,
      description: data.description
    };

    API.updateEvent(data)
    .then(result =>{
      this.sendInviteEmail(sendEmailData)
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
              <ShowEvents handleUpdateEvent={this.handleUpdateEvent} data={this.state.savedEvents}/>
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
