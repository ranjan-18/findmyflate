const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const cors = require('cors');
const connectDB =require('./config/db')

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));



connectDB();
 app.listen(process.env.PORT || 5000, () => {
      console.log("Server running on port 5000");
      
    });