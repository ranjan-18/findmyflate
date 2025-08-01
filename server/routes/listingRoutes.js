const express = require("express");
const router = express.Router();
const {
  createListing,
  getListings,
  getSingleListing,     // Optional: If you want to fetch a specific listing
  updateListing,        // Optional: Edit listing feature
  deleteListing         // Optional: Delete listing
} = require("../controllers/listingController");

const upload = require("../middleware/upload");
const { protect, restrictTo } = require("../middleware/authMiddleware");

// 🔒 POST /api/listings/create – Only owner or admin can create a listing
router.post(
  "/create",
  protect,
  restrictTo("owner", "admin"),
  upload.single("image"),  // Handles single image via Cloudinary middleware
  createListing
);

// 📥 GET /api/listings – Anyone can view listings (with filters via query)
router.get("/", getListings);

// 📥 Optional Routes Below – Uncomment when implemented
// router.get("/:id", getSingleListing);            // Get single listing
// router.patch("/:id", protect, restrictTo("owner", "admin"), updateListing);  // Edit
// router.delete("/:id", protect, restrictTo("owner", "admin"), deleteListing); // Delete

module.exports = router;

