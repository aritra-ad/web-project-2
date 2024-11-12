import React from 'react';
import './Banner.css'; // Link to the custom CSS file
import bannerimg from '../assets/banner_img.jpg';
const Discography = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image">
          <img src={bannerimg} alt="Building" className="contact-image" />
        </div>
        <div className="overlay">
          <h1 className="dj-name">John Doe</h1>
          <p className="dj-label">PRODUCTIONS</p>
          <p className="dj-subtitle">Music Inspirations</p>
        </div>
      </section>

      {/* Discography Section */}
      <section className="discography-section">
        <h2 className="section-title">DISCOGRAPHY</h2>
        <p className="section-description">
          September 4 world heard Night Visions, the first full album. He reached the 2 position in the chart Billboard 200. The single <em>It's Time</em> took 22nd place in the Billboard Hot 100, 4th in the Billboard Alternative and Billboard Rock, and now went platinum.
        </p>
      </section>
    </div>
  );
};

export default Discography;
