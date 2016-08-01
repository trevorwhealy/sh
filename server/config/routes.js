const passport = require('passport');
const path = require('path');
const Item = require('../db/models/Item');
const User = require('../db/models/User');
const Transaction = require('../db/models/Transaction');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

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

  app.post('/stripe', auth, (req, res) => {

    console.log(req.body);
    let stripeToken = req.body.id;
    let amount = req.body.cartTotal * 100;

    stripe.charges.create({
      amount: amount,
      currency: 'usd',
      source: stripeToken,
      description: 'revamp'
    }, (err, charge) => {
      if (err && err.type === 'StripeCardError') {
        res.send('error');
        console.error(err);
      } else {
        // There can be no error, but the charge can fail for other reasons
        // Such as not having a valid API secret * Doh! *
        if (charge !== null) {
          console.log('stripe successful');
          User.findOne({where: {fbid: req.user.fbid}})
          .then(user => {
            return Transaction.create().then(transaction => {
              user.addTransaction(transaction);
            });
          });

          res.send('success');
        }
      }
    });
  });

  app.get('/users/me', auth, (req, res) => {
    res.json(req.user);
  });

  app.get('/test', auth, (req, res) => {

    //
    //   return Transaction.create({
    //     user: {
    //       fbid: req.user.fbid
    //     }
    //   }, {
    //     include: [ user ]
    //   });
    // });
    // .then(t => {
    //   res.json({t: t});
    // });
  });

  // app.all('*', function(req, res) {
  //   res.redirect('/');
  // });

};
