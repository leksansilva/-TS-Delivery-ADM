import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button} from '@material-ui/core';
import { green } from '@material-ui/core/colors';


// Generate Order Data




const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  color:{
   color: green[600],
  }
}));

export default function Orders({users}) {
  const classes = useStyles();
  return (
    <React.Fragment>
    
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align='center'>Nome</TableCell>
            <TableCell align='center'>E-mail</TableCell>
            <TableCell align='center'>Opções</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row.id}>
              <TableCell align='center'>{row.name}</TableCell>
              <TableCell align='center'>{row.email}</TableCell>
              <TableCell align="center">
                    <Button className={classes.color} >Dados</Button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
