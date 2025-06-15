import React from 'react';
import { Link } from 'react-router-dom';
import './component.css'; 

const AboutSection = ({ pageTitle, breadcrumb }) => {
  return (
    <div className="about-section">
      <div className="about-bg">
        <h1>About</h1>
        <nav className="breadcrumb">
          <Link to="/">Home</Link> &gt; <Link to="/about">About Us</Link> &gt; {breadcrumb}
        </nav>
      </div>
    </div>
  );
};

export default AboutSection;