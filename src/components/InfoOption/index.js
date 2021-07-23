import { Box, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

const InfoOption = ({ title, subtitle1, subtitle2 }) => {
  const classes = useStyles();
  return (
    <Box className={classes.infoOption}>
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="subtitle2">
        {subtitle1} <br /> {subtitle2}
      </Typography>
    </Box>
  );
};

export default InfoOption;
