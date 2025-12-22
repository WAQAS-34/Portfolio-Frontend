import React from "react";
import { motion } from "framer-motion";
import { whatsappURL } from "@/utils/whatsAppurl";
import { useRouter } from "next/router";
import BeforeAfterSlider from "../BeforeAfterSlider";
import { PresentationType, PresentationContent } from "@/constant";

const PresentationTypeHero = ({ type  ,disbaleSlide}) => {
  const router = useRouter();
  const content = PresentationContent[type];
  const portfolioPitchDeck = [
    { image: "/images//before-after/pitch-desk/Slide1.jpeg" },
    { image: "/images//before-after/pitch-desk/Slide2.jpeg" },
    { image: "/images//before-after/pitch-desk/Slide3.jpeg" },
    { image: "/images//before-after/pitch-desk/Slide4.jpeg" },
    { image: "/images//before-after/pitch-desk/Slide5.jpeg" },
    { image: "/images//before-after/pitch-desk/Slide6.jpeg" },
    { image: "/images//before-after/pitch-desk/Slide7.jpeg" },
  ];
  const portfolioBMT = [
    { image: "/images//before-after/b-m-t/Slide1.jpeg" },
    { image: "/images//before-after/b-m-t/Slide2.jpeg" },
    { image: "/images//before-after/b-m-t/Slide3.jpeg" },
    { image: "/images//before-after/b-m-t/Slide4.jpeg" },
    { image: "/images//before-after/b-m-t/Slide5.jpeg" },
    { image: "/images//before-after/b-m-t/Slide6.jpeg" },
    
  ];
  const portfolioBP = [
    { image: "/images//before-after/b-p/Slide1.jpeg" },
    { image: "/images//before-after/b-p/Slide2.jpeg" },
    { image: "/images//before-after/b-p/Slide3.jpeg" },
    { image: "/images//before-after/b-p/Slide4.jpeg" },
    { image: "/images//before-after/b-p/Slide5.jpeg" },

    { image: "/images//before-after/b-p/Slide6.jpeg" },
    { image: "/images//before-after/b-p/Slide7.jpeg" },
  ];
  const portfolioIF = [
    { image: "/images//before-after/i-f/Slide1.jpeg" },
    { image: "/images//before-after/i-f/Slide2.jpeg" },
    { image: "/images//before-after/i-f/Slide3.jpeg" },
    { image: "/images//before-after/i-f/Slide4.jpeg" },
    { image: "/images//before-after/i-f/Slide5.jpeg" },

    { image: "/images//before-after/i-f/Slide6.jpeg" },
    { image: "/images//before-after/i-f/Slide7.jpeg" },
  ];
const portfolio = {
  [PresentationType.InvestorPitchDecks]:portfolioPitchDeck,
  [PresentationType.BrandedMasterTemplates]:portfolioBMT,
  [PresentationType.BusinessPresentations]:portfolioBP,
  [PresentationType.InfographicPresentation]:portfolioIF,



}
  return (
    <>
      <div className="bg-darkblue">
        <div className="persentation-container container ">
          <div className="herowrapper">
            <motion.h1
              initial={{ opacity: 0, y: 50 }} // Initial opacity set to 0 and y-position set to 50px (downwards)
              animate={{ opacity: 1, y: 0 }} // Final opacity set to 1 (fully visible) and y-position set to 0px (original position)
              transition={{
                duration: 0.9, // Animation duration (in seconds)
                type: "linear",
              }}
              className="heading1 font-rubik"
            >
              {content?.title}
              
              <span className="red-color"> {content?.titleHighlight}</span>
              {content?.titleSuffix && ` ${content.titleSuffix}`}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }} // Initial opacity set to 0 and y-position set to 50px (downwards)
              animate={{ opacity: 1, y: 0 }} // Final opacity set to 1 (fully visible) and y-position set to 0px (original position)
              transition={{
                duration: 0.9, // Animation duration (in seconds)
                type: "linear",
              }}
              className="p1  "
            >
              {content?.description}
            </motion.p>
            <motion.button
              initial={{ opacity: 0 }} // Initial opacity set to 0 and y-position set to 50px (downwards)
              animate={{ opacity: 1 }} // Final opacity set to 1 (fully visible) and y-position set to 0px (original position)
              transition={{
                duration: 2, // Animation duration (in seconds)
                type: "easeIn",
                delay: 0.7,
              }}
              className="btn1 hoverglow"
              onClick={() => router.push(whatsappURL)}
            >
              Start MY Project{" "}
            </motion.button>
          </div>
          {disbaleSlide?
          <img src="/images/mob-hero.png" className="mob-hero-img" alt="" />
          :
          <BeforeAfterSlider slides={portfolio[type]} />
          }
        </div>
      </div>
    </>
  );
};

export default PresentationTypeHero;
