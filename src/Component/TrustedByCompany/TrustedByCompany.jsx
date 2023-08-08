import React from "react";
import TruestedCompanies from "../TruestedCompanies/TruestedCompanies";
import jiggle from "@/assets/images/jiggle.svg";
import symetric from "@/assets/images/symetric.svg";
import resecurb from "@/assets/images/resecurb.svg";
import wishHelp from "@/assets/images/wishHelp.svg";
import { motion } from "framer-motion";
import useInViewAnimation from "@/Hooks/useInViewAnimation";

const TrustedByCompany = () => {
  const { elementRef, mainControls } = useInViewAnimation();

  return (
    <div className="trustedbyBox">
      <motion.h1
        ref={elementRef}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial={"hidden"}
        animate={mainControls}
        transition={{ duration: 0.7, ease: "linear" }}
        className="heading5"
      >
        Trusted by the top companies in this industry{" "}
      </motion.h1>
      <div className="company-row">
        <TruestedCompanies companyImage={jiggle} />
        <TruestedCompanies companyImage={resecurb} />
        <TruestedCompanies companyImage={symetric} />
        <TruestedCompanies companyImage={wishHelp} />

        <TruestedCompanies companyImage={jiggle} />
        <TruestedCompanies companyImage={resecurb} />
        <TruestedCompanies companyImage={symetric} />
        <TruestedCompanies companyImage={wishHelp} />
      </div>
      {/*
       */}
    </div>
  );
};

export default TrustedByCompany;
