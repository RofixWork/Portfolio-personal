import React from "react";
import useStyles from "./style";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
const SidebarProgress = ({ title, progress }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box
        marginBottom="5px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="caption">{title}</Typography>
        <Typography variant="caption">{`${progress}%`}</Typography>
      </Box>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
};

export default SidebarProgress;
