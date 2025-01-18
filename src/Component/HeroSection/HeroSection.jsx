import React from "react";
import hero from "../../assets/images/hero.svg";
import profile1 from "../../assets/images/client.svg";
import profile3 from "../../assets/images/profile3.svg";
import { motion } from "framer-motion";
import profile2 from "../../assets/images/profile2.svg";
import realProjects from "../../assets/images/realProjects.svg";
import Link from "next/link";
import { useSelector } from "react-redux";
import { whatsappURL } from "@/utils/whatsAppurl";
import { useRouter } from "next/router";
import { Video } from "../HeroSectionVideo/HeroSectionVideo";

const HeroSection = () => {
  const router = useRouter()
  const testimonialState = useSelector(
    (state) => state && state.testmonialReducer.testimonial
  );
  const clinetsPic = [
    "/images/testimonial/Aneisha Byrd.jpg",
    "/images/testimonial/Chris Poole.png",
    "/images/testimonial/Chuck Mollor.png",
  ]
  return (
    <>
      <div className="bg-darkblue">
        <div className="herocontainer container ">
          <div className="herowrapper">
            <motion.h1
              initial={{ opacity: 0, y: 50 }} // Initial opacity set to 0 and y-position set to 50px (downwards)
              animate={{ opacity: 1, y: 0 }} // Final opacity set to 1 (fully visible) and y-position set to 0px (original position)
              transition={{
                duration: 0.9, // Animation duration (in seconds)
                type: "linear",
              }}
              className="heading1"
            >
              We Deliver Excellence in
              <span className="red-color"> Presentation Design </span>and React Native{" "}
              <span className="red-color"> Mobile App</span> Development
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }} // Initial opacity set to 0 and y-position set to 50px (downwards)
              animate={{ opacity: 1, y: 0 }} // Final opacity set to 1 (fully visible) and y-position set to 0px (original position)
              transition={{
                duration: 0.9, // Animation duration (in seconds)
                type: "linear",
              }}
              className="p1 top-spacing "
            >
              At Devpixel Solutions, we offer professional presentation design and React Native app development, blending creativity with technical expertise to deliver high-quality, customized solutions that meet your business needs.
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
              Lets Talk
            </motion.button>
            <motion.div
              initial={{ opacity: 0 }} // Initial opacity set to 0 and y-position set to 50px (downwards)
              animate={{ opacity: 1 }} // Final opacity set to 1 (fully visible) and y-position set to 0px (original position)
              transition={{
                duration: 2, // Animation duration (in seconds)
                type: "easeIn",
                delay: 0.7
              }}
              className="more-projects"
            >
              <div className="client-profile-box">
                {clinetsPic.map((item, ind) => {
                  return <img key={ind} className={ind == 1 ? "prfile2" : ind == 2 ? `prfile3` : ''} src={item} alt="" />
                })}
                {/* <img  src={profile3.src} alt="" />
                <img className="prfile3" src={profile2.src} alt="" />
                 */}
              </div>
              <div className="position-relative ">
                <p className="p1 text-white">1000+ Projects</p>
                <p className="smalltext texthoverglow" > <Link href={"/#testmonial"}> Read testimonial </Link></p>
                <img src={realProjects.src} className="real-project" alt="" />
              </div>
            </motion.div>
          </div>
          <Video />
    
        </div>
      </div>
    </>
  );
};

export default HeroSection;
