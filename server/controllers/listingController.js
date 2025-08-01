const Listing = require("../models/Listing");

exports.createListing = async (req, res) => {
  try {
    const {
      title,
      description,
      location,
      address,
      rent,
      sharing,
      features
    } = req.body;

    // req.user._id comes from auth middleware
    const ownerId = req.user._id;

    const newListing = new Listing({
      title,
      description,
      location,
      address,
      rent,
      sharing,
      features: features ? features.split(",") : [],
      image: req.file.path,
      owner: ownerId
    });

    await newListing.save();
    res.status(201).json({ message: "Listing created", listing: newListing });
  } catch (err) {
    res.status(500).json({ message: "Failed to create listing", error: err.message });
  }
};


exports.getListings = async (req, res) => {
  try {
    const { location, maxRent, sharing, features } = req.query;

    // Build filter object
    let filter = { available: true };

    if (location) {
      filter.location = { $regex: location, $options: "i" }; // case-insensitive
    }

    if (maxRent) {
      filter.rent = { $lte: Number(maxRent) };
    }

    if (sharing && sharing !== "any") {
      filter.sharing = sharing;
    }

    if (features) {
      // e.g., wifi,ac → ["wifi", "ac"]
      const featureArray = features.split(",");
      filter.features = { $all: featureArray };
    }

    const listings = await Listing.find(filter).populate("owner", "name email phone");

    res.status(200).json({ count: listings.length, listings });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch listings", error: err.message });
  }
}