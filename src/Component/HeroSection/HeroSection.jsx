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

const HeroSection = () => {
  const router = useRouter()
  const testimonialState = useSelector(
    (state) => state && state.testmonialReducer.testimonial
  );
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
              We assist visionary{" "}
              <span className="red-color"> individuals</span> in creating{" "}
              <span className="red-color"> extraordinary</span> products
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
              We specialize in designing and developing all things digital, from
              custom websites to mobile apps and more, with a focus on
              supporting startups.
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
              onClick={()=>router.push(whatsappURL)}
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
                {testimonialState&&testimonialState.slice(0,3).map((item , ind)=>{
                  return <img key={ind} className={ ind==1?"prfile2" :ind==2?`prfile3`:''} src={item.clientPic} alt="" />
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
          <motion.div
            initial={{ scale: 0.2 }} // Initial opacity set to 0 and y-position set to 50px (downwards)
            animate={{ scale: 1 }} // Final opacity set to 1 (fully visible) and y-position set to 0px (original position)
            transition={{
              duration: 2, // Animation duration (in seconds)
              type: "spring",
              // delay: 0.9,
            }}
          >
            <img className="graph " src={hero.src} alt="" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
