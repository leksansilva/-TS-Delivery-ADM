import React, { useEffect, useState } from 'react';
import Table from '../../components/Table';
import api from '../../services/api';
import UserTemplate from './UserTemplate';




export default function UserClientData(){
  const [users, setUsers] = useState([]);

  useEffect (() => {
    api.get('/api/Users').then((response) => {
      setUsers(response.data)
    });
  }, []);
  return(
    <UserTemplate
      content={()=><Table users={users} name="Cliente"/>}
    
    
    />
  )
}