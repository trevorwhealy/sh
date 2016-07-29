const path = require('path');
const express = require('express');
const app = express();

// Decorates with morgan, bodyParser, session, passport
require('./config/express')(app);

// Connection to the database
var db = require('./db/sequelize');

// Decorates the routes: app.get('/')
require('./config/routes')(app);

// Handles Passport config: applying FB keys + handling successful clickthrough
require('./config/passport')();

// Sets server as the static file provider...
app.use(express.static(__dirname + '/../'));

// Solves the problem of db.sync being asynch which might not finish before app.listen() begins
db.sync().then(() => {

  // Creates the item database if it does not already exist
  require('./db/seed');

  const port = 3000;
  app.listen(port, () => console.log(`listening on ${port}`));
});
