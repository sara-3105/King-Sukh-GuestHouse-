import React from 'react';
import icon2 from './Assests/icon2.png';
import icon3 from './Assests/icon3.png';
import icon4 from './Assests/icon4.png';
import icon5 from './Assests/icon5.png';
import icon6 from './Assests/icon6.png';
import About1 from './Assests/about1.jpg';
import About2 from './Assests/about2.jpg';

function Services() {
    return (
        <div className="container" style={{ display: 'flex' }}>
            <div className="left-section" style={{ textAlign: 'left' }}>
                <h1 style={{ fontSize: '3rem' }}>We can help you feel <br /> more comfortable</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur.<br />
                    Dui lacus nulla tortor vel leo tristique aliquam mauris pellentesque. <br />
                    Donec orci ut facilisi dictum aliquam sit nisi. Tortor condimentum porta fames id in viverra massa et sed.
                </p>
                <div className="features" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '5px' }}>
                    <div className="feature" style={{ textAlign: 'left', fontSize: '20px' }}>
                        <img src={icon5} alt="Classy Amenities" style={{ width: '30px', height: '30px' }} />
                        <div style={{ fontFamily: 'Montserrat, sans-serif' }}>Classy Amenities</div>
                    </div>
                    <div className="feature" style={{ textAlign: 'left', fontSize: '20px' }}>
                        <img src={icon2} alt="Classy Amenities" style={{ width: '30px', height: '24px' }} />
                        <div style={{ fontFamily: 'Montserrat, sans-serif' }}>Luxury Lifestyle</div>
                    </div>
                    <div className="feature" style={{ textAlign: 'left', fontSize: '20px' }}>
                        <img src={icon6} alt="Classy Amenities" style={{ width: '30px', height: '30px' }} />
                        <div style={{ fontFamily: 'Montserrat, sans-serif' }}>Friendly Services</div>
                    </div>
                    <div className="feature" style={{ textAlign: 'left', fontSize: '20px' }}>
                        <img src={icon4} alt="Classy Amenities" style={{ width: '30px', height: '30px' }} />
                        <div style={{ fontFamily: 'Montserrat, sans-serif' }}>Lifeguard 24/7</div>
                    </div>
                </div>
                <button className="about-button" style={{ borderRadius:'20px', width:'150px', height:'50px',backgroundColor:'white' }}>ABOUT US</button>
            </div>
            <div className="right-section" style={{ marginLeft: 'auto', position: 'relative' }}>
                <div className="image-container">
                    <img src={About1} alt="Main" className="main-image" style={{ width: '500px', height: '300px', marginTop: '100px' }} />
                    <img src={About2} alt="Secondary" className="secondary-image" style={{ width: '200px', height: '190px', position: 'absolute', top: '300px', left: '90px', zIndex: 1 }} />
                </div>
            </div>
        </div>
    );
}

export default Services;
