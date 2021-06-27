import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '200px',
    height: '50px',
    lineHeight: '50px',
    textAlign:'center',
    color: 'white',
    position: 'absolute',
    top: '50%', 
    marginTop: '-25px', 
    left: '50%', 
    marginLeft: '-100px', 
  },
}));

export default function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
}