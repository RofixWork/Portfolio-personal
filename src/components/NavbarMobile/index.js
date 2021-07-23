import { Box, Container, IconButton } from "@material-ui/core";
import React, { useContext } from "react";
import useStyles from "./style";
import { VscThreeBars } from "react-icons/vsc";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Context } from "../../context";
const NavbarMobile = () => {
  const classes = useStyles();
  const { setToggleSidebar, setToggleNavbar } = useContext(Context);
  return (
    <Box className={classes.navbarMobile}>
      <Container maxWidth="md">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <IconButton
              className={classes.navbarMobileIcon}
              onClick={() => setToggleSidebar(true)}
            >
              <BiDotsVerticalRounded />
            </IconButton>
          </Box>
          <Box>
            <IconButton
              onClick={() => setToggleNavbar(true)}
              className={classes.navbarMobileIcon}
            >
              <VscThreeBars />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NavbarMobile;
