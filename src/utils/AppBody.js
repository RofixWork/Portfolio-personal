import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  app: {
    marginLeft: 280,
    marginRight: 80,
    padding: 15,
    color: "white",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
      padding: "15px 30px",
    },
  },
}));
export default useStyles;
