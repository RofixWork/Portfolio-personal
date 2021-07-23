import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    backgroundColor: "#20202a",
    height: "100vh",
    width: "17.5rem",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 9999,
    color: "white",
    overflow: "auto",
    boxShadow: "0 3px 8px 0 rgb(15 15 20 / 20%)",
    transition: "left .3s linear",
    [theme.breakpoints.down("sm")]: {
      left: "-17.5rem",
      transition: "left .3s linear",
    },

    "&.active": {
      left: 0,
    },
  },
  siebarButton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      position: "absolute",
      top: 5,
      right: 10,
      color: "white",
      fontSize: 18,
      "&:hover": {
        opacity: 0.8,
      },
    },
  },
  sidebarUser: {
    height: 240,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#242430",
    borderBottom: "1px solid #646466",

    "& .MuiAvatar-root": {
      width: "80px",
      height: "80px",
      objectFit: "cover",
    },
    "& .MuiTypography-subtitle1": {
      fontSize: 14,
      color: "#FAFAFC",
      margin: "5px 0",
    },
    "& .MuiTypography-subtitle2": {
      fontSize: "0.688rem",
      color: "#8C8C8E",
    },
  },
  sidebarInfo: {
    padding: "20px 14px",
    "& .MuiTypography-subtitle1": {
      fontSize: "0.75rem",
    },
    "& .MuiTypography-subtitle2": {
      fontSize: "0.75rem",
      color: "#8C8C8E",
    },
  },
  sidebarCircle: {
    padding: "20px 14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    gap: 5,
  },
  sidebarProgrss: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  sidebarSocial: {
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: "0 14px",
    right: 0,
    width: "100%",
    height: "3.75rem",
    backgroundColor: "#242430",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid #646466",

    "& > a": {
      color: "#8C8C8E",
      fontSize: "1rem",
      "&:hover": {
        opacity: 0.8,
      },
    },
  },
}));

export default useStyles;
