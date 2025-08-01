const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Listing title is required"]
    },
    description: {
      type: String,
      required: [true, "Listing description is required"]
    },
    location: {
      type: String,
      required: [true, "Location is required"]
    },
    address: {
      type: String,
      required: [true, "Full address is required"]
    },
    rent: {
      type: Number,
      required: [true, "Rent is required"]
    },
    sharing: {
      type: String,
      enum: ["private", "shared", "any"],
      default: "any"
    },
    image: {
      type: String,
      required: [true, "Image is required"]
    },
    features: {
      type: [String],
      default: []
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    available: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
