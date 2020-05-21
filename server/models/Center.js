const mongoose = require('mongoose');

const centerSchema = mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phoneNo: { type: String, required: true },
  photo: { type: String, required: false }
});

module.exports = mongoose.model('Center', centerSchema, 'centers');