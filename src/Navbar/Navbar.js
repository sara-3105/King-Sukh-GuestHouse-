import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import service from '../Service'

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: '200', textDecoration: 'none', color: 'black' }}>
        Kingsukh Guest House 
      
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
      <li>
    <NavLink to="/Landingpage" style={{ fontFamily: 'Montserrat, sans-serif' }}>Home</NavLink>
  </li>
  <li>
    <NavLink to="/about" style={{ fontFamily: 'Montserrat, sans-serif' }}>About</NavLink>
  </li>
  

  <li>
    <NavLink to="/service" style={{ fontFamily: 'Montserrat, sans-serif' }}>Service</NavLink>
  </li>
  

  <li>
    <NavLink to="/about" style={{ fontFamily: 'Montserrat, sans-serif' }}>Rooms</NavLink>
  </li>
  

  <li>
    <NavLink to="/about" style={{ fontFamily: 'Montserrat, sans-serif' }}>Gallery</NavLink>
  </li>
  

  <li>
    <NavLink to="/about" style={{ fontFamily: 'Montserrat, sans-serif' }}>Contact</NavLink>
  </li>
  
      </ul>
    </nav>
  );
};

export default Navbar;