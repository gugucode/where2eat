import React from "react";
import $ from "jquery";
import API from "../../utils/API";
import Moment from "moment-timezone";

class EventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            summary: "BBQ hangout",
            location: "AUstin",
            startDateTime: "",
            endDateTime: "",
            description: "This is a test",
            timeZone: Moment.tz.guess(),
            searchKey: "",
            searchResult: [],
            attendees: [],
            savedEvents: [],
          };
    }

    d = new Date();
    componentDidMount = () =>{
        if(this.props.state){
            this.setState({
                ...this.props.state
            })
        }
    }

    handlInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handlestartDateTimeTimeChange = event => {
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
            if(Array.isArray(result.data)){
                this.setState({ searchResult: result.data })
            }
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

    handleSubmit = event => {
        this.props.handleSubmit({...this.state});
    }

    render() {
        return (
            <div>
                {/* body */}
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
                </div>

                {/* location */}
                <div className="form-group">
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
                </div>

                {/* start and end datetime */}
                <div className="form-group">
                    <div className="row">
                        <div className="col-6 pr-1">
                            <label className="col-form-label">
                                Start time
                            </label>
                            <input
                                onChange={this.handlInputChange}
                                value={this.state.startDateTime}
                                type="datetime-local"
                                className="form-control px-0"
                                name="startDateTime"
                                placeholder="Start datetime"
                            />
                        </div>
                        <div className="col-6 pl-1">
                            <label className="col-form-label">
                                End time
                            </label>
                            <input
                                onChange={this.handlInputChange}
                                value={this.state.endDateTime}
                                type="datetime-local"
                                className="form-control px-0"
                                name="endDateTime"
                                placeholder="End datatime"
                            />
                        </div>
                    </div>
                </div>

                {/* add event description */}
                <div className="form-group">
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
                </div>

                {/* add attendees */}
                <div className="form-group">
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
                </div>

                {/* display selected attendees here */}
                <div className="form-group">
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
                <button onClick={this.handleSubmit} type="button" className="btn btn-primary">
                    {this.props.eventName}
                </button>
                <p id="eventStatus"></p>
                <p id="sendStatus"></p>
            </div>

        )
    }
}

export default EventForm;