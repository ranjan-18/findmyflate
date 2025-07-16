const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  address: {
    street: String,
    area: String,
    city: {
      type: String,
      required: true,
    },
    pincode: String,
    landmark: String,
  },
  rent: {
    type: Number,
    required: true,
  },
  genderPreference: {
    type: String,
    enum: ['Male', 'Female', 'Any'],
    default: 'Any',
  },
  roomType: {
    type: String,
    enum: ['1RK', '1BHK', '2BHK', '3BHK', 'Shared', 'PG'],
    required: true,
  },
  amenities: {
    type: [String], // e.g. ['WiFi', 'AC', 'Furnished']
    default: [],
  },
  imageUrls: {
    type: [String], // store Cloudinary URLs
    default: [],
  },
  availableFrom: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  isApproved: {
    type: Boolean,
    default: false, // Admin will approve later
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      rating: {
        type: Number,
        min: 1,
        max: 5,
      },
      comment: String,
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Listing', listingSchema);
