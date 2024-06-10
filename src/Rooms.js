import React from 'react';
import Largeimg from './Assests/large.jpg';
import img1 from './Assests/room1.jpg';
import img2 from './Assests/small.jpg';
import './Rooms.css'; // Import the CSS file

function Rooms() {
  // WhatsApp number in international format without '+' or '00', and without spaces
  const whatsappNumber = '919007062180'; // Replace with your phone number

  // Function to create WhatsApp URL
  const createWhatsappLink = (message) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  };

  return (
    <div className="container">
      <p className="rooms-title">Best Offer on Our Rooms</p>
      <div className="row">
        <div className="col-md-4">
          <div className="card card-hover">
            <img src={Largeimg} className="card-img-top" alt="Cozy Haven Room" />
            <div className="card-body">
              <h5 className="card-title">Cozy Haven Room</h5>
              <p className="card-text">
                Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.<br />
                Rs. 1000/night
              </p>
            </div>
            <div className="card-body">
              <a
                href={createWhatsappLink('I am interested in booking the Cozy Haven Room.')}
                className="book-now-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src={img1} className="card-img-top" alt="Spacious Serenity Suite" />
            <div className="card-body">
              <h5 className="card-title">Spacious Serenity Suite</h5>
              <p className="card-text">
                Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.<br />
                Rs. 500/day
              </p>
            </div>
            <div className="card-body">
              <a
                href={createWhatsappLink('I am interested in booking the Spacious Serenity Suite.')}
                className="book-now-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src={img2} className="card-img-top" alt="Luxury Rooms" />
            <div className="card-body">
              <h5 className="card-title">Luxury Rooms</h5>
              <p className="card-text">
                Indulge in luxury and ample space in our Spacious Serenity Suite.<br />
                Rs. 2500/2 days
              </p>
            </div>
            <div className="card-body">
              <a
                href={createWhatsappLink('I am interested in booking the Luxury Room.')}
                className="book-now-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
