import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import NewOrders from "./NewOrders";
import Deposits from "./Deposits";
import HistoryOrders from "./HistoryOrders";
import { useEffect } from "react";
import api from "../services/api";
import { getToken } from "../services/auth";
import Loading from "./Loading";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },

  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function HomeInfos() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const headers = { Authorization: `Bearer ${getToken()}` };
  useEffect(() => {
    setLoading(true);
    api
      .get("api/Orders", { headers })
      .then((response) => {
        if (response.status === 200) {
          setOrders(response.data);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
      return ()=>{

        setLoading(false);
        setOrders([]);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return loading ? (
    <Loading />
  ) : (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <NewOrders orders={orders} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Deposits orders={orders} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <HistoryOrders orders={orders} title="Pedidos Entregues" />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
