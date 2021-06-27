import React, {useEffect, useState} from 'react';
import api from './api';
import { logout, getToken} from './auth';
import { Route, Redirect } from 'react-router-dom';
import Loading from '../components/Loading';



export default function Wauth ({component: Component, ...rest}){
    const [redirect, setRedirect ] = useState(false);
    const [loading, setLoading ] = useState(true);
    

    useEffect(() =>{
       
       
        async function verify(){
            const headers = {'Authorization':`Bearer ${getToken()}`};
           
            await api.get('/api/Auth', {headers:headers}).then( res =>{
                if(res.status===200){
                    setLoading(false);
                    setRedirect(false);
                }
            }).catch(err =>{
                if(err){
                    console.log(err)
                    logout();
                    setLoading(false);
                    setRedirect(true);
                }
            })
        }
        verify();
        
    },[])
    return(
        loading?<Loading />:<Route{...rest}
        render={props => !redirect?(
            <Component {...props}/>
        ):<Redirect to={{pathname:"/Login", state:{from: props.location}}}/>

        }
        />
    )
}