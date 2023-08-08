import React from "react";
import { motion } from "framer-motion";
import useInViewAnimation from "@/Hooks/useInViewAnimation";

const TruestedCompanies = ({ companyImage }) => {
  const { elementRef, mainControls } = useInViewAnimation();

  return (
    <motion.div
      ref={elementRef}
      variants={{
        hidden: { opacity: 0, scale: 0.2 },
        visible: { opacity: 1, scale: 1 },
      }}
      initial={"hidden"}
      animate={mainControls}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="trustedtCompany"
    >
      <img src={companyImage.src} alt="" />
    </motion.div>
  );
};

export default TruestedCompanies;
