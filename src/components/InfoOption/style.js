import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  infoOption: {
    display: "flex",
    alignItems: "center",
    gap: 15,
    "& .MuiTypography-subtitle1": {
      color: theme.palette.primary.main,
      fontSize: 22,
      fontWeight: 700,
    },
    "& .MuiTypography-subtitle2": {
      fontSize: "12px",
      color: "#FAFAFC",
    },
  },
}));

export default useStyles;
