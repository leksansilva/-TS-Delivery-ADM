import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  paper: {
    width: 936,
    margin: "auto",
    overflow: "hidden",
  },
  contentWrapper: {
    margin: "40px 16px",
  },
});

function NoResults(props) {
  const { classes } = props;
  const { response } = props;
  return (
    <Paper className={classes.paper}>
      <div className={classes.contentWrapper}>
        <Typography color="textSecondary" align="center">
          {response}
        </Typography>
      </div>
    </Paper>
  );
}



export default withStyles(styles)(NoResults);
