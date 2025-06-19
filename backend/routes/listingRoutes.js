const express = require('express');
const User = require('../models/listingModel');

// POST /api/users - Create a new user

const express = require('express');
const router = express.Router();
const upload = require('../utils/multer');
const Listing = require('../models/Listing');

// Route: Create new listing with image upload
router.post('/create', upload.array('images', 5), async (req, res) => {
  try {
    const imageUrls = req.files.map(file => file.path); // Get Cloudinary URLs

    const newListing = new Listing({
      ...req.body,      // contains title, address, etc.
      images: imageUrls
    });

    await newListing.save();
    res.status(201).json({ message: 'Listing created successfully', listing: newListing });
  } catch (err) {
    console.error("Error creating listing:", err.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newUser = new User(data);
    await newUser.save(); // ✅ Save to DB
    console.log("✅ User data saved successfully");
    res.status(201).json(newUser);
  } catch (error) {
    console.error("❌ Error creating user:", error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/users - Get all users
router.get('/', async (req, res) => {
  try {
    const data = await User.find().select('-password'); // ⛔ hide password in response
    console.log("✅ Users fetched successfully");
    res.status(200).json(data);
  } catch (error) {
    console.error("❌ Error fetching users:", error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/users/:role - Filter by role
router.get('/:gender', async (req, res) => {
  try {
    const role = req.params.role.toLowerCase();
    const validRoles = ['admin', 'owner', 'renter'];

    if (!validRoles.includes(role)) {
      return res.status(400).json({ error: 'Invalid role type' });
    }

    const users = await User.find({ gender });
    console.log(`✅ ${role} users fetched successfully`);
    res.status(200).json(users);
  } catch (error) {
    console.error("❌ Error fetching users by role:", error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
