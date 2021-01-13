import React from 'react'
import Skill from './Skill/Skill';
import './Skills.css'
// import react from '../../icons/react-2.svg'
import { ReactComponent as ReactImage } from "../../icons/react-2.svg";
import { ReactComponent as JsImage } from "../../icons/javascript-1.svg";
import { ReactComponent as HtmlImage } from "../../icons/html-5.svg";
import { ReactComponent as CssImage } from "../../icons/css-3.svg";
import { ReactComponent as ReduxImage } from "../../icons/redux.svg";
import { ReactComponent as GitImage } from "../../icons/git-icon.svg";
import { ReactComponent as FirebaseImage } from "../../icons/firebase-2.svg";
import { ReactComponent as MaterialImage } from "../../icons/material-ui-1.svg";



const Skills = () => {
    return (
        <div className="skills_mainWrapper"  id='skills'>
        <div className='skills_titleWrapper'>
            <p className='skills_title'>Skills</p>
        </div>
        <div className="skills_wrapper">
            <Skill image={ReactImage} title='React'/>
            <Skill image={ReduxImage} title='Redux'/>
            <Skill image={JsImage} title='Javascript'/>
            <Skill image={HtmlImage} title='HTML'/>
            <Skill image={CssImage} title='CSS'/>
            <Skill image={FirebaseImage} title='Firebase'/>
            <Skill image={GitImage} title='Git'/>
            <Skill image={MaterialImage} title='Material Ui'/>
        </div>
        </div>
    )
}

export default Skills
