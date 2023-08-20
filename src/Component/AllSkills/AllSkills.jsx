import React from "react";
import SkillBox from "../SkillBox/SkillBox";
import html from "@/assets/images/html.svg";
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
import useInViewAnimation from "@/Hooks/useInViewAnimation";
import { motion } from "framer-motion";

const AllSkills = ({ development, presentation, uiux }) => {
  const { elementRef, mainControls } = useInViewAnimation();

  return (
    <motion.div
      ref={elementRef}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial={"hidden"}
      animate={mainControls}
      transition={{ duration: 2, delay: 0 ,type:"" , ease:"easeInOut"}}
      className="skills-row"
    >
      {development ? (
        <>
          <SkillBox title={"html 5"} icon={html} />
          <SkillBox title={"css 3"} icon={css3} />
          <SkillBox title={"JavaScript"} icon={js} />
          {/* <SkillBox title={"JavaScript"} icon={html} /> */}
          <SkillBox title={"react js"} icon={reactjs} />
          <SkillBox title={"react Native "} icon={react} />
          <SkillBox title={"Redux"} icon={redux} />
          <SkillBox title={"typescript"} icon={ts} />
          <SkillBox title={"Firebase"} icon={firebase} />
          <SkillBox title={"Laravel"} icon={laravel} />
          <SkillBox title={"node js"} icon={node} />
          <SkillBox title={"PHP"} icon={Php} />
        </>
      ) : null}
      {presentation ? (
        <>
          <SkillBox title={"keynote"} icon={keynote} />
          <SkillBox title={"power point "} icon={pp} />
          <SkillBox title={"google slides"} icon={googleSlides} />
          <SkillBox title={"Panda Doc"} icon={PandaDoc} />
        </>
      ) : null}
      {uiux ? (
        <>
          <SkillBox title={"Figma"} icon={Figma} />
          <SkillBox title={"AdobeXD"} icon={AdobeXD} />
        </>
      ) : null}
    </motion.div>
  );
};

export default AllSkills;
