const User = require('../models/User');
const jwt = require('jsonwebtoken');

// ✅ Register User
exports.registerUser = async (req, res) => {
  try {
    const { name, phone, email, password, profileImage, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email already exists" });

    const newUser = new User({
      name,
      phone,
      email,
      password, // plain password – will be hashed in model
      profileImage,
      role: role || 'tenant'
    });

    await newUser.save();

    const token = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_SECRET, {
      expiresIn: '7d'
    });

    res.status(201).json({ token, user: newUser });
  } catch (err) {
    res.status(500).json({ message: "Register failed", error: err.message });
  }
};

// ✅ Login User
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Email and Password are required" });

    const user = await User.findOne({ email }).select("+password");
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "7d"
    });

    res.status(200).json({ token, user });
  } catch (err) {
    console.error("Login Error:", err.message);
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};

// ✅ Logout User (for JWT-based systems)
exports.logoutUser = async (req, res) => {
  try {
    // If you're storing token in cookies:
    res.clearCookie("token");

    // Or just tell frontend to delete token from localStorage
    res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    res.status(500).json({ message: "Logout failed", error: err.message });
  }
};
