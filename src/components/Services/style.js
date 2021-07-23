import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  services: {
    padding: "20px 0",
  },
  servicesTitle: {
    fontWeight: 600,
    marginBottom: 15,
  },
  servicesContent: {
    backgroundColor: "#1e1e28",
    padding: 30,

    "& .MuiTypography-subtitle1": {
      marginBottom: 25,
      fontSize: 14,
      color: "#FAFAFC",
      fontWeight: 600,
    },
    "& .MuiTypography-subtitle2": {
      color: "#8c8c8e",
      fontSize: 12,
      marginBottom: 15,
      lineHeight: 1.8,
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
