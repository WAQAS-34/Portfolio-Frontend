import React from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';

const SliderExample = () => {
  // Sample data for the slider
  const slideData = [
    {
      image: '/images/s1.png',
    },
    {
      image: '/images/s2.png',
    },
    {
      image: '/images/s3.jpg',
    },
    {
      image: '/images/s4.png',
    }
  ];

  return (
    <div style={{ padding: '40px 20px', background: '#0f0f0f', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '10px' }}>
          Portfolio Showcase
        </h2>
        <p style={{ color: '#888', fontSize: '1.1rem' }}>
          Explore our latest presentation designs
        </p>
      </div>
      
      <BeforeAfterSlider slides={slideData} />
    </div>
  );
};

export default SliderExample;