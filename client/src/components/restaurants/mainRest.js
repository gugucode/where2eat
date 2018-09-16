import React, { Component } from "react";
import DisplaySearch from "./displaySearch";
import DeleteRest from "./savedRestaurant";
import API from "../../utils/API";

class MainRest extends Component {
  constructor(props){
    super(props);
    this.state = {
      zipcode: "",
      cuisine: "",
      saved: [],
      restArray: []
    };
  }


  componentDidMount = () => {
    // console.log(this.props)
    // // const { match: { params } } = this.props;
    // // console.log(this.props.match);
    // const { cuisine, zipCode } = this.props;
    // console.log(cuisine);
    // console.log(zipCode);
    // this.getSavedRestaurant()
    // API.getRestaurant({
    //   cuisine: cuisine,
    //   zipCode: zipCode
    // })
    // .then(res => {
    //   console.log(res);
    
    //   this.setState({ restArray: res.data }, () => {
    //     console.log(this.state.restArray[0].restaurant)
    //     console.log(this.state.restArray[1].restaurant)
    //     // window.location = `/rest/${this.state.cuisine}/${this.state.zipCode}`
        
    //   }
    // )})
  }
  
    getSavedRestaurant = () => {
      API.saveRestaurant()
        .then((res) => {
          this.setState({ saved: res.data });
        });
    }
  
  
    // When save article button is clicked, add article to db
    handleSaveButton = (id) => {
        const findRestaurantByID = this.props.data;
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
                        {/* {this.renderSaved()} */}
                        <DisplaySearch />
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
  
  export default MainRest;