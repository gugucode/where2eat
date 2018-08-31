import React from "react";
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
      sender: "Erin",
      receiverEmail: this.state.value,
      inviteUrl: "#"
    };

    API.sendPickInvite(data).then(result => {
      console.log(result);
    });
  };

  render() {
    return (
      <form>
        <div className="form-group">
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
            inputProps={{ class: "form-control", placeholder: "Grace" }}
          />
          <button
            onClick={this.handleSubmit}
            type="submit"
            className="btn btn-primary btn-sm mx-2"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

InviteForm.propTypes = {
  friends: PropTypes.array
};

export default InviteForm;
