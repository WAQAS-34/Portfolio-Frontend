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
function PresentationDesignTabs({ data, type }) {
  const dispatch = useDispatch();

  const { elementRef, mainControls } = useInViewAnimation();
  const handleChange = (type) => {
    dispatch(presentationDispatch(`?type=${type}`));
  };
  useEffect(() => {
    dispatch(presentationDispatch(`?type=${type}`));
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
      <GoogleSlides  data={data} type={type}/>

    </motion.div>
  );
}

export default PresentationDesignTabs;
