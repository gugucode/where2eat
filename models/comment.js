module.exports = function(sequelize, Sequelize) {
    const comments = sequelize.define('Comments', {
    //   id: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //         model: 'restaurant',
    //         key: 'id'}
    //   },
      comment: Sequelize.TEXT,
      creator: Sequelize.STRING,
      restId: Sequelize.STRING
      // primarykey: true,
  
    });
  
    return comments;
  }