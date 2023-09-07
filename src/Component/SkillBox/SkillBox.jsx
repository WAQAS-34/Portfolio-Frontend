import React from "react";

const SkillBox = ({ icon, title }) => {
  
  return (
    <div className="SkillBox">
      <div className="icon-wrapper">
        <img src={icon?.src} alt="" />
      </div>

      <p className="p2">{title}</p>
    </div>
  );
};

export default SkillBox;
