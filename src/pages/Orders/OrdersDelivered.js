import React, { useEffect, useState } from "react";
import OrdersTemplate from "./OrdersTemplate";
import OrderList from "../../components/lists/OrderList";
import api from "../../services/api";
import { getToken } from "../../services/auth";
import Loading from "../../components/Loading";

export default function OrdersDelivered() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState(false);
  useEffect(() => {
    const headers = { Authorization: `Bearer ${getToken()}` };
    api.get("/api/Orders", { headers: headers }).then((response) => {
      if (response.status === 200) {
        setOrders(response.data);
        setLoading(false);
      }
    });
    return () => {
      setOrders([]);
    };
  }, [state]);

  return (
    <OrdersTemplate
      count={orders}
      orders={() =>
        !loading ? (
          <OrderList
            orders={orders
              .filter((order) => order.deliveryStatusId === 5 && order)
              .flatMap((order) => order)}
            newStatus={9}
            newEvent={function newEvent(ev) {
              if (ev) {
                setState(!state);
                setLoading(true);
              }
            }}
            anotherOption={10}
            button1="Ver Avaliação"
            button2="Apagar Pedido"
          />
        ) : (
          <Loading />
        )
      }
    />
  );
}
