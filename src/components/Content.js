import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';


const categories = [
  {
    List:[
      { id: 'Pedidos',  link: "/"},
      { id: 'Usuários', link: "/UsersList"},
      { id: 'Produtos', link: "/ItensList" },
    ]
  }
];

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

function Content(props) {
  const { classes } = props;
  const { name } = props;
  return (
    <Paper className={classes.paper}>
      {categories.map(({ List: id, link}) => (
          <div className={classes.contentWrapper} numCollumns={3} key={link}>
            <Typography color="textSecondary" align="center">
              {name}
            </Typography>
        </div>
      ))} 
    </Paper>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);