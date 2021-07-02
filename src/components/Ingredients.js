import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {  Dialog, DialogActions, DialogTitle, Fab, Grid } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';

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
function createData(id, name, price, unity) {
    return { id, name, price, unity };
  }
  const ingredients = [
    createData(1,'batata palha',0.99, 'Porção'),
    createData(3,'Fatias de queijo',0.99, 'Unidade'),
    createData(4,'Camarão',2.00, 'porção 10x'),
    createData(5,'Azeitonas',0.25, 'Unidade'),
  
  
  ];
export default function Ingredients() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen= () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid   item container xs sm spacing={1} >
        {ingredients.map((ingredient)=>(
          
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
                  <Typography variant="body2" component="p">
                    {ingredient.price} R$
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="small" onClick={handleOpen} color="secondary">Apagar</Button>
                  <Button size="small" color="primary">Editar</Button>
              </CardActions>
              </Card>
              <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">  Deseja realmente apagar esse Ingrediente?</DialogTitle>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Não
                  </Button>
                  <Button onClick={handleClose} color="primary" autoFocus>
                    Sim
                  </Button>
                </DialogActions>
              </Dialog>
            </Paper>
          </Grid>
          
        ))};

        <Fab  aria-label="add" component={Link} to={('Categoria/Nova')} className={classes.floatbutton}>
              
              <AddIcon />
      
        </Fab> 
    </Grid>
  );
}