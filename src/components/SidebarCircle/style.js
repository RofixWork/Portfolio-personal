import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "& .MuiTypography-subtitle2": {
      fontSize: "0.75rem",
      margin: "8px 0 0 0",
    },
  },
}));

export default useStyles;
