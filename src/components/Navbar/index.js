import { Box, IconButton } from "@material-ui/core";
import React, { useState, useContext } from "react";
import useStyles from "./style";
import { GoThreeBars } from "react-icons/go";
import { FaTimes } from "react-icons/fa";
import { Context } from "../../context";
import { Link } from "react-router-dom";
const Navbar = () => {
  const classes = useStyles();
  const [nav, setNav] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(true);
  const { toggleNavbar, setToggleNavbar } = useContext(Context);
  const showNavbar = () => {
    setNav((prevState) => !prevState);
    setToggleIcon((prev) => !prev);
    setToggleNavbar(false);
  };
  return (
    <Box
      className={`${classes.navbar}  ${(toggleNavbar || nav) && "active"}`}
      component="header"
    >
      <Box className={classes.navabrButton}>
        <IconButton onClick={showNavbar} className={classes.navbarButtonBar}>
          {toggleNavbar || toggleIcon ? <GoThreeBars /> : <FaTimes />}
        </IconButton>
      </Box>
      <Box component="nav" className={classes.navbarLiks}>
        <Box onClick={showNavbar} component={Link} to="/">
          home
        </Box>

        <Box onClick={showNavbar} component={Link} to="/contact">
          contact
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
