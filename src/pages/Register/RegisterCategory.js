import React from 'react';

import RegisterTemplate from './RegisterTemplate';
import CardGrid from '../../components/CardGrid'




export default function RegisterCategory(){
  
 
  
  return(
    <RegisterTemplate
      content={()=><CardGrid
        />}
    /> 
  )
}
