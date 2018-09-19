import React, { Component } from "react";
import PropTypes from "prop-types";
import Nav from "../../components/nav/navigation";
import { ShowRestList } from "../../components/showRest/showRestList/showRestList";
import { ShowCarousel } from "../../components/showRest/showRestCarousel";
import InviteForm from "../../components/invite/inviteForm";
import RestSearch from "../../components/restaurants/restSearch";
// import CreateEvent from "../../components/createEvent/createEventForm";


class AfterLoginHome extends Component {
  constructor(props){
    super(props);
    this.state= {
      loggedIn: false,
    }
  }

  render() {
    // if(this.state.loggedIn){
    return (
      <div className="container-fluid">
        <Nav username={this.props.username}/>
        <div className="row justify-content-center">
          {/* show restaurants */}
          <div className="col-12 col-md-5">
            <div className="row py-3">
              <div className="col-12">
                <ShowRestList data={this.props.data} header={"Your Favorite Restaurants"}/>
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
              <div className="col-12">
                <RestSearch />
                
              </div>
            </div>
            <div className="row">
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
