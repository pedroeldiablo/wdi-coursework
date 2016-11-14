const mongoose = require('mongoose');

const bakeriesSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  location: { type: String, required: true, trim: true },
  openedDate: { type: Date, required: true },
  pasteryImage: { type: String }
});

module.exports = mongoose.model('Bakery', bakeriesSchema);
