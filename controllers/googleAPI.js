// Add routes, both API and view
//app.use(routes);
//google map API

import zomatoAPI from "./api";

export const searchLocation = (req,res) => {

    const zip = req.params.zipCode;
    const cuisine = req.params.cuisine;
    const userZipcode = {
        userZipcode: zip
    }
       // if search key is not empty and special character, get location from Google map API
    //    if(this.state.searchKey !== "" && specialChar.indexOf(this.state.searchKey) === -1){
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=', {params: userZipcode})
    .then(response => {
        //this.setState({searchResult: response.location.lat.response.location.lng})
         //zomato API
        let lat = response.results[0].geometry.location.lat;
        let lng = response.results[0].geometry.location.lng;
        // const apikey = "2fd0b311e7bd53843b8e12bb25f230c1";
        // let foodtype = this.state.searchKey;
        
  
        // axios.get("https://developers.zomato.com/api/v2.1/search?q=", {foodtype}, "&count=8","&lat=",{lat},"&lon=",{lng}, "&radius=3219","&sort=real_distance","&apikey=",{apikey})
        // .then(response => {
        //     //display restaurant
        zomatoAPI.searchRestaurant(cuisine, lat, lng, res);
        // })
        // .catch(error => console.log(error))
    })
    .catch(err => console.log(err))

  
  };

  