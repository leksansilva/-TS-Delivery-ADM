import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NoResults from '../NoResults';
import { useLocation } from 'react-router-dom';
import { Box } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 700,
    margin: 'auto',
    marginBottom: "20px",
    overflow: 'hidden',
  },
}));


export default function OrderList(props) {
  const classes = useStyles();
  const orders = props.orders;
  const location = useLocation();

  const currentTab = {
    '/Pedidos/EmEspera':1,
    '/Pedidos/EmAndamento':2,
    '/Pedidos/Pronto':3,
    '/Pedidos/SaiuParaEntrega':4,
    '/Pedidos/Entregue':5,
    '/Pedidos/NaoEntregue':6,
    '/Pedidos/Cancelado':7,
  }
  const set = currentTab[location.pathname];
  return (
    orders.length>0?
      orders.map((order) => (  
        set===order.status?
        <Paper className={classes.paper} elevation= {2} key={order.id} >
          <Box component="fieldset" mb={0} borderColor="transparent">
          <Grid  container>
                  <Grid item container xs direction="column">
                    <Grid item xs container >
                      <Grid item xs  >
                        <Typography variant="h5"component="legend">{order.order}</Typography>
                        <Typography variant="h6">{order.name}, {order.tel}</Typography>
                        <Typography variant="subtitle2" >{order.city}-{order.state}</Typography>
                        <Typography variant="subtitle2" >{order.neighborhood}, {order.number}</Typography>
                        <Typography variant="subtitle2" >{order.addressType} {order.addon?', '+order.addon:''}</Typography>         
                      </Grid>
                      <Grid  item>
                          <Typography variant="h6">{order.price.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</Typography>               
                      </Grid>
                    </Grid>
                    <Grid item container>
                      <Grid item xs>
                      <Typography variant="overline" >sem salsa e cebolas</Typography>
                      </Grid>
                      <Grid item>
                      {props.button1?<Button size="large" color="primary">{props.button1}</Button>:''}
                      <Button size="large" color="secondary">{props.button2}</Button>
                      </Grid>     
                    </Grid>  
                  </Grid>  
                </Grid>
          </Box>
            
        </Paper>
        :''    
      ))  
    :<NoResults/>
  );
}