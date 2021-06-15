import React,{ useEffect, useState } from 'react';
import OrdersTemplate from './OrdersTemplate';
import OrderList from '../../components/OrderList'
import api from '../../services/api';




export default function OrdersScreenCancelado(){
  const [orders, setOrders] = useState([]);

  useEffect (() => {
    api.get('/api/Orders').then((response) => {
      setOrders(response.data)
    });
  }, []);

  
  
  return(
    
      <OrdersTemplate
        content={()=><OrderList count={orders.length} button1="Ver avaliações" button2="Bloquear"/>}    
      />
    
  )
}