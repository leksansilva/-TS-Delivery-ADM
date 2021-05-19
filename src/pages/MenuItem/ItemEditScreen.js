import React from 'react';
import Content from '../../components/Content';
import MenuItemTemplate from './MenuItemTemplate';



export default function MenuItemScreen(){

  return(
    <MenuItemTemplate
      content={()=><Content name="ItensEdit"/>}
    
    />
  )
}