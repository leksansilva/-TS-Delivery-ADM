import React from 'react';

import RegisterTemplate from './RegisterTemplate';
import CardGrid from '../../components/CardGrid'
import { useParams } from 'react-router';



export default function RegisterCategory(){
  
  const { id } = useParams();
  
  return(
    <RegisterTemplate
      content={()=><CardGrid
        id={id}
        />}
    /> 
  )
}
