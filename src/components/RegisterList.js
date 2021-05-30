import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import imagem from '../assets/images/default.jpg';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import { green } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';



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
    height: 150,
    borderRadius:'5px',
  },
  font: {
    fontSize: "25px",
  },
  
 
}));

export default function RegisterList({categories,link, onClickDelete}) {
  const classes = useStyles();
  console.log(categories)
  return (
    <Grid>
      <Grid item container xs sm   >
      {categories.map(({id, name}) => (
      <Grid  className={classes.root} item xs sm={6} key={id} >
            <Paper className={classes.paper}  elevation= {4} >
              <Grid item container xs={12} sm>
                <Grid item xs sm={4}>
                    <img className={classes.img} alt="complex" src={imagem} />
                </Grid>
                    <Grid item container xs sm={6}>
                    <Grid item xs sm={1}/>
                    <Grid item xs sm={2}>
                      <Typography  gutterBottom className={classes.font}>
                        {name}
                      </Typography>
                      </Grid>  
                    </Grid>
                    <Grid item container xs sm>
                    <Grid item xs sm={5}/>
                    <Grid item container  direction='column' xs sm={2} >
                    <Grid item xs={12} sm>
                      <IconButton component={Link} to={`${link}/${id}`} variant="outlined" >
                        <DeleteIcon onClick={onClickDelete} fontSize='large' color="secondary"/>
                      </IconButton> 
                    </Grid>  
                    <Grid item xs sm>
                      <IconButton variant="outlined" color="primary">
                        <EditIcon fontSize='large'/>
                      </IconButton>
                    </Grid>  
                    </Grid>
                    </Grid>
              </Grid>
            </Paper>  
          </Grid>   
        ))}   
        
      </Grid> 
      <Fab component={Link} to={`${link}/Nova`}   aria-label="add" className={classes.floatbutton}>
        <AddIcon/>
      </Fab>  
    </Grid>
     
  )}
