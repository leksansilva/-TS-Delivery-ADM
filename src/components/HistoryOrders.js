import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

export default function HistoryOrders({ orders }) {

  return (
    <React.Fragment>
      <Title>Pedidos Entregues</Title>

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
          {orders.map((order) =>
            order.deliveryStatusId === 5 ? (
              <TableRow key={order.id}>
                <TableCell>
                  {" "}
                  {order.suborders.length > 0
                    ? order.suborders.length > 1
                      ? order.suborders[0].food.name + " e outros"
                      : order.suborders[0].food.name
                    : "ainda não listado"}
                </TableCell>
                <TableCell>{order.user.name}</TableCell>
                <TableCell>
                  {order.address.neighborhood}, {order.address.number}
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
          )}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
