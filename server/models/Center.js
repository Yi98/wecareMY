const mongoose = require('mongoose');

const centerSchema = mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  photo: { type: String, required: true },
  phoneNo: { type: String, required: true }
});

module.exports = mongoose.model('Center', centerSchema, 'center');