const Sequelize = require('sequelize');
const Restaurant = sequelize.define('restaurant', {
    restName: Sequelize.STRING,
    cuisines: Sequelize.STRING,
    photos: Sequelize.STRING,
    rates: Sequelize.INTEGER
  });
  