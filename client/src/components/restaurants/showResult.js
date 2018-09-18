import React from "react";
import PropTypes from "prop-types";
import API from "../../utils/API";
import { ShowRestList } from "../showRest/showRestList/showRestList"
import Map from "./map";

class ShowResult extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className = "col-12 col-md-6">
                    <div className="row">
                        {/* show winning restaurant */}
                        <div className = "col-12"> 
                            <div id="featured-restaurant">
                                <div className="chosenHeaderDiv">
                                    <h3> YOU CHOSE: </h3>
                                </div>
                                <img src={this.props.chose.thumb}/>
                                <h4 className="rest-name">{this.props.chose.name}</h4>
                                <p className="rest-location my-0"><span className="title">Address: </span>{this.props.chose.location.address}</p>
                                <p className="rest-cousines my-0"><span className="title">Cousines: </span>{this.props.chose.cuisines}</p>
                                <p className="rest-cost my-0"><span className="title">Average cost for two: </span>0</p>
                                <p className="rest-rating my-0"><span className="title">Rating: </span>${this.props.chose.average_cost_for_two}</p>
                                <p className="rest-url my-0"><span className="title"><a href="#" target="_blank">More Info</a></span> </p>
                            </div>
                        </div>

                        {/* show restaurant on map */}
                        <div className = "col-12">
                            <Map data={this.props.others} pickId={this.props.chose.id}/>
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