import axios from "axios";

const api = {
  // Query Zomato API
  // searchRestaurant: function(cuisine, lat, lng) {
  //   const apiKey = "2fd0b311e7bd53843b8e12bb25f230c1";
  //   const queryURL =
  //     "https://developers.zomato.com/api/v2.1/search?q=" +
  //     cuisine +
  //     "&count=8&lat=" +
  //     lat +
  //     "&lon=" +
  //     lng +
  //     "&apikey=" +
  //     apiKey;
  //   return axios.get(queryURL);
  // },
  // Retrieves saved articles from the db
  getRestaurant: function(cuisine, zipCode) {
    return axios.get("/api/searchRestaurant/" + cuisine + "/" + zipCode);
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

export default api;
