import React, { Component } from "react";
import PropTypes from "prop-types";
import Nav from "../../components/nav/navigation";
import Saved from "../../components/comment/addComments";

import API from "../../utils/API";

class CommentPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      allComments: []
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <Nav username={this.props.username}/> 
        <Saved />       
      </div>
    );
  }
}

CommentPage.propTypes = {
  data: PropTypes.array,
  comments: PropTypes.array,
  username: PropTypes.string,
};

export default CommentPage;
