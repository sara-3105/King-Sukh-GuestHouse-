import React from 'react';
import './AboutUs.css';
import guestHouseImage from './Assests/guesthouse2.jpg';
function AboutUs() {
  return (
    <div className="about-us">
      <section className="hero">
        <img src={guestHouseImage} alt="Guest House" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to Our Guest House</h1>
          <p>Experience the comfort and tranquility like never before</p>
        </div>
      </section>

      <section className="story">
        <h2>Our Story</h2>
        <p>
          Our guest house was established in 2020 with the vision of providing a home away from home. Located in the serene surroundings of the countryside, our guest house offers a perfect blend of modern amenities and rustic charm. We believe in providing personalized service to make your stay as comfortable and memorable as possible.
        </p>
      </section>

      <section className="values">
        <h2>Our Values</h2>
        <div className="values-container">
          <div className="value-item">
            <h3>Hospitality</h3>
            <p>We strive to create a welcoming and warm environment for all our guests.</p>
          </div>
          <div className="value-item">
            <h3>Comfort</h3>
            <p>Your comfort is our top priority. We ensure that all our rooms and facilities are maintained to the highest standards.</p>
          </div>
          <div className="value-item">
            <h3>Sustainability</h3>
            <p>We are committed to sustainable practices to minimize our environmental footprint.</p>
          </div>
        </div>
      </section>

      {/* Decorative Elements */}
      <section className="decorations">
        <h2>Decorative Elements</h2>
        <div className="decorations-container">
          {/* Add your decorative elements here */}
          <div className="decoration-item">
            <i className="fas fa-seedling"></i>
            <p>Green Environment</p>
          </div>
          <div className="decoration-item">
            <i className="fas fa-sun"></i>
            <p>Sunshine</p>
          </div>
          <div className="decoration-item">
            <i className="fas fa-swimming-pool"></i>
            <p>Swimming Pool</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Guests Say</h2>
        <div className="testimonial-container">
          <div className="testimonial">
            <p>"This is the best guest house I have ever stayed at. The hospitality was top-notch, and the environment was incredibly relaxing."</p>
            <h4>- Michael Brown</h4>
          </div>
          <div className="testimonial">
            <p>"A perfect getaway! The rooms were cozy, and the service was impeccable. I will definitely be coming back."</p>
            <h4>- Sarah Davis</h4>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
