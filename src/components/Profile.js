import { Box, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../services/api";
import { getToken } from "../services/auth";

const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 936,
    margin: "auto",
    marginBottom: "20px",
    overflow: "hidden",
  },

  block: {
    display: "block",
  },
  contentWrapper: {
    margin: "2px 0px",
  },
}));
export default function Profile() {
  const classes = useStyles();
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [addresses, setAdresses] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  //const [orders, setOrders] = useState([]);
  //const [loading, setLoading] = useState(false);
  const headers = { Authorization: `Bearer ${getToken()}` };
  useEffect(() => {
    requestUserdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(addresses);
  const requestUserdata = async () => {
   await api
    .get(`api/Orders/AllByUserId/${id}`, { headers })
    .then((response) => {
      if (response.status === 200) setFeedbacks(response.data);
    })
    .catch((err) => {
      if (err) {
      }
    });
    await api
      .get(`api/Feedbacks/AllByUserId/${id}`, { headers })
      .then((response) => {
        if (response.status === 200) setFeedbacks(response.data);
      })
      .catch((err) => {
        if (err) {
        }
      });
    await api
      .get(`api/Addresses/AllByUserId/${id}`, { headers })
      .then((response) => {
        if (response.status === 200) setAdresses(response.data);
      })
      .catch((err) => {
        if (err) {
        }
      });
    await api
      .get(`api/Users/${id}`, { headers })
      .then((response) => {
        if (response.status === 200) setUser(response.data);
      })
      .catch((err) => {
        if (err) {
        }
      });
  };
  console.log(feedbacks);
  return (
    <Paper className={classes.paper} elevation={4}>
      <Box component="fieldset" mb={25} borderColor="transparent">
        <Grid item container direction="column" spacing={3}>
          <Grid item>
            <Typography variant="h5">{user.name}</Typography>
            <Typography variant="body1">e-mail: {user.email}</Typography>
            <Typography variant="body1">
              telefone: {user.phoneNumber}
            </Typography>
          </Grid>
          <Grid item>
           </Grid>
          <Grid item></Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
