import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import imagem from '../../assets/images/default.jpg';

import {  Card, CardActions, CardContent, CardMedia, Container} from '@material-ui/core';

import api from '../../services/api';
import Loading from '../Loading';
import NoResults from '../NoResults';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { getToken } from '../../services/auth';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  floatbutton: {
    bottom: theme.spacing(7),
    right: theme.spacing(7),
    position: 'fixed',
    color: theme.palette.common.white,
    backgroundColor: '#BD9B60',
    '&:hover': {
      backgroundColor: '#ab8c55',
    }, 
  },
  cardGrid: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  
 
}));



export default function CategoryList() {
  const classes = useStyles();
  //const history = useHistory();
  const [categories, setCategories] = useState([]);
  //const [open, setOpen] = useState(false);
  const [loading, setLoading ] = useState(true);
  const [info, setInfo] = useState(true);
  const [images, setImages] = useState([]);
  const [ok, setOk]= useState(false);

  /* const [idDelete, setIdDelete] = useState();
  const handleOpen= (id) => {
    setOpen(true);
    setIdDelete(id);
  } */

  /* const handleClose = () => {
    setOpen(false);
  }; */
  async function SetCategoriesInitial (){
    const headers = {'Authorization':`Bearer ${getToken()}`};
    const initialCategories = [
      {id: 1,  name: 'Pratos'},
      {id: 2,  name: 'Bebidas'},
      {id: 3,  name: 'Sobremesas'}, 
    ]
    for(var i=0;i<3;i++){
      await api.post('/api/Categories', initialCategories[i], {headers})
      // eslint-disable-next-line no-loop-func
      .then(response =>{
        if(response.status===200){
          console.log('setado: '+ response.data.name);
          i===2&& setOk(true);
        }
      })
    }
  }

  useEffect (() => {
    dataImages();
    api.get('/api/Categories').then(async (response) => {
      if(response.status===200){
        setCategories(response.data); 
        setLoading(false);
        if(response.data.length===0){
          SetCategoriesInitial();
          setInfo(false);
        }else{
          setInfo(true);
        }
      }
      
    });
    return () =>{
      setCategories([]);
    }
  }, [ok]);
   async function dataImages(){
    await api.get('api/Foods').then(response=>{
      if(response.status===200){
        const foods = response.data;
        
        const data = foods.map(food => {    
          return food.images.length>0&&
          { id:food.id, categoryId:food.categoryId, dataImg: food.images };    
        }).filter(image=>(image));
        setImages(data);
        }
    })
    
     
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
             {categories.map((category) => (      
              <Grid item key={category.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                < AutoPlaySwipeableViews>
                {images.length>0?
                images.map(image=>(image.categoryId===category.id))
                .filter(image=>(image))
                .flatMap(image=>(image)).length>0?
                images.map(image=>(
                  image.categoryId===category.id&&            
                  image.dataImg.map(setimg=>(              
                      <CardMedia
                      key={setimg.id}
                      className={classes.cardMedia}
                      image={setimg.type+","+setimg.data}
                      title={setimg.name}
                      />                     
                  ))
                )).filter(image=>(image)):
                <CardMedia
                className={classes.cardMedia}
                image={imagem}
                title="Sem imagem"
                /> :
                <CardMedia
                  className={classes.cardMedia}
                  image={imagem}
                  title="Sem imagem"
                  />  }
                  
                  </AutoPlaySwipeableViews>
                 
                       
                   
                  
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {category.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="large" onClick={() => handleOpen(category.id)} color="secondary">
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
