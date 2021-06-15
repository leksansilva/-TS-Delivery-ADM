import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import imagem from '../assets/images/default.jpg';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { green } from '@material-ui/core/colors';
import { Button, Card, CardActions, CardContent, CardMedia, Container} from '@material-ui/core';
import { Link } from 'react-router-dom';
import api from '../services/api';






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
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  
 
}));

export default function CardGrid() {
  const classes = useStyles();
  
  const [categories, setCategories] = useState([]);

  

  useEffect (() => {
    api.get('/api/Categories').then((response) => {
      setCategories(response.data)
    });
  }, []);

  return (
    <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
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
                    <Button size="medium" type="button" color="secondary">
                     Apagar
                    </Button>
                    <Button size="medium" component={Link} to={`/Cadastrar/Categoria/${categorie.id}`} color="primary">
                      Editar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
               
            <Fab  aria-label="add" component={Link} to={'Categoria/Nova'} className={classes.floatbutton}>
             
                  <AddIcon/>
          
            </Fab>  
          </Grid>
    </Container>
      
     
  )}
