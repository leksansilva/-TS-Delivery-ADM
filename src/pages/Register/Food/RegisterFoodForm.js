import React from 'react';

import RegisterTemplate from '../RegisterTemplate';
import { useParams } from 'react-router-dom';
import FormRegisterFood from '../../../components/forms/FormRegisterFood';


export default function RegisterFoodForm(){
 
  const { id } = useParams();
  
  return(
    <RegisterTemplate
      register={()=><FormRegisterFood
        id={id ? Number.parseInt(id, 10) : null} 
        />}
    
    />
  )
}