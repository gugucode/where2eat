import React, { Component } from "react";
import PropTypes from "prop-types";
import Nav from "../../components/nav/navigation";
import { ShowRestList } from "../../components/showRest/showRestList/showRestList";
import { ShowCarousel } from "../../components/showRest/showRestCarousel";
import InviteForm from "../../components/invite/inviteForm";
import RestSearch from "../../components/restaurants/restSearch";
import API from "../../utils/API";
// import CreateEvent from "../../components/createEvent/createEventForm";
import "./dashboard.css"

class AfterLoginHome extends Component {
  constructor(props){
    super(props);
    this.state= {
      loggedIn: false,
      allRest: []
    }
  }

  componentDidMount = () =>{
    this.getAllRests();
}

  getAllRests = () => {
    API.getAllRests()
    .then(result => {
      console.log(result)
        this.setState({
            allRest: result.data,
          
        })
      
    })
  }

  render() {
    // if(this.state.loggedIn){
    return (
      <div className="container-fluid">
        <Nav username={this.props.username}/>
        <div id="dashboard-row" className="row justify-content-center">
          {/* show restaurants */}
          <div className="col-12 col-md-5">
            <div className="row py-3">
              <div className="col-12">
                <ShowRestList data={this.state.allRest} header={"Your Favorite Restaurants"}/>
              </div>
            </div>
            <div className="row py-3">
              <div className="col-12">
                <ShowCarousel data={this.props.data} />
              </div>
            </div>
          </div>

          {/* search restaurants and find friends */}
          <div className="col-12 col-md-6">
            <div className="row">
              <div id="search" className="col-12">
                <RestSearch />
                
              </div>
            </div>
            <div id="invite-div" className="row">
              <div className="col-12">
                <InviteForm friends={this.props.friends} />
                {/* <CreateEvent /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }//else{
  //   return (
  //     <div>
  //       <h1>Nope</h1>
  //     </div>
  //   )
  // }
  //}
}

AfterLoginHome.propTypes = {
  data: PropTypes.array,
  friends: PropTypes.array
};
export default AfterLoginHome;
