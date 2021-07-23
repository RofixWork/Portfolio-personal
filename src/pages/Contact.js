import React from "react";
import useStyles from "../utils/AppBody";
import { Box } from "@material-ui/core";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import Footer from "../components/footer";
const Contact = () => {
  const classes = useStyles();
  return (
    <Box className={classes.app} component="section">
      <ContactInfo />
      <ContactForm />
      <Footer />
    </Box>
  );
};

export default Contact;
