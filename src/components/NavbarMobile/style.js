import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navbarMobile: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      position: "sticky",
      top: 0,
      left: 0,
      zIndex: 8888,
      width: "100%",
      height: "60px",
      backgroundColor: "#20202a",
      color: "white",
      display: "flex",
      alignItems: "center",
    },
  },
  navbarMobileIcon: {
    color: "white",
  },
}));

export default useStyles;
