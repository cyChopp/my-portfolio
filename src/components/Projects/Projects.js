import React from "react";
import Project from "./Project/Project";
import social from "../../icons/socialNetwork.png";
import shop from "../../icons/onlineShop.png";
import todo from "../../icons/galaxyTodo.png";
import { motion } from "framer-motion";
import "./Projects.css";

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
        <Project title="Social-network" image={social} />
        <Project title="Online-shop" image={shop} />
        <Project title="Galaxy-todo" onClick={MyComponent} image={todo} />
      </div>
    </div>
  );
};

export default Projects;
