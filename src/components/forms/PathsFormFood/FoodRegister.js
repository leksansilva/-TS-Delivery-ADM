import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { getToken } from '../../services/auth';
import { 
        Button, 
        FormControl,  
        Grid, InputLabel, 
        MenuItem, 
        Paper, 
        Select, 
        TextField, 
        Typography } from '@material-ui/core';
import Loading from '../Loading';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
    paper: {
      padding: theme.spacing(1),
      margin: 'auto',
      maxWidth: 500,
      
    },
    formControl: {
      minWidth: '100%',
    },
}));

const initialValues = {
  name: '',
  price: 0,
  available: false,
  categoryId: 0 ,
    
}
export default function FormRegisterFood({id}) {
  const classes = useStyles();
  const [values, setValues] = useState(id ? null: initialValues);
  console.log(values);
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  
   const url = '/api/Foods';
  const headers = {'Authorization':`Bearer ${getToken()}`};
    
   useEffect(() =>{
      if(id){
        api.get(`${url}/${id}`)
        .then((response)=>{
          setValues(response.data);
        })
      }
   }, [id]);
 
  

  function onChange (ev) {

  const {name, value} = ev.target;

    setValues({...values,[name]: value});

  }

  function onSubmit (ev) {
    
    const method = id ? 'put' : 'post';
    const link = id ? `${url}/${id}`: url;
    console.log(link);


    ev.preventDefault();
    console.log(values);
    api[method](link, values, {headers: headers})
    .then((response) => {
      
      history.push('/Cadastrar/Pratos');
      
    })

  };

  useEffect (() => {
    api.get('/api/Categories').then((response) => {
      if(response.status===200){
        setCategories(response.data);
     
      }
    });
  }, []);
  return (
    <React.Fragment>
        <Typography variant="h6" gutterBottom>
        {id ? 'Editar Prato:' : 'Cadastrar Prato:'}
      </Typography>
      {!values?(
        <Loading/>
      ):(
        <Paper elevation={4} className={classes.paper} component='form'onSubmit={onSubmit} >
          <Grid container spacing={3}>
                <Grid item sm={12}>
                  <Grid container spacing={5}>
                      <Grid item xs={12} sm={12}>
                       
                      </Grid>                 
                  </Grid>
                  <Grid container spacing={3}>
                      <Grid item xs={12} sm={12}>
                          
                          <TextField
                              required
                              id="name"
                              name="name"
                              fullWidth
                              autoComplete="given-ingredient"
                              onChange={onChange}
                              value={values.name}
                              variant="filled"
                              label="Nome:"
                              helperText="Exemplos: Sushi, Temaki..."
                              type="text"
                          />
                      </Grid>
                      
                                    
                  </Grid>
                  
                </Grid>
                <Grid item sm={12}>
                  <Grid container spacing={5}>
                      <Grid item xs={12} sm={12}>
                       
                      </Grid>                 
                  </Grid>
                  <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                          
                          <TextField
                             required
                             id="price"
                             name="price"
                             fullWidth
                             autoComplete="given-price"
                             onChange={onChange}
                             value={values.price}
                             variant="filled"
                             label="Preço:"
                             type="number"
                          />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                      <FormControl required variant="filled" className={classes.formControl}>
                        <InputLabel id="categoryId" name="categoryId" onChange={onChange}  >Categoria</InputLabel>
                        <Select
                          labelId="categoryId"
                          id="categoryId"
                          name="categoryId"
                          value={values.categoryId}
                          onChange={onChange}
                        >
                          <MenuItem  value={0}>Selecione</MenuItem> 
                         {categories.map((category) =>(
                          <MenuItem key={category.id} value={category.id} > 
                            {category.name}
                          </MenuItem>
                          
                         ))}
                        </Select>
                      </FormControl>
                      </Grid>
                                    
                  </Grid>
                  
                </Grid>
                <Grid container item sm={12}>
                    <Grid item xs>
                    <FormControl  required variant="filled">
                        <InputLabel id="available" name="available" onChange={onChange}>Status:</InputLabel>
                        <Select
                          
                          labelId="available"
                          id="available"
                          name="available"
                          value={values.available}
                          onChange={onChange}
                        >
                          <MenuItem value={true}>
                              Habilitado
                          </MenuItem>
                          <MenuItem value={false}>
                              Desabilitado
                          </MenuItem>
                        </Select>
                      </FormControl>
                    
                    </Grid>
                    <Button size="large"  className={classes.buttons} type='submit'  color="primary">
                        Salvar
                    </Button>
                    
                </Grid>
            </Grid>
        </Paper> )} 
    </React.Fragment>
);
}
