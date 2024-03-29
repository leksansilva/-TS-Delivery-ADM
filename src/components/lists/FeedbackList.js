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
import NoResults from "../NoResults";
import api from "../../services/api";
import { getToken } from "../../services/auth";

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
  contentWrapper: {
    margin: "20px 16px",
  },
});

function FeedbackList(props) {
  const { classes, feedbacks } = props;

  const [open, setOpen] = useState(false);
  const [idDelete, setIdDelete] = useState({});
  const headers = { Authorization: `Bearer ${getToken()}` };
  const handleOpen = (feedback) => {
    setOpen(true);
    setIdDelete({ userId: feedback.userId, orderId: feedback.orderId });
    console.log(idDelete);
  };

  const handleDelete = (id) => {
    api
      .delete(`api/Feedbacks/${id.userId}/${id.orderId}`,{headers})
      .then(() => {
        console.log("apagado");
        setOpen(false);
      }).catch(()=>{
        setOpen(false);
        console.log("errou ao apagar")
      });
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Paper className={classes.paper} elevation={2}>
      {feedbacks.length > 0 ? (
        feedbacks.map((feedback, index) => (
          <div key={index} className={classes.contentWrapper}>
            <Paper className={classes.paper2} elevation={1}>
              <Box component="fieldset" mb={2} borderColor="transparent">
                <Grid container>
                  <Grid item xs>
                    <Typography variant="h5" component="legend">
                      {feedback.order.suborders.map((suborder, index2) =>
                        feedback.order.suborders.length - 1 !== index2 ? (
                          <span key={index2}>{suborder.food.name} + </span>
                        ) : (
                          <span key={index2}>{suborder.food.name}</span>
                        )
                      )}
                    </Typography>
                    <Typography variant="subtitle1">Avaliação:</Typography>
                    <Rating name="read-only" value={feedback.score} readOnly />
                    <Typography variant="h6" component="legend">
                      {feedback.user.name}
                    </Typography>
                    <Typography variant="subtitle2">Comentário:</Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={() => handleOpen(feedback)}
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
                    <Typography>{feedback.note}</Typography>
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
                <Button onClick={()=>handleDelete(idDelete)} color="primary" autoFocus>
                  Sim
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        ))
      ) : (
        <NoResults response="Nenhum Feedback publicado" />
      )}
    </Paper>
  );
}

FeedbackList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeedbackList);
