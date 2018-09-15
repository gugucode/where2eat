import React from "react";
import { DisplayResults } from "../restDisplay/restDisplay";
import { ShowRestList } from "../showRest/showRestList/showRestList";
import API from "../../utils/API";
import DeleteRest from "../savedRestaurant/savedRestaurant";
import { RestSearch } from "../restaurantSearch/restSearch";


class DisplaySearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          zipCode: "78660",
          cuisine: "bbq",
          restArray: []
        };
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


render() {
    return(
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
     

    )

}
}

export default DisplaySearch;