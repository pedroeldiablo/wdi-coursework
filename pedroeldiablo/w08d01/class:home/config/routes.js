const router = require('express').Router();
const filmsController = require('../controllers/films');
const authController = require('../controllers/auth');
const oauthController = require('../controllers/oauth');
const secureRoute = require('../lib/secureRoute');


router
  .post('/login', authController.login)
  .post('/register', authController.register)
  .post('/auth/facebook', oauthController.facebook)
  .post('/auth/github', oauthController.github);

router.route('/films')
  .get(filmsController.index)
  .post(secureRoute,filmsController.create);

router.route('/films/:id')
  .get(filmsController.show)
  .put(secureRoute, filmsController.update)
  .delete(secureRoute, filmsController.delete);

module.exports = router;
