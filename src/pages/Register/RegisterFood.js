import React from 'react';
import Form from '../../components/Form';
import RegisterTemplate from './RegisterTemplate';



export default function MenuItemScreen(){

  return(
    <RegisterTemplate
      content={()=><Form name="Itens"/>}
    
    />
  )
}