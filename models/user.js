module.exports = function(sequelize, Sequelize) {
    const User = sequelize.define('User', {
      username: Sequelize.STRING,
      password: Sequelize.STRING,
      firstName: Sequelize.STRING,
      lastName: Sequelize.INTEGER,
      email: Sequelize.INTEGER
    });
  
    return User;
  }