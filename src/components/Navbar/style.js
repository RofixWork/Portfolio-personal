import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navbar: {
    position: "fixed",
    top: 0,
    right: -200,
    height: "100vh",
    width: 280,
    backgroundColor: "#20202a",
    zIndex: 8888,
    color: "white",
    padding: "5px 10px",
    display: "grid",
    placeItems: "center",
    transition: "right 250ms linear",
    overflow: "auto",
    boxShadow: "0 3px 8px 0 rgb(15 15 20 / 20%)",
    [theme.breakpoints.down("sm")]: { right: "-400px" },
    "&.active": {
      transition: "right 250ms linear",
      right: 0,
    },
  },
  navabrButton: {
    backgroundColor: "#242430",
    padding: "5px",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
  },
  navbarButtonBar: {
    color: "white",
    fontSize: 25,
    "&:hover": {
      color: "#8C8C8E",
    },
  },
  navbarLiks: {
    display: "flex",
    flexDirection: "column",
    userSelect: "none",
    gap: 25,
    alignItems: "center",
    "& > a[href]": {
      textTransform: "uppercase",
      color: "white",
      fontSize: 14,
      display: "block",
      transition: "transform 250ms linear",
      "&:hover": {
        transform: "translateX(10px)",
        transition: "transform 250ms linear",
        color: "#8C8C8E",
      },
    },
  },
}));

export default useStyles;
