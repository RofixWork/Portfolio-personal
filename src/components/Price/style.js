import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  price: {
    padding: "20px 0",
  },
  priceTitle: {
    fontWeight: 600,
    marginBottom: 15,
  },
  pricePlans: {
    backgroundColor: "#1e1e28",
    padding: "40px",
    "& .MuiTypography-subtitle2": {
      color: "#FAFAFC",
      fontSize: 14,
      marginBottom: 25,
      fontWeight: 600,
    },
    "& .MuiTypography-subtitle1": {
      color: theme.palette.primary.main,
      fontSize: 32,
      fontWeight: 700,
      "& > sup": {
        fontSize: 17,
        color: "#8c8c8e",
        margin: "0 6px",
        fontWeight: 400,
      },
    },
    "& > ul": {
      display: "flex",
      flexDirection: "column",
      gap: 15,
      margin: "25px 0",
      "& li": {
        fontSize: 13,
        color: "#8c8c8e",
        display: "flex",
        gap: 5,
        justifyContent: "center",
        alignItems: "center",
        "& > .icon": {
          color: theme.palette.primary.main,
          fontWeight: 700,
        },
        "&.active": {
          opacity: 0.4,
        },
      },
    },
    "& .MuiTypography-button": {
      color: theme.palette.primary.main,
      fontSize: 11,
      transition: "transform 250ms linear",
      display: "block",
      "&:hover": {
        transform: "translateX(5px)",
        transition: "transform 250ms linear",
      },
    },
  },
}));

export default useStyles;
