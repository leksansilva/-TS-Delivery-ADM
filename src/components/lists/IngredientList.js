import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  Fab,
  Grid,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import Paper from "@material-ui/core/Paper";
import api from "../../services/api";
import Loading from "../Loading";
import NoResults from "../NoResults";
import { getToken } from "../../services/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 275,
    marginBottom: "20px",
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
    diplay: "flex",
  },
  floatbutton: {
    bottom: theme.spacing(7),
    right: theme.spacing(7),
    position: "fixed",
    color: theme.palette.common.white,
    backgroundColor: "#BD9B60",
    "&:hover": {
      backgroundColor: "#ab8c55",
    },
  },
  name: {
    maxWidth: "300px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  search: {
    top: theme.spacing(-3),
  },
}));

export default function Ingredients() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState(true);
  const [idDelete, setIdDelete] = useState();
  const [search, setSearch] = useState("");
  const handleOpen = (id) => {
    setOpen(true);
    setIdDelete(id);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const params = search ? { Search: search } : {};
    setLoading(true);
    api.get("/api/Ingredients", { params }).then((response) => {
      if (response.status === 200) {
        setIngredients(response.data);
        setLoading(false);
      }
      if (response.data.length === 0) {
        setInfo(false);
      } else {
        setInfo(true);
      }
    });
    return () => {
      setIngredients([]);
    };
  }, [search]);
  async function handleDelete(id) {
    const headers = { Authorization: `Bearer ${getToken()}` };
    setLoading(true);
    setOpen(false);
    const result = await api.delete(`api/Ingredients?id=${id}`, {
      headers: headers,
    });

    if (result.status === 200) {
      api.get("/api/Ingredients").then((response) => {
        if (response.status === 200) {
          setIngredients(response.data);
          setLoading(false);
        }
        if (response.data.length === 0) {
          setInfo(false);
        } else {
          setInfo(true);
        }
      });
    } else {
      alert("Ocorreu um erro, por favor, tente novamente!");
    }
  }

  return (
    <>
      {" "}
      <Grid item container xs>
        <Grid item xs={7} sm={7}>
          <TextField
            fullWidth
            label="Buscar"
            className={classes.search}
            value={search}
            onChange={(ev) => setSearch(ev.target.value)}
            type="search"
          />
        </Grid>
        <Grid item xs sm={2} />
        <Grid item xs sm={3} />
      </Grid>
      <Grid item container xs sm spacing={3}>
        {loading ? (
          <Loading />
        ) : info ? (
          ingredients.map((ingredient) => (
            <Grid key={ingredient.id} item xs>
              <Paper elevation={3} className={classes.root}>
                <Card key={ingredient.id} variant="outlined">
                  <CardContent>
                    <Tooltip title={ingredient.name}>
                      <Typography
                        className={classes.name}
                        variant="h5"
                        component="h2"
                      >
                        {ingredient.name}
                      </Typography>
                    </Tooltip>
                    <Typography className={classes.pos} color="textSecondary">
                      {ingredient.unity}
                    </Typography>
                    <Typography variant="body1" component="p">
                      {ingredient.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="large"
                      onClick={() => handleOpen(ingredient.id)}
                      color="secondary"
                    >
                      Apagar
                    </Button>
                    <Button
                      size="large"
                      component={Link}
                      to={`/Cadastrar/Adicional/${ingredient.id}`}
                      color="primary"
                    >
                      Editar
                    </Button>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>
          ))
        ) : (
          <NoResults
            response={
              "Nenhum adicional cadastrado, faça o cadastro de novos adicionais clicando no mais..."
            }
          />
        )}
        {!loading && (
          <Fab
            aria-label="add"
            component={Link}
            to={"Adicional/Novo"}
            className={classes.floatbutton}
          >
            <AddIcon />
          </Fab>
        )}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
        >
          <DialogTitle id="alert-dialog-title">
            {" "}
            Deseja realmente apagar esse Adicional?
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Não
            </Button>
            <Button
              onClick={() => handleDelete(idDelete)}
              color="primary"
              autoFocus
            >
              Sim
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </>
  );
}
