module.exports = function(sequelize, Sequelize) {
  const Restaurant = sequelize.define('restaurant', {
    restName: Sequelize.STRING,
    cuisines: Sequelize.STRING,
    photos: Sequelize.STRING,
    rates: Sequelize.INTEGER
  });

  return Restaurant;
}