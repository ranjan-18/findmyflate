const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const uploadRoutes = require('./routes/uploadRoute');
const listingRoutes = require('./routes/listingRoutes');

app.use('/api/auth', authRoutes);
app.use("/api/listings", listingRoutes);
app.use('/api', uploadRoutes);

connectDB();

app.get('/',(req,res)=>{
  res.send("hello");
  
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
