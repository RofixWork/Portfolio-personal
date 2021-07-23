import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    padding: "20px 0",
    "& .MuiTypography-subtitle1": {
      color: "#fafafc",
      fontWeight: 600,
      fontSize: 17,
    },
  },
  formInputs: {
    padding: "40px 20px",
    backgroundColor: "#1e1e28",
    display: "flex",
    flexDirection: "column",
    gap: 25,
  },
  formInputsBox: {
    backgroundColor: "#242430",
    padding: 0,
    display: "flex",
    alignItems: "center",
    gap: 10,
    border: ".5px solid #8c8c8e",
    position: "relative",

    "& > input, & > textarea": {
      background: "none",
      width: "100%",
      color: "white",
    },
    "& > textarea": {
      padding: "14px 0",
      display: "block",
      marginLeft: "60px",
    },
  },
  icon: {
    backgroundColor: "#1e1e28",
    height: "50px",
    width: "50px",
    display: "grid",
    placeItems: "center",
    fontSize: 18,
    color: "#8c8c8e",
  },
  iconTextArea: {
    backgroundColor: "#1e1e28",
    height: "100%",
    width: "50px",
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 18,
    color: "#8c8c8e",
    display: "flex",
    justifyContent: "center",
    padding: "14px 0",
  },
  btnForm: {
    display: "block",
    width: "fit-content",
    padding: "12px 20px",
    fontSize: "12px",
    borderRadius: 0,
    letterSpacing: 1,
    fontWeight: 600,

    "&:hover": {
      background: theme.palette.primary.light,
    },
  },
}));

export default useStyles;
