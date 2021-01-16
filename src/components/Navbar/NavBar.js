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

  useEffect(() =>{
     yRange.onChange((v) => setIsComplete(v >= 1))

    }, [yRange]);

  const [isOpen, setIsOpen] = useState(false);


  const openNav = () => {
    document.getElementById("mySidenav").style.width = "100%";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  return (
    <div className='navbar_wrapper'>
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
            </li>
            <li>
              <Link activeClass="active" to="projects" spy={true} smooth={true} duration={1000} >PROJECTS</Link>
            </li>
            <li>
              <Link activeClass="active" to="experience" spy={true} smooth={true} duration={1000} >EXPERIENCE</Link>
            </li>
            <li>
              <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1000} > CV / CONTACT ME</Link>
            </li>
          </ul>
        </div>
        <div className="grow" />
      </div>

      {/* <div id="mySidenav" className="sidenav">
        <div href="#" >
          <MenuIcon  onClick={closeNav} className="closebtn "/>
        </div>
        <div className='navbar_sidebar'>
        <ul>
          <li>
            <Link activeClass="active" to="skills" spy={true} smooth={true} duration={1000} onClick={closeNav}>SKILLS</Link>
          </li>
          <li>
            <Link activeClass="active" to="skills" spy={true} smooth={true} duration={1000} onClick={closeNav}>PROJECTS</Link>
          </li>
          <li>
            <Link activeClass="active" to="skills" spy={true} smooth={true} duration={1000} onClick={closeNav}>EXPERIENCE</Link>
          </li>
          <li>
            <Link activeClass="active" to="skills" spy={true} smooth={true} duration={1000} onClick={closeNav}>CV / CONTACT ME</Link>
          </li>
        </ul>
        </div>
      </div> */}
      {/* <div className="navIcon"  onClick={openNav} >
      <MenuIcon style={{float:'right',padding:'10px'}} />
      </div> */}
    </div>
  );
};

export default NavBar;
