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
import image from '../../assets/images/default.jpg'
import {  Button, Dialog, DialogActions, DialogTitle, Grid,  Paper, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import api from '../../services/api';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
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

 
  useEffect (() => {
    api.get('api/Foods').then((response) => {
      setFoods(response.data);
    });
  }, []);
  
 
  
  
  return (
    <Grid   item container xs sm spacing={1} >
      {foods.map((food)=>(
        
        <Grid key={food.id} item xs sm={4} >
          
          <Card  className={classes.root}>
          <Paper elevation={4}>
            <CardHeader
              action={
                <Tooltip title={food.available?'Habilitado':'Desabilitado'}>
                 {food.available?<Visibility/>:<VisibilityOff/>}
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
                {food.price.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}
              </Typography>  
          
            </CardContent>
            <CardActions disableSpacing>
              <Button onClick={handleOpen} size="large" color="secondary">Apagar</Button>
              <Button size="large" component={Link} to={`/Cadastrar/Prato/${food.id}`} color="primary">Editar</Button>
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
