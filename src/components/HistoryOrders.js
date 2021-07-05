import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import  { orders } from '../teste/orders';
// Generate Order Data







export default function HistoryOrders() {

  return (
    <React.Fragment>
      <Title>Pedidos Entregues</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Pedido</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Endereço</TableCell>
            <TableCell align="right">Preço</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {orders.map((order) => (
            order.status===5?
            <TableRow key={order.id}>
              <TableCell>{order.order}</TableCell>
              <TableCell>{order.name}</TableCell>
              <TableCell>{order.neighborhood}, {order.number}</TableCell>
              <TableCell align="right">{order.price.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</TableCell>
            </TableRow>:<TableRow key={order.id}></TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}