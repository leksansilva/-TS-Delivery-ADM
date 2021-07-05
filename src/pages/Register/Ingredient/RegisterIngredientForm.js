import React from 'react';
import RegisterTemplate from '../RegisterTemplate';
import {useParams} from 'react-router-dom';
import FormRegisterIngredient from '../../../components/forms/FormRegisterIngredient';


export default function RegisterIngredientForm(){

  const { id } = useParams();

  return(
    <RegisterTemplate
      register={()=><FormRegisterIngredient
        id={id ? Number.parseInt(id, 10) : null}
        name="RegisterItens"/>}
    
    />
  )
}