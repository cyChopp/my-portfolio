import "./App.css";
import Feed from "./components/Feed/Feed";
import NavBar from "./components/Navbar/NavBar";
import {imageList} from './imageList'
import social from './icons/socialNetwork.png';

import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import { useState } from "react";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import ContactMe from "./components/ContactMe/ContactMe";


function App() {

  return (
    <>
      <NavBar />
      <Feed />
      <Skills/>
      <Projects/>
      <Experience/>
      <ContactMe/>
      

      
    </>
  );
}

export default App;
