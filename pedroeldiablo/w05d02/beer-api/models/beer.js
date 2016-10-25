const mongoose = require('mongoose');

const beerSchema = mongoose.Schema({
  name: { type: String, trim: true, required: true, unique: true },
  brewery: { type: String, trim: true, required: true },
  abv: { type: Number, required: true }
});

module.exports = mongoose.model('Beer', beerSchema);
