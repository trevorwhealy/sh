var Sequelize = require('Sequelize');

var sequelize = new Sequelize('sh', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
