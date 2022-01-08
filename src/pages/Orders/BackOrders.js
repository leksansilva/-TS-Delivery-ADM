import React, { useEffect, useState } from "react";
import OrdersTemplate from "./OrdersTemplate";
import OrderList from "../../components/lists/OrderList";
import api from "../../services/api";
import { getToken } from "../../services/auth";
import Loading from "../../components/Loading";




export default function BackOrders() {
  const [orders, setOrders] = useState([]);
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    const headers = { Authorization: `Bearer ${ getToken()}` };
    api.get("/api/Orders", { headers }).then((response) => {
      setLoading(false);
      if (response.status === 200) {
        setOrders(response.data);
      }
    });

    return () => {
      setLoading(false);
      setOrders([]);
    };
  }, [state]);


  return (
    <OrdersTemplate
      count={orders}
      orders={() =>
        loading ? (
          <Loading />
        ) : (
          <OrderList
            orders={orders
              .filter((order) => order.deliveryStatusId === 1 && order)
              .flatMap((order) => order)}
            newEvent={function newEvent(ev) {
              if (ev) {
                setState(!state);
              }
            }}
            newStatus={2}
            anotherOption={7}
            button1="Aceitar"
            button2="Recusar"
          />
        )
      }
    />
  );
}
