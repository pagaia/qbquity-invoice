import { CircularProgress, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  loading: {
    position: "fixed",
    top: "50%",
    left: "50%",
    marginTop: -20,
    marginLeft: -20,
  },
  main: {
      width: "100vw",
      height: "100vh",
      backgroundColor: "#bab5b5"
  }
}));

const Loading = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <CircularProgress className={classes.loading} />
    </div>
  );
};

export default Loading;
