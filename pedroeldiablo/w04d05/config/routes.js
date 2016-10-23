const router = require('express').Router();
const linesController = require('../controllers/linesController');

router.route('/lines')
  .get(linesController.index)
  .post(linesController.create);

router.route('/lines/:id')
.get(linesController.show)
.put(linesController.update)
.delete(linesController.delete);



  module.exports = router;
