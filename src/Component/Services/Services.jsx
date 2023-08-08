import React, { useEffect, useRef, useState } from "react";
import TopHeading from "../TopHeading/TopHeading";
import ServicesCard from "../ServicesCard/ServicesCard";
import mobApp from "../../assets/images/mobApp.svg";
import uiicon from "../../assets/images/ui-icon.svg";
import webdev from "../../assets/images/web-dev.svg";
import presentition from "../../assets/images/presentition.svg";
import { motion, useAnimation, useInView } from "framer-motion";
import useInViewAnimation from "@/Hooks/useInViewAnimation";

const Services = () => {
  const ref = useRef();
  const [smallScreen, setsmallScreen] = useState(false);
  const cardRef = useRef();
  const servicesdata = [
    {
      name: "Mobile App  Development",
      content:
        "Using React Native, a cross-platform framework, provides comprehensive and dynamic app development solutions to enhance your business",
      icon: mobApp,
    },
    {
      name: "UX/UI Design &  Website/App Design",
      content:
        "create intuitive interfaces that make users feel at ease while using your platform",
      icon: uiicon,
    },
    {
      name: "Website Development",
      content:
        "By using React.js, creates modern and powerful websites with rich and interactive user experiences",
      icon: webdev,
    },
    {
      name: "Presentations Design",
      content:
        "My presentation design services provide visually compelling and engaging Designs that captivate audiences and deliver impactful messages",
      icon: presentition,
    },
  ];
  useEffect(() => {
    if (window.innerWidth < 1200) {
      setsmallScreen(true);
    }
  }, []);

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
                <motion.div key={ind}>
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
                <motion.div key={ind}>
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
