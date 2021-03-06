import { motion } from "framer-motion";
import React from "react";
import "./Feed.css";
import "./ScrollAnimation.css";

import { styled } from "@material-ui/core";

import GlitchClip from "react-glitch-effect/core/Clip";
import { Link } from "react-scroll";


const Feed = () => {
  return (
    <div className="feed_wrapper">
      <div className="name">
        <div className="objectTop">
          <h1 className="firstname">ALEX </h1>{" "}
          <div className="feed_numbersWrapper">
            <div className="feed_numberSpaceBetween objectAnimationUp">
              <GlitchClip onHover={true}>
                <h1 className="feed_numberOne ">1</h1>{" "}
              </GlitchClip>
            </div>
            <div className="feed_numberSpaceBetween objectAnimationDown">
              <GlitchClip onHover={true}>
                <h1 className="feed_numberZero ">0</h1>{" "}
              </GlitchClip>
            </div>

            <div className="feed_numberSpaceBetween objectAnimationUp">
              <GlitchClip onHover={true}>
                <h1 className="feed_numberOne ">1</h1>{" "}
              </GlitchClip>
            </div>
          </div>
        </div>
        <div className="feed_textWrapper">
          <div>
            <GlitchClip duration={"4s"} className="testOne">
              <h1 className="text first">LOUTTCHENKO</h1>
            </GlitchClip>
          </div>
        </div>
      </div>
      <div className="feed_role">
          <p>Web Developer</p>
        </div>

        <Link  activeClass="active" to="skills" spy={true} smooth={true} duration={1000}> <div className="icon-scroll"> </div></Link>
    </div>
  );
};

export default Feed;
