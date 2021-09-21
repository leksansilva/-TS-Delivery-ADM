import React, { useState } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  Typography,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";

const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: "auto",
    marginBottom: "20px",
    overflow: "hidden",
    backgroundColor: " #f2f2f2",
  },
  paper2: {
    maxWidth: 936,
    margin: "auto",
    marginBottom: "20px",
    overflow: "hidden",
  },
  paper3: {
    maxWidth: 936,
    margin: "auto",
    overflow: "hidden",
    backgroundColor: "#ededed",
  },
  block: {
    display: "block",
  },
  contentWrapper: {
    margin: "20px 16px",
  },
});
function createData(id, order, avaliation, name, coments) {
  return { id, order, avaliation, name, coments };
}
const feedbacks = [
  createData(1, "Pizza", 5, "Helena Kittnel", "Muito bom, super recomendo!"),
  createData(
    2,
    "Arroz com feijão",
    5,
    "Jason Thunder",
    "Já sei o que pedi no próximo final de semana, estão de parabéns!"
  ),
  createData(
    3,
    "Yakisoba",
    4,
    "Luíza Sonza",
    "Só atrasou um pouco, mas está maravilhoso"
  ),
  createData(
    4,
    "Feijoada",
    4,
    "Alexis Santorini",
    "Assim nem quero cozinhar mais!"
  ),
  createData(
    5,
    "Frango Rush",
    5,
    "Antoni Highlander",
    "Hmmmm, vou pedir de novo!"
  ),
  createData(6, "Steak", 5, "Ana Hickmann", "O melhor sabor, amei!!!!!!"),
];
function FeedbackList(props) {
  const { classes } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Paper className={classes.paper} elevation={4}>
      {feedbacks.map((feedback) => (
        <div key={feedback.id} className={classes.contentWrapper}>
          <Paper className={classes.paper2} elevation={1}>
            <Box component="fieldset" mb={2} borderColor="transparent">
              <Grid container>
                <Grid item xs>
                  <Typography variant="h5" component="legend">
                    {feedback.order}
                  </Typography>
                  <Typography variant="subtitle1">Avaliação:</Typography>
                  <Rating
                    name="read-only"
                    value={feedback.avaliation}
                    readOnly
                  />
                  <Typography variant="h6" component="legend">
                    {feedback.name}
                  </Typography>
                  <Typography variant="subtitle2">Comentário:</Typography>
                </Grid>
                <Grid item>
                  <Button
                    onClick={handleOpen}
                    color="secondary"
                    aria-label="delete"
                    size="large"
                  >
                    Apagar
                  </Button>
                </Grid>
              </Grid>
              <Paper className={classes.paper3}>
                <div className={classes.contentWrapper}>
                  <Typography>{feedback.coments}</Typography>
                </div>
              </Paper>
            </Box>
          </Paper>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {" "}
              Deseja realmente apagar esse Feedback?
            </DialogTitle>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Não
              </Button>
              <Button onClick={handleClose} color="primary" autoFocus>
                Sim
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      ))}
    </Paper>
  );
}

FeedbackList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeedbackList);
