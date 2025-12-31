import React from "react";

const SkillBox = ({ icon, title ,style}) => {
  
  return (
    <div className="SkillBox">
      <div className="icon-wrapper" style={style}>
        <img src={icon?.src} alt="" />
      </div>

      <p className="p2">{title}</p>
    </div>
  );
};

export default SkillBox;
