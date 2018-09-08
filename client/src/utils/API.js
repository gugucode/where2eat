import axios from "axios";

const API = {
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
    // console.log("react send invite");
    return axios.post("/api/friend/sendPickInvite", data);
  },

  // search and add friend
  searchFriends: function(key,cb) {
    // console.log(key);
    return axios.get("api/friend/searchFriend/"+key);
  },

  addFriend: function(data) {
    console.log(data);
    return axios.put("api/friend/add",data)
  },

  createEvent: function(data) {
    delete data['searchKey'],
    delete data['searchResult'];
    data.attendees = data.attendees.toString();
    console.log(data);
    return axios.post("api/event/createevent",data);
  },

  authenticate: function(data){
    return axios.post("/api/login", data);
  },

  signUp: function(data){
    return axios.post("/api/signup", data);
  }
};

export default API;
