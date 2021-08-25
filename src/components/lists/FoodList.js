import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import {  Button, 
          Collapse, 
          Dialog, 
          DialogActions, 
          DialogTitle, 
          FormControl, 
          Grid,   
          IconButton,   
          InputLabel,   
          MenuItem, 
          Paper, 
          Select, 
          TextField, 
          Tooltip,
          Fab, 
          Chip} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import api from '../../services/api';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { getToken } from '../../services/auth';
import image from '../../assets/images/default.jpg'
import NoResults from '../NoResults';
import Loading from '../Loading';
import RemoveIcon from '@material-ui/icons/Remove';
import { Autocomplete } from '@material-ui/lab';
import CircularProgress from '@material-ui/core/CircularProgress';




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
  button: {
    color: '#BD9B60',  
  },

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
  filter:{
    top: theme.spacing(-3),
    left: theme.spacing(1),
   
  },
  text:{
    right:theme.spacing(5),
  },
  search:{
    top: theme.spacing(-3),
  }
}));


export default function FoodList() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const headers = {'Authorization':`Bearer ${getToken()}`};
  const [idDelete, setIdDelete] = useState();
  const [loading, setLoading ] = useState(true);
  const [info, setInfo] = useState(true);
  const [filterCategory, setFilterCategory] = useState(0);
  const [foods, setFoods] = useState([]);
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [expanded, setExpanded] = useState({res:false,id:0});
  const [ingredientFood, setIngredientFood] = useState([]);
  const [getId, setId]=useState();
  const [loadingStatus, setLoadingStatus]=useState({res:false,id:0});
  const [state, setState] = useState(false);
  const [search, setSearch] = useState('');
  const [save, setSave] = useState(false);
  console.log(foods);
  const handleExpandClick = id => {
    setSave(false);
    setExpanded({res:!expanded.res,id:id});
    api.get(`api/Foods/${id}`).then(response => {
      
      if(ingredientFood.length===0){
        const data = response.data.foodIngredients.map(foodIngredient =>(

               ingredients.filter(ingredient =>(
                foodIngredient.ingredientId===ingredient.id&&
                ingredient
             
       )) )).flatMap(foodIngredient=> foodIngredient);
        setId(id);
        setIngredientFood(data);
      }
    })
  };
  
  
  const handleOpen= (id) => {
    setOpen(true);
    setIdDelete(id);
  }

  const handleClose = () => {
    setOpen(false);
  };
  
  
  

  useEffect (() => {
    const params= search? {Search:search}: {};
    setLoading(true);
    dataCategories();
    dataIngredients();
     api.get('api/Foods', {params}).then((response) => {
      setFoods(response.data);
      
      
      setLoading(false)
      if(response.data.length===0){
        setInfo(false);
      }else{
        setInfo(true);
      }
    });
    return () =>{
      setFoods([]);
      setCategories([]);
      setIngredients([]);
    }
   
  }, [state,search]);
   async function dataCategories(){
   await api.get('api/Categories').then(response =>{
    if(response.status===200)
    setCategories(response.data);
   })
    
  }
   async function dataIngredients(){
    await api.get('api/Ingredients').then(response =>{
      if(response.status===200)
      setIngredients(response.data);
     })   
  }
  async function handleStatus(id, available,name,categoryId, images, 
                              price, foodIngredients, isAppetizer){
    setLoadingStatus({res: true, id});
    const editAvailable={ 
            id, name, 
            available:!available, 
            categoryId, images, 
            price, foodIngredients, 
            isAppetizer}
    await api.put(`api/Foods/${id}`,editAvailable,{headers})
    .then(response =>{
      if(response.status===200){
        var i;
        for(i=0;i<foods.length;i++){
          if(foods[i].id===id){
            foods[i]=response.data;
            setFoods([ ...foods]);
            setLoadingStatus(false);
          }
        }
      }
    });

  }
/*   async function handleIngredient(){
    const editFoodIngredients= { id, name, available:false, categoryId, images, price, foodIngredients}
    console.log(editFoodIngredients.foodIngredients);
  

  }
 */
  async function handleDelete(id){
    setLoading(true);
    setOpen(false);
    const result = await api.delete(`api/Foods?id=${id}`,{headers});
    if(result.status === 200){
      setState(!state);
    }else{
      alert("Ocorreu um erro, por favor, tente novamente!");
    }
    
  }

  
  return (
    <>
      <Grid item container>
        <Grid item xs={7} sm={7} >
          <TextField
          fullWidth
          label="Buscar" 
          className={classes.search}
          value={search}
          onChange={(ev)=>setSearch(ev.target.value)} 
          type="search"/>
        </Grid>
        <Grid item xs sm={2}/>
        <Grid item xs sm={3}  >
        <FormControl variant="standard" className={classes.filter}>
          <InputLabel 
            id="categoryId"  
            name="categoryId" 
            onChange={(ev)=> setFilterCategory(ev.target.value)}  >
              Filtrar
          </InputLabel>
          <Select
            labelId="categoryId"
            id="categoryId"
            name="categoryId"
            value={filterCategory}
            onChange={(ev)=> setFilterCategory(ev.target.value)}       
          >
            <MenuItem   value={0}>Sem Filtros</MenuItem> 
            {categories.map((category) =>(
            <MenuItem key={category.id} value={category.id} > 
              {category.name}
            </MenuItem>
            
            ))}
          </Select>
        </FormControl>
        </Grid>  
      </Grid> 
    <Grid   item container xs sm spacing={1} >
     
      {loading?<Loading />:info?
      !filterCategory?
      foods.map(({id, available,name,categoryId, images, price, foodIngredients, isAppetizer})=>(
        
        <Grid key={id} item xs sm={4} >
          
          <Card  className={classes.root}>
          <Paper elevation={4}>
            {categories.map((categorie)=> (
              categorie.id===categoryId&&
              <CardHeader
              key={categorie.id}
              action={
                <Tooltip title={available?'Habilitado':'Desabilitado'}>
                 <IconButton 
                 onClick={()=> handleStatus(id, available,name,categoryId, images, price, foodIngredients, isAppetizer)} 
                 color={available?"primary":"secondary"}>
                   {!loadingStatus.res?available?
                   <Visibility/>:<VisibilityOff/>
                   :loadingStatus.id===id?<CircularProgress size={20} />
                   :available?<Visibility/>:<VisibilityOff/>}
                   </IconButton>
                </Tooltip>
              }
              title={<Typography variant="h6">{name}</Typography>}
              subheader={categorie.name}
              />))}
            {images.length>0?
            images.map((image) => (
              <CardMedia
              className={classes.media}
              key={image.id}
              image={image.type+","+image.data}
              title={image.name}
              />    
            )):<CardMedia
            className={classes.media}
            image={image}
            title="Sem imagem"
            />   }
            <CardContent>
              <Grid item container>
                <Grid item xs>
                  <Typography variant="h6" component="p">
                      {price.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}
                  </Typography>
                </Grid>
                <Grid item>
                  {isAppetizer&&<Chip color="primary" size="small" label="entrada"/>} 
                </Grid>
              </Grid>
              
                 
            </CardContent>
            <CardActions >
              <Button onClick={() => handleOpen(id)} size="large" color="secondary">Apagar</Button>
              <Button size="large" component={Link} to={`/Cadastrar/Comida/${id}`} color="primary">Editar</Button>
              <Button size="large" onClick={() =>handleExpandClick(id)} className={classes.button} endIcon={expanded.res&&expanded.id===id?< RemoveIcon/>:<AddIcon/>}>Adicionais</Button>
            </CardActions>
            <Collapse in={expanded.res&&expanded.id===id} timeout="auto" unmountOnExit>
              <CardContent>
              <Autocomplete
              multiple
              id={name}
              options={ingredients}
              getOptionLabel={(option) => option.name}
              value={getId===id?ingredientFood:[]}
              filterSelectedOptions
              onChange={(event, newValue) => {
                setIngredientFood(newValue);
                setId(id);
                setSave(true);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  
                  variant="outlined"
                  label="Adicionais"
                  placeholder="Adicionados"
                />
              )}
            />

        </CardContent>
        <CardActions>
          {save&&id===getId&&<Button color="primary" size="large">Salvar</Button>}
        </CardActions>
      </Collapse>
            </Paper>
          </Card>
          
        </Grid> 
        
      )).reverse():foods.find(food => food.categoryId ===filterCategory)?
      foods.map(({id, available,name,categoryId, images, price, foodIngredients, isAppetizer})=>(
        categoryId ===filterCategory&&
        <Grid key={id} item xs sm={4} >
          
          <Card  className={classes.root}>
          <Paper elevation={4}>
            {categories.map((categorie)=> (
              categorie.id===categoryId?
              <CardHeader
              key={categorie.id}
              action={
                <Tooltip title={available?'Habilitado':'Desabilitado'}>
                 <IconButton 
                 onClick={()=> handleStatus(id, available,name,categoryId, images, price, foodIngredients, isAppetizer)} 
                 color={available?"primary":"secondary"}>
                  {!loadingStatus.res?available?
                   <Visibility/>:<VisibilityOff/>
                   :loadingStatus.id===id?<CircularProgress size={20} />
                   :available?<Visibility/>:<VisibilityOff/>}
                   </IconButton>
                </Tooltip>
              }
              title={<Typography variant="h6">{name}</Typography>}
              subheader={categorie.name}
              />:''))}
            {images.length>0?
            images.map((image) => (
              <CardMedia
              className={classes.media}
              key={image.id}
              image={image.type+","+image.data}
              title={image.name}
              />    
            )):<CardMedia
            className={classes.media}
            image={image}
            title="Sem imagem"
            />   }
            <CardContent>
              <Typography variant="h6" component="p">
                {price.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}
              </Typography>    
            </CardContent>
            <CardActions disableSpacing>
              <Button onClick={() => handleOpen(id)} size="large" color="secondary">Apagar</Button>
              <Button size="large" component={Link} to={`/Cadastrar/Comida/${id}`} color="primary">Editar</Button>
              <Button size="large" onClick={() =>handleExpandClick(id)} className={classes.button} endIcon={expanded.res&&expanded.id===id?< RemoveIcon/>:<AddIcon/>}>Adicionais</Button>
            </CardActions>
            <Collapse in={expanded.res&&expanded.id===id} timeout="auto" unmountOnExit>
        <CardContent>
        <Autocomplete
        multiple
        id={name}
        options={ingredients}
        getOptionLabel={(option) => option.name}
        value={getId===id?ingredientFood:[]}
        filterSelectedOptions
        onChange={(event, newValue) => {
          setIngredientFood(newValue);
          setId(id);
          setSave(true);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            
            variant="outlined"
            label="Adicionais"
            placeholder="Adicionados"
          />
        )}
      />

        </CardContent>
        <CardActions>
          {save&&id===getId&&<Button color="primary" size="large">Salvar</Button>}
        </CardActions>
      </Collapse>
            </Paper>
          </Card>
          
        </Grid> 
        
      )).reverse():<NoResults name={'Filtro'}/> : <NoResults name={'Comidas'}/>} 
      {loading?null:<Fab  aria-label="add" component={Link} to={('Comida/Nova')} className={classes.floatbutton}>
             <AddIcon />
       </Fab>}
       <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">  Deseja realmente apagar esse Comida?</DialogTitle>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Não
                </Button>
                <Button onClick={() => handleDelete(idDelete)} color="primary" autoFocus>
                  Sim
                </Button>
                
              </DialogActions>
         </Dialog>
    </Grid>
    </>
);
}