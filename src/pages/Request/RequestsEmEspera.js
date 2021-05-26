import React from 'react';
import Orderform from '../../components/Orderform';
import RequestTemplate from './RequestTemplate';



export default function RequestEmEspera(){

  return(
    <RequestTemplate
      content={()=><Orderform name="Pedidos"/>}
    />
  )
}