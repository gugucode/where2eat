import React from "react";
import { DisplayResults } from "./restDisplay";
import { ShowRestList } from "../showRest/showRestList/showRestList";
import API from "../../utils/API";
import DeleteRest from "./savedRestaurant";
import { RestSearch } from "./restSearch";


class DisplaySearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          zipCode: "78660",
          cuisine: "bbq",
          restArray: []
        };
    }

    componentDidMount = () => {
      console.log(this.props)
      // const { match: { params } } = this.props;
      // console.log(this.props.match);
      const { cuisine, zipCode } = this.props;
      console.log(cuisine);
      console.log(zipCode);
      // this.getSavedRestaurant()
      API.getRestaurant({
        cuisine: cuisine,
        zipCode: zipCode
      })
      .then(res => {
        console.log(res);
      
        this.setState({ restArray: res.data }, () => {
          console.log(this.state.restArray[0].restaurant)
          console.log(this.state.restArray[1].restaurant)
          // window.location = `/rest/${this.state.cuisine}/${this.state.zipCode}`
          
        }
      )})
    }

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
          // this.setState({restName: res.data.response.restName},
          //               {cuisine: res.data.respone.cuisine},
          //               {photos: res.data.respone.photo},
          //               {rates: res.data.response.rates})
        });
      };

  // When save restaurant button is clicked, add restaurant to db
handleSaveButton = (id) => {
    // const findRestaurantByID = props.data;
    // console.log("findArticleByID: ", findRestaurantByID);
    // const newSave = {restName: findRestaurantByID.name, 
    //                  cuisine: findRestaurantByID.cuisines, 
    //                  location: findRestaurantByID.location.address,
    //                  photos: findRestaurantByID.photos_url,
    //                  rates: findRestaurantByID.user_rating.aggregate_rating,
    //                  rest_id: findRestaurantByID.id};
    // API.saveRestaurant(newSave)
    // // .then(result => {
    // //   console.log(result)
    // // })
    // .then(this.getSavedRestaurant());
  }


render() {
    return(
        <div className="row" id="result">
        {
          //  (this.state.restArray).length > 0 ? (<DisplayResults data={this.state.restArray[1].restaurant} />) : ""
          // (this.state.restArray).length > 0 ? (<ShowRestList data={this.state.restArray} />) : ""
          (this.state.restArray).length > 0 ? (<DisplayResults pickRest={this.handleSaveButton} data={(this.state.restArray)[0].restaurant} />) : (<p></p>)
          // <DisplayResults data={(this.state.restArray)[0].restaurant} />
        }
        {
             (this.state.restArray).length > 0 ? (<DisplayResults pickRest={this.handleSaveButton} data={(this.state.restArray)[1].restaurant} />) : (<p></p>)
        }
        {
          (this.state.restArray).length > 0 ? (<DeleteRest data={(this.state.restArray)[0].restaurant} />) : <p></p>
        }
        {
          (this.state.restArray).length > 0 ? (<DeleteRest data={(this.state.restArray)[1].restaurant} />) : <p></p>
        }
          {/* <DisplayResults data={this.state.restArray[0]} /> */}
        </div>
     

    )

}
}

export default DisplaySearch;