import "./App.css";
import Feed from "./components/Feed/Feed";
import NavBar from "./components/Navbar/NavBar";
import { imageList } from './imageList'
import social from './icons/socialNetwork.png';

import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import { useEffect, useState } from "react";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import ContactMe from "./components/ContactMe/ContactMe";

import { ParallaxProvider } from 'react-scroll-parallax';

import ScaleLoader from "react-spinners/ScaleLoader";


function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div>
      {loading ? (<div className="app_loader"><ScaleLoader color={'#0effea'} loading={loading} height={35} width={4} radius={2} margin={2} /></div>
      ) : (
          <div className='app_background'>
            <ParallaxProvider >
              <NavBar />
              <Feed />
              <Skills />
              <Projects />
              <Experience />
              <ContactMe />
            </ParallaxProvider>
          </div>
        )}
    </div>
  )

}

export default App;
