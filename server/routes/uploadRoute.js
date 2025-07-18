const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');

router.post('/upload', upload.single('image'), (req, res) => {
  try {
    const fileUrl = req.file.path; // URL from Cloudinary
    res.status(200).json({ imageUrl: fileUrl });
  } catch (err) {
    res.status(500).json({ error: 'Image upload failed' });
  }
});

module.exports = router;
