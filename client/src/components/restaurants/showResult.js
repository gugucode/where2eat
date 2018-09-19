import React from "react";
import PropTypes from "prop-types";
import { ShowRestList } from "../showRest/showRestList/showRestList"
import ShowMap from "./map";
import CreateEventForm from "../event/eventForm";
import API from "../../utils/API"

class ShowResult extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    handleCreateEvent = data => {
        API.createEvent(data)
        .then(result =>{
            console.log(result);
        //   this.getAllEvents();
        }).catch(err => {
          console.log(err);
        })
    
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className = "col-12 col-md-6">
                    <div className="row justify-content-center">
                        {/* show winning restaurant */}
                        <div className = "col-12 col-md-9"> 
                            <div id="featured-restaurant">
                                <div className="chosenHeaderDiv">
                                    <h3> YOU CHOSE: </h3>
                                </div>
                                <img src={this.props.chose.thumb} alt="RestaurantImage"/>
                                <h4 className="rest-name">{this.props.chose.name}</h4>
                                <p className="rest-location my-0"><span className="title">Address: </span>{this.props.chose.location.address}</p>
                                <p className="rest-cousines my-0"><span className="title">Cousines: </span>{this.props.chose.cuisines}</p>
                                <p className="rest-cost my-0"><span className="title">Average cost for two: </span>${this.props.chose.average_cost_for_two}</p>
                                <p className="rest-rating my-0"><span className="title">Rating: </span>${this.props.chose.user_rating.aggregate_rating}</p>
                                <p className="rest-url my-0"><span className="title"><a href="#" target="_blank">More Info</a></span> </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-9 align-self-center px-0">
                            <button type="button" className="btn btn-success" data-toggle="modal" data-target="#createEventForm">Create event</button>
                            {/* create event form */}
                            <div id="createEventForm" className="modal" tabIndex="-1" role="dialog">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="modal-title">Create event</h4>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <CreateEventForm 
                                                handleSubmit={this.handleCreateEvent} 
                                                eventName={"Create"}
                                                state={{
                                                    location: this.props.chose.location.address,
                                                    summary: `${this.props.chose.name} Hangout`
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* show restaurant on map */}
                        <div className = "col-12 my-3">
                            <div id="mapcontainer">
                                <ShowMap 
                                    data={this.props.others} 
                                    chose={this.props.chose}
                                />
                            </div>
                       
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-5">
                    <ShowRestList data={this.props.others} header={"WHAT OTHER PEOPLE CHOOSE:"}/>
                </div>
            </div>
        )
    };
};

ShowResult.propTypes = {
  others: PropTypes.array
};

export default ShowResult;