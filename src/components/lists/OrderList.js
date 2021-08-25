import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NoResults from '../NoResults';
import { useHistory, useLocation } from 'react-router-dom';
import { Box, Card, CardHeader, CardMedia, Chip } from '@material-ui/core';
import api from '../../services/api';
import { getToken } from '../../services/auth';


const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 900,
    margin: 'auto',
    marginBottom: "20px",
    overflow: 'hidden',
  
  },
  card: {
    minHeight: 100,
    width:300,
    display: 'flex',
  },
  chips: {
    margin: 5,
    display: 'flex',
  },
  cardGrid: {
    alignContent: 'center',
  },
  media: {
    width: 100,
    height: 100,
  },
  content: {
    flex: '1 0',
    wordBreak: 'break-all'
  },
}));


export default function OrderList(props) {
  const classes = useStyles();
  const { orders, newStatus, newEvent, anotherOption} = props;
  const location = useLocation();
  const headers = {'Authorization':`Bearer ${getToken()}`};
  const history = useHistory();

 

  const getImage = img => {
    const base64Image = `${img.images[0].type},${img.images[0].data}`;
    return base64Image;
  };

  const currentTab = {
    '/Pedidos/EmEspera':'em Espera',
    '/Pedidos/EmAndamento':'em Andamento',
    '/Pedidos/Pronto':'Prontos',
    '/Pedidos/SaiuParaEntrega':'que Saiu para Entrega',
    '/Pedidos/Entregue':'Entregues',
    '/Pedidos/NaoEntregue':'Não Entregues',
    '/Pedidos/Cancelado':'Cancelados',
  }
  const set = currentTab[location.pathname];

  
  async function handleOrderStatus(id){
    const value = orders.find(order => order.id===id);
    const newOrderStatus =  {
      id: value.id,
      price: value.price,
      note: value.note,
      shoppingTime: value.shoppingTime,
      deliveryStatusId: newStatus,
      paymentTypeId: value.paymentTypeId,
      addressId: value.addressId,
      userId: value.userId,
    }
    if(newStatus<=6){
      api.put(`/api/Orders/${id}`, newOrderStatus, {headers})
        .then(response =>{
          if(response.status===200){
            newEvent(true);
          }
        }).catch(error =>{
          console.log(error);
        })
    }
    if(newStatus===11){
      console.log('mandar para o perfil do usuário');
    }
    if(newStatus===9){
      history.push('/Feedback');
    }
    newEvent(false); 
  }
  async function handleAnotherOption(id){
    const value = orders.find(order => order.id===id);
    const newOrderStatus =  {
      id: value.id,
      price: value.price,
      note: value.note,
      shoppingTime: value.shoppingTime,
      deliveryStatusId: anotherOption,
      paymentTypeId: value.paymentTypeId,
      addressId: value.addressId,
      userId: value.userId,
    }
    if(anotherOption<=7){
      api.put(`/api/Orders/${id}`,newOrderStatus,{headers})
        .then(response =>{
          if(response.status===200){
            newEvent(true);
          }
        }).catch(error =>{
          console.log(error);
        })
       
    }
    if(anotherOption===10){
      
      api.delete(`/api/Orders?id=${id}`,{headers})
        .then(response =>{
          if(response.status===200){
            newEvent(true);
          }
        }).catch(error =>{
          console.log(error);
        })
    }
    newEvent(false);  
  }

  function ArrivalTime(time){
    const event = new Date(time);
    return event.toLocaleTimeString('pt-BR');
  }

  return (
    orders.length>0?
      orders.map((order, indexOrder) => (  
        <Paper className={classes.paper} elevation={4} key={indexOrder} >
          <Box component="fieldset" mb={2} borderColor="transparent">
          <Grid  container>
                  <Grid item container xs direction="column">
                    <Grid item xs container >
                      <Grid item xs  >
                        <Typography variant="h5">{order.user.name}, {order.user.phoneNumber}</Typography>
                         <Chip color={order.paymentTypeId===1?"primary":"secondary"} size="small" label={order.paymentTypeId===1?"Pagamento em dinheiro":"Pagamento em Cartão"}/>
                        <Typography variant="subtitle2" >{order.address.city}-{order.address.state}</Typography>
                        <Typography variant="subtitle2" >{order.address.neighborhood}, {order.address.number}</Typography>
                        <Typography variant="subtitle2" >{order.address.addressTypeId===1?'Casa':'Trabalho'} {order.address.addon?', '+order.address.addon:''}</Typography>
                        <Typography variant="subtitle2" color="textSecondary" >Pedido realizado {ArrivalTime(order.shoppingTime)} h</Typography>       
                      </Grid>
                      <Grid  item>
                          <Typography variant="h6">{order.price.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</Typography>               
                      </Grid>
                    </Grid>
                    <Grid item className={classes.content}>
                          <Typography variant="overline" color="textSecondary" >{order.note}</Typography>
                    </Grid>
                    <Grid item container direction="column">
                       
                      <Grid item container  className={classes.cardGrid} spacing={2} >
                        {order.suborders.map((suborder, indexSuborder )=>(
                          <Grid item xs key={indexSuborder} >
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={getImage(suborder.food)}
                                  />
                                <CardHeader className={classes.content}
                                    title={<Typography variant="subtitle1">{suborder.food.name}</Typography>}
                                    subheader={<Typography variant="caption" color="textSecondary">{suborder.note}</Typography>}
                                  />
                            </Card>
                            {/* <div className={classes.chips}>
                            <Chip 
                              label='testando' 
                              size='small' 
                              color='primary' 
                              variant='outlined'
                            />    
                            </div> */}
                             
                          </Grid>

                        ))}
                        
                      </Grid>
                      <Grid item container>
                        <Grid item xs/>
                        <Grid item>
                          {props.button1&&<Button size="large" onClick={() => handleOrderStatus(order.id)} color="primary">{props.button1}</Button>}
                          <Button size="large" onClick={() => handleAnotherOption(order.id)} color="secondary">{props.button2}</Button>
                        </Grid>
                        
                      </Grid>  
                    </Grid>  
                  </Grid>  
                </Grid>
          </Box>
            
        </Paper>   
      )).reverse()  
    :<NoResults name={`Pedidos ${set}`}/>
  );
}