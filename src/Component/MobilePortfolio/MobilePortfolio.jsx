import { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import upArrow from "@/assets/images/upArrow.svg";
import SkillBox from "../SkillBox/SkillBox";
import html5 from "@/assets/images/html.svg";
import css3 from "@/assets/images/css3.svg";
import js from "@/assets/images/js.svg";
import reactjs from "@/assets/images/reactjs.svg";
import react from "@/assets/images/react.svg";
import redux from "@/assets/images/redux.svg";
import ts from "@/assets/images/ts.svg";
import pp from "@/assets/images/pp.svg";
import googleSlides from "@/assets/images/googleSlides.svg";
import laravel from "@/assets/images/laravel.svg";
import node from "@/assets/images/node.svg";
import firebase from "@/assets/images/firebase.svg";
import PandaDoc from "@/assets/images/PandaDoc.png";
import Php from "@/assets/images/Php.svg";
import Figma from "@/assets/images/Figma.svg";
import AdobeXD from "@/assets/images/Adobe XD.svg";
import keynote from "@/assets/images/keynote.svg";
import { motion } from "framer-motion";

function ContextAwareToggle({ appName, children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <>
      <div className="accordian-haedwer ">
        <h1 className="heading1 sora-font">{appName}</h1>
        {/* <img onClick={decoratedOnClick} src={upArrow.src} alt="" /> */}
        <button
          style={{
            transform: isCurrentEventKey ? "rotate(180deg)" : "rotate(0deg)",
            width: "48px",
            height: "48px",
            borderRadius: "100px",
          }}
          onClick={decoratedOnClick}
          className="outlinebtn1 arrowbtnAccordian"
        >
          <img src={upArrow.src} alt="" />
        </button>
      </div>
    </>
  );
}

function MobilePortfolio({
  appSkills,
  appName,
  ind,
  appDecs,
  appImage,
  allScreenImages,
}) {
  // const appSkills = ["JavaScript", "typescript", "keynote", "Figma"];
  console.log("appSkills", appSkills);
  const iconMapping = {
    typescript: ts,
    html5: html5,
    css3: css3,
    JavaScript: js,
    reactjs: reactjs,
    Redux: redux,
    TypeScript: ts,
    Microsoft_PowerPoint: pp,
    googleslides: googleSlides,
    Laravel: laravel,
    nodejs: node,
    Firebase: firebase,
    PandaDoc: PandaDoc,
    PHP: Php,
    Figma: Figma,
    AdobeXD: AdobeXD,
    keynote: keynote,
    // Add more mappings as needed
  };
  return (
    <div className="mobileprotoflio">
      <Accordion defaultActiveKey="0">
        <Card>
          <div className="container">
            <Card.Header className="">
              {/* <div className="container"></div> */}
              <ContextAwareToggle
                appName={appName}
                eventKey={ind}
              ></ContextAwareToggle>
            </Card.Header>
          </div>
          <Accordion.Collapse eventKey={ind}>
            <Card.Body>
              <div className="portfilio-accordian container">
                <div>
                  <h6 className="heading6">About App</h6>
                  <p className="p1 decs">{appDecs}</p>
                  <div className="skilssBox">
                    {appSkills?.map((item) => {
                      return (
                        <SkillBox
                          title={item.label}
                          icon={iconMapping[item.value]}
                        />
                      );
                    })}
                  </div>
                </div>
                <div>
                  <img className="mobileImage" src={appImage} alt="" />
                </div>
              </div>

              <div className="all-mobilesceens ">
                <div className="container">
                  <h3 className="heading3">
                    All <span className="red-color"> Screens </span>
                  </h3>
                  <div className="all-screen-row">
                    {allScreenImages?.map((item) => {
                      return (
                        <motion.img
                        whileHover={{ scale: 1.1 }} // Zoom-in effect while hovering
                        initial={{ scale: 1.3 }} // Initial state (zoomed-out)
                        animate={{ scale: 1 }} // Animated state (zoomed-in)
                        transition={{ duration: 0.3 }}
                          src={item}
                          alt=""
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
export default MobilePortfolio;
// render(<Example />);
