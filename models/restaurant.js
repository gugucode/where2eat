module.exports = function(sequelize, Sequelize) {
  const Restaurant = sequelize.define('Restaurant', {
    restName: Sequelize.STRING,
    cuisines: Sequelize.STRING,
    photos: Sequelize.STRING,
    rates: Sequelize.INTEGER,
    rest_id: Sequelize.STRING
  });

  return Restaurant;
}