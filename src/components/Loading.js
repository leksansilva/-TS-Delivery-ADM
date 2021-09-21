import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "200px",
    height: "50px",
    lineHeight: "50px",
    textAlign: "center",
    position: "absolute",
    top: "50%",
    marginTop: "-25px",
    left: "50%",
    marginLeft: "-100px",
    flexGrow: 1,
    alignContent: "center",
  },
}));

export default function Loading() {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <CircularProgress />
    </Grid>
  );
}