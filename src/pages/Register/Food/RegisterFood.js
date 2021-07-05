import React from 'react';
import FoodList from '../../../components/lists/FoodList';
import RegisterTemplate from '../RegisterTemplate';



export default function RegisterFood(){

  return(
    <RegisterTemplate
      register={()=><FoodList name="Itens"/>}
    
    />
  )
}