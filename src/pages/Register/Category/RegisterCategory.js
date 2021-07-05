import React from 'react';
import RegisterTemplate from '../RegisterTemplate';
import CategoryList from '../../../components/lists/CategoryList';


export default function RegisterCategory(){
  

  
  return(
    <RegisterTemplate 
      register={()=><CategoryList/>}
    /> 
  )
}
