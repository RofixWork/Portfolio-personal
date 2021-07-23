import { Box, Typography, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import { BiCheck } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
const Price = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.price}>
      <Typography className={classes.priceTitle} variant="subtitle1">
        Price Plans
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4} xl={4}>
          <Box className={classes.pricePlans} textAlign="center">
            <Typography variant="subtitle2">Starter Price</Typography>
            <Typography variant="subtitle1">FREE</Typography>

            <Box component="ul">
              <Box component="li">
                <BiCheck className="icon" />
                Ui Design
              </Box>
              <Box component="li">
                <BiCheck className="icon" />
                Web Development
              </Box>
              <Box className="active" component="li">
                <FaTimes className="icon" />
                Logo Design
              </Box>
              <Box className="active" component="li">
                <FaTimes className="icon" />
                SEO optimzation Design
              </Box>
              <Box className="active" component="li">
                <FaTimes className="icon" />
                Wordpress integration
              </Box>
            </Box>
            <Typography variant="button" component="a" href="#">
              order now &gt;
            </Typography>
          </Box>
        </Grid>
        {/* two */}
        <Grid item xs={12} sm={6} md={4} xl={4}>
          <Box className={classes.pricePlans} textAlign="center">
            <Typography variant="subtitle2">Starter Price</Typography>
            <Typography variant="subtitle1">
              <sup>$</sup>
              29
              <sup>h</sup>
            </Typography>

            <Box component="ul">
              <Box component="li">
                <BiCheck className="icon" />
                Ui Design
              </Box>
              <Box component="li">
                <BiCheck className="icon" />
                Web Development
              </Box>
              <Box component="li">
                <BiCheck className="icon" />
                Logo Design
              </Box>
              <Box className="active" component="li">
                <FaTimes className="icon" />
                SEO optimzation Design
              </Box>
              <Box className="active" component="li">
                <FaTimes className="icon" />
                Wordpress integration
              </Box>
            </Box>
            <Typography variant="button" component="a" href="#">
              order now &gt;
            </Typography>
          </Box>
        </Grid>
        {/* three */}
        <Grid item xs={12} sm={6} md={4} xl={4}>
          <Box className={classes.pricePlans} textAlign="center">
            <Typography variant="subtitle2">Starter Price</Typography>
            <Typography variant="subtitle1">
              <sup>$</sup>
              2999
              <sup>m</sup>
            </Typography>

            <Box component="ul">
              <Box component="li">
                <BiCheck className="icon" />
                Ui Design
              </Box>
              <Box component="li">
                <BiCheck className="icon" />
                Web Development
              </Box>
              <Box component="li">
                <BiCheck className="icon" />
                Logo Design
              </Box>
              <Box component="li">
                <BiCheck className="icon" />
                SEO optimzation Design
              </Box>
              <Box component="li">
                <BiCheck className="icon" />
                Wordpress integration
              </Box>
            </Box>
            <Typography variant="button" component="a" href="#">
              order now &gt;
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Price;
