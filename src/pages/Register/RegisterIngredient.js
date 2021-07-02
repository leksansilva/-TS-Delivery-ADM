import React from 'react';
import Ingredients from '../../components/Ingredients';
import RegisterTemplate from './RegisterTemplate';



export default function MenuItemScreenRegister(){

  return(
    <RegisterTemplate
      register={()=><Ingredients name="RegisterItens"/>}
    
    />
  )
}