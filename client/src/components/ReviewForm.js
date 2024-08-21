// src/components/ReviewForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ onReviewSubmit }) => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/reviews', { name, review })
      .then(response => {
        onReviewSubmit(response.data);
        setName('');
        setReview('');
      })
      .catch(error => console.error('Error posting review:', error));
  };

  return (
    <div className="review-form-container">
      <h2>Leave a Review</h2>
      <form onSubmit={handleSubmit} className="review-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="review">Your Review</label>
          <textarea
            id="review"
            placeholder="Your review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
