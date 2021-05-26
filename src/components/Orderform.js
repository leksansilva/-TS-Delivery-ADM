import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
//import GridList from '@material-ui/core/GridList';
import imagem from '../assets/images/default.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    marginBottom: '20px',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const requests= [

    {id: "temaki1" , Preço: "15R$"},
    {id: "temaki2" , Preço: "15R$"},
    {id: "temaki3" , Preço: "15R$"},
    {id: "temaki4" , Preço: "15R$"},
    {id: "temaki5" , Preço: "15R$"},
    {id: "temaki6" , Preço: "15R$"},
    {id: "temaki7" , Preço: "15R$"},
    {id: "temaki8" , Preço: "15R$"},
    {id: "temaki9" , Preço: "15R$"},
        
]
export default function ComplexGrid() {
  const classes = useStyles();

  return (
    //<GridList>
 
    <div className={classes.root}>
    {requests.map(({ id, Preço}) => (
      <Paper className={classes.paper} elevation= {3} xs= {12} spacing={2} >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={imagem} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {id}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  tipo
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <ButtonGroup  aria-label="outlined primary button group">
                    <Button color="primary">Aceitar</Button>
                    <Button color="secondary">Recusar</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{Preço}</Typography>
            </Grid>
          </Grid>
        </Grid>

      </Paper> 
    ))}  
    </div>
    
    //</GridList>   
  );
}