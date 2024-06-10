// src/LandingPage.js
import React from 'react';
import './App.css';
import './Landingpage.css';
import navbar, { Navbar } from './Navbar/Navbar';
import About1 from './Assests/about1.jpg';
import About2 from './Assests/about2.jpg';

import icon1 from './Assests/icon1.png';
import icon2 from './Assests/icon2.png';
import icon3 from './Assests/icon3.png';
import icon4 from './Assests/icon4.png';
import icon5 from './Assests/icon5.png';
import icon6 from './Assests/icon6.png';
import ContactForm from './Contactform';
import Rooms from './Rooms'; // Import the new Rooms component
import Gallery from './Gallery';

function LandingPage() {
  return (
    <div className="App">
       <Navbar/>
      <header>
        <h1>Welcome to Our Kingsukh</h1>
        <p style={{ fontSize: '90px', fontFamily: 'Playfair Display, serif' }}>Discover the art of</p>
        <p style={{ fontSize: '60px', fontFamily: 'Playfair Display, serif' }}>Relaxation</p>
      </header>

      {/* <Service /> */}

      {/* Include the Rooms component here */}
      <Rooms />

      <Gallery />

      

      {/* Render the ContactForm component */}
      <ContactForm />

      <footer>
        <p>© 2024 My Guest House</p>
      </footer>
    </div>
  );
}

export default LandingPage;
