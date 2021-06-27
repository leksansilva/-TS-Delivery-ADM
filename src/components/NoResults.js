import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';





const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
    
  },
  block: {
    display: 'block',
  },
  contentWrapper: {
    margin: '40px 16px',
  },
});

function NoResults(props) {
  const { classes } = props;
  const { name } = props;
  return (
    <Paper className={classes.paper}>
      
          <div className={classes.contentWrapper} >
            <Typography color="textSecondary" align="center">
              Nada encontrado em {name}
            </Typography>
        </div>
      
    </Paper>
  );
}

NoResults.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NoResults);