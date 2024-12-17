import React, { useRef } from "react";
import TopHeading from "../TopHeading/TopHeading";
import SkillsTab from "../SkillsTab/SkillsTab";
import Testimonial from "../Testimonial/Testimonial";
import TrustedByCompany from "../TrustedByCompany/TrustedByCompany";
import PresentationDesignTabs from "../PresentationDesignTabs/PresentationDesignTabs";
import { useRouter } from "next/router";
const PresentationDesign = ({  data, type }) => {
  const ref = useRef();
  const router = useRouter();
  const handlePresentation = (path) => {
    router.push(`${path}.html`);
  };
  return (
    <div className="bg-darkblue">
      <div className="container expertiesContainer container-padding">
        <div>
          <div className="presentation-design">
            <TopHeading
              elementRef={ref}
              tittle={"Presentation"}
              colorTitle={"Design"}
              btnText={"SKILLS & Expertise"}
            />
            <div className="presentation-row">
            <button
                onClick={() => handlePresentation("/power-point")}
                className={`btn1 ${
                  router.pathname == "/power-point" ? "activeBtn" : ""
                }`}
              >
                {" "}
                Power Point
              </button>
              <button
                onClick={() => handlePresentation("/presentation-design")}
                className={`btn1 ${
                  router.pathname == "/presentation-design" ? "activeBtn" : ""
                }`}
              >
                {" "}
                Google Slide
              </button>
              <button
                onClick={() => handlePresentation("/keynote")}
                className={`btn1 ${
                  router.pathname == "/keynote" ? "activeBtn" : ""
                }`}
              >
                {" "}
                Keynote
              </button>

            </div>
          </div>

          <PresentationDesignTabs data={data} type={type} />
        </div>
      </div>
    </div>
  );
};

export default PresentationDesign;
