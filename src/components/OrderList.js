import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NoResults from './NoResults';
import { useLocation } from 'react-router-dom';
import { Box } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignContent: "center",
  },
  paper: {
    maxWidth: 800,
    margin: 'auto',
    marginBottom: "20px",
    overflow: 'hidden',
  },
  img: {
    borderRadius: 5,
    margin: 'auto',
    display: 'block',
    maxWidth: '200px',
    maxHeight: '150px',
  },
  info:{
    marginLeft:'10px',
  }
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
                  <Grid item >
                    <img className={classes.img} alt="complex" src={order.img} />
                  </Grid>
                  <Grid item container xs direction="column"className={classes.info}>
                    <Grid item xs container >
                      <Grid item xs  >
                        <Typography  variant="h6"component="legend">{order.order}</Typography>
                        <Typography  variant="subtitle1">{order.name}</Typography>
                        <Typography variant="subtitle2" >{order.address}</Typography>          
                      </Grid>
                      <Grid  item>
                          <Typography variant="h6">{order.price}R$</Typography>               
                      </Grid>
                    </Grid>
                    <Grid item container>
                      <Grid item xs/>
                      <Grid item>
                      <Button color="primary">{props.button1}</Button>
                        <Button color="secondary">{props.button2}</Button> 
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