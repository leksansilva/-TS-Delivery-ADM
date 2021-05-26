import React from 'react';
import Content from '../../components/Content';
import RequestTemplate from './RequestTemplate';



export default function RequestProntos(){

  return(
    <RequestTemplate
      content={()=><Content name="Prontos"/>}
    
    
    />
  )
}