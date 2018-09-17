import React from "react";
import $ from "jquery";
import API from "../../utils/API";
import EventForm from "./eventForm";

class ShowEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  // handle add friend request, searchKey cannot be empty and searchKey must be in the potentialFriends list
  deleteEvent = event => {
    const id = event.target.getAttribute("value");
    console.log(id)
    API.deleteEvent({
        id: id
    }).then(result => {
        console.log(result)
        $(`#card_${id}`).remove();
        // if(result.status === 200){
        //     $(`#${friend}`).remove();
        // }
    })
  }

  render() {
    return (
        <div id="favorite-places">
            <h5 className="text-left my-0">
                Events <hr style={{ margin: "0 0 2em 0" }} />
            </h5>

            <div className="accordion" id="accordionExample">
                {   
                    Array.isArray(this.props.data) ? (
                    this.props.data.map((event, index) => (
                        <div className="card" key={index} id={`card_${event.id}`}> 
                            <div className="card-header d-flex justify-content-between align-items-center" id="headingOne">
                                <h5 className="mb-0">
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#${index}`} aria-expanded="true" aria-controls="collapseOne">
                                        {event.summary}
                                    </button>
                                </h5>
                                <a onClick={this.deleteEvent}>
                                    <i className="fas fa-trash-alt" value={event.id}></i>
                                </a>
                            </div>

                            <div id={index} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body">
                                <EventForm handleSubmit={this.props.handleUpdateEvent} state={event} eventName={"Update Event"}/>
                            </div>
                            </div>
                        </div>
                    ))) : ("")
                }
            </div>
           
      </div>
    );
  }
}

export default ShowEvents;
