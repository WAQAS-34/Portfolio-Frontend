import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillBox from "../SkillBox/SkillBox";
import AllSkills from "../AllSkills/AllSkills";
import useInViewAnimation from "@/Hooks/useInViewAnimation";
import { motion } from "framer-motion";
function SkillsTab() {
  const { elementRef, mainControls } = useInViewAnimation();
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
        defaultActiveKey="All"
        id="uncontrolled-tab-example"
        className="mb-3 skillTabs"
      >
        <Tab eventKey="All" title="All">
          <AllSkills development presentation uiux />
        </Tab>
        <Tab eventKey="Development" title="Development">
          <AllSkills development />
        </Tab>
        <Tab eventKey="PresentationDesign" title="Presentation Design">
          <AllSkills presentation />
        </Tab>
        {/* <Tab eventKey="UIUXDesign" title="UIUX Design">
          <AllSkills uiux />
        </Tab> */}
      </Tabs>
    </motion.div>
  );
}

export default SkillsTab;
