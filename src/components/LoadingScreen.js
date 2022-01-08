import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width: "100%",
    height: "100vh",
    flexDirection:"column",
    position: "relative",
  },
}));

export default function LoadingScreen() {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <CircularProgress />
    </Grid>
  );
}