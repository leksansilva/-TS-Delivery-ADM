import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

import { Button, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router';
import api from '../../services/api';
import { getToken } from '../../services/auth';
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
  }));
  const initialValues = {
    name: '',
  }

export default function FormRegisterCategory({id}) {
  const classes = useStyles();
  const [values, setValues] = useState(id ? null: initialValues);
  const history = useHistory();
  
  const url = '/api/Categories';
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
    ev.preventDefault();
    api[method](link, values, {headers: headers})
    .then((response) => {
      
      history.push('/Cadastrar/Categorias');
      
    })

  };

  return (
    <React.Fragment>
        <Typography variant="h6" gutterBottom>
        {id ? 'Editar Categoria:' : 'Cadastrar Categoria:'}
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
                      <Grid container spacing={5}>
                          <Grid item xs={12} sm={12}>
                              
                              <TextField
                                  required
                                  id="name"
                                  name="name"
                                  fullWidth
                                  
                                  autoComplete="given-category"
                                  onChange={onChange}
                                  value={values.name}
                                  variant="filled"
                                  label="Nome:"
                                  helperText="Exemplos: Quentes, Salgados..."
                              />
                              </Grid>
                                        
                      </Grid>
                
              </Grid>
              <Grid container item sm={12}>
                <Grid item xs/>
                  <Button size="large"  className={classes.buttons} type='submit'  color="primary">
                      Salvar
                  </Button>
                  
              </Grid>
          </Grid>
      </Paper>  
      )}
      
    </React.Fragment>
  );
}