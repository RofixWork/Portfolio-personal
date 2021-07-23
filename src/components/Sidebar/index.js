import { Avatar, Box, Typography, IconButton } from "@material-ui/core";
import React, { useContext } from "react";
import SidebarCircle from "../SidebarCircle";
import SidebarProgress from "../SidebarProgress";
import useStyles from "./style";
import { Context } from "../../context";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";
const Sidebar = () => {
  const classes = useStyles();
  const { toggleSidebar, setToggleSidebar } = useContext(Context);
  return (
    <Box
      component="aside"
      className={`${classes.sidebar} ${toggleSidebar && "active"}`}
    >
      <IconButton
        onClick={() => setToggleSidebar(false)}
        className={classes.siebarButton}
      >
        <HiArrowLeft />
      </IconButton>
      <Box className={classes.sidebarUser}>
        <Avatar src="https://elanta.app/nazar/arter-demo/img/face-1.jpg"></Avatar>
        <Typography variant="subtitle1">Rofix Work</Typography>
        <Typography variant="subtitle2">Front-end Developper</Typography>
        <Typography variant="subtitle2">UI/UX Designer</Typography>
      </Box>

      <Box className={classes.sidebarInfo}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1">Residence:</Typography>
          <Typography variant="subtitle2">Maroc</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1">City:</Typography>
          <Typography variant="subtitle2">Taroudant</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1">Age:</Typography>
          <Typography variant="subtitle2">21</Typography>
        </Box>
      </Box>
      <hr />
      <Box className={classes.sidebarCircle}>
        <SidebarCircle percentage={70} title="English" />
        <SidebarCircle percentage={60} title="French" />
        <SidebarCircle percentage={100} title="Arabic" />
      </Box>
      <hr />
      <Box className={classes.sidebarProgrss}>
        <SidebarProgress title="html" progress={90} />
        <SidebarProgress title="css" progress={90} />
        <SidebarProgress title="js" progress={70} />
        <SidebarProgress title="ReactJs" progress={75} />
      </Box>
      <Box component="nav" className={classes.sidebarSocial}>
        <Box component="a" href="#">
          <FaFacebook />
        </Box>
        <Box component="a" href="#">
          <FaInstagram />
        </Box>
        <Box component="a" href="#">
          <FaLinkedin />
        </Box>
        <Box component="a" href="#">
          <FaTwitter />
        </Box>
        <Box component="a" href="#">
          <FaYoutube />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
