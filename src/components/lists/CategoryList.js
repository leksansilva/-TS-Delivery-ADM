import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import imagem from '../../assets/images/default.jpg';

import { green } from '@material-ui/core/colors';
import {  Card, CardActions, CardContent, CardMedia, Container} from '@material-ui/core';

import api from '../../services/api';
import Loading from '../Loading';
import NoResults from '../NoResults';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoSwipeableViews = autoPlay(SwipeableViews);


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
  //const history = useHistory();
  const [categories, setCategories] = useState([]);
  //const [open, setOpen] = useState(false);
  const [loading, setLoading ] = useState(true);
  const [info, setInfo] = useState(true);
  const [foods, setFoods] = useState([]);
  /* const [idDelete, setIdDelete] = useState();
  const handleOpen= (id) => {
    setOpen(true);
    setIdDelete(id);
  } */

  /* const handleClose = () => {
    setOpen(false);
  }; */
  useEffect (() => {
    
    api.get('/api/Categories').then((response) => {
      if(response.status===200){
        setCategories(response.data);
        dataFoods();
        setLoading(false);
      }
      if(response.data.length===0){
        setInfo(false);
      }else{
        setInfo(true);
      }
    });
    return () =>{
      setCategories([]);
    }
  }, []);
  async function dataFoods(){
    const result = await api.get('api/Foods');
    if(result.status===200)
      setFoods(result.data);
  }
   
  
 /*  async function handleDelete(id){
    const headers = {'Authorization':`Bearer ${getToken()}`};
    const result = await api.delete(`api/Categories?id=${id}`,{headers: headers});
    if(result.status === 200){
      history.push('/');
      history.push('/Cadastrar/Categorias');
    }else{
      alert("Ocorreu um erro, por favor, tente novamente!");
    }
    setOpen(false);
  } */
  
  
  return (
    <Container className={classes.cardGrid} maxWidth="md">
           {loading?<Loading />:info?
          <Grid container spacing={4}>
             {categories.map((categorie) => (      
              <Grid item key={categorie.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                <AutoSwipeableViews>
                    {foods.length>0?foods.map(({categoryId, id, images})=>(
                    categoryId===categorie.id?
                      images.length>0?
                        images.map((image) => (
                          <CardMedia
                          className={classes.cardMedia}
                          key={image.id}
                          image={image.type+","+image.data}
                          title={image.name}
                          />    
                        )):<CardMedia
                              key={id}
                            className={classes.cardMedia}
                            image={imagem}
                            title="Sem imagem"
                          />
                    :<CardMedia
                    key={id}
                    className={classes.cardMedia}
                    image={imagem}
                    title="Sem imagem"
                      />  
                      ))
                      :<CardMedia
                      className={classes.cardMedia}
                      image={imagem}
                      title="Sem imagem"
                        /> }
                  </AutoSwipeableViews> 
                  
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {categorie.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="large" onClick={() => handleOpen(categorie.id)} color="secondary">
                     Apagar
                    </Button>
                    <Button size="large" component={Link} to={`/Cadastrar/Categoria/${categorie.id}`} color="primary">
                      Editar
                    </Button> */}
                  </CardActions>
                </Card>
                  
              </Grid>
            
            ))}
               
             
          </Grid>
          : <NoResults name={'Categoria'}/>}  
          {/* {loading?null:
          <Fab  aria-label="add" component={Link} to={('Categoria/Nova')} className={classes.floatbutton}>
             
                  <AddIcon/>
          
            </Fab>} */}
           {/*  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                  
                  >
                    <DialogTitle id="alert-dialog-title"> "Deseja realmente apagar essa categoria?"</DialogTitle>
                    <DialogActions>
                      <Button onClick={handleClose} color="primary">
                        Não
                      </Button>
                      <Button onClick={() => handleDelete(idDelete)} color="primary" autoFocus>
                        Sim
                      </Button>
                    </DialogActions>
                  </Dialog> */}
    </Container>
      
  )}
