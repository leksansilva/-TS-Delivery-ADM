import React from 'react';
import OrdersTemplate from './OrdersTemplate';
import OrderList from '../../components/OrderList'
import  { orders } from '../../teste/orders';
export default function RequestScreenEmEspera(){
 // const [orders, setOrders] = useState([]);

  /* useEffect (() => {
    const headers = {'Authorization':`Bearer ${getToken()}`};
    api.get('/api/Orders',{headers: headers}).then((response) => {
      setOrders(response.data)
    });
  }, []); */

  
  return(
    
    <OrdersTemplate count={orders} 
        orders={()=><OrderList orders={orders} count={orders.length} button1="Aceitar" button2="Recusar" />}    
      />
    
  )
}
