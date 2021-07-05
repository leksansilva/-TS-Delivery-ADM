import React from 'react';

import RegisterTemplate from '../RegisterTemplate';

import { useParams } from 'react-router-dom';
import FormRegisterCategory from '../../../components/forms/FormRegisterCategory';


export default function RegisterCategoryForm(){
  

  const { id } = useParams();


  return(
    <RegisterTemplate  
      register={()=><FormRegisterCategory
        id={id ? Number.parseInt(id, 10) : null} 
        />}
    /> 
  )
}