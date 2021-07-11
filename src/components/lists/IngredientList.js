import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {  Dialog, DialogActions, DialogTitle, Fab, Grid } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { Link, useHistory } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import api from '../../services/api';
import Loading from '../Loading';
import NoResults from '../NoResults';
import { getToken } from '../../services/auth';

const useStyles = makeStyles((theme)=> ({
  root: {
    width: 275,
    marginBottom:"20px",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardGrid: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    diplay: 'flex',
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
}));

  
export default function Ingredients() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [ingredients, SetIngredients] = useState([]);
  const [loading, setLoading ] = useState(true);
  const [info, setInfo] = useState(true);
  const history = useHistory();
  const handleOpen= () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };
  useEffect (() => {
    api.get('/api/Ingredients').then((response) => {
      if(response.status===200){
        SetIngredients(response.data);
        setLoading(false);
      }
      if(response.data.length===0){
        setInfo(false);
      }else{
        setInfo(true);
      }
    });
  }, []);
  async function handleDelete(id){
    const headers = {'Authorization':`Bearer ${getToken()}`};
    const result = await api.delete(`api/Ingredients?id=${id}`,{headers: headers});
    
    if(result.status === 200){
      history.push('/');
      history.push('/Cadastrar/Ingredientes');
    }else{
      alert("Ocorreu um erro, por favor, tente novamente!");
    }
    setOpen(false);
  }

  return (
    <Grid   item container xs sm spacing={1} >
        {loading?<Loading />:info?
        ingredients.map((ingredient)=>(
        
          <Grid  key={ingredient.id} item xs sm={4} >
            <Paper elevation={1} className={classes.root} >
              <Card key={ingredient.id} variant="outlined">
              <CardContent>
                  <Typography variant="h5" component="h2">
                    {ingredient.name}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {ingredient.unity}
                  </Typography>
                  <Typography variant="body1" component="p">
                    {ingredient.price.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="large" onClick={handleOpen} color="secondary">Apagar</Button>
                  <Button size="large" component={Link} to={`/Cadastrar/Ingrediente/${ingredient.id}`} color="primary">Editar</Button>
              </CardActions>
              </Card>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                
                >
                <DialogTitle id="alert-dialog-title">  Deseja realmente apagar esse Ingrediente?</DialogTitle>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Não
                  </Button>
                  <Button onClick={() => handleDelete(ingredient.id)} color="primary" autoFocus>
                    Sim
                  </Button>
                </DialogActions>
              </Dialog>
            </Paper>
          </Grid>
          
        )) : <NoResults name={'Ingredientes'}/>};
        {!loading&&(
          <Fab  aria-label="add" component={Link} to={('Ingrediente/Novo')} className={classes.floatbutton}>
             
                  <AddIcon/>
          
            </Fab>)}
    </Grid>
  );
}