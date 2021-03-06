module.exports = function(sequelize, Sequelize) {
  const Restaurant = sequelize.define('Restaurant', {
    restName: Sequelize.STRING,
    cuisines: Sequelize.STRING,
    location: Sequelize.STRING,
    photos: Sequelize.STRING,
    rates: Sequelize.INTEGER,
    rest_id: Sequelize.STRING,
    numlike: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    }
  });

  return Restaurant;
}