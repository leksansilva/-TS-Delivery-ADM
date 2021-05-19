import React from 'react';
import Content from '../../components/Content';
import RequestTemplate from './RequestTemplate';



export default function RequestScreen(){

  return(
    <RequestTemplate
      content={()=><Content name="Pedidos"/>}
    
    />
  )
}