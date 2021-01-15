import { motion } from "framer-motion";
import React from "react";
import "./Feed.css";
import './ScrollAnimation.css';
import { ReactComponent as ImportedComponentOne } from "../../icons/1.svg";
import { ReactComponent as ImportedComponentZero } from "../../icons/0.svg";
import { styled } from "@material-ui/core";

const StyledSVGOne = styled(ImportedComponentOne)`
  display: block;
  margin: auto;
  width: 50em;
  height: 50em;
`;
const StyledSVGZero = styled(ImportedComponentZero)`
  display: block;
  margin: auto;
  width: 50em;
  height: 50em;
`;

const Feed = () => {
  return (
    <div className="feed_wrapper">
      <div className="name" >
        <h1 className="firstname">ALEX </h1>{" "}
        <div className="objectTop">
          <StyledSVGOne className=" objectAnimation one" />
          <StyledSVGZero className="  two" />
          <StyledSVGOne className=" objectAnimation three" />
        </div>
        <h1 className="text first" data-text="LOUTTCHENKO">
          LOUTTCHENKO
        </h1>
        <p className='feed_role' >Web Developer</p>

      </div>
      <div className='icon-scroll'></div>
    </div>
  );
};

export default Feed;
