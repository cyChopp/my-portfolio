import React from "react";
import Project from "./Project/Project";
import social from "../../icons/socialNetwork.png";
import shop from "../../icons/onlineShop.png";
import todo from "../../icons/galaxyTodo.png";
import { motion } from "framer-motion";
import "./Projects.css";
import { Parallax } from "react-scroll-parallax";

const Projects = () => {
  const MyComponent = () => {
    return <motion.div animate={{ scale: 2 }} transition={{ duration: 0.5 }} />;
  };

  return (

    <div className="projects_anchorWrapper" id='projects'>
      <div className="projects_titleWrapper">
        <p className="projects_anchorTitle">Projects</p>
      </div>
      <div className="projects_wrapper">

      <Parallax className="custom-class" y={[-10, 10]} tagOuter="figure">
        <Project glitchTime={'4s'} title="Social-network" link={'https://breeab-3218f.firebaseapp.com/signin'} code={'https://github.com/cyChopp/Breeab'} image={social} technologies={['React','React-Redux','Hooks','Hocs','Firebase','Flux','Material Ui',]} />
        </Parallax>

        <Project  glitchTime={'7s'} title="E-commerce shop" link={'https://online-shop-3cfcd.web.app/'} code={'https://github.com/cyChopp/online-shop'} image={shop} technologies={['React','React Context','Hooks','Commerce.js','Material Ui']}/>

        <Parallax className="custom-class" y={[10, -10]} tagOuter="figure">
        <Project  glitchTime={'9s'} title="Galaxy-todo" link={'https://galaxy-todo.web.app/'} code={'https://github.com/cyChopp/another-one'} onClick={MyComponent} image={todo} technologies={['React','Context','Hooks','Reducers','Firebase']}/>
        </Parallax>

      </div>
    </div>

  );
};

export default Projects;
