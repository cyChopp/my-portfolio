import React from "react";
import Skill from "./Skill/Skill";
import "./Skills.css";
import { ReactComponent as ReactImage } from "../../icons/react-2.svg";
import { ReactComponent as JsImage } from "../../icons/javascript-1.svg";
import { ReactComponent as HtmlImage } from "../../icons/html-5.svg";
import { ReactComponent as CssImage } from "../../icons/css-3.svg";
import { ReactComponent as ReduxImage } from "../../icons/redux.svg";
import { ReactComponent as GitImage } from "../../icons/git-icon.svg";
import { ReactComponent as FirebaseImage } from "../../icons/firebase-2.svg";
import { ReactComponent as MaterialImage } from "../../icons/material-ui-1.svg";
import { Parallax } from "react-scroll-parallax";

const Skills = () => {
  return (
    <div id="skills">
      <Parallax className="custom-class" y={[-10, 10]} tagOuter="figure">
        <div className="skills_mainWrapper">
          <div className="skills_titleWrapper">
            <p className="skills_title">Skills</p>
          </div>
          <div className="skills_wrapper">
            <Skill image={ReactImage} title="React" />
            <Skill image={ReduxImage} title="Redux" />
            <Skill image={JsImage} title="Javascript" />
            <Skill image={HtmlImage} title="HTML" />
            <Skill image={CssImage} title="CSS" />
            <Skill image={FirebaseImage} title="Firebase" />
            <Skill image={GitImage} title="Git" />
            <Skill image={MaterialImage} title="Material Ui" />
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Skills;
