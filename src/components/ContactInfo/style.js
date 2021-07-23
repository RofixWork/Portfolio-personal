import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  contactInfo: {
    width: "100%",
    padding: "20px 0",
  },
  contactInfoBox: {
    backgroundColor: "#1e1e28",
    padding: 30,

    "& .MuiTypography-subtitle1, & .MuiTypography-subtitle2": {
      fontSize: 12.5,
      fontWeight: 600,
    },
    "& .MuiTypography-subtitle2": {
      color: "#8c8c8e",
      fontWeight: 500,
    },
  },
}));

export default useStyles;
