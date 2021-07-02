import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import imagem from '../assets/images/default.jpg';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { green } from '@material-ui/core/colors';
import { Button, Card, CardActions, CardContent, CardMedia, Container, Dialog, DialogActions, DialogTitle} from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import api from '../services/api';
import { getToken } from '../services/auth';
import Loading from './Loading';
import NoResults from './NoResults';






const useStyles = makeStyles((theme) => ({
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
  root: {
    flexGrow: 1,
    alignContent: "center",
  },
  root2: {
    flexGrow: 1,
    display: 'block',
  },
  paper: {
    padding: theme.spacing(1),
    margin: 'auto',
    maxWidth: 500,
    marginBottom:'20px',
    marginLeft:'30px',
  },

  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    width: 150,
    height: 120,
    borderRadius:'5px',
  },
  font: {
    fontSize: "24px",
  },
  cardGrid: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  
 
}));

export default function CategoryList({id}) {
  const classes = useStyles();
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading ] = useState(true);
  const [info, setInfo] = useState(true);

  const handleOpen= () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };
  useEffect (() => {
    api.get('/api/Categories').then((response) => {
      if(response.status===200){
        setCategories(response.data);
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
    const result = await api.delete(`api/Categories?id=${id}`,{headers: headers});
    
    if(result.status === 200){
      history.push('/');
      history.push('/Cadastrar/Categorias');
    }else{
      alert("Ocorreu um erro, por favor, tente novamente!");
    }
    setOpen(false);
  }
  

  return (
    <Container className={classes.cardGrid} maxWidth="md">
           {loading?<Loading />:info?
          <Grid container spacing={4}>
             {categories.map((categorie) => (
               
              <Grid item key={categorie.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={imagem}
                    title="Image title"
                  />
                  
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {categorie.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="medium" onClick={handleOpen} color="secondary">
                     Apagar
                    </Button>
                    <Button size="medium" component={Link} to={`/Cadastrar/Categoria/${categorie.id}`} color="primary">
                      Editar
                    </Button>
                  </CardActions>
                </Card>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title"> "Deseja realmente apagar essa categoria?"</DialogTitle>
                    <DialogActions>
                      <Button onClick={handleClose} color="primary">
                        Não
                      </Button>
                      <Button onClick={() => handleDelete(categorie.id)} color="primary" autoFocus>
                        Sim
                      </Button>
                    </DialogActions>
                  </Dialog>
              </Grid>
            
            ))}
               
             
          </Grid>
          : <NoResults name={'Categoria'}/>}  
          <Fab  aria-label="add" component={Link} to={('Categoria/Nova')} className={classes.floatbutton}>
             
                  <AddIcon/>
          
            </Fab> 
    </Container>
      
  )}
