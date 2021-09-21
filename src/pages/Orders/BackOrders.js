import React, { useState } from "react";
import OrdersTemplate from "./OrdersTemplate";
import OrderList from "../../components/lists/OrderList";
import api from "../../services/api";
import { getToken } from "../../services/auth";

import useRecursiveTimeout from "../../components/utils/useRecursiveTimeout";

export default function BackOrders() {
  const [orders, setOrders] = useState([]);
  const [state, setState] = useState(false);
  useRecursiveTimeout(async () => {
    const headers = { Authorization: `Bearer ${getToken()}` };
    await api.get("/api/Orders", { headers: headers }).then((response) => {
      if (response.status === 200) {
        setOrders(response.data);
      }
    });
    return () => {
      setOrders([]);
    };
  }, 500);
  return (
    <OrdersTemplate
      count={orders}
      orders={() => (
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
      )}
    />
  );
}
