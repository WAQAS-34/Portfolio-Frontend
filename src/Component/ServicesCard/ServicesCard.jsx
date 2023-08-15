import useInViewAnimation from "@/Hooks/useInViewAnimation";
import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRouter } from "next/router";

const ServicesCard = ({ name, content, icon }) => {
  const router = useRouter()
  const { elementRef, mainControls } = useInViewAnimation();

  return (
    <motion.div
    
      ref={elementRef}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial={"hidden"}
      animate={mainControls}
      transition={{
        duration: 3,
        // ease: "easeIn",
        delay: 0.4,
        type: "spring",
      }}
      className="services-card"
    >
      <div>
        <img src={icon.src} />
      </div>
      <div>
        <h3 className="heading2">{name}</h3>
        <p className="p1">{content}</p>
      </div>
    </motion.div>
  );
};

export default ServicesCard;
