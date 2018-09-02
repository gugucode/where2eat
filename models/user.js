module.exports = function(sequelize, Sequelize) {
    const User = sequelize.define('user', {
      userName: Sequelize.STRING,
      password: Sequelize.STRING,
      firstName: Sequelize.STRING,
      lastName: Sequelize.INTEGER,
      email: Sequelize.INTEGER
    });
  
    return User;
  }