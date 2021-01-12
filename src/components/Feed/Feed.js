import { motion } from "framer-motion";
import React from "react";
import "./Feed.css";
import { ReactComponent as ImportedComponentOne } from "../../icons/1.svg";
import { ReactComponent as ImportedComponentZero } from "../../icons/0.svg";
import { styled } from "@material-ui/core";

const StyledSVGOne = styled(ImportedComponentOne)`
  display: block;
  margin: auto;
  width: 25em;
  height: 25em;
`;
const StyledSVGZero = styled(ImportedComponentZero)`
  display: block;
  margin: auto;
  width: 25em;
  height: 25em;
`;

const Feed = () => {
  return (
    <>

      <div className="name">
        <h1 className="firstname">ALEX </h1>    <div className='objectTop'>
                                                  <StyledSVGOne className=" objectAnimation one" />
                                                    <StyledSVGZero className="  two" />
                                                    <StyledSVGOne className=" objectAnimation three" />
                                                    <StyledSVGZero className="  four" />
                                                    <StyledSVGOne className="objectAnimation five" />
                                                  </div>

        <h1 className="text first" data-text="LOUTTCHENKO">
          LOUTTCHENKO
        </h1>
      </div>

    </>
  );
};

export default Feed;
