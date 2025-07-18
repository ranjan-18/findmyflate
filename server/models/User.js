// server/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

  password: {
    type: String,
    required: true,
    minlength: 6
  },

  googleId: {
    type: String,
    default: null
  },

  profileImage: {
    type: String,
    default: 'https://res.cloudinary.com/demo/image/upload/sample.jpg'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
