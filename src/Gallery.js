import React from 'react';
import galleryImg1 from './Assests/1.jpg';
import galleryImg2 from './Assests/baranti.webp';
import galleryImg3 from './Assests/flower.jpg';
import galleryImg4 from './Assests/mithonDam.webp';
import galleryImg5 from './Assests/palash.webp';
import galleryImg6 from './Assests/img3.jpg';
import galleryImg7 from './Assests/img4.jpg';
import galleryImg8 from './Assests/img5.jpg';
const Gallery = () => {
  return (
    <div>
       
      <p>
      <div style={{ textAlign: 'center' }}></div>
        <span style={{ fontSize: '50px', fontFamily: 'Playfair Display, serif' }}>Experience Through Images</span>
        <br />
        <span style={{ fontSize: '18px', fontFamily: 'Raleway, sans-serif' }}>Let our gallery inspire your next visit, showcasing the essence of relaxation and adventure that awaits you.</span>
        <br />
        <span style={{ fontSize: '18px', fontFamily: 'Raleway, sans-serif' }}>Take a visual journey and see why Luxeliving is the perfect choice for your next getaway.</span>
      </p>
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
    </div>
  );
}

export default Gallery;
