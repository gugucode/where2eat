import axios from "axios";
import passport from "passport";
import LocalStrategy from "passport-local";

export default {
  // Send a Pick-Restaurant invite to friends
  sendPickInvite: function(data) {
    console.log("react send invite");
    return axios.post("/api/invite/sendPickInvite", data);
  },

  searchEmail: function(key,cb) {
    console.log(key);
    cb(["ww","hoho","haha"]);
  },

  authenticate: function(data){
    return axios.post("/api/auth", data);
  }
};
