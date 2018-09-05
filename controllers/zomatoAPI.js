// import axios from "axios";
// import restDBAPI from "./restaurantDbAPI";
const restDBAPI = require("./saveRest");
const axios = require("axios");

module.exports = {
// export const ZomatoAPI = {
//   // Query Zomato API
  searchRestaurant: function(cuisine, lat, lng,res) {
    const apiKey = "2fd0b311e7bd53843b8e12bb25f230c1";
    const queryURL = "https://developers.zomato.com/api/v2.1/search";
      // cuisine +
      // "&count=8&lat=" +
      // lat +
      // "&lon=" +
      // lng +
      // "&apikey=" +
      // apiKey;

    const d = {
      apikey: apiKey,
      cuisine: cuisine,
      lat: lat,
      lon: lng
    }

    axios.get(queryURL,{params: d})
    .then(result => {
      const data = result.data.restaurants
      console.log(data.length);
      res.json(data);
      // restDBAPI.create(result.data.restaurants);
    })
    .catch(error => {
      console.log("zomato")
      console.log(error)
    });
  },
  // Retrieves saved articles from the db
  getRestaurant: function() {
    return axios.get("/api/restaurant");
  },
  // Saves a new article to the db
  saveRestaurant: function(savedRestaurant) {
    return axios.post("/api/saved", savedRestaurant);
  },
  // Deletes an article from the db
  deleteRestaurant: function(id) {
    return axios.delete(`/api/saved/${id}`);
  }
};

// export default zomatoAPI;
