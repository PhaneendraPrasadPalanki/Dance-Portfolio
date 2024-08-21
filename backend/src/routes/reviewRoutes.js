// src/routes/reviewRoutes.js
const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Get all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.aggregate(
      [
        { $sample: { size: 2} }
      ]
    );
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Post a new review
router.post('/', async (req, res) => {
  const { name, review } = req.body;
  try {
    const newReview = new Review({ name, review });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
