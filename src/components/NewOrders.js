import React from 'react';


import Title from './Title';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import  { orders } from '../teste/orders';
// Generate Sales Data




export default function NewOrders() {


  return (
    <React.Fragment>
      <Title>Pedidos de Hoje</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Pedido</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Endereço</TableCell>
            <TableCell align="right">R$</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            order.status===1?
            <TableRow key={order.id}>
              <TableCell>{order.order}</TableCell>
              <TableCell>{order.name}</TableCell>
              <TableCell>{order.address}</TableCell>
              <TableCell align="right">{order.price}</TableCell>
            </TableRow>:<TableRow key={order.id}></TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}