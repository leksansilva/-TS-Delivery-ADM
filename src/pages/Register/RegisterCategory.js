import React,{ useEffect, useState } from 'react';
import RegisterTemplate from './RegisterTemplate';
import RegisterList from '../../components/RegisterList'
import api from '../../services/api';



export default function MenuItemScreen(){
  const [categories, setCategories] = useState([]);

  useEffect (() => {
    api.get('/api/Categories').then((response) => {
      setCategories(response.data)
    });
  }, []);

  
  
  return(
    <RegisterTemplate
      content={()=><RegisterList
        categories={categories}
        onClickDelete={() => console.log('Delete')} 
        link='/Cadastrar/Categoria'/>}
    /> 
  )
}
