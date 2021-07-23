import { Box, Grid } from "@material-ui/core";
import React from "react";
import InfoOption from "../InfoOption";
import useStyles from "./style";

const Info = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.info}>
      <Grid container spacing={1} justify="center">
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <InfoOption title="10+" subtitle1="Years" subtitle2="Experience" />
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <InfoOption title="143" subtitle1="Completed" subtitle2="Projects" />
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <InfoOption title="114" subtitle1="Happy" subtitle2="Customers" />
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <InfoOption title="20+" subtitle1="Honnors and" subtitle2="Awards" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Info;
