var Sequelize = require('sequelize');
var db = new Sequelize('sh', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = db;
