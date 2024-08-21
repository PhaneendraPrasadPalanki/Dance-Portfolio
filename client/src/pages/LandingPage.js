import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewList from '../components/ReviewList';
import ReviewForm from '../components/ReviewForm';
import Achievements from '../components/Achievements';
import DanceStyles from '../components/DanceStyles';
import ImageGallery from '../components/ImageGallery';
import './LandingPage.css'; // Import your custom styles

const LandingPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews from the backend
    axios.get('http://localhost:5000/reviews')
      .then(response => setReviews(response.data))
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  const handleReviewSubmit = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <div className="landing-page">
      <header>
        <nav>
          <ul>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <h1>Welcome to My Dance Portfolio</h1>
      <Achievements />
      <DanceStyles />
      <ImageGallery />
      <div className="reviews-section">
        <ReviewList reviews={reviews} />
        <ReviewForm onReviewSubmit={handleReviewSubmit} />
      </div>
    </div>
  );
};

export default LandingPage;
