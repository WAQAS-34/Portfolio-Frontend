import React, { useRef } from "react";
import TopHeading from "../TopHeading/TopHeading";
import SkillsTab from "../SkillsTab/SkillsTab";
import Testimonial from "../Testimonial/Testimonial";
import TrustedByCompany from "../TrustedByCompany/TrustedByCompany";

const Experties = () => {
  const ref = useRef();
  
  return (
    <div id="Expertise" className="bg-darkblue">
      <div className="container expertiesContainer container-padding">
        <div>
          <TopHeading
          elementRef={ref}
            tittle={"Our   "}
            colorTitle={"Expertise"}
            btnText={"SKILLS & Expertise"}
          />
          <SkillsTab />
          <Testimonial />
          <TrustedByCompany/>
        </div>

      </div>
    </div>
  );
};

export default Experties;
