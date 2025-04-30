import React from 'react';
import bannerImg from '../assets/banner.jpg'; 
import secondImg from '../assets/second.jpeg'; 
import thirdImg from '../assets/third.jpeg';   

const Banner: React.FC = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      
      {/* Carousel indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Carousel slides */}
      <div className="carousel-inner">
        {/* First slide */}
        <div className="carousel-item active">
          <img src={bannerImg} className="d-block w-100" alt="First Slide" style={{ height: '400px', objectFit: 'cover' }} />
          <div className="carousel-caption d-none d-md-block">
            <h5 style={{color:'black'}}>Welcome to HPHT Diamonds</h5>
            <p>Enhancing the brilliance of diamonds through HPHT technology.</p>
          </div>
        </div>

        {/* Second slide */}
        <div className="carousel-item">
          <img src={secondImg} className="d-block w-100" alt="Second Slide" style={{ height: '400px', objectFit: 'cover' }} />
          <div className="carousel-caption d-none d-md-block">
            <h5>Brilliant Colors</h5>
            <p>Transforming natural diamonds into vibrant masterpieces.</p>
          </div>
        </div>

        {/* Third slide */}
        <div className="carousel-item">
          <img src={thirdImg} className="d-block w-100" alt="Third Slide" style={{ height: '400px', objectFit: 'cover' }} />
          <div className="carousel-caption d-none d-md-block">
            <h5>Trusted Experts</h5>
            <p>Leading technology and service in diamond color enhancement.</p>
          </div>
        </div>
      </div>

      {/* Carousel controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
