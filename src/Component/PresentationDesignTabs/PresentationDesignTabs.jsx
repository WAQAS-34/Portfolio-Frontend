import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillBox from "../SkillBox/SkillBox";
import AllSkills from "../AllSkills/AllSkills";
import useInViewAnimation from "@/Hooks/useInViewAnimation";
import { motion } from "framer-motion";
import GoogleSlides from "../GoogleSlides/GoogleSlides";
import { useDispatch } from "react-redux";
import { presentationDispatch } from "@/store/action";
import { useEffect } from "react";
function PresentationDesignTabs() {
  const dispatch = useDispatch();

  const { elementRef, mainControls } = useInViewAnimation();
  const handleChange = (type) => {
    console.log("runn");
    dispatch(presentationDispatch(`?type=${type}`));
  };
  useEffect(() => {
    dispatch(presentationDispatch(`?type=${"GoogleSlide"}`));
  }, []);
  return (
    <motion.div
      ref={elementRef}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial={"hidden"}
      animate={mainControls}
      transition={{ duration: 1 }}
    >
      <Tabs
        defaultActiveKey="GoogleSlide"
        id="uncontrolled-tab-example"
        className="mb-3 skillTabs"
        onSelect={handleChange}
      >
        <Tab eventKey="GoogleSlide" title="Google Slide">
          <GoogleSlides type={"GoogleSlide"} />
        </Tab>
        <Tab eventKey="Keynote" title="Keynote">
          <GoogleSlides type={"Keynote"} />
        </Tab>
        <Tab eventKey="PowerPoint" title="PowerPoint">
          <GoogleSlides type={"PowerPoint"} />
        </Tab>
      </Tabs>
    </motion.div>
  );
}

export default PresentationDesignTabs;
