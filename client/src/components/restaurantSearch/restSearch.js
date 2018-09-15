import React from "react";
import { DisplayResults } from "../restDisplay/restDisplay";
import { ShowRestList } from "../../components/showRest/showRestList/showRestList";
import API from "../../utils/API";
import DeleteRest from "../../components/savedRestaurant/savedRestaurant";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class RestSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: "78660",
      cuisine: "bbq",
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
    API.getRestaurant(this.state.cuisine, this.state.zipCode)
    .then(res => {
      // console.log(err)
      console.log(res);
      // window.location = 'http://www.google.com'
     
      this.setState({ restArray: res.data }, () => {
        console.log(this.state.restArray[0].restaurant)
        console.log(this.state.restArray[1].restaurant)
       
      }
     

      );
      // window.location = '/api/searchRestaurant/';
      // this.setState({restName: res.data.response.restName},
      //               {cuisine: res.data.respone.cuisine},
      //               {photos: res.data.respone.photo},
      //               {rates: res.data.response.rates})
    });
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
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row" id="result">
        {
          //  (this.state.restArray).length > 0 ? (<DisplayResults data={this.state.restArray[1].restaurant} />) : ""
          // (this.state.restArray).length > 0 ? (<ShowRestList data={this.state.restArray} />) : ""
          (this.state.restArray).length > 0 ? (<DisplayResults data={(this.state.restArray)[0].restaurant} />) : (<p></p>)
          // <DisplayResults data={(this.state.restArray)[0].restaurant} />
        }
        {
             (this.state.restArray).length > 0 ? (<DisplayResults data={(this.state.restArray)[1].restaurant} />) : (<p></p>)
        }
        {
          (this.state.restArray).length > 0 ? (<DeleteRest data={(this.state.restArray)[0].restaurant} />) : <p></p>
        }
        {
          (this.state.restArray).length > 0 ? (<DeleteRest data={(this.state.restArray)[1].restaurant} />) : <p></p>
        }
          {/* <DisplayResults data={this.state.restArray[0]} /> */}
        </div>
      </div>
    );
  }
}
export default RestSearch;
