import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


//Pedidos
import OrdersEmEspera from './pages/Orders/OrdersEmEspera';
import OrdersEmAndamento from './pages/Orders/OrdersEmAndamento';
import OrdersSaiuParaEntrega from'./pages/Orders/OrdersSaiuParaEntrega';
import OrdersPronto from './pages/Orders/OrdersPronto';
import OrdersEntregue from './pages/Orders/OrdersEntregue';
import OrdersNaoEntregue from './pages/Orders/OrdersNaoEntregue';
import OrdersCancelado from './pages/Orders/OrdersCancelado';


import Home from './pages/Home/Homepage';

//Cadastro
import RegisterCategory from './pages/Register/Category/RegisterCategory';
import RegisterCategoryForm from './pages/Register/Category/RegisterCategoryForm';

import RegisterFood from './pages/Register/Food/RegisterFood';
import RegisterFoodForm from './pages/Register/Food/RegisterFoodForm';
import RegisterIngredient from './pages/Register/RegisterIngredient';



//Cliente
import UserClient from './pages/User/UserClient';

//Feedback
import Feedback from './pages/Feedback/Feedback';

//Login
import Login from './pages/Login/Login';

import PrivateRoute from './services/wAuth';



export default function Routes(){
    return(

        <BrowserRouter>
     
            <Switch>

                <Route path="/Login" component = {Login}/>
                {/* Pedidos */}
                <PrivateRoute path="/" exact to component = {Home}/>
                <PrivateRoute path="/Pedidos/EmEspera" component = {OrdersEmEspera}/>
                <PrivateRoute path="/Pedidos/EmAndamento" component = {OrdersEmAndamento}/>
                <PrivateRoute path="/Pedidos/SaiuParaEntrega" component = {OrdersSaiuParaEntrega}/>
                <PrivateRoute path="/Pedidos/Pronto" component = {OrdersPronto}/>
                <PrivateRoute path="/Pedidos/Entregue" component = {OrdersEntregue}/>
                <PrivateRoute path="/Pedidos/NaoEntregue" component ={OrdersNaoEntregue}/>
                <PrivateRoute path="/Pedidos/Cancelado" component = {OrdersCancelado}/>

                {/* Categorias */}
                <PrivateRoute path="/Cadastrar/Categorias" component = {RegisterCategory}/>
                <PrivateRoute path="/Cadastrar/Categoria/:id" component = {RegisterCategoryForm}/>
                <PrivateRoute path="/Cadastrar/Categoria/Nova" component = {RegisterCategoryForm}/>

                {/* Pratos */}
                <PrivateRoute path="/Cadastrar/Pratos" component = {RegisterFood}/>
                <PrivateRoute path="/Cadastrar/Prato/Novo" component = {RegisterFoodForm}/>

                {/* Ingredientes */}
                <PrivateRoute path="/Cadastrar/Ingredientes" component = {RegisterIngredient}/>

                {/* Clientes */}
                <PrivateRoute path="/Usuario/Clientes" component = {UserClient}/>
                
                {/* FeedBback */}
                <PrivateRoute path= "/Feedback" component = {Feedback}/>

            </Switch>
        </BrowserRouter>
   
    );
}