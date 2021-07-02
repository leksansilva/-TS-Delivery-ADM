import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import  { orders } from '../teste/orders';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});



export default function Deposits() {
  
  const classes = useStyles();
  function accumulate(tam,i,accum,status){
    if(i<tam){  
      if(orders[i].status===status){    
        return accumulate(tam,i+1,accum+orders[i].price,status);
      }else{
        return accumulate(tam,i+1,accum,status);
      }
    }
    
      return accum;
  }
  function count(tam,i,cont,status){
    if(i<tam){  
      if(orders[i].status===status){    
        return count(tam,i+1,cont+1,status);
      }else{
        return count(tam,i+1,cont,status);
      }
    }
    
      return cont;
  }

  return (
    <React.Fragment>
      <Title>Vendas por delivery</Title>
      <Typography component="p" variant="h4">
        {accumulate(orders.length,0,0,5)}R$
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {count(orders.length,0,0,5)} pedidos Entregues!
      </Typography>
      <div>
      </div>
    </React.Fragment>
  );
}