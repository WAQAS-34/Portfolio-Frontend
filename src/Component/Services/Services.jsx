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
import Link from "next/link";

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

  const servicesPath = {
    [PORTFOLIO_TYPE.Mobile_app_development]:"/mobile-app-development.html",
    [PORTFOLIO_TYPE.Presentations_Design]:"/presentation-design.html"
  }

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
                <Link  style={{textDecoration:"none"}} href={servicesPath[item.PORTFOLIO_TYPE]}>
                <motion.div
                  
                  key={ind}
                >
                  <ServicesCard
                    name={item.name}
                    content={item.content}
                    icon={item.icon}
                  />
                </motion.div>
                </Link>
              );
            })}
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Services;
