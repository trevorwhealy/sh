const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');

module.exports = function(app) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(session({
    secret: 'someSecretPhrase'
  }));
  app.use(passport.initialize());
  app.use(passport.session());
};
