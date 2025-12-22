import React from 'react';
import { motion } from 'framer-motion';

const PresentationHeroSection = () => {
  return (
    <section className="presentation-hero-section">
      <div className="presentation-hero-container">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            type: "linear",
          }}
          className="heading1"
        >
          Turn Ideas Into Impactful <span className="red-color">Presentations!</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            type: "linear",
          }}
          className="p1 presentation-hero-description rubik-font"
        >
          We are a leading presentation design team committed to creating
          engaging and impactful presentations that captivate your audience.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            type: "linear",
          }}
          className="  p1 rubik-font"
        >
          <span className="red-color">Just share your requirements, and we'll take care of the rest.</span>
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            type: "easeIn",
            delay: 0.7,
          }}
          className="btn1 presentation-hero-cta-button"
        >
          Create My Presentation
        </motion.button>
      </div>
    </section>
  );
};

export default PresentationHeroSection;
