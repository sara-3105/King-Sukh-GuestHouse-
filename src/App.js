import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Landingpage from './Landingpage';
import AboutUs from './AboutUs';
import ContactPage from './Contactform';
import NavbarPage from './Navbar/Navbar';
import Rooms from './Rooms';
import Gallery from './Gallery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/navbar" element={<NavbarPage />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* Redirect all unmatched routes to the Landingpage */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
