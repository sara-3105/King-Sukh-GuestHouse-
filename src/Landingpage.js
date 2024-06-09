import React from 'react';
import './App.css';
import './Landingpage.css';
import navbar from './Navbar/Navbar'
import About1 from './Assests/about1.jpg';
import About2 from './Assests/about2.jpg';
import './Section.css';
import Largeimg from './Assests/large.jpg';
import img1 from './Assests/room1.jpg';
import img2 from './Assests/small.jpg';
import galleryImg1 from './Assests/1.jpg'; // Example gallery images
import galleryImg2 from './Assests/baranti.webp'; 
import galleryImg3 from './Assests/flower.jpg'; 
import galleryImg4 from './Assests/mithonDam.webp'; 
import galleryImg5 from './Assests/palash.webp'; 
import galleryImg6 from './Assests/img3.jpg'; 
import galleryImg7 from './Assests/img4.jpg'; 
import galleryImg8 from './Assests/img5.jpg'; 
import icon1 from './Assests/icon1.png';
import icon2 from './Assests/icon2.png';
import icon3 from './Assests/icon3.png';
import icon4 from './Assests/icon4.png';
import icon5 from './Assests/icon5.png';
import icon6 from './Assests/icon6.png';
import ContactForm from './Contactform';


function LandingPage() {
  
  return (
    <div className="App">
      <header>
        <h1>Welcome to Our Kingsukh</h1>
        <p style={{ fontSize: '90px', fontFamily: 'Playfair Display, serif' }}>Discover the art of</p>
        <p style={{ fontSize: '60px', fontFamily: 'Playfair Display, serif' }}>Relaxation</p>
      </header>

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

      
      <div className="container">
        <p style={{ fontSize: '42px', fontFamily: 'Playfair Display, serif' }}>Best Offer on Our Rooms</p>

        <div className="row">
          <div className="col-md-4">
            <div className="card card-hover" style={{ width: '18rem', borderRadius: '5px' }}>
              <img src={Largeimg} className="card-img-top" alt="Card 1" />
              <div className="card-body">
                <h5 className="card-title" style={{ fontFamily: 'Raleway, sans-serif' }}>Cozy Haven Room</h5>
                <p className="card-text" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.

                 Rs. 1000/night</p>
              </div>
              
              <div className="card-body">
                <button className="card-body" style={{ fontFamily: 'Raleway, sans-serif', backgroundColor:'white' }}>Book Now</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card" style={{ width: '18rem', borderRadius: '10px' }}>
              <img src={img1} className="card-img-top" alt="Card 2" />
              <div className="card-body">
                <h5 className="card-title" style={{ fontFamily: 'Raleway, sans-serif' }}>Spacious Serenity Suite</h5>
                <p className="card-text" style={{ fontFamily: 'Raleway, sans-serif' }}>Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.
                Rs. 500/day</p>
              </div>
              
              <div className="card-body">
                <button className="card-body" style={{ fontFamily: 'Raleway, sans-serif', backgroundColor:'white' }}>Book Now</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card" style={{ width: '18rem', borderRadius: '10px' }}>
              <img src={img2} className="card-img-top" alt="Card 3" />
              <div className="card-body">
                <h5 className="card-title" style={{ fontFamily: 'Raleway, sans-serif' }}>Luxury Rooms</h5>
                <p className="card-text" style={{ fontFamily: 'Raleway, sans-serif' }}>Indulge in luxury and ample space in our Spacious Serenity Suite.
                Rs.2500 2days</p>
              </div>
              
              <div className="card-body">
                <button className="card-body" style={{ fontFamily: 'Raleway, sans-serif', backgroundColor:'white' }}>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p>
          <span style={{ fontSize: '50px', fontFamily: 'Playfair Display serif' }}>Experience Through Images</span>
          <br />
          <span style={{ fontSize: '18px',fontFamily: 'Raleway, sans-serif;' }}>Let our gallery inspire your next visit, showcasing the essence of relaxation and adventure that awaits you.</span>
          <br />
          <span style={{ fontSize: '18px', fontFamily: 'Raleway, sans-serif;' }}>Take a visual journey and see why Luxeliving is the perfect choice for your next getaway.</span>
        </p>
      </div>

      <div className="gallery" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
        <img src={galleryImg1} alt="Gallery Image 1" style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '10px', transition: 'transform 0.2s' }} />
        <img src={galleryImg2} alt="Gallery Image 2" style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '10px', transition: 'transform 0.2s' }} />
        <img src={galleryImg3} alt="Gallery Image 3" style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '10px', transition: 'transform 0.2s' }} />
        <img src={galleryImg4} alt="Gallery Image 4" style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '10px', transition: 'transform 0.2s' }} />
        <img src={galleryImg5} alt="Gallery Image 5" style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '10px', transition: 'transform 0.2s' }} />
        <img src={galleryImg6} alt="Gallery Image 6" style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '10px', transition: 'transform 0.2s' }} />
        <img src={galleryImg7} alt="Gallery Image 7" style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '10px', transition: 'transform 0.2s' }} />
        <img src={galleryImg8} alt="Gallery Image 8" style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '10px', transition: 'transform 0.2s' }} />
      </div>
     
{/* Render the ContactForm component */}
<ContactForm />


    
          
      <footer>
        <p>© 2024 My Guest House</p>
      </footer>
    </div>
  );
}

export default LandingPage;