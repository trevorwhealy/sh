var User = require('./models/User');
var Transaction = require('./models/Transaction');

var db = require('./sequelize');

User.hasMany(Transaction);
Transaction.belongsTo(User);

module.exports = db;
