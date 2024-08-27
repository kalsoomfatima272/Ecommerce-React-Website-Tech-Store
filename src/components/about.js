import React from 'react';
import './about.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-banner">
        <h1>Welcome to Tech Store</h1>
        <p>Your one-stop destination for the latest and greatest in technology.</p>
      </div>
      <div className="about-content">
        <h2>Our Mission</h2>
        <p>
          At Tech Store, we are committed to bringing you the most innovative and reliable tech products on the market. 
          From the latest smartphones to cutting-edge smart home devices, we offer a curated selection of products that cater to tech enthusiasts and professionals alike.
        </p>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Wide range of top-tier technology products.</li>
          <li>Competitive pricing and exclusive deals.</li>
          <li>Exceptional customer support and service.</li>
          <li>Fast and secure shipping.</li>
        </ul>
        <h2>Our Story</h2>
        <p>
          Founded by a team of tech-savvy entrepreneurs, Tech Store started with a vision to make technology accessible and affordable to everyone. 
          Over the years, we’ve grown into a trusted name in the tech retail industry, known for our passion for innovation and customer satisfaction.
        </p>
      </div>
    </div>
  );
}

export default About;
