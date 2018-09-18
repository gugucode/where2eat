module.exports = function(sequelize, Sequelize) {
    const comments = sequelize.define('Comment', {
    //   id: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //         model: 'restaurant',
    //         key: 'id'}
    //   },
      comment: Sequelize.TEXT,
      primarykey: true,
  
    });
  
    return comments;
  }