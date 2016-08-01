var Sequelize = require('sequelize');
var db = require('../sequelize');

var Transaction = db.define('transaction');


module.exports = Transaction;
