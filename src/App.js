import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './Landingpage';
import AboutUs from './AboutUs';
import ContactPage from './Contactform';
import NavbarPage from './Navbar/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/navbar" element={<NavbarPage />} />
      </Routes>
    </Router>
  );
}

export default App;
