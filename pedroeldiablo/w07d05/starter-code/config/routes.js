const router = require('express').Router();
const bakeriesController = require('../controllers/bakeries');
const usersController = require('../controllers/users');
const authController = require('../controllers/auth');

router
  .post('/login', authController.login)
  .post('/register', authController.register);

router.route('/bakeries')
  .get(bakeriesController.index)
  .post(bakeriesController.create);

router.route('/bakeries/:id')
  .get(bakeriesController.show)
  .put(bakeriesController.update)
  .delete(bakeriesController.delete);

router.route('/users')
  .get(usersController.index)
  .post(usersController.create);

router.route('/users/:id')
  .get(usersController.show)
  .put(usersController.update)
  .delete(usersController.delete);

// Add user routes or other resource routes here

module.exports = router;
