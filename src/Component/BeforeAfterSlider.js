import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForwardSharp } from "react-icons/io5";
import Image from 'next/image';
const BeforeAfterSlider = ({ slides = [] }) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!slides.length) return null;

  const CustomArrow = ({ direction, onClick }) => (
    direction == "prev" ?
      <Image  width={45} height={60}  onClick={onClick} src={"/images/left-slider-arrow.svg"} />
      :
      <Image width={45} height={60} onClick={onClick} src={"/images/right-slider-arrow.svg"} />

  );

  const settings = {
    dots: false,
    infinite: true,
    
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next)
  };

  const nextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  const goToSlide = (index) => {
    sliderRef.current?.slickGoTo(index);
  };

  return (
    <div className="image-slider">
      <div className="slider-wrapper">
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slide-item">
              <motion.div
                className="slide-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="image-container">
                  <motion.img
                    src={slide.image || slide.beforeImage}
                    alt={`Slide ${index + 1}`}
                    className="slide-image"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>

      {/* External Navigation Controls */}
      <div className="external-navigation">
        {/* Left Arrow */}
        <CustomArrow direction="prev" onClick={prevSlide} />

        {/* Dots */}
        <div className="navigation-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <CustomArrow direction="next" onClick={nextSlide} />
      </div>
    </div>
  );
};

export default BeforeAfterSlider;