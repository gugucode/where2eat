const bcrypt = require("bcrypt-nodejs")

module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('User', {
      username: {
        type: DataTypes.STRING,
      },

      firstName: {
        type: DataTypes.STRING,
      },

      lastName: {
        type: DataTypes.STRING,
      },

      email: {
        type: DataTypes.STRING,
      },

      friends: {
        type: DataTypes.TEXT,
        defaultValue: ""       
      },

      password: {
        type: DataTypes.STRING,
      },

      likeRest: {
        type: DataTypes.TEXT,
        defaultValue: '&' 
      }
    });
    
    User.prototype.comparePassword = function(password,hash){
      return bcrypt.compareSync(password,hash)
    }
    User.prototype.hashPassword = function(password){
      return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    }
     
    return User;
  }
