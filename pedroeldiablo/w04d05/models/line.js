const mongoose = require ('mongoose');

const lineSchema = mongoose.Schema({
  name: String,
  color: String,
  length : Number

});

module.exports = mongoose.model('Line', lineSchema);
