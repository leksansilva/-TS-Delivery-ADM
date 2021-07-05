import React from 'react';
import Ingredients from '../../../components/lists/IngredientList';
import RegisterTemplate from '../RegisterTemplate';



export default function RegisterIngredient(){

  return(
    <RegisterTemplate
      register={()=><Ingredients name="RegisterItens"/>}
    
    />
  )
}