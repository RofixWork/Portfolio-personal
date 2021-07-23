import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const Footer = () => {
  const classes = useStyles();
  return (
    <Box component="footer" className={classes.footer}>
      <Typography variant="caption">© 2020 Rofix Kengan</Typography>
      <Typography variant="caption">Template author: CMagi Hunter</Typography>
    </Box>
  );
};

export default Footer;

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: "12px 14px",
    backgroundColor: "#1e1e28",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#8c8c8e",
  },
}));
