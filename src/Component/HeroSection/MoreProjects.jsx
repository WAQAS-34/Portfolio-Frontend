import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import realProjects from "../../assets/images/realProjects.svg";
import { clinetsPic, EXTERNAL_LINKS } from "@/constant";

const MoreProjects = ({
  clientPics = clinetsPic,
  projectsText = "1000+ Projects",
  linkHref = EXTERNAL_LINKS.testimonial,
  linkText = "Read testimonial",
}) => {
  return (
    <motion.div
      className="more-projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 2,
        type: "easeIn",
        delay: 0.7,
      }}
    >
      {clientPics?.length > 0 && (
        <div className="client-profile-box">
          {clientPics.map((item, ind) => (
            <img
              key={ind}
              className={ind === 1 ? "prfile2" : ind === 2 ? "prfile3" : ""}
              src={item}
              alt={`client ${ind + 1}`}
            />
          ))}
        </div>
      )}
      <div className="position-relative">
        <p className="p1 text-white margin-o" >{projectsText}</p>
        <p className="smalltext texthoverglow margin-o" >
          <Link href={linkHref} target="_blank" rel="noopener noreferrer">
            {linkText}
          </Link>
        </p>
        <img src={realProjects.src} className="real-project" alt="Real projects" />
      </div>
    </motion.div>
  );
};

export default MoreProjects;
