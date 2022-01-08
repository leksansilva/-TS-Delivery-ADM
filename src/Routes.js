import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Notify } from "./services/apiConnect";

//Pedidos
import BackOrders from "./pages/Orders/BackOrders";
import OrdersInProgress from "./pages/Orders/OrdersInProgress";
import OrdersWentOutForDelivery from "./pages/Orders/OrdersWentOutForDelivery";
import ReadyOrders from "./pages/Orders/ReadyOrders";
import OrdersDelivered from "./pages/Orders/OrdersDelivered";
import OrdersNotDelivered from "./pages/Orders/OrdersNotDelivered";
import OrdersCanceled from "./pages/Orders/OrdersCanceled";

//Home
import Home from "./pages/Home/Home";

//Cadastro
import RegisterCategory from "./pages/Register/Category/RegisterCategory";
import RegisterCategoryForm from "./pages/Register/Category/RegisterCategoryForm";
import RegisterFood from "./pages/Register/Food/RegisterFood";
import RegisterFoodForm from "./pages/Register/Food/RegisterFoodForm";
import RegisterIngredient from "./pages/Register/Ingredient/RegisterIngredient";
import RegisterIngredientForm from "./pages/Register/Ingredient/RegisterIngredientForm";

//Cliente
import UserClient from "./pages/User/UserClient";
import UserClientData from "./pages/User/UserClientData";

//Feedback
import Feedback from "./pages/Feedback/Feedback";

//Login
import Login from "./pages/Login/Login";

//Autenticação para uso das rotas
import PrivateRoute from "./services/wAuth";

export default function Routes() {
 Notify();

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Login" component={Login} />

        {/* Pedidos */}
        <PrivateRoute path="/" exact to component={Home} />
        <PrivateRoute path="/Pedidos/EmEspera" component={BackOrders} />
        <PrivateRoute
          path="/Pedidos/EmAndamento"
          component={OrdersInProgress}
        />
        <PrivateRoute
          path="/Pedidos/SaiuParaEntrega"
          component={OrdersWentOutForDelivery}
        />
        <PrivateRoute path="/Pedidos/Pronto" component={ReadyOrders} />
        <PrivateRoute path="/Pedidos/Entregue" component={OrdersDelivered} />
        <PrivateRoute
          path="/Pedidos/NaoEntregue"
          component={OrdersNotDelivered}
        />
        <PrivateRoute path="/Pedidos/Cancelado" component={OrdersCanceled} />

        {/* Categorias */}
        <PrivateRoute
          path="/Cadastrar/Categorias"
          component={RegisterCategory}
        />
        <PrivateRoute
          path="/Cadastrar/Categoria/:id"
          component={RegisterCategoryForm}
        />
        <PrivateRoute
          path="/Cadastrar/Categoria/Nova"
          component={RegisterCategoryForm}
        />

        {/* Pratos */}
        <PrivateRoute path="/Cadastrar/Comidas" component={RegisterFood} />
        <PrivateRoute
          path="/Cadastrar/Comida/:id"
          exact
          to
          component={RegisterFoodForm}
        />

        <PrivateRoute
          path="/Cadastrar/Comida/Nova"
          component={RegisterFoodForm}
        />
        {/* Adicionais */}
        <PrivateRoute
          path="/Cadastrar/Adicionais"
          component={RegisterIngredient}
        />
        <PrivateRoute
          path="/Cadastrar/Adicional/:id"
          component={RegisterIngredientForm}
        />
        <PrivateRoute
          path="/Cadastrar/Adicional/Novo"
          component={RegisterIngredientForm}
        />
        {/* Clientes */}
        <PrivateRoute path="/Usuários" component={UserClient} />
        <PrivateRoute path="/Usuário/:id" component={UserClientData} />

        {/* FeedBback */}
        <PrivateRoute path="/Feedback" component={Feedback} />
      </Switch>
    </BrowserRouter>
  );
}
