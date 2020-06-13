const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  phoneNo: { type: Number, required: true }
});

module.exports = mongoose.model('User', userSchema, 'users');