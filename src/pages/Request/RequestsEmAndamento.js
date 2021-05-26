import React from 'react';
import Content from '../../components/Content';
import RequestTemplate from './RequestTemplate';



export default function RequestsScreenemAndamento(){

  return(
    <RequestTemplate
      content={()=><Content name="Em Andamento"/>}
    
    />
  )
}