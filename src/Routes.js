import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/RequestsScreen';

//Usuários
import UserList from './pages/User/UsersListScreen';
import UserEdit from './pages/User/UserEditScreen';

//Itens
import ItensList from './pages/MenuItem/ItensListScreen';
import ItemEdit from './pages/MenuItem/ItemEditScreen';
import ItemRegister from './pages/MenuItem/ItemRegisterScreen';

export default function Routes(){
    return(

        <BrowserRouter>
     
            <Switch>
                <Route path="/" exact component = {Home}/>
                <Route path="/UsersList" exact component = {UserList}/>
                <Route path="/UserEdit/:IdUser" exact component = {UserEdit}/>

                <Route path="/ItensList" exact component = {ItensList}/>
                <Route path="/ItemEdit/:IdItem" exact component = {ItemEdit}/>
                <Route path="/ItemRegister" exact component = {ItemRegister}/>
            </Switch>
        </BrowserRouter>
   
    );
}