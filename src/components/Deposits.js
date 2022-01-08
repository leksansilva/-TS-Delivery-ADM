import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits({ orders }) {
  const classes = useStyles();

  const count = orders
    .filter((order) => order.deliveryStatusId === 5)
    .flatMap((order) => order);

  let acummulate = 0;
  var i = 0;
  for (i; i < count.length; i++) {
    acummulate = acummulate + count[i].price;
  }

  return (
    <React.Fragment>
      <Title>Vendas por delivery</Title>
      <Typography component="p" variant="h4">
        {acummulate.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {count.length} pedidos Entregues!
      </Typography>
      <div></div>
    </React.Fragment>
  );
}
