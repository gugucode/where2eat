var db = require("../models");

module.exports = {
  saveRest: function(req, res) {
    console.log(req.body);
    db.Restaurant.findAll({
      where: {
        rest_id: req.body.rest_id
      }
    }).then(result => {
      if(result.length === 0){
        db.Restaurant.create(req.body)
        .then(function(dbRestaurant) {
          res.json(dbRestaurant);
        })
        .catch(err => {
          console.log(err);
        })
      }else{
        res.status(409).end();
      }
  }).catch(err => {
    console.log(err);
  })
  
  },
  //Find all Restaurants and return them to the user with res.json
  getAllRest: function(req, res) {
    db.Restaurant.findAll({}).then(function(dbRestaurant) {
      res.json(dbRestaurant);
    });
  },

  getNumLike: function(req,res){
    db.Restaurant.findAll({
      where: {
        id: req.params.id
      }
    },{
      attributes: ['numlike']
    }).then(result => {
      res.send(result)
    }).catch(err =>{
      console.log(err)
    })
  },

  likeRest: function(req,res) {
    db.User.findAll({
      where:{
          username: req.user.username,
          likeRest: {
            $like: `%&${req.params.id}&%`
          }
      },
      attributes: ['id', 'username']
    }).then(result => { //update user table
      if(result.length === 0){
        db.User.update({
          likeRest: db.sequelize.literal(`concat(likeRest,"${req.params.id}&")`)
          },
          {
          where: {
            username: req.user.username,
          }
        }).then(result =>{ //update restaurant table
          db.Restaurant.update({
            numlike: db.sequelize.literal(`numlike+1`)
          },{
            where: {
              id: req.params.id
            }
          }).then(function(dbRestaurant) {
            res.json(dbRestaurant);
          }).catch(err => {
            console.log(err);
          })
        })
      }
    })
  },
  // app.get("/api/Restaurants/:id", function(req, res) {
  //   // Find one Restaurant with the id in req.params.id and return them to the user with res.json
  //   db.Restaurant.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbRestaurant) {
  //     res.json(dbRestaurant);
  //   });
  // });

  // app.post("/api/Restaurants", function(req, res) {
  //   // Create an Restaurant with the data available to us in req.body
  //   console.log(req.body);
  //   db.Restaurant.create(req.body).then(function(dbRestaurant) {
  //     res.json(dbRestaurant);
  //   });
  // });

  deleteRest: function(req, res) {
    // Delete the Restaurant with the id available to us in req.params.id
    db.Restaurant.destroy({
      where: {
        rest_id: req.params.id
      }
    }).then(function(dbRestaurant) {
      res.json(dbRestaurant);
    });
  }
  
 
};
