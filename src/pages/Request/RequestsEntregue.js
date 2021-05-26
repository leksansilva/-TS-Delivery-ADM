import React from 'react';
import Content from '../../components/Content';
import RequestTemplate from './RequestTemplate';



export default function RequestsNaoEntregue(){

  return(
    <RequestTemplate
      content={()=><Content name="Entregues"/>}
    
    
    />
  )
}