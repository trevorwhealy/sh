var Sequelize = require('sequelize');
var db = require('../sequelize');

var User = db.define('user', {
  fbid: Sequelize.STRING,
  name: Sequelize.STRING,
});

module.exports = User;


// var mongoose = require('mongoose');
//
// var userSchema = mongoose.Schema({
//   id: {
//     type: String
//   },
//   name: {
//     String
//   }
// });
//
// var user = mongoose.model('user', userSchema);



// user can have many things in
// by selecting a shirt, the shirt is added to the cart
// how can we establish a relationship between the users likes and the likes themselves?
// User has many likes
// Like can be had by many users
