import React from "react";
import TruestedCompanies from "../TruestedCompanies/TruestedCompanies";

import { motion } from "framer-motion";
import useInViewAnimation from "@/Hooks/useInViewAnimation";
import Picture1 from "@/assets/images/companyLogo/Picture1.png";
import Picture2 from "@/assets/images/companyLogo/Picture2.png";
import Picture3 from "@/assets/images/companyLogo/Picture3.png";
import Picture4 from "@/assets/images/companyLogo/Picture4.png";
import Picture5 from "@/assets/images/companyLogo/Picture5.png";
import Picture6 from "@/assets/images/companyLogo/Picture6.png";
import Picture7 from "@/assets/images/companyLogo/Picture7.png";
import Picture8 from "@/assets/images/companyLogo/Picture8.png";
import Picture9 from "@/assets/images/companyLogo/Picture9.png";
import Picture10 from "@/assets/images/companyLogo/Picture10.png";
import Picture11 from "@/assets/images/companyLogo/Picture11.png";
import Picture12 from "@/assets/images/companyLogo/Picture12.png";
import Picture13 from "@/assets/images/companyLogo/Picture13.png";
import Picture14 from "@/assets/images/companyLogo/Picture14.png";
import Picture15 from "@/assets/images/companyLogo/Picture15.png";
import Picture16 from "@/assets/images/companyLogo/Picture16.png";
import Picture17 from "@/assets/images/companyLogo/Picture17.png";
import Picture18 from "@/assets/images/companyLogo/Picture18.png";
import Picture19 from "@/assets/images/companyLogo/Picture19.png";
import Picture20 from "@/assets/images/companyLogo/Picture20.png";
import Picture21 from "@/assets/images/companyLogo/Picture21.png";
import Picture22 from "@/assets/images/companyLogo/Picture22.png";
import Picture23 from "@/assets/images/companyLogo/Picture23.png";
import Picture24 from "@/assets/images/companyLogo/Picture24.png";
import Picture25 from "@/assets/images/companyLogo/Picture25.png";
import Picture26 from "@/assets/images/companyLogo/Picture26.png";
import Picture27 from "@/assets/images/companyLogo/Picture27.png";
import Picture28 from "@/assets/images/companyLogo/Picture28.png";
import Picture29 from "@/assets/images/companyLogo/Picture29.png";
import Picture30 from "@/assets/images/companyLogo/Picture30.png";
import Picture32 from "@/assets/images/companyLogo/Picture32.png";
import Picture36 from "@/assets/images/companyLogo/Picture36.png";
import Picture33 from "@/assets/images/companyLogo/Picture33.png";
import Picture39 from "@/assets/images/companyLogo/Picture39.png";
import Picture34 from "@/assets/images/companyLogo/Picture34.png";
import Picture31 from "@/assets/images/companyLogo/Picture31.png";

const TrustedByCompany = () => {
  const { elementRef, mainControls } = useInViewAnimation();
  const images = [Picture1, Picture2,
     Picture3,
     Picture4,
     Picture5,
    //  Picture6,
    //  Picture7,
     Picture8,
     Picture9,
     Picture10,
     Picture11,
     Picture12,
     Picture13,
     Picture14,
     Picture15,
    //  Picture16,
     Picture17,
     Picture18,
     Picture19,
     Picture20,
     Picture21,
     Picture22,
     Picture23,
     Picture24,
     Picture25,
     Picture26,
     Picture27,
     Picture28,
     Picture29,
     Picture30,
    //  Picture36,
    //  Picture32,
    //  Picture33,
    //  Picture39,
    //  Picture34,
     Picture31,
     
    
    ];
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
        {images.map((item) => {
          return <TruestedCompanies companyImage={item} />;
        })}

       
      </div>
    </div>
  );
};

export default TrustedByCompany;
