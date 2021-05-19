import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/RequestsScreen';
import Home2 from './pages/RequestsScreenemAndamento';
import Home3 from './pages/RequestsScreenFinalizados';

//Usuários
import UserList from './pages/User/UsersListScreen';
import UserListEmployee from './pages/User/UsersListScreenEmployee';
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
                <Route path="/emAndamento" exact component = {Home2}/>
                <Route path="/Finalizados" exact component = {Home3}/>

                <Route path="/UsersList" exact component = {UserList}/>
                <Route path="/UsersListEmployee" exact component = {UserListEmployee}/>
                <Route path="/UserEdit/:IdUser" exact component = {UserEdit}/>


                <Route path="/ItensList" exact component = {ItensList}/>
                <Route path="/ItemEdit/:IdItem" exact component = {ItemEdit}/>
                <Route path="/ItemRegister" exact component = {ItemRegister}/>
            </Switch>
        </BrowserRouter>
   
    );
}