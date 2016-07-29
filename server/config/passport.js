const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('../config');

var User = require('../db/models/User');
var Item = require('../db/models/Item');

module.exports = function() {

  passport.use(new FacebookStrategy({
    clientID: config.fbId,
    clientSecret: config.fbSecret,
    callbackURL: 'http://127.0.0.1:3000/auth/facebook/callback'
  }, function(accessToken, refreshToken, profile, done) {

    User.findOne({
      where: {
        fbid: profile.id
      }
    })
    .then(user => {
      if (user === null) {
        User.create({
          name: profile.displayName,
          fbid: profile.id
        }).then(user => {
          return done(null, user);
        });
      } else {
        return done(null, user);
      }
    });

  }));

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });
};
