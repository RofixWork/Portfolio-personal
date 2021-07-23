import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  hero: {
    padding: 70,
    backgroundImage: `url('https://elanta.app/nazar/arter-demo/img/bg.jpg')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(0,0,0,.4)",
    backgroundBlendMode: "overlay",
    color: "white",

    "& .MuiTypography-h5": {
      fontSize: 42,
      marginBottom: 15,
      color: "#FAFAFC",
      fontWeight: 700,
      lineHeight: 1.1,
      [theme.breakpoints.down("sm")]: {
        fontSize: 25,
      },
    },
    "& .MuiTypography-subtitle1": {
      fontSize: 16,
      marginBottom: 25,
      fontFamily: "monospace",
      color: "#FAFAFC",
      fontWeight: 700,
      display: "flex",
      [theme.breakpoints.down("sm")]: {
        fontSize: 12,
      },
      "& > code": {
        color: "#FFC107",
        fontWeight: 500,
        "&:first-of-type": {
          marginRight: "5px",
        },
        "&:last-of-type": {
          marginLeft: "3px",
        },
      },
    },
    "& .MuiButton-containedPrimary": {
      textTransform: "capitalize",
      borderRadius: "0 !important",
      padding: "8px 20px",
      fontSize: 12,

      "&:hover": {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}));

export default useStyles;
