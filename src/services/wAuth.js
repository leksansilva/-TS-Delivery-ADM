import React, {useEffect, useState} from 'react';
import api from './api';
import { Route, Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import { logout, 
         getToken, 
         expiration, 
         refreshToken, 
         expirationRefreshToken,
         login,
         setExpiration,
         setRefreshToken,
         setExpirationRefreshToken} from './auth';



export default function Wauth ({component: Component, ...rest}){
    const [redirect, setRedirect ] = useState(false);
    const [loading, setLoading ] = useState(true); 
   

    
    useEffect(() =>{
        async function verify(){
            const token = {
                token: getToken(),
                expirationToken: expiration(),
                refreshToken: refreshToken(),
                expirationRefreshToken: expirationRefreshToken(),
            };
            const headers = {'Authorization':`Bearer ${getToken()}`};
            const dateNowUtc = new Date(new Date() + 5 * 60000);
            const expToken = new Date(token.expirationToken);
            const expRefreshToken = new Date(token.expirationRefreshToken);
            await api.get('/api/Auth', {headers:headers}).then( res =>{
                console.log(getToken());
                if(res.status===200){
                    setLoading(false);
                    setRedirect(false);
                    if (expToken <= dateNowUtc) {

                        if (expRefreshToken > dateNowUtc){
                            api.post('api/Auth/Renew', token, {headers:headers})
                            .then(response => {
                                if(response.status===200){
                                    console.log(response.status + "ok!")
                                    login(response.data.token);
                                    setExpiration(response.data.expiration);
                                    setRefreshToken(response.data.refreshToken);
                                    setExpirationRefreshToken(response.data.expirationRefreshToken);
                                }
                            })
                        }else{
                            logout();
                            setLoading(false);
                            setRedirect(true); 
                        }        
                    }
                }    
            }).catch(err =>{
                console.log(err);
                logout();
                setLoading(false);
                setRedirect(true);
                
            });
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