const router = require('express').Router();
// const beersController = require('../controllers/beers');
const pubsController = require('../controllers/pubs');
const jwt = require('jsonwebtoken');
const authsController = require('../controllers/auths');
const users = require('../controllers/users');
const secret = require('./tokens').secret;

//
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ODEwYzU5NTdkNmQ5OGM2MmM5YmU4YjIiLCJ1c2VybmFtZSI6Ik5hdGFsaWUiLCJpYXQiOjE0Nzc0OTQxNjUsImV4cCI6MTQ3NzU4MDU2NX0.ENXSpbSc9IBvdj9n9LCz_bcMTaYVXi6f0Tr1E_p7oaY

function secureRoute(req, res, next) {
  if(!req.headers.authorization) return res.status(401).json({ message: "unauthorized" });

  let token = req.headers.authorization.replace('Bearer ', '');

  jwt.verify(token, secret, (err, payload) => {
    if(err) return res.status(401).json({ message: "unauthorized" });
    req.user = payload;
    next();
  });
}

router.route("/register")
.post(authsController.register);
router.route("/login")
.post(authsController.login);

router.route('/users')
.get(secureRoute, users.index);

router.route('/users/:id')
.all(secureRoute)
  .get(users.show)
  .put(users.update)
  .delete(users.delete);



router.route('/pubs')
.all(secureRoute)
  .get(pubsController.index)
  .post(pubsController.create);

router.route('/pubs/:id')
.all(secureRoute)
  .get(pubsController.show)
  .put(pubsController.update)
  .delete(pubsController.delete);

// router.route('/beers')
//   .get(beersController.index)
//   .post(beersController.create);
//
// router.route('/beers/:id')
//   .get(beersController.show)
//   .put(beersController.update)
//   .delete(beersController.delete);

module.exports = router;
