

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Image } from "@material-ui/icons";
import React from "react";
import styles from  "./Project.css";

const useStyles = makeStyles({
    root: {
      // maxWidth: 445,
      // backgroundColor:'#0affec',
      // borderRadius:'0px',
      // margin:'20px',
      // transition: 'none !important',
      // animation: 'none !important'
      cursor: 'default !important'

    },
    media: {
      height: 300
    },


  });
  

const Project = ({ title, image }) => {

  const classes = useStyles();

  return (
    <div className='project_rootWrapper'>
    <Card className='project_root'  >
      <CardActionArea>
        <CardMedia
          className='project_media'
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className='project_cart project_title'>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className='project_cart'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='project_buttons' >
        <Button size="small" color="primary" className='project_cart'>
          Live version
        </Button>
        <Button size="small" color="primary" className='project_cart' >
          Code
        </Button>
      </CardActions>
    </Card>
    </div>
  );
};

export default Project;
