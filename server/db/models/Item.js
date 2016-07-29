var Sequelize = require('sequelize');
var db = require('../sequelize');

var Item = db.define('item', {
  type: Sequelize.STRING,
  image: Sequelize.STRING,
  cost: Sequelize.INTEGER
});

module.exports = Item;
