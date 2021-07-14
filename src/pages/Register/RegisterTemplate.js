import React from 'react';
import PropTypes from 'prop-types';
import {  ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {theme, styles} from '../../components/styles/template';
import Header from '../../components/Header';
import Sidebar from '../../components/SideBar';
import Copyright from '../../components/Copyright';




function RegisterTemplate(props) {
  const { classes } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const tabs = [
    {name:'Comidas', link:'/Cadastrar/Comidas'},
    {name:'Ingredientes', link:'/Cadastrar/Ingredientes'},
    {name:'Categorias', link:'/Cadastrar/Categorias'},
    ]

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Sidebar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          drawer={classes.drawer}
          editId={props.id}      
        />
        <div className={classes.app}>
          <Header onDrawerToggle={handleDrawerToggle}
             name='Cadastrar'
             tabs={tabs}
             editId={props.id}
          />
          <main className={classes.main}>
            {props.register()}
          </main>
          <footer className={classes.footer}>
            <Copyright />
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}


RegisterTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegisterTemplate);