import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { getToken } from '../../services/auth';
import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import Loading from '../Loading';
import BrlCurrencyComponent from '../BrlCurrencyComponent';


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
}));

const initialValues = {
  name: '',
  price: 0,
  unity: '',
}
export default function FormRegisterIngredient({id}) {
  const classes = useStyles();
  const [values, setValues] = useState(id ? null: initialValues);
  const history = useHistory();
  const url = '/api/Ingredients';
  const headers = {'Authorization':`Bearer ${getToken()}`};
  const [clicked, setClicked] = useState(false);  
   useEffect(() =>{
      if(id){
        api.get(`${url}/${id}`)
        .then((response)=>{
          setValues(response.data);
        })
      }
   }, [id]);
 
  

  function onChange (ev) {

  const {name,  value} = ev.target;

    setValues({...values,[name]: value});

  }

  function onSubmit (ev) {
    setClicked(true);
    const method = id ? 'put' : 'post';
    const link = id ? `${url}/${id}`: url;


    ev.preventDefault();

    api[method](link, values, {headers: headers})
    .then((response) => {
      
      history.push('/Cadastrar/Adicionais');
      
    })

  };
  if(!values){
    return <div><Loading/></div>
  }

  const handleChange = (event, value, maskedValue) => {
    
    event.preventDefault();
    setValues({...values,price:value})
  
   
  };
  return (
    <React.Fragment>
        <Typography variant="h6" gutterBottom>
        {id ? 'Editar Adicional:' : 'Cadastrar Adicional:'}
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
                              helperText="Exemplos: Camarão, Azeitonas..."
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
                          fullWidth 
                          autoFocus
                          value={values.price}
                          required
                          variant="filled" label="Preço:" 
                          onChange={handleChange}
                          InputProps={{
                            inputComponent: BrlCurrencyComponent,
                          }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          />  
                      </Grid>
                      <Grid item xs={12} sm={6}>
                          
                          <TextField
                             required
                             id="unity"
                             name="unity"
                             fullWidth
                             autoComplete="given-unity"
                             onChange={onChange}
                             value={values.unity}
                             variant="filled"
                             label="Unidade:"
                             helperText="Exemplos: Porção, Quantidade..."
                             type="text"
                          />
                      </Grid>
                                    
                  </Grid>
                  
                </Grid>
                <Grid container item sm={12}>
                    <Grid item xs/>
                    {!clicked?<Button size="large"  className={classes.buttons} type='submit'  color="primary">
                        Salvar
                    </Button>:<Button disabled size="large"  className={classes.buttons} type='submit'  color="primary">
                        Salvar
                    </Button>}
                    
                </Grid>
            </Grid>
        </Paper>)} 
    </React.Fragment>
);
}
