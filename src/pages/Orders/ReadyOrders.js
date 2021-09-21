import React, { useEffect, useState } from "react";
import OrdersTemplate from "./OrdersTemplate";
import OrderList from "../../components/lists/OrderList";
import api from "../../services/api";
import { getToken } from "../../services/auth";
import Loading from "../../components/Loading";

export default function ReadyOrders() {
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
              .filter((order) => order.deliveryStatusId === 3 && order)
              .flatMap((order) => order)}
            newEvent={function newEvent(ev) {
              if (ev) {
                setState(!state);
                setLoading(true);
              }
            }}
            newStatus={4}
            anotherOption={7}
            button1="Efetuar Entrega"
            button2="Cancelar"
          />
        ) : (
          <Loading />
        )
      }
    />
  );
}
