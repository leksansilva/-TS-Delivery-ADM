import React from 'react';
import Content from '../../components/Content';
import RegisterTemplate from './RegisterTemplate';



export default function MenuItemScreenRegister(){

  return(
    <RegisterTemplate
      content={()=><Content name="RegisterItens"/>}
    
    />
  )
}