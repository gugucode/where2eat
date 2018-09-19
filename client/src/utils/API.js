import axios from "axios";

const API = {
  // Retrieves saved restaurants from the db
  getRestaurant: function(cuisine, zipCode) {
    return axios.get("/api/searchRestaurant/" + cuisine + "/" + zipCode);
  },
  // Saves a new restaurant to the db
  saveRestaurant: function(savedRestaurant) {
    return axios.post("/api/saved", savedRestaurant);
  },
  // Deletes an restaurant from the db
  deleteRestaurant: function(id) {
    return axios.delete(`/api/saved/${id}`);
  },

  //save comment
  saveComment: function(saveComment) {
    return axios.post("/api/comment/addcomment", saveComment);
  },

  // Send a Pick-Restaurant invite to friends
  sendPickInvite: function(data) {
    // console.log("react send invite");
    return axios.post("/api/friend/sendPickInvite", data);
  },

  // friend API
  searchFriends: function(key,cb) {
    // if(key){
      return axios.get("/user/friend/searchFriend/"+key);
    // }
  },

  addFriend: function(data) {
    // console.log(data);
    return axios.put("/user/friend/add",data)
  },

  deleteFriend: function(data) {
    return axios.put("/user/friend/delete",data)
  },

  getAllFriends: function() {
    return axios.get("/user/friend/findAll")
  },

  getAllRests: function() {
    return axios.get("/user/restaurants/allRests")
  },
  // Event API
  createEvent: function(data) {
    delete data['searchKey'],
    delete data['searchResult'];
    delete data['savedEvents'];
    data.attendees = data.attendees.toString();
    console.log(data);
    return axios.post("user/event/createevent",data);
  },

  updateEvent: function(data) {
    delete data['searchKey'],
    delete data['searchResult'];
    delete data['savedEvents'];
    data.attendees = data.attendees.toString();
    console.log(data);
    return axios.put("user/event/updateevent/"+data.id,data);
  },

  deleteEvent: function(data) {
    console.log(data)
    return axios.delete("/user/event/delete",{data})
  },

  getAllEvents: function() {
    return axios.get("/user/event/findAll")
  },

  // login API
  authenticate: function(data){
    return axios.post("/api/login", data);
  },

  signUp: function(data){
    console.log("signup")
    return axios.post("/api/signup", data);
  },

  checkUser: function(username){
    return axios.get("/api/check/"+username)
  }
};

export default API;
