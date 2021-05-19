import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


//Pedidos
import RequestsScreen from './pages/Request/RequestsScreen';
import RequestsScreenemAndamento from './pages/Request/RequestsScreenemAndamento';
import RequestsScreenFinalizados from './pages/Request/RequestsScreenFinalizados';



//Cadastro
import ItensList from './pages/MenuItem/ItensListScreen';
import ItemEdit from './pages/MenuItem/ItemEditScreen';
import ItemRegister from './pages/MenuItem/ItemRegisterScreen';

export default function Routes(){
    return(

        <BrowserRouter>
     
            <Switch>
                <Route path="/" exact to component = {RequestsScreen}/>
                <Route path="/EmAndamento" component = {RequestsScreenemAndamento}/>
                <Route path="/Saiu"/>
                <Route path="/Entregues"/>
                <Route path="/NãoEntregues"/>
                <Route path="/Finalizados" component = {RequestsScreenFinalizados}/>




                <Route path="/ItensList" component = {ItensList}/>
                <Route path="/ItemEdit/:IdItem" component = {ItemEdit}/>
                <Route path="/ItemRegister" component = {ItemRegister}/>
            </Switch>
        </BrowserRouter>
   
    );
}