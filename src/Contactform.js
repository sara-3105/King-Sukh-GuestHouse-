import React from 'react';
import Travel from './Assests/Travel1.jpg'

const ContactPage = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f7f7f7',
    padding: '20px'
  };

  const leftColumnStyle = {
    flex: 1,
    padding: '20px',
    marginRight: '10px',
    height: '400px',
    position: 'relative',
    backgroundImage: `url(${Travel})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    color: '#ffffff',
    textShadow: '0 1px 3px rgba(0, 0, 0, 0.6)'
  };

  const rightColumnStyle = {
    flex: 1,
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    color: '#000000'
  };

  const headerStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '10px'
  };

  const paragraphStyle = {
    fontSize: '16px',
    marginBottom: '20px'
  };

  const infoStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px'
  };

  const iconStyle = {
    marginRight: '10px',
    color: '#ffba00'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column'
  };

  const inputStyle = {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #cccccc',
    fontSize: '16px'
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#ffba00',
    color: '#ffffff',
    fontSize: '18px',
    cursor: 'pointer'
  };

  return (
    <div style={containerStyle}>
      <div style={leftColumnStyle}>
        <h1 style={headerStyle}>Get in Touch with Our Team</h1>
        <p style={paragraphStyle}>
          Lorem ipsum dolor sit amet consectetur. Dui lacus nulla tortor vel leo tristique aliquam mauris pellentesque.
          Donec orci ut facilisi dictum aliquam sit nisi. Tortor condimentum porta fames id in viverra massa et sed.
        </p>
        <div style={infoStyle}>
          <i className="fas fa-map-marker-alt" style={iconStyle}></i>
          <span>Jl. Raya Ubud 101, Bali, Indonesia</span>
        </div>
        <div style={infoStyle}>
          <i className="fas fa-phone-alt" style={iconStyle}></i>
          <span>(+62)-822-3434-1212</span>
        </div>
        <div style={infoStyle}>
          <i className="fas fa-envelope" style={iconStyle}></i>
          <span>luxeliving@gmail.com</span>
        </div>
      </div>
      <div style={rightColumnStyle}>
        <form style={formStyle}>
          <input type="text" placeholder="Your Name" style={inputStyle} />
          <input type="email" placeholder="Your Email" style={inputStyle} />
          <input type="text" placeholder="Subject" style={inputStyle} />
          <textarea placeholder="Message" style={{ ...inputStyle, height: '100px' }} />
          <button type="submit" style={buttonStyle}>
            BOOK NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
