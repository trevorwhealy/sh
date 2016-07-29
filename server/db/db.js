var Sequelize = require('Sequelize');

var sequelize = new Sequelize('sh', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;



// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/shirts');
//
// var db = mongoose.connection;
//
// db.on('error', console.error.bind(console, 'connection error: '));
//
// db.once('open', function() {
//   console.log('connection to db established');
// });
//
//
// var shritSchema = mongoose.Schema({
//   color: {
//     type: String,
//   },
//   price: {
//     type: Number
//   }
// });
//
// var Shirt = mongoose.model('Shirt', shirtSchema);
//
// var greenShirt = new Shirt({
//   color: 'red',
//   price: 29.99
// });
