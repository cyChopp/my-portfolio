import React, { useEffect, useState } from "react";
import "./NavBar.css";
import MenuIcon from "@material-ui/icons/Menu";
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);

  const [isOpen, setIsOpen] = useState(false);


  const openNav = () => {
    document.getElementById("mySidenav").style.width = "100%";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };
  return (
    <>
      <div className="fixedNavbarWrapper">
        <div className="pathLength">
            <svg className="progress-icon" viewBox="0 0 60 60">
              <motion.path
                fill="none"
                strokeWidth="2"
                stroke="#0affec"
                strokeDasharray="0 1"
                d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                style={{
                  pathLength,
                  rotate: 90,
                  translateX: 5,
                  translateY: 5,
                  scaleX: -1, // Reverse direction of line animation
                }}
              />
              <motion.path
                fill="none"
                strokeWidth="2"
                stroke="white"
                d="M14,26 L 22,33 L 35,16"
                initial={false}
                strokeDasharray="0 1"
                animate={{ pathLength: isComplete ? 1 : 0 }}
              />
            </svg>
        </div>
        <div className="grow" />
        <div className="navbarLinks">
          <ul>
            <li>
            <Link activeClass="active" to="skills" spy={true} smooth={true} duration={1000} >SKILLS</Link>

              {/* <a href="#">SKILLS</a> */}
            </li>
            <li>
            <Link activeClass="active" to="projects" spy={true} smooth={true} duration={1000} >PROJECTS</Link>

              {/* <a href="#">PROJECTS</a> */}
            </li>
            <li>
            <Link activeClass="active" to="experience" spy={true} smooth={true} duration={1000} >EXPERIENCE</Link>

              {/* <a href="#">EXPERIENCE</a> */}
            </li>
            <li>
            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1000} > CV / CONTACT ME</Link>

              {/* <a href="#">CONTACT ME</a> */}
            </li>
          </ul>
        </div>
        <div className="grow" />
      </div>

      <div id="mySidenav" className="sidenav">
        <a href="#" onClick={closeNav} className="closebtn ">
          <MenuIcon />
        </a>
        <ul>
          <li>
            <a href="#" onClick={closeNav}>
              PROJECTS
            </a>
          </li>
          <li>
            <a href="#" onClick={closeNav}>
              SKILLS
            </a>
          </li>
          <li>
            <a href="#" onClick={closeNav}>
              EXPERIENCE
            </a>
          </li>

          <li>
            <a href="#" onClick={closeNav}>
            CV / CONTACT ME
            </a>
          </li>
        </ul>
      </div>
      <MenuIcon onClick={openNav} className="navIcon" />
    </>
  );
};

export default NavBar;
