const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const uploadRoute = require('./routes/uploadRoute');

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);


const connectDB = require('./config/db');
app.use('/api', uploadRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB();
});
