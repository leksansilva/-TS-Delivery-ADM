import React,{ useEffect, useState } from 'react';
import RequestTemplate from './OrdersTemplate';
import OrderList from '../../components/OrderList'
import api from '../../services/api';

export default function RequestScreenEmEspera(){
  const [orders, setOrders] = useState([]);

  useEffect (() => {
    api.get('/api/Orders').then((response) => {
      setOrders(response.data)
    });
  }, []);

  
  
  return(
    
      <RequestTemplate
        content={()=><OrderList count={orders.length} button1="Aceitar" button2="Recusar" />}    
      />
    
  )
}