import { Box, Typography, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import { data } from "./ServicesData";
const Services = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.services}>
      <Typography className={classes.servicesTitle} variant="subtitle1">
        My Services
      </Typography>
      <Grid container spacing={1}>
        {data.map((service) => {
          return (
            <Grid key={service.id} item xs={12} sm={6} md={4} xl={4}>
              <Box className={classes.servicesContent}>
                <Typography variant="subtitle1">{service.title}</Typography>
                <Typography variant="subtitle2">{service.desc}</Typography>
                <Typography variant="button" component="a" href={service.link}>
                  order now &gt;
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Services;
