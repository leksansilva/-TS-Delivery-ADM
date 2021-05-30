import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import imagem from '../assets/images/default.jpg';
import { Button, ButtonGroup, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 'auto',
    marginBottom: '40px',
  },
  root2:{
    flexGrow: 1,
    align: 'center',
  },
  text: {
    alignText: 'center',
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },paper: {
    padding: theme.spacing(1),
    maxWidth: 300,
    marginBottom: '40px',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
const requests= [

  {id: "1", Name: "temaki1" , Preço: "15R$", Adress: "xxxx"},
  {id: "2", Name: "temaki2" , Preço: "15R$", Adress: "xxxxx"},
  {id: "3", Name: "temaki3" , Preço: "15R$", Adress: "xxxxxxx"},
  {id: "4", Name: "temaki4" , Preço: "15R$", Adress: "xxxxxxx"},
  {id: "5", Name: "temaki5" , Preço: "15R$", Adress: "xxxxxxx"},
  {id: "7", Name: "temaki6" , Preço: "15R$", Adress: "xxxxx"},
  {id: "8", Name: "temaki7" , Preço: "15R$", Adress: "xxxxxxx"},
  {id: "9", Name: "temaki8" , Preço: "15R$", Adress: "xxxxx"},
  {id: "10", Name: "temaki" , Preço: "15,50", Adress: "xxxxxx"},
      
]

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
  <Grid className={classes.root2} container item xs={12} spacing ={1}>
    {requests.map(({ id, Name, Preço, Adress}) => (
    <Card className={classes.root} key={id}>
      <CardHeader
        title={Name}
        subheader={Preço}
      />
      <CardMedia
        className={classes.media}
        image={imagem}
        title="Comida"
      />
      <CardContent >
        <Typography variant="body2" color="textSecondary" component="p">
          sadasjdasdkaskdas´pdka´pdkasp´dka´
          asldkakdápskdsa´pkdáspkd´paskd´psak
          asldkasp´kdsápkdsákd´psakd´paskd´psak´pdksa´pdk
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ButtonGroup className={classes.Buttons}  aria-label="outlined primary button group">
               <Button color="primary" disabled= {props.ability}>{props.button1}</Button>
                <Button color="secondary">{props.button2}</Button>
        </ButtonGroup>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
     ))}  
  </Grid>  
  );
}
