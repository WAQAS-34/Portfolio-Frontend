import React, { useEffect, useRef, useState } from "react";
import TopHeading from "../TopHeading/TopHeading";
import ServicesCard from "../ServicesCard/ServicesCard";
import mobApp from "../../assets/images/mobApp.svg";
import uiicon from "../../assets/images/ui-icon.svg";
import webdev from "../../assets/images/web-dev.svg";
import presentition from "../../assets/images/presentition.svg";
import { motion, useAnimation, useInView } from "framer-motion";
import useInViewAnimation from "@/Hooks/useInViewAnimation";
import { PORTFOLIO_TYPE } from "@/utils/utils";
import { useRouter } from "next/router";

const Services = () => {
  const ref = useRef();
  const [smallScreen, setsmallScreen] = useState(false);
  const cardRef = useRef();
  const router = useRouter()
  const servicesdata = [
    {
      name: "Mobile App  Development",
      content:
        "Using React Native, a cross-platform framework, provides comprehensive and dynamic app development solutions to enhance your business.",
      icon: mobApp,
      PORTFOLIO_TYPE: PORTFOLIO_TYPE.Mobile_app_development,
    },
    {
      name: "UX/UI Design &  Website/App Design",
      content:
        "Create intuitive interfaces that make users feel at ease while using your platform.",
      icon: uiicon,
      PORTFOLIO_TYPE: PORTFOLIO_TYPE.UI_Design,
    },
    {
      name: "Website Development",
      content:
        "By using React.js, creates modern and powerful websites with rich and interactive user experiences.",
      icon: webdev,
      PORTFOLIO_TYPE: PORTFOLIO_TYPE.Website_Development,
    },
    {
      name: "Presentations Design",
      content:
        "My presentation design services provide visually compelling and engaging Designs that captivate audiences and deliver impactful messages.",
      icon: presentition,
      PORTFOLIO_TYPE: PORTFOLIO_TYPE.Presentations_Design,
    },
  ];
  useEffect(() => {
    if (window.innerWidth < 1200) {
      setsmallScreen(true);
    }
  }, []);

  const handleServices = (type) => {
    if (type == PORTFOLIO_TYPE.Mobile_app_development) {
      router.push(`/mobile-development.html`);
    } else if (type == PORTFOLIO_TYPE.UI_Design) {
      router.push(`/ui-ux.html`);
    } else if (type == PORTFOLIO_TYPE.Website_Development) {
      router.push(`/website-development.html`);
    } else if (type == PORTFOLIO_TYPE.Presentations_Design) {
      router.push(`/presentation-design.html`);
    }
  };
  return (
    <div id="services" className="bg-darkblue ">
      <div className="container  serviceswrapper container-padding">
        <TopHeading
          elementRef={ref}
          tittle={"Our "}
          colorTitle={"Services"}
          btnText={"Featured Services"}
        />

        <div className="servicesWrapper">
          <div className="services-cardrow">
            {servicesdata.slice(0, 2).map((item, ind) => {
              return (
                <motion.div
                  onClick={() => handleServices(item.PORTFOLIO_TYPE)}
                  key={ind}
                >
                  <ServicesCard
                    name={item.name}
                    content={item.content}
                    icon={item.icon}
                  />
                </motion.div>
              );
            })}
          </div>
          <div className="services-cardrow services-cardrow2  ">
            {servicesdata.slice(2, 4).map((item, ind) => {
              return (
                <motion.div
                onClick={() => handleServices(item.PORTFOLIO_TYPE)}

                 key={ind}>
                  <ServicesCard
                    name={item.name}
                    content={item.content}
                    icon={item.icon}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
