import { Box } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Services from "../components/Services";
import Price from "../components/Price";
import Footer from "../components/footer";
import useStyles from "../utils/AppBody";
const Home = () => {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.app}>
      <Hero />
      <Info />
      <Services />
      <Price />
      <Footer />
    </Box>
  );
};

export default Home;
