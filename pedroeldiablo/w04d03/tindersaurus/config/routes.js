const router = require('express').Router();
const dinosaursController = require('../controllers/dinosaursController');

// HOMEPAGE
router.get('/', (req, res) => res.render('home'));

// INDEX & CREATE
router.route('/dinosaurs')
  .get(dinosaursController.index)
  .post(dinosaursController.create);

// NEW
router.get('/dinosaurs/new', dinosaursController.new);

// SHOW, UPDATE & DELETE
router.route('/dinosaurs/:urlId')
  .get(dinosaursController.show)
  .put(dinosaursController.update)
  .delete(dinosaursController.delete);

// EDIT
router.get('/dinosaurs/:urlId/edit', dinosaursController.edit);

module.exports = router;
