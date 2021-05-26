import React from 'react';
import Content from '../../components/Content';
import RequestTemplate from './RequestTemplate';



export default function RequestCancelado(){

  return(
    <RequestTemplate
      content={()=><Content name="Cancelado"/>}
    
    
    />
  )
}