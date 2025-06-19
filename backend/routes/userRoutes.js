const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// POST /api/users - Create a new user
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
router.get('/:role', async (req, res) => {
  try {
    const role = req.params.role.toLowerCase();
    const validRoles = ['admin', 'owner', 'renter'];

    if (!validRoles.includes(role)) {
      return res.status(400).json({ error: 'Invalid role type' });
    }

    const users = await User.find({ role });
    console.log(`✅ ${role} users fetched successfully`);
    res.status(200).json(users);
  } catch (error) {
    console.error("❌ Error fetching users by role:", error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
