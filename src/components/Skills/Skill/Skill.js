import { styled } from "@material-ui/core";
import React from "react";
import './Skill.css'



const Skill = ({ image, title }) => {
    const StyledSVGOne = styled(image)`
  display: block;
  margin: auto;
`;
  return (
    <div className="skill_wrapper">
      <div>
        <StyledSVGOne className='skill_image'/>
      </div>
      <div className="skill_title"><p>{title}</p></div>
    </div>
  );
};

export default Skill;
