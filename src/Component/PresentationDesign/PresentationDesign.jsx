import React, { useRef } from "react";
import TopHeading from "../TopHeading/TopHeading";
import SkillsTab from "../SkillsTab/SkillsTab";
import Testimonial from "../Testimonial/Testimonial";
import TrustedByCompany from "../TrustedByCompany/TrustedByCompany";
import PresentationDesignTabs from "../PresentationDesignTabs/PresentationDesignTabs";

const PresentationDesign = () => {
  const ref = useRef();

  return (
    <div className="bg-darkblue">
      <div className="container expertiesContainer container-padding">
        <div>
          <TopHeading
            elementRef={ref}
            tittle={"Presentation    "}
            colorTitle={"Design"}
            btnText={"SKILLS & Expertise"}
          />
          <PresentationDesignTabs />
        </div>
      </div>
    </div>
  );
};

export default PresentationDesign;
