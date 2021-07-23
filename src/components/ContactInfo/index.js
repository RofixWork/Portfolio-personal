import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import { data, dataTwo } from "./ContactInfoData";
const ContactInfo = () => {
  const classes = useStyles();
  return (
    <Box className={classes.contactInfo}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={6} xl={6}>
          <Box className={classes.contactInfoBox}>
            {data.map((info) => {
              return (
                <Box
                  key={info.id}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="subtitle1">{info.prop1}</Typography>
                  <Typography variant="subtitle2">{info.prop2}</Typography>
                </Box>
              );
            })}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} xl={6}>
          <Box className={classes.contactInfoBox}>
            {dataTwo.map((info) => {
              return (
                <Box
                  key={info.id}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="subtitle1">{info.prop1}</Typography>
                  <Typography variant="subtitle2">{info.prop2}</Typography>
                </Box>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactInfo;
