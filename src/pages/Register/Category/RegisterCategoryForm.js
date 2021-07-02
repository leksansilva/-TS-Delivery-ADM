import React from 'react';

import RegisterTemplate from '../RegisterTemplate';
import { useParams } from 'react-router-dom';
import FormRegister from '../../../components/FormRegisterCategory';



export default function RegisterCategoryForm(){
  

  const { id } = useParams();
  
  return(
    <RegisterTemplate
      register={()=><FormRegister
        id={id ? Number.parseInt(id, 10) : null} 
        />}
    /> 
  )
}