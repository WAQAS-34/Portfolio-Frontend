import React from "react";
import { motion } from "framer-motion";
import useInViewAnimation from "@/Hooks/useInViewAnimation";

const PresentationSlider = () => {
  const { elementRef, mainControls } = useInViewAnimation();

  const slides = [
    "/images/presentation-slides/Slide11.jpeg",
    "/images/presentation-slides/Slide2.jpeg",
    "/images/presentation-slides/Slide3.jpeg",
    "/images/presentation-slides/Slide4.jpeg",
    "/images/presentation-slides/Slide5.jpeg",
    "/images/presentation-slides/Slide6.jpeg",
    "/images/presentation-slides/Slide7.jpeg",
    "/images/presentation-slides/Slide8.jpeg",
    "/images/presentation-slides/Slide9.jpeg",
    "/images/presentation-slides/Slide10.jpeg",
    "/images/presentation-slides/Slide11.jpeg",
    "/images/presentation-slides/Slide12.jpeg",
    "/images/presentation-slides/Slide13.jpeg",
    "/images/presentation-slides/Slide14.jpeg",
    "/images/presentation-slides/Slide15.jpeg",
    "/images/presentation-slides/Slide16.jpeg",
    "/images/presentation-slides/Slide17.jpeg",
    "/images/presentation-slides/Slide18.jpeg",
    "/images/presentation-slides/Slide19.jpeg",
    "/images/presentation-slides/Slide20.jpeg",



  ];

  return (
    <div className="presentation-slider-container">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial={"hidden"}
        animate={mainControls}
        transition={{
          duration: 3,
          delay: 0,
          type: "spring",
        }}
        ref={elementRef}
        className="presentation-slider-wrapper"
      >
        <div className="continuous-scroll">
          <div className="scroll-track">
            {/* Duplicate slides for seamless loop */}
            {[...slides, ...slides].map((slide, index) => (
              <div key={index} className="presentation-slide">
                <div className="presentation-slide-inner">
                  <img
                    src={slide}
                    alt={`Presentation slide ${(index % slides.length) + 1}`}
                    width={1920}
                    height={1080}
                    className="presentation-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PresentationSlider;
