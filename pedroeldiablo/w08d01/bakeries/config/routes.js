const router = require('express').Router();
const bakeriesController = require('../controllers/bakeries');
// const usersController = require('../controllers/users');
const authController = require('../controllers/auth');
const oauthController = require('../controllers/oauth');
const secureRoute = require('../lib/secureRoute');

router
  .post('/login', authController.login)
  .post('/register', authController.register)
  .post('/auth/facebook', oauthController.facebook)
  .post('/auth/github', oauthController.github);

router.route('/bakeries')
  .get(bakeriesController.index)
  .post(secureRoute, bakeriesController.create);

router.route('/bakeries/:id')
  .get(bakeriesController.show)
  .put(secureRoute, bakeriesController.update)
  .delete(secureRoute, bakeriesController.delete);

// router.route('/users')
//   .get(usersController.index)
//   .post(usersController.create);
//
// router.route('/users/:id')
//   .get(usersController.show)
//   .put(usersController.update)
//   .delete(usersController.delete);

// Add user routes or other resource routes here

module.exports = router;
