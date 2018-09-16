import React, { Component } from "react";
import { DisplayResults } from "../restDisplay/restDisplay";
import DeleteRest from "../savedRestaurant/savedRestaurant";
import API from "../../utils/API";

class Main extends Component {

    state = {
      zipcode: "",
      cuisine: "",
      saved: []
    };
  
  
    componentDidMount() {
      this.getSavedRestaurant()
    }
  
    getSavedRestaurant = () => {
      API.saveRestaurant()
        .then((res) => {
          this.setState({ saved: res.data });
        });
    }
  
  
    // When save article button is clicked, add article to db
    handleSaveButton = (id) => {
        const findRestaurantByID = props.data;
        console.log("findArticleByID: ", findRestaurantByID);
        const newSave = {restName: findRestaurantByID.name, 
                         cuisine: findRestaurantByID.cuisines, 
                         location: findRestaurantByID.location.address,
                         photos: findRestaurantByID.photos_url,
                         rates: findRestaurantByID.user_rating.aggregate_rating,
                         rest_id: findRestaurantByID.id};
        API.saveRestaurant(newSave)
      .then(this.getSavedRestaurant());
    }
  
    // When delete article button is clicked, remove article from db
    handleDeleteButton = (id) => {
      API.deleteRestaurant(id)
        .then(this.getSavedRestaurant());
    }
  
    render() {
      return (
  
        <div className="main-container">
          <div className="container">
      
        
            {/* Saved Restaurant Section */}
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="panel panel-primary">
                    <div className="panel-heading">
                      <h3 className="panel-title">
                        <strong>
                          <i className="fa fa-download" aria-hidden="true"></i> Saved </strong>
                      </h3>
                    </div>
                    <div className="panel-body">
                      <ul className="list-group">
                        {this.renderSaved()}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      );
    }
  
  }
  
  export default Main;