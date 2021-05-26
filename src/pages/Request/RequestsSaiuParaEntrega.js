import React from 'react';
import Content from '../../components/Content';
import RequestTemplate from './RequestTemplate';



export default function RequestSaiuParaEntrega(){

  return(
    <RequestTemplate
      content={()=><Content name="Saiu Para Entrega"/>}
    
    
    />
  )
}