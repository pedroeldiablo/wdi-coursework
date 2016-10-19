const mongoose = require('mongoose');

const dinosaurSchema = mongoose.Schema({
  content: String,
  cite: String
});

module.exports = mongoose.model('Dinosaur', dinosaurSchema);
