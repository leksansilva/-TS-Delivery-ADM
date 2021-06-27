import React, { useState } from 'react';
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
import { Link, useLocation, useParams } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';


const lightColor = 'rgba(255, 255, 255, 0.7)';


const styles = (theme) => ({
  secondaryBar: {
    zIndex: 0,
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  badge: {
    right:2,
    position: 'fixed',
  },
  button: {
    borderColor: lightColor,
  }, 
});


function Header(props) {

  const { classes, onDrawerToggle} = props;
  const tabs = props.tabs;
  const location = useLocation();
  const params = useParams();
  console.log(params);
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
    '/Cadastrar/Categoria/Nova':2,
    '/Cadastrar/Categoria/':2,
  }
  const [value, setValue] = useState(currentTab[location.pathname]);

  const handleChange = ( event, newValue) => {
    setValue(newValue);
  };
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
      <Tabs value={value}onChange={handleChange} variant="fullWidth" >
        {tabs.map((tab) =>(
          <Tab component={Link}
          key={tab.name} 
          to={tab.link}  
          className={classes.tab}
          label={<Badge 
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }} 
          badgeContent={3}
          >
          <Typography variant="body2"> {tab.name} </Typography>
        </Badge>} 
          textColor='inherit'/>
        ))}
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
