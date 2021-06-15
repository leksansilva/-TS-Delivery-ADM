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
import Badge from '@material-ui/core/Badge';


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
    
  },
  button: {
    borderColor: lightColor,
  }
  ,badge: {
    top: 10,
  }
});


function Header(props) {
  const count = props.count;
  const { classes, onDrawerToggle } = props;
  const location = useLocation();
  const currentTab = {
    '/Pedidos/EmEspera':0,
    '/Pedidos/EmAndamento':1,
    '/Pedidos/Pronto':2,
    '/Pedidos/SaiuParaEntrega':3,
    '/Pedidos/Entregue':4,
    '/Pedidos/NaoEntregue':5,
    '/Pedidos/Finalizado':6,
    '/Pedidos/Cancelado':7,

    '/Cadastrar/Comidas':0,
    '/Cadastrar/Ingredientes':1,
    '/Cadastrar/Categorias':2,

    '/Usuario/Clientes': 0,

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
         <Badge  badgeContent={count} className={classes.badge}  color="error">
            <Tab component={Link} to={props.htab1}  textColor="inherit" label={props.tab1} />
          </Badge>

         <Badge  badgeContent={0} className={classes.badge}   color="error">
           <Tab component={Link} to={props.htab2} textColor="inherit" label={props.tab2} />
          </Badge>
        <Badge  badgeContent={0} className={classes.badge}  color="error">
           <Tab component={Link} to={props.htab3}  textColor="inherit" label={props.tab3} />
        </Badge> 

        <Badge  badgeContent={0} className={classes.badge}  color="error">
            <Tab component={Link} to={props.htab4}  textColor="inherit" label={props.tab4} />
        </Badge>   
        <Badge  badgeContent={0} className={classes.badge}  color="error">
            <Tab component={Link} to={props.htab5}  textColor="inherit" label={props.tab5} />
          </Badge> 
        <Badge  badgeContent={0} className={classes.badge}  color="error">
            <Tab component={Link} to={props.htab6}  textColor="inherit" label={props.tab6} />
          </Badge>  
        <Badge  badgeContent={0} className={classes.badge}  color="error">
            <Tab component={Link} to={props.htab7}  textColor="inherit" label={props.tab7} />
        </Badge>  

        <Badge  badgeContent={0} className={classes.badge}  color="error"> 
            <Tab component={Link} to={props.htab8}  textColor="inherit" label={props.tab8} />
        </Badge>    
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
