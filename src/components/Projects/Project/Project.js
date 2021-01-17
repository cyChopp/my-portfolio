import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Image } from "@material-ui/icons";
import React from "react";
import styles from "./Project.css";

import GlitchClip from "react-glitch-effect/core/Clip";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1.2),
    },
  },
}));

const Project = ({ title, link, code, image, technologies, glitchTime }) => {
  const classes = useStyles();

  return (
    <div className="project_rootWrapper">
      <Card className="project_root" >
        <CardActionArea>

          <CardMedia
            className="project_media"
            image={image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className="project_cart project_title"
            >
              <GlitchClip duration={glitchTime}>{title}</GlitchClip>
            </Typography>

            <div className={classes.root}>
              {technologies.map((tech) => (
                <Chip label={tech} className="project_chipStyle" />
              ))}
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions className="project_buttons">
          <Button size="small" color="primary" className="project_cart">
            <a target="_blank" href={link}>
              Live version
            </a>
          </Button>
          <Button size="small" color="primary" className="project_cart">
            <a target="_blank" href={code}>
              Code
            </a>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Project;
