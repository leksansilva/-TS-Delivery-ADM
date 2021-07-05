import React from 'react';
import PropTypes from 'prop-types';
import {  ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {theme, styles} from '../../components/styles/template';
import Header from '../../components/Header';
import Sidebar from '../../components/SideBar';
import Copyright from '../../components/Copyright';




function OrdersTemplate(props) {
  const { classes} = props;
  const orders = props.count;
  function count(tam,i,cont,status){
    if(i<tam){  
      if(orders[i].status===status){    
        return count(tam,i+1,cont+1,status);
      }else{
        return count(tam,i+1,cont,status);
      }
    }
    
      return cont;
  }

  const tabs = [
      {name:'Em Espera', link:'/Pedidos/EmEspera', count: count(orders.length,0,0,1)},
      {name:'Em Andamento', link:'/Pedidos/EmAndamento', count: count(orders.length,0,0,2)},
      {name:'Pronto', link:'/Pedidos/Pronto', count: count(orders.length,0,0,3)},
      {name:'Saiu para Entrega', link:'/Pedidos/SaiuParaEntrega', count: count(orders.length,0,0,4)},
      {name:'Entregue', link:'/Pedidos/Entregue', count: count(orders.length,0,0,5)},
      {name:'Não Entregue', link:'/Pedidos/NaoEntregue', count: count(orders.length,0,0,6)},
      {name:'Cancelado',link:'/Pedidos/Cancelado', count: count(orders.length,0,0,7)},
    ]
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Sidebar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          drawer={classes.drawer}    
        />
        <div className={classes.app}>
          <Header onDrawerToggle={handleDrawerToggle}
             name='Pedidos'
             tabs={tabs}
            
          />
          <main className={classes.main}>
            {props.orders()}
          </main>
          <footer className={classes.footer}>
            <Copyright />
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}


OrdersTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OrdersTemplate);