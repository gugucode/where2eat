import React from "react";
import $ from "jquery";
import PropTypes from "prop-types";
import Autocomplete from "react-autocomplete";
import API from "../../utils/API";

class InviteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.value);
    const data = {
      sender: "Erin", // need to get sender
      reciever: this.state.value, // need check if erciever has signed up
      receiverEmail: this.state.value,
      inviteUrl: "#" // need to compose the invite url
    };

    API.sendEventInvite(data).then(result => {
      console.log(result);
      if (result.data.code === 400) {
        $("#sendStatus").text("Send invite failed");
      } else {
        $("#sendStatus").text("Invitation has been sent");
      }
    });
  };

  render() {
    return (
      <form>
        <div className="form-group" id="pickInviteForm">
          <h6>Invite your friend to eat together</h6>
          <hr style={{ margin: "0 0 .5em 0" }} />
          <Autocomplete
            getItemValue={item => item.label}
            items={this.props.friends}
            renderItem={(item, isHighlighted) => (
              <div
                style={{ background: isHighlighted ? "lightgray" : "white" }}
              >
                {item.label}
              </div>
            )}
            value={this.state.value}
            onChange={e => this.setState({ value: e.target.value })}
            onSelect={val => this.setState({ value: val })}
            inputProps={{ className: "form-control", placeholder: "Grace" }}
          />
          <button
            onClick={this.handleSubmit}
            type="submit"
            className="btn btn-primary btn-sm mx-2"
            id="sendInviteBnt"
          >
            Submit
          </button>
          <p id="sendStatus" />
        </div>
      </form>
    );
  }
}

InviteForm.propTypes = {
  friends: PropTypes.array
};

export default InviteForm;
