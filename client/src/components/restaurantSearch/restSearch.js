import React from "react";
import {DisplayResults} from "../restDisplay/restDisplay";

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
  this.setState({ [name]:value });
}

// Keep track of what user types into topic input so that input can be grabbed later
handleCuisineChange = event => {
  const { name, value } = event.target;
  this.setState({ [name]:value });
}
  //when the search submits, perform Zomato API search with user input
handleFormSubmit = (event) => {
  event.preventDefault();
  API.getRestaurant(this.state.cuisine, this.state.zipCode)
    .then ((res) => {
      this.setState({restArray: res});
      // this.setState({restName: res.data.response.restName},
      //               {cuisine: res.data.respone.cuisine},
      //               {photos: res.data.respone.photo},
      //               {rates: res.data.response.rates})
    });
}

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
                      onChange={props.handleZipcodeChange}
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
                      onChange={props.handleCuisineChange}
                      type="text"
                      className="form-control"
                      id="cuisine"
                    />
                  </div>
                  <button
                    onClick={props.handleFormSubmit}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <DisplayResults data={(this.state.restArray)[0]}/>
        </div>

      </div>
    );
  }
}
export default RestSearch;
