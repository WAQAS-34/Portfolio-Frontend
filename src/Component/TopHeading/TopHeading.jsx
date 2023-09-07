import useInViewAnimation from "@/Hooks/useInViewAnimation";
import {
  motion,
  useAnimate,
  useAnimation,
  useInView,
  useScroll,
} from "framer-motion";

import React, { useEffect, useRef } from "react";

const TopHeading = ({ tittle, btnText, colorTitle }) => {
  const { elementRef, mainControls } = useInViewAnimation();

  // const elementRef = useRef();
  // const isInview = useInView(elementRef);
  // const mainControls = useAnimation();
  // useEffect(() => {
  //   if (isInview) {
  //     mainControls.start("visible");
  //   } 
  //   // else {
  //   //   mainControls.start("hidden");
  //   // }

  //   
  // }, [isInview]);

  return (
    <motion.div
      ref={elementRef}
      variants={{
        hidden: { opacity: 0, y: 55 },
        visible: { opacity: 1, y: 0 },
      }}
      initial={"hidden"}
      animate={mainControls}
      transition={{  ease: "linear", duration: 0.7, delay: 0.1 }}
      className="top-heading-box"
    >
      <button className="outlinebtn">{btnText}</button>
      <h3 className="heading3">
        {tittle} <span className="red-color"> {colorTitle}</span>
      </h3>
    </motion.div>
  );
};

export default TopHeading;
