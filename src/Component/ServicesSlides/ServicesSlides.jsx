import React from "react";
import star from "../../assets/images/start.svg";
import { motion } from "framer-motion";

const ServicesSlides = () => {
  const services = [
    "Presentation Design",
    "Mobile App Development",
    "Presentation Design",

  
  ];

  // Create multiple repetitions to ensure no gaps
  const repeatedServices = [

          "Mobile App Development",
    "Presentation Design",
          "Mobile App Development",

   ];

  return (
    <>
      <div className="slidingContaibner">
        <div className="sliding-border">
          <div className="slides">
            <motion.div
              className="slider-track"
              animate={{ x: "-50%" }}
              transition={{
                repeat: Infinity,
                duration: 15,
                ease: "linear",
                repeatType: "loop"
              }}
            >
              {/* First set of content */}
              <div className="sliderWapper">
                {services.map((service, index) => (
                  <React.Fragment key={`first-${index}`}>
                    <h1 className="heading2">{service}</h1>
                    <img src={star.src} alt="star" />
                  </React.Fragment>
                ))}
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="sliderWapper">
                {repeatedServices.map((service, index) => (
                  <React.Fragment key={`second-${index}`}>
                    <h1 className="heading2">{service}</h1>
                    <img src={star.src} alt="star" />
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSlides;
