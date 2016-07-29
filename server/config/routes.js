const passport = require('passport');
const path = require('path');
const Item = require('../db/models/Item');

var auth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

module.exports = (app) => {

  app.get('/auth/facebook', passport.authenticate('facebook'));

  app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' }));

  app.get('/', auth, (req, res) => {
    res.sendFile(path.join(__dirname + '/../../index.html'));
  });

  app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + '/../../login.html'));
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/db', auth, (req, res) => {
    Item.findAll().then(items => {
      res.json({'items': items});
    });
  });

  app.get('/users/me', auth, (req, res) => {
    res.json(req.user);
  });

};
