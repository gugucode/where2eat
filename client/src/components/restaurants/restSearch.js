import React from "react";
import $ from "jquery";

class RestSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: "",
      cuisine: "",
      restArray: []
    };
  }
  
  // Keep track of what user types into zipcode input so that input can be grabbed later
  handleZipcodeChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Keep track of what user types into topic input so that input can be grabbed later
  handleCuisineChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  //when the search submits, perform Zomato API search with user input
  handleFormSubmit = event => {
    event.preventDefault();
    if(this.state.zipCode && this.state.cuisine){
      window.location = `/rest/${this.state.cuisine}/${this.state.zipCode}`
    }else{
      $("#warning").text("Please enter zipcode and Cuisine type!");
    }

  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">
                  <strong>
                    <i className="fa fa-search" aria-hidden="true" /> Search
                  </strong>
                </h3>
              </div>
              <div className="panel-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="zipcode">Zipcode</label>
                    <input
                      onChange={this.handleZipcodeChange}
                      type="text"
                      className="form-control"
                      id="zipcode"
                      aria-describedby="emailHelp"
                      name="zipCode"
                      
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cuisine">Cuisine</label>
                    <input
                      onChange={this.handleCuisineChange}
                      type="text"
                      className="form-control"
                      id="cuisine"
                      name="cuisine"
                      
                    />
                  </div>
                  <button
                    onClick={this.handleFormSubmit}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                  <p id="warning"></p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row" id="result">
        </div>
      </div>
    );
  }
}
export default RestSearch;
