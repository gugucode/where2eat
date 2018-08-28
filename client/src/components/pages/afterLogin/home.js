import React, { Component } from "react";
import PropTypes from "prop-types";
import Nav from "../../nav/navigation";
import { ShowRestList } from "../../showRest/showRestList/showRestList";
import { ShowCarousel } from "../../showRest/showRestCarousel";

class AfterLoginHome extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Nav />
        <div className="row justify-content-center">
          {/* show restaurants */}
          <div className="col-12 col-md-5">
            <div className="row py-3">
              <div className="col-12">
                <ShowRestList data={this.props.data} />
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
              <div className="col-12">{/* <ShowRestList /> */}</div>
            </div>
            <div className="row">
              <div className="col-12">
                {/* <ShowCarousel data={this.props.data} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
AfterLoginHome.propTypes = {
  data: PropTypes.array
};
export default AfterLoginHome;
