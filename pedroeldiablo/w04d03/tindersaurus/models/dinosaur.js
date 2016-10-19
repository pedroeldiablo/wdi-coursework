const mongoose = require('mongoose');

const dinosaurSchema = mongoose.Schema({
  name: String,
  age: Number,
  species: String,
  image: String,
  eatsYou: Boolean,
  inJurrasicPark: Boolean

});

module.exports = mongoose.model('Dinosaur', dinosaurSchema);
