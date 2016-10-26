const mongoose = require('mongoose');

const pubSchema = mongoose.Schema({
  name: { type: String, trim: true, required: true, unique: true },
  address: { type: String, trim: true, required: true },
  rating: { type: Number, required: true }
});

module.exports = mongoose.model('Pub', pubSchema);
