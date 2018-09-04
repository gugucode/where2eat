// import {ZomatoAPI} from "./zomatoAPI";
const ZomatoAPI = require("./zomatoAPI");
const axios = require("axios");

module.exports = {
    searchLocation: (req,res) => {
        const zip = req.params.zipCode;
        const cuisine = req.params.cuisine;
        console.log("zip="+zip);
        const data = {
            key: "AIzaSyDjpbs88N8q6PV1awFyJKFKY4U4N3v_Sx8",
            address: zip
        }
        // if search key is not empty and special character, get location from Google map API
        //    if(this.state.searchKey !== "" && specialChar.indexOf(this.state.searchKey) === -1){
        // axios.get('https://maps.googleapis.com/maps/api/geocode/json?address='+zip)
        // const api = "https://www.mapquestapi.com/geocoding/v1/address?outFormat=json&location=78660&thumbMaps=false&key=zthBRJJHCwGmCYdi6u8DHWcOQ7AM6SVM";
        const api = "https://maps.googleapis.com/maps/api/geocode/json?"
        axios.get("https://maps.googleapis.com/maps/api/geocode/json?",{params:data})
        .then(result => {
            //this.setState({searchResult: response.location.lat.response.location.lng})
            //zomato API
            console.log(result.data.results[0].geometry)
            let lat = result.data.results[0].geometry.location.lat;
            let lng = result.data.results[0].geometry.location.lng;
            // const apikey = "2fd0b311e7bd53843b8e12bb25f230c1";
            // let foodtype = this.state.searchKey;
            
    
            // axios.get("https://developers.zomato.com/api/v2.1/search?q=", {foodtype}, "&count=8","&lat=",{lat},"&lon=",{lng}, "&radius=3219","&sort=real_distance","&apikey=",{apikey})
            // .then(response => {
            //     //display restaurant
            ZomatoAPI.searchRestaurant(cuisine, lat, lng, res);
            // })
            // .catch(error => console.log(error))
        })
        .catch(err => {
            console.log("google");
            console.log(err)
        })  
  }
}
  