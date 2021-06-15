import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


//Pedidos
import OrdersEmEspera from './pages/Orders/OrdersEmEspera';
import OrdersEmAndamento from './pages/Orders/OrdersEmAndamento';
import OrdersFinalizado from './pages/Orders/OrdersFinalizado';
import OrdersSaiuParaEntrega from'./pages/Orders/OrdersSaiuParaEntrega';
import OrdersPronto from './pages/Orders/OrdersPronto';
import OrdersEntregue from './pages/Orders/OrdersEntregue';
import OrdersNaoEntregue from './pages/Orders/OrdersNaoEntregue';
import OrdersCancelado from './pages/Orders/OrdersCancelado';


import Home from './pages/Home/Homepage';

//Cadastro
import RegisterCategory from './pages/Register/RegisterCategory';
import RegisterCategoryForm from './pages/Register/RegisterCategoryForm';

import RegisterFood from './pages/Register/RegisterFood';
import RegisterIngredient from './pages/Register/RegisterIngredient';




import UserClient from './pages/User/UserClient';

import Feedback from './pages/Feedback/Feedback';



export default function Routes(){
    return(

        <BrowserRouter>
     
            <Switch>
                
                <Route path="/" exact to component = {Home}/>
                <Route path="/Pedidos/EmEspera" component = {OrdersEmEspera}/>
                <Route path="/Pedidos/EmAndamento" component = {OrdersEmAndamento}/>
                <Route path="/Pedidos/SaiuParaEntrega" component = {OrdersSaiuParaEntrega}/>
                <Route path="/Pedidos/Pronto" component = {OrdersPronto}/>
                <Route path="/Pedidos/Entregue" component = {OrdersEntregue}/>
                <Route path="/Pedidos/NaoEntregue" component ={OrdersNaoEntregue}/>
                <Route path="/Pedidos/Finalizado" component = {OrdersFinalizado}/>
                <Route path="/Pedidos/Cancelado" component = {OrdersCancelado}/>


                <Route path="/Cadastrar/Categorias" component = {RegisterCategory}/>
                <Route path="/Cadastrar/Categoria/:id" component = {RegisterCategoryForm}/>
                <Route path="/Cadastrar/Categoria/Nova" component = {RegisterCategoryForm}/>

                <Route path="/Cadastrar/Comidas" component = {RegisterFood}/>
                <Route path="/Cadastrar/Ingredientes" component = {RegisterIngredient}/>


                <Route path="/Usuario/Clientes" component = {UserClient}/>
                
                <Route path= "/Feedback" component = {Feedback}/>

            </Switch>
        </BrowserRouter>
   
    );
}