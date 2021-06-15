import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { PhotoCamera } from '@material-ui/icons';
import { Button, IconButton, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router';
import api from '../services/api';


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

export default function FormRegister({id}) {
  const classes = useStyles();
  const [values, setValues] = useState(id ? null: initialValues);
  const history = useHistory();
  
  const url = '/api/Categories';
  
    
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

    


    ev.preventDefault();
    console.log(values);
    api[method](url, values)
    .then((response) => {
      
      history.push('/Cadastrar/Categorias');
      
    })

  };
  if(!values){
    return <div>Carregando...</div>
  }

  return (
    <React.Fragment>
        <Typography variant="h6" gutterBottom>
        {id ? 'Editar Categoria:' : 'Cadastrar Categoria:'}
      </Typography>
        <Paper elevation={4} className={classes.paper} component='form'onSubmit={onSubmit} >
      
      <Grid item   >
            <input accept="image/*" className={classes.input} name="image" onChange={onChange} id="image" type="file" />
            <label htmlFor="icon-button-file">
                    <IconButton   color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera  />
                    </IconButton>
            </label>
      </Grid>  
      <Grid container spacing={3}>
            <Grid item sm={12}>
              
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="name"
                                name="name"
                                label="Nome do Produto"
                                fullWidth
                                autoComplete="given-name"
                                onChange={onChange}
                                value={values.name}
                            />
                            </Grid>
                                       
                    </Grid>
               
            </Grid>
            <Grid item sm={12}>
             
                <Button   className={classes.buttons} type='submit'  variant="outlined" color="primary">
                    Salvar
                </Button>
                
            </Grid>
        </Grid>
        </Paper>  
    </React.Fragment>
  );
}