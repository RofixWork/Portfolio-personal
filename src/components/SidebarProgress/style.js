import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px 14px",

    "& .MuiTypography-caption:first-of-type": {
      color: "white",
      fontSize: "0.875rem",
    },
    "& .MuiTypography-caption:last-of-type": {
      fontSize: "0.75rem",
      color: "#8C8C8E",
    },
  },
}));

export default useStyles;
