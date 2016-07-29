var Sequelize = require('sequelize');
var db = require('../sequelize');

var Item = db.define('item', {
  type: Sequelize.STRING,
  image: Sequelize.STRING,
  cost: Sequelize.INTEGER
});


module.exports = Item;


// var mongoose = require('mongoose');
//
// var itemSchema = mongoose.Schema({
//   id: {
//     type: String
//   },
//   type: {
//     type: String
//   },
//   cost: {
//     type: Number
//   }
// });
