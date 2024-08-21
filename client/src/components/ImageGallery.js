import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gallery1 from '../assets/images/gallery-1.jpg'
import gallery2 from '../assets/images/gallery-2.jpg'
import gallery3 from '../assets/images/gallery-3.jpg'
import gallery4 from '../assets/images/gallery-4.jpg'
const ImageGallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Display two images at once
    slidesToScroll: 2, // Scroll two images at a time
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // Adjusting for smaller screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="image-gallery">
      <h2>Gallery</h2>
      <Slider {...settings}>
        <div><img src={gallery1} alt="Teaching Dance 1" /></div>
        <div><img src={gallery2} alt="Teaching Dance 2" /></div>
        <div><img src={gallery3} alt="Photoshoot 1" /></div>
        <div><img src={gallery4} alt="Photoshoot 2" /></div>
        {/* Add more images as needed */}
      </Slider>
    </div>
  );
};

export default ImageGallery;
