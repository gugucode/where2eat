module.exports = function(sequelize, Sequelize) {
    const User = sequelize.define('User', {
      username: Sequelize.STRING,
      password: Sequelize.STRING,
      firstName: Sequelize.STRING,
      lastName: Sequelize.STRING,
      email: Sequelize.STRING,
      friends: Sequelize.TEXT
    });
  
    return User;
  }