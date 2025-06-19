const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  // Reference to the owner (User model)
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  // Title of the listing
  title: {
    type: String,
    required: true,
    trim: true
  },

  // Description of the property
  description: {
    type: String,
    required: true
  },

  // Full address or area info
  address: {
    type: String,
    required: true
  },

  // Rent per month in INR
  rent: {
    type: Number,
    required: true
  },

  // Number of rooms (e.g., 1BHK, 2BHK)
  propertyType: {
    type: String,
    enum: ['1BHK', '2BHK', '3BHK', 'PG', 'Other'],
    default: 'Other'
  },

  // Image URLs from Cloudinary or elsewhere
  images: {
    type: [String],
    required: true
  },

  // Basic amenities
  amenities: {
    type: [String], // e.g., ['WiFi', 'AC', 'Geyser', 'Fridge']
    default: []
  },

  // Availability status
  available: {
    type: Boolean,
    default: true
  },

  // Optional map coordinates
  location: {
    lat: Number,
    lng: Number
  },

  // For filtering
  genderPreference: {
    type: String,
    enum: ['any', 'male', 'female'],
    default: 'any'
  },

  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Listing', listingSchema);
