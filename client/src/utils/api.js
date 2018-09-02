import axios from "axios";

const api = {
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
  },
  // Send a Pick-Restaurant invite to friends
  sendPickInvite: function(data) {
    console.log("react send invite");
    return axios.post("/api/invite/sendPickInvite", data);
  },

  searchEmail: function(key,cb) {
    console.log(key);
    cb(["ww","hoho","haha"]);
  }
};

export default api;
