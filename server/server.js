const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173', // your frontend origin
  credentials: true,
}));

// Import your route files here, example:
app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/listings', require('./routes/listingRoutes'));
// app.use('/api/bookings', require('./routes/bookingRoutes'));

// Optional: Default route or health check
app.get('/', (req, res) => res.send('API is running...'));

// Optional: Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    message: err.message || 'Server Error',
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
