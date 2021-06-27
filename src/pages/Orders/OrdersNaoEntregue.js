import React,{ useEffect, useState } from 'react';
import RequestTemplate from './OrdersTemplate';
import OrderList from '../../components/OrderList'
import api from '../../services/api';
import { getToken } from '../../services/auth';

export default function RequestScreenEntregue(){
  const [orders, setOrders] = useState([]);

  useEffect (() => {
    const headers = {'Authorization':`Bearer ${getToken()}`};
    api.get('/api/Orders',{headers: headers}).then((response) => {
      setOrders(response.data)
    });
  }, []);

  
  
  return(
    
      <RequestTemplate
        content={()=><OrderList count={orders.length}button1="Tentar Novamente" button2="Cancelar" />}    
      />
    
  )
}
