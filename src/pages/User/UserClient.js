import React from 'react';
import Content from '../../components/Content';
import UserTemplate from './UserTemplate';



export default function UserClient(){

  return(
    <UserTemplate
      content={()=><Content name="Cliente"/>}
    
    
    />
  )
}