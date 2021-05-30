import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


//Pedidos
import RequestsEmEspera from './pages/Request/RequestsEmEspera';
import RequestsEmAndamento from './pages/Request/RequestsEmAndamento';
import RequestsFinalizado from './pages/Request/RequestsFinalizado';
import RequestsSaiuParaEntrega from'./pages/Request/RequestsSaiuParaEntrega';
import RequestsPronto from './pages/Request/RequestsPronto';
import RequestsEntregue from './pages/Request/RequestsEntregue';
import RequestsNaoEntregue from './pages/Request/RequestsNaoEntregue';
import RequestsCancelado from './pages/Request/RequestsCancelado';



//Cadastro
import RegisterCategory from './pages/Register/RegisterCategory';
import RegisterFood from './pages/Register/RegisterFood';
import RegisterIngredient from './pages/Register/RegisterIngredient';



import UserClient from './pages/User/UserClient';

import Feedback from './pages/Feedback/Feedback';

export default function Routes(){
    return(

        <BrowserRouter>
     
            <Switch>
                
                <Route path="/" exact to component = {RequestsEmEspera}/>
                <Route path="/EmAndamento" component = {RequestsEmAndamento}/>
                <Route path="/SaiuParaEntrega" component = {RequestsSaiuParaEntrega}/>
                <Route path="/Pronto" component = {RequestsPronto}/>
                <Route path="/Entregue" component = {RequestsEntregue}/>
                <Route path="/NaoEntregue" component ={RequestsNaoEntregue}/>
                <Route path="/Finalizado" component = {RequestsFinalizado}/>
                <Route path="/Cancelado" component = {RequestsCancelado}/>


                <Route path="/Cadastrar/Categoria" component = {RegisterCategory}/>
                <Route path="/Cadastrar/Comida" component = {RegisterFood}/>
                <Route path="/Cadastrar/Ingrediente" component = {RegisterIngredient}/>


                <Route path="/Usuario/Cliente" component = {UserClient}/>
                
                <Route path= "/Feedback" component = {Feedback}/>

            </Switch>
        </BrowserRouter>
   
    );
}