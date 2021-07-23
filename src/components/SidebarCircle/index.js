import { Box, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const SidebarCircle = ({ title, percentage }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box width={60} height={60}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </Box>
      <Typography variant="subtitle2">{title}</Typography>
    </Box>
  );
};

export default SidebarCircle;
