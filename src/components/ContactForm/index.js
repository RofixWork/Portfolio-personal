import { Box, Typography, Button, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { SiGooglemessages } from "react-icons/si";
const ContactForm = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={12} xl={12}>
        <Box className={classes.form}>
          <Typography variant="subtitle1">Get in touch</Typography>
          <form className={classes.formInputs}>
            <Box className={classes.formInputsBox}>
              <Box className={classes.icon}>
                <AiOutlineUser />
              </Box>
              <input type="text" placeholder="Name" />
            </Box>
            <Box className={classes.formInputsBox}>
              <Box className={classes.icon}>
                <AiOutlineMail />
              </Box>
              <input type="text" placeholder="Email" />
            </Box>
            <Box className={classes.formInputsBox}>
              <Box className={classes.iconTextArea}>
                <SiGooglemessages />
              </Box>
              <textarea placeholder="Messsage" cols="30" rows="5"></textarea>
            </Box>
            <Button
              className={classes.btnForm}
              variant="contained"
              color="primary"
            >
              send message
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
