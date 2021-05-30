import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import imagem from '../assets/images/default.jpg';
import requests from '../teste/requests';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignContent: "center",
  },
  paper: {
    padding: theme.spacing(1),
    margin: 'auto',
    maxWidth: 300,
    
    marginLeft:'30px',
    marginBottom: '40px',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: "5px",
  },
  buttons:{
    alignContent: "center",
  },
  border:{
    marginLeft: "60px",
  }
}));


export default function OrderList(props) {
  const classes = useStyles();
  return (
    <Grid className={classes.root}  item container  >
  
    {requests.map(({id, Name, Preço, Adress}) => (  
      <Paper className={classes.paper} elevation= {4} key={id} >
        <Grid item container  xs= {12} >
          <Grid item  >
              <img className={classes.img} alt="complex" src={imagem} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs  >
              <Grid item container> 
              <Grid item xs sm={6} > 
                  <Typography  variant="h5">
                     {Name}
                   </Typography>
               </Grid>
               <Grid item  sm={6}>   
                  <Typography className={classes.border} variant="h6" >
                    {Preço}
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={12}>   
                <Typography variant="body2" gutterBottom>
                 Cliente:
                </Typography>
                </Grid>
                <Grid item xs={6} sm={12}> 
                <Typography variant= "body2" gutterBottom>
                Endereço: {Adress}
                </Typography>
                </Grid>
                <Grid item xs={6} sm>
                <Typography variant= "body2" gutterBottom>
                Telefone:
                </Typography>
                </Grid>
              </Grid>
              <Grid item align="center">
                <ButtonGroup className={classes.buttons}  aria-label="outlined primary button group">
                    <Button color="primary" disabled= {props.ability}>{props.button1}</Button>
                    <Button color="secondary">{props.button2}</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </Paper> 
    ))}  
    </Grid>  
  );
}