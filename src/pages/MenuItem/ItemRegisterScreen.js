import React from 'react';
import Content from '../../components/Content';
import MenuItemTemplate from './MenuItemTemplate';



export default function MenuItemScreenRegister(){

  return(
    <MenuItemTemplate
      content={()=><Content name="RegisterItens"/>}
    
    />
  )
}