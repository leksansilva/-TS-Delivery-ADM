import React from 'react';

import RegisterTemplate from '../RegisterTemplate';
import CategoryList from '../../../components/CategoryList'




export default function RegisterCategory(){
  
 
  
  return(
    <RegisterTemplate
      register={()=><CategoryList/>}
    /> 
  )
}
