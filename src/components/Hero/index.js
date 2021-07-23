import { Box, Typography, Button } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import { Typing } from "typing-effect-reactjs";
const Hero = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.hero}>
      <Typography variant="h5">
        Discover my Amazing <br /> Art Space!
      </Typography>
      <Typography variant="subtitle1">
        <code>&lt;code&gt;</code>
        <Typing
          text={[
            "I Build Illustration",
            "I Build Web Interfaces.",
            "I Build automation tools.",
            "I Build Templates.",
          ]}
          smartBackspace
          cursorColor="#fff"
          typeSpeed={120}
          deleteSpeed={100}
          disableBlinkingOnEnd={2}
        />
        <code>&lt;code&#47;&gt;</code>
      </Typography>
      <Button variant="contained" color="primary">
        Explore now
      </Button>
    </Box>
  );
};

export default Hero;
