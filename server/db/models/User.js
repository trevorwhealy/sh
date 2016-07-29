var Sequelize = require('sequelize');
var db = require('../sequelize');

var User = db.define('user', {
  fbid: Sequelize.STRING,
  name: Sequelize.STRING,
});

module.exports = User;
