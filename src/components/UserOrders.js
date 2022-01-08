import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
// Generate Order Data



export default function UserOrders({ orders, title, addresses }) {
  const searchAddresses = (id) => {
    const address = addresses.find((i) => i.id === id);
    return `${address.neighborhood} -${address.state},
    nº ${address.number}`;
  };
  const status = {
    1: "Em espera",
    2: "Em Andamento",
    3: "Pronto",
    4: "Saiu para Entrega",
    5: "Entregue",
    6: "Não Entregue",
    7: "Cancelado",
  };
  return (
    <React.Fragment>
      <Title>{title}</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Status</TableCell>
            <TableCell>Endereço</TableCell>
            <TableCell align="right">Preço</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) =>
            order ? (
              <TableRow key={order.id}>
                <TableCell>{status[order.deliveryStatusId]}</TableCell>
                <TableCell>{searchAddresses(order.addressId)}</TableCell>
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
