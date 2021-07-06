import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { green, red } from '@material-ui/core/colors';
<<<<<<< HEAD
import {  Button, Dialog, DialogActions, DialogTitle, Grid,   ImageList,   Paper, Tooltip } from '@material-ui/core';
=======
import {  Button, Dialog, DialogActions, DialogTitle, Grid,  GridList,  Paper, Tooltip } from '@material-ui/core';
>>>>>>> parent of 0105d14 (Carousel)
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import api from '../../services/api';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { getToken } from '../../services/auth';

<<<<<<< HEAD
=======

>>>>>>> parent of 0105d14 (Carousel)
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


export default function FoodList() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const handleOpen= () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };
  const [foods, setFoods] = useState([]);
  const headers = {'Authorization':`Bearer ${getToken()}`};
 
  useEffect (() => {
    api.get('api/Foods',  headers).then((response) => {
      setFoods(response.data);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleDelete(id){
    const headers = {'Authorization':`Bearer ${getToken()}`};
    const result = await api.delete(`api/Foods?id=${id}`,{headers: headers});
    console.log(id)
    if(result.status === 200){
      history.push('/');
      history.push('/Cadastrar/Pratos');
    }else{
      alert("Ocorreu um erro, por favor, tente novamente!");
    }
    setOpen(false);
  }
  
  return (
    <Grid   item container xs sm spacing={1} >
      {foods.map(({id, available,name,categoryId, images, price})=>(
        
        <Grid key={id} item xs sm={4} >
          
          <Card  className={classes.root}>
          <Paper elevation={4}>
            <CardHeader
              action={
                <Tooltip title={available?'Habilitado':'Desabilitado'}>
                 {available?<Visibility/>:<VisibilityOff/>}
                </Tooltip>
              }
              title={name}
              subheader={categoryId}
            />       
<<<<<<< HEAD
            <ImageList className={classes.media} cols={1}>
            {images.map((image) => (
=======
              <GridList className={classes.media} cols={1} >
                {images.map((image) => (
>>>>>>> parent of 0105d14 (Carousel)
                  <CardMedia
                  key={image.id}
                  
                  image={image.type+","+image.data}
                  title="Paella dish"
                  />    
<<<<<<< HEAD
            ))} 
            </ImageList >               
=======
                )) }
             
            </GridList>
>>>>>>> parent of 0105d14 (Carousel)
            <CardContent>
              <Typography variant="h6" component="p">
                {price.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}
              </Typography>  
          
            </CardContent>
            <CardActions disableSpacing>
              <Button onClick={handleOpen} size="large" color="secondary">Apagar</Button>
              <Button size="large" component={Link} to={`/Cadastrar/Prato/${id}`} color="primary">Editar</Button>
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
                <Button onClick={() => handleDelete(id)} color="primary" autoFocus>
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
