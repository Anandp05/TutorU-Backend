// src/components/Services.js
import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <ul>
        <li>One-on-one tutoring</li>
        <li>Group classes</li>
        <li>Online resources</li>
        <li>Test preparation</li>
        {/* Add more services here */}
      </ul>
    </div>
  );
}

export default Services;
