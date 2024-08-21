import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Kuchipudi from '../assets/images/image-1.jpg';
import Semiclassical from '../assets/images/image-2.jpg';
import Bollywood from '../assets/images/image-3.jpg';
import Tollywood from '../assets/images/image-4.jpg';

const DanceStyles = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="dance-styles">
      <h2>Dance Styles I Teach</h2>
      <Slider {...settings}>
        <div>
          <img src={Kuchipudi} alt="Kuchipudi" />
          <p>Kuchipudi</p>
        </div>
        <div>
          <img src={Semiclassical} alt="Semi-classical" />
          <p>Semi-classical</p>
        </div>
        <div>
          <img src={Bollywood} alt="Bollywood" />
          <p>Bollywood</p>
        </div>
        <div>
          <img src={Tollywood} alt="Tollywood" />
          <p>Tollywood</p>
        </div>
        {/* Add more styles as needed */}
      </Slider>
    </div>
  );
};

export default DanceStyles;
