import React from "react";
import $ from "jquery";
import API from "../../utils/API";

class EditEventForm extends React.Component {
    constructor(props) {
        super(props);
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
                        onChange={this.props.handlInputChange}
                        value={this.props.state.summary}
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
                        onChange={this.props.handlInputChange}
                        value={this.props.state.location}
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
                                onChange={this.props.handlInputChange}
                                value={this.props.state.startDateTime}
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
                                onChange={this.props.handlInputChange}
                                value={this.props.state.endDateTime}
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
                        onChange={this.props.handlInputChange}
                        value={this.props.state.description}
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
                                onChange={this.props.handleFriendSearch}
                                value={this.props.state.searchKey}
                                type="text"
                                className="form-control"
                                name="searchKey"
                                placeholder="username/email"
                            />
                            {/* <p id="add-att-status" style={{fontSize: ".5m"}}></p> */}
                        </div>
                        <div className="col-2">
                            <button onClick={this.props.handleAddattendee} type="button" className="btn btn-primary bnt-sm"> add </button>
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
                            this.props.state.attendees.map(attendee => (
                                <li id={attendee} className="list-group-item d-flex justify-content-between align-items-center list-group-item py-0" key={attendee}>
                                {attendee}
                                <a onClick={this.props.deleteAttendee}>
                                    <i className="fas fa-trash-alt" value={attendee}></i>
                                </a>
                                </li>
                            ))
                        }
                        </ul>
                    </div>
                </div>

            </div>

        )
    }
}

export default EditEventForm;