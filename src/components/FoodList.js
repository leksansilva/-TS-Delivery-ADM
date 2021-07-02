import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { green, red } from '@material-ui/core/colors';
import image from '../assets/images/default.jpg'
import {  Button, Dialog, DialogActions, DialogTitle, Grid,  Paper, Switch, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import api from '../services/api';

//import { getToken } from '../services/auth';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    marginBottom: '20px',
    marginRight: '20px',
    flexGrow: 1,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  floatbutton: {
    bottom: theme.spacing(7),
    right: theme.spacing(7),
    position: 'fixed',
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    }, 
  },
  text:{
    right:theme.spacing(5),
  }
}));
/* function createData(id, name, price, available,categoryId) {
  return { id, name, price, available,categoryId };
} */
/* const foods = [
  createData(1,'Pizza',39.99, true, 'Salgados'),
  createData(2,'Fritas',39.99, false, 'Quentes'),
  createData(3,'Yakisoba',39.99, false, 'Quentes'),
  createData(4,'Feijoada',39.99, true, 'Quentes'),
  createData(5,'Frango Rush',39.99, true, 'Salgados'),
  createData(6,'Steak',39.99, true, 'Quentes'),


]; */

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen= () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };
  const [foods, setFoods] = useState([]);
  //const headers = {'Authorization':`Bearer ${getToken()}`};

 
  useEffect (() => {
    api.get('api/Foods').then((response) => {
      setFoods(response.data);
    });
  }, []);
  
 
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  
  return (
    <Grid   item container xs sm spacing={1} >
      {foods.map((food)=>(
        
        <Grid key={food.id} item xs sm={4} >
          
          <Card  className={classes.root}>
          <Paper elevation={4}>
            <CardHeader
              action={
                <Tooltip title="Habilitar/Desabilitar comida">
                  <Switch
                    checked={food.available}
                    onChange={handleChange}
                    color="primary"
                    name="checkedB"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                </Tooltip>
              }
              title={food.name}
              subheader={food.categoryId}
            />
            <CardMedia
              className={classes.media}
              image={image}
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="h6" component="p">
                {food.price} R$
              </Typography>  
          
            </CardContent>
            <CardActions disableSpacing>
              <Button onClick={handleOpen} size="small" color="secondary">Apagar</Button>
              <Button size="small" color="primary">Editar</Button>
            </CardActions>
            </Paper>
          </Card>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">  Deseja realmente apagar esse Prato?</DialogTitle>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Não
                </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                  Sim
                </Button>
              </DialogActions>
            </Dialog>
        </Grid> 
        
      ))}
      <Fab  aria-label="add" component={Link} to={('Prato/Novo')} className={classes.floatbutton}>
             
             <AddIcon />
     
       </Fab> 
    </Grid>
);
}
