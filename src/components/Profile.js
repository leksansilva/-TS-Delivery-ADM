import { Box, Grid, IconButton, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import api from "../services/api";
import { getToken } from "../services/auth";
import Loading from "./Loading";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import UserOrders from "./UserOrders";

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
  const history = useHistory();
  const [user, setUser] = useState({});
  const [address, setAddress] = useState({});
  const [addresses, setAddresses] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const headers = { Authorization: `Bearer ${getToken()}` };
  useEffect(() => {
    requestUserdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const requestUserdata = async () => {
    setLoading(true);
    await api
      .get(`api/Orders/AllByUserId/${id}`, { headers })
      .then((response) => {
        if (response.status === 200) {
          console.log("pedidos");
          console.log(response.data);
          setOrders(response.data);
        }
      })
      .catch((err) => {
        if (err) {
        }
      });
    await api
      .get(`api/Addresses/AllByUserId/${id}`, { headers })
      .then((response) => {
        if (response.status === 200) {
          const standardAdress = response.data.find((i) => i.standard);
          setAddress(standardAdress);
          setAddresses(response.data);
        }
      })
      .catch((err) => {
        if (err) {
        }
      });
    await api
      .get(`api/Users/${id}`, { headers })
      .then((response) => {
        if (response.status === 200) {
          console.log("users");
          console.log(response.data);
          setUser(response.data);
        }
      })
      .catch((err) => {
        if (err) {
        }
      });
    setLoading(false);
  };
  return loading ? (
    <Loading />
  ) : (
    <>
      <Grid item container xs>
        <Grid item xs />
        <Grid item>
          <IconButton onClick={() => history.push("/Usuários")}>
            <ArrowForwardIcon color="primary" />
          </IconButton>
        </Grid>
      </Grid>
      <Paper className={classes.paper} elevation={4}>
        <Box component="fieldset" mb={25} borderColor="transparent">
          <Grid item container direction="column" spacing={3}>
            <Grid item>
              <Typography variant="h5">{user.name}</Typography>
              {address ? (
                <Typography variant="body2">
                  Endereço utilizado: {address.neighborhood} -{address.state},
                  nº {address.number}
                </Typography>
              ) : (
                <Typography variant="body2">
                  Nenhum endereço cadastrado
                </Typography>
              )}
              <Typography variant="body1">e-mail: {user.email}</Typography>
              <Typography variant="body1">
                telefone: {user.phoneNumber}
              </Typography>
            </Grid>
            <Grid item>
              <UserOrders
                orders={orders}
                title={"Pedidos feito por " + user.name}
                addresses={addresses}
              />
            </Grid>
            <Grid item>



            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
}
