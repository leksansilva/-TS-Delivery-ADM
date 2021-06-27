import React, { useEffect, useState } from 'react';
import Table from '../../components/Table';
import api from '../../services/api';
import { getToken } from '../../services/auth';
import UserTemplate from './UserTemplate';




export default function UserClient(){
  const [users, setUsers] = useState([]);
 
  useEffect (() => {
    const headers = {'Authorization':`Bearer ${getToken()}`};
    api.get('/api/Users', {headers:  headers}).then((response) => {
      setUsers(response.data)
  
    });
  }, []);
  return(
    <UserTemplate
      content={()=><Table users={users} name="Cliente"/>}
    
    
    />
  )
}