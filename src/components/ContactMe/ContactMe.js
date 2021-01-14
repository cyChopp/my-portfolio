import React from "react";
import * as emailjs from "emailjs-com";
import "./ContactMe.css";
import {
  Button,
  ButtonBase,
  Container,
  CssBaseline,
  Grid,
  makeStyles,
  styled,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";

import { ReactComponent as GithubSVG } from "../../icons/github.svg";
import { ReactComponent as LinkedinSVG } from "../../icons/linkedIn.svg";
import AlexanderLouttchenkoCV from "../../icons/AlexanderLouttchenkoCV.pdf";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#0effea",
    height: "50px",
    fontWeight: "600",
    fontSize: "27px",
    fontFamily: "Geo",
  },
}));

const ValidationTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-notchedOutline": {
      border: "2px solid #fff",
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: "#0effea",
    },
    "& .MuiFormLabel-root": {
      color: "#fff",
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#0effea",
      },
    },

    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#0effea",
    },
    "& .MuiInputBase-root": {
      color: "#fff",
    },
    "& input:valid + fieldset": {
      borderColor: "#0effea",
      borderWidth: 2,
    },
    "& input:invalid + fieldset": {
      borderColor: "#fff",
      borderWidth: 2,
    },
    "& input:valid:focus + fieldset": {
      borderColor: "#0effea",
      borderLeftWidth: 6,
      padding: "4px !important", // override inline-style
    },
  },
})(TextField);

const ModefiedButton = withStyles({
  "& .MuiButton-containedPrimary": {
    fontWeight: "600",
    color: "#000",
    backgroundColor: " #0effea",
  },
})(Button);

const ContactMe = () => {
  const classes = useStyles();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1ibi4kq",
        "template_wcosoga",
        e.target,
        "user_2ooPjTDKAzNeQu1DTVYiT"
      )
      .then(
        (result) => {
          console.log(result.text, "success");
        },
        (error) => {
          console.log(error.text, "error");
        }
      );

    e.target.reset();
  };
  const StyledSVGLinkedin = styled(LinkedinSVG)`
    display: block;
    margin: auto;
  `;
  const StyledSVGGithub = styled(GithubSVG)`
    display: block;
    margin: auto;
  `;
  return (
    <div className='contactme_wrapper'>
      <div className="contact_title" id="contact">
        <p >Contact me</p>
      </div>
      <div className="contact_wrapper">
        <div className="contact_formWrapper">
          <Container component="main" maxWidth="sm" >
            <div className={classes.paper}>
              <form className={classes.form} onSubmit={sendEmail}>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <ValidationTextField
                      variant="outlined"
                      autoComplete="fname"
                      name="name"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ValidationTextField
                      variant="outlined"
                      required
                      fullWidth
                      id="subject"
                      label="Subject"
                      name="subject"
                      autoComplete="lname"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ValidationTextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ValidationTextField
                      multiline
                      rows={4}
                      variant="outlined"
                      required
                      fullWidth
                      name="message"
                      label="Message"
                      type="textarea"
                      id="password"
                      autoComplete="current-password"
                    />
                  </Grid>
                </Grid>
                <ModefiedButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                >
                  Send
                </ModefiedButton>
              </form>
            </div>
          </Container>
        </div>
        <div className="contact_infoWrapper">
          <div className="contact_info">
            <div className="contact_infoSvg">
              <div>LinkedIn :</div>
              <div className="contact_svgWrapper">
                <a target="_blank" href="https://www.linkedin.com/in/alexander-louttchenko-468778202/">
                  {" "}
                  <StyledSVGLinkedin className="contact_svg" />
                </a>
              </div>
            </div>
            <div className="contact_infoSvg">
              <div>GitHub :</div>
              <div className="contact_svgWrapper">
                <a target="_blank" href="https://github.com/cyChopp">
                  {" "}
                  <StyledSVGGithub className="contact_svg" />
                </a>
              </div>
            </div>
            <div className="contact_infoSvg">
              <div>Email :</div>
              <div className="contact_email">louttchenkoo@gmail.com</div>
            </div>
            <div className="contact_infoSvg">
              <div>CV :</div>
              <div className="contact_cv">
                <a href={AlexanderLouttchenkoCV} download="LouttchenkoCV.pdf">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
