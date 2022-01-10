import React from "react";

import Title from "./Title";
import {
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

export default function NewOrders({ orders }) {



  const count = orders
  .filter((order) => order.deliveryStatusId === 1)
  .flatMap((order) => order);
  return (
    <React.Fragment>
       <Badge
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    badgeContent={count.length}
                    color="secondary"
                  ><Title>Pedidos de Hoje</Title></Badge>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Pedido</TableCell>
            <TableCell>Cliente</TableCell>
            <TableCell>Endereço</TableCell>
            <TableCell align="right">Preço</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders
            .map((order) =>
              order.deliveryStatusId === 1 ? (
                <TableRow key={order.id}>
                  <TableCell>
                    {order.suborders.length > 0
                      ? order.suborders.length > 1
                        ? order.suborders[0].food.name + " e outros"
                        : order.suborders[0].food.name
                      : "ainda não listado"}
                  </TableCell>
                  <TableCell>{order.user.name}</TableCell>
                  <TableCell>
                    {order.address.neighborhood} - {order.address.state},{" "}
                    {order.address.number}
                  </TableCell>
                  <TableCell align="right">
                    {order.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </TableCell>
                </TableRow>
              ) : (
                <TableRow key={order.id}></TableRow>
              )
            )
            .reverse()}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
