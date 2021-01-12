import React, { useState } from "react";
import "./NavBar.css";
import MenuIcon from "@material-ui/icons/Menu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "100%";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };
  return (
    <>
      <div className="fixedNavbarWrapper">
        <div className="grow" />
            <div className="navbarLinks">
            <ul>
                <li>
                <a href="#">PROJECTS</a>
                </li>
                <li>
                <a href="#">SKILLS</a>
                </li>
                <li>
                <a href="#">EXPERIENCE</a>
                </li>
                <li>
                <a href="#">CONTACT ME</a>
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
              About
            </a>
          </li>
          <li>
            <a href="#" onClick={closeNav}>
              Services
            </a>
          </li>
          <li>
            <a href="#" onClick={closeNav}>
              Clients
            </a>
          </li>
          
          <li>
            <a href="#" onClick={closeNav}>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <MenuIcon onClick={openNav} className="navIcon" />
    </>
  );
};

export default NavBar;
