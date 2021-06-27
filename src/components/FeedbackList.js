import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      display: 'flex',
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: theme.spacing(100),
    },
  },
}));

export default function FeedBackList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} >

      </Paper>
    </div>
  );
}