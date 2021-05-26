import React from 'react';
import Content from '../../components/Content';
import RegisterTemplate from './RegisterTemplate';



export default function MenuItemScreen(){

  return(
    <RegisterTemplate
      content={()=><Content name="ItensEdit"/>}
    
    />
  )
}