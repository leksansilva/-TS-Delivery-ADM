import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link, useLocation } from 'react-router-dom';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = (theme) => ({
  secondaryBar: {
    zIndex: 0,
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    textDecoration: 'none',
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
});

function Header(props) {
  const { classes, onDrawerToggle } = props;
  const location = useLocation();
  const currentTab = {
    '/':0,
    '/EmAndamento':1,
    '/Pronto':2,
    '/SaiuParaEntrega':3,
    '/Entregue':4,
    '/NaoEntregue':5,
    '/Finalizado':6,
    '/Cancelado':7,

    '/Cadastrar/Comida':0,
    '/Cadastrar/Ingrediente':1,
    '/Cadastrar/Categoria':2,

    '/Usuario/Cliente': 0,

    '/Feedback': 0,
  }
  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Hidden smUp>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={onDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item xs />
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
                {props.name}
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Tabs value={currentTab[location.pathname]} textColor="inherit">
          
         <Link to={props.htab1} className={classes.link} >
            <Tab textColor="inherit" label={props.tab1} />
         </Link>

        <Link to={props.htab2} className={classes.link}>
           <Tab textColor="inherit" label={props.tab2} />
        </Link>
          
        <Link to={props.htab3} className={classes.link}>
           <Tab textColor="inherit" label={props.tab3} />
        </Link>

        <Link to={props.htab4} className={classes.link}>
            <Tab textColor="inherit" label={props.tab4} />
        </Link>

        <Link to={props.htab5} className={classes.link}>
            <Tab textColor="inherit" label={props.tab5} />
        </Link>

        <Link to={props.htab6} className={classes.link}>
            <Tab textColor="inherit" label={props.tab6} />
        </Link>

        <Link to={props.htab7} className={classes.link}>
            <Tab textColor="inherit" label={props.tab7} />
        </Link>

        <Link to={props.htab8} className={classes.link}>
            <Tab textColor="inherit" label={props.tab8} />
        </Link>
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);