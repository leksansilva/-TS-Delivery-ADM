import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { getToken } from "../../services/auth";
import {
  Button,
  CardMedia,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import Loading from "../Loading";
import BrlCurrencyComponent from "../BrlCurrencyComponent";
import { Alert } from "@material-ui/lab";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
  paper: {
    padding: theme.spacing(1),
    margin: "auto",
    maxWidth: 500,
  },
  formControl: {
    minWidth: "100%",
  },
  imageSpace: {
    minWidth: "500px",
    minHeight: "200px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    borderRadius: 5,
    marginBottom: 10,
  },
  inputPrice: {
    textAlign: "right",
  },
}));

const initialValues = {
  name: "",
  price: 0,
  description: "",
  available: false,
  categoryId: 0,
  images: [],
  isAppetizer: false,
};

export default function FormRegisterFood({ id }) {
  const classes = useStyles();
  const [values, setValues] = useState(id ? null : initialValues);
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const url = "/api/Foods";
  const headers = { Authorization: `Bearer ${getToken()}` };
  const [clicked, setClicked] = useState(false);
  const [open, setOpen] = useState(false);
  console.log(values);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  useEffect(() => {
    if (id) {
      api.get(`${url}/${id}`).then((response) => {
        setValues(response.data);
      });
    }
  }, [id]);

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function onChangeImage() {
    const file = document.querySelector("input[type=file]").files[0];
    const reader = new FileReader();
    if (file) {
      console.log(reader.readAsDataURL(file));
      reader.onload = async () => {
        const type = reader.result.split(",")[0];
        const blob = reader.result.split(",")[1];
        if (id) {
          const obj = [
            {
              name: file.name,
              type: type,
              data: blob,
              size: file.size,
              foodId: values.id,
            },
          ];

          if (values.images.length > 0) {
            const image = values.images[0].id;
            const result = await api.delete(`api/Images?id=${image}`, {
              headers: headers,
            });
            console.log(result.status);
          }
          api
            .post("api/Images", obj[0], { headers: headers })
            .then((response) => {
              console.log(response.status);
            });

          setValues({ ...values, images: obj });
        } else {
          const obj = [
            {
              name: file.name,
              type: type,
              data: blob,
              size: file.size,
            },
          ];
          setValues({ ...values, images: obj });
        }
      };
    }
  }

  function onSubmit(ev) {
    setClicked(true);
    const method = id ? "put" : "post";
    const link = id ? `${url}/${id}` : url;

    ev.preventDefault();
    console.log(values);
    if (values.images.length > 0) {
      api[method](link, values, { headers: headers })
        .then((response) => {
          history.push("/Cadastrar/Comidas");
        })
        .catch((error) => {
          setOpen(true);
          setClicked(false);
        });
    } else {
      setOpen(true);
      setClicked(false);
    }
  }

  useEffect(() => {
    api.get("/api/Categories").then((response) => {
      if (response.status === 200) {
        setCategories(response.data);
      }
    });
  }, []);
  const handleChange = (event, value, maskedValue) => {
    event.preventDefault();
    setValues({ ...values, price: value });
  };

  const onClickIsAppetizer = (event) => {
    setValues({ ...values, isAppetizer: !values.isAppetizer });
  };

  return (
    <React.Fragment>
      <Grid item container xs>
        <Grid item xs>
          <Typography variant="h6" gutterBottom>
            {id ? "Editar Comida:" : "Cadastrar Comida:"}
          </Typography>
        </Grid>
        <Grid item>
          <IconButton onClick={() => history.push("/Cadastrar/Comidas")}>
            <ArrowBackIcon color="primary" />
          </IconButton>
        </Grid>
      </Grid>
      {!values ? (
        <Loading />
      ) : (
        <Paper
          elevation={4}
          className={classes.paper}
          component="form"
          onSubmit={onSubmit}
        >
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={12}>
                  {values.images.length > 0 &&
                    values.images.map((image) => (
                      <CardMedia
                        className={classes.media}
                        key={image.name}
                        image={image.type + "," + image.data}
                        title={image.name}
                      />
                    ))}
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoFocus
                  required
                  id="name"
                  name="name"
                  fullWidth
                  autoComplete="given-ingredient"
                  onChange={onChange}
                  value={values.name}
                  variant="filled"
                  label="Nome:"
                  helperText="Exemplos: Sushi, Temaki..."
                  type="text"
                />
              </Grid>
            </Grid>
            <Grid item sm={12}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    value={values.price}
                    required
                    variant="filled"
                    label="Preço:"
                    onChange={handleChange}
                    placeholder="0"
                    InputProps={{
                      inputComponent: BrlCurrencyComponent,
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl
                    required
                    variant="filled"
                    className={classes.formControl}
                  >
                    <InputLabel
                      id="categoryId"
                      name="categoryId"
                      onChange={onChange}
                    >
                      Categoria
                    </InputLabel>
                    <Select
                      labelId="categoryId"
                      id="categoryId"
                      name="categoryId"
                      value={values.categoryId}
                      onChange={onChange}
                    >
                      <MenuItem value={0}>Selecione</MenuItem>
                      {categories.map((category) => (
                        <MenuItem key={category.id} value={category.id}>
                          {category.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12}>
            <TextField
                  multiline
                  id="description"
                  name="description"
                  fullWidth
                  autoComplete="given-ingredient"
                  onChange={onChange}
                  value={values.description}
                  variant="filled"
                  label="Descrição"
                  helperText="Exemplos: Sushi, Temaki..."
                  type="text"
                />
            </Grid>
            <Grid container item sm={12}>
              <Grid item xs>
                <FormControl required variant="filled">
                  <InputLabel
                    id="available"
                    name="available"
                    onChange={onChange}
                  >
                    Status:
                  </InputLabel>
                  <Select
                    labelId="available"
                    id="available"
                    name="available"
                    value={values.available}
                    onChange={onChange}
                  >
                    <MenuItem value={true}>Habilitado</MenuItem>
                    <MenuItem value={false}>Desabilitado</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item>
                {values.categoryId === 1 && (
                  <Button
                    color={values.isAppetizer ? "primary" : "secondary"}
                    variant="contained"
                    endIcon={
                      values.isAppetizer ? <CheckCircleIcon /> : <CancelIcon />
                    }
                    onClick={onClickIsAppetizer}
                  >
                    Entrada
                  </Button>
                )}
                <Input
                  accept="image/*"
                  className={classes.input}
                  id="image"
                  multiple
                  onChange={onChangeImage}
                  type="file"
                  name="image"
                />
                <label
                  name="image"
                  id="image"
                  className={classes.buttons}
                  htmlFor="image"
                >
                  <Button color="primary" component="span">
                    {values.images.length > 0 ? "Alterar" : "Adicionar"} imagem
                  </Button>
                </label>
                {!clicked ? (
                  <Button
                    size="large"
                    className={classes.buttons}
                    type="submit"
                    color="primary"
                  >
                    Salvar
                  </Button>
                ) : (
                  <Button
                    disabled
                    size="large"
                    className={classes.buttons}
                    type="submit"
                    color="primary"
                  >
                    Salvar
                  </Button>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      )}

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          É necessário preencher todos os campos! Incluindo "Adicionar Imagem"
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}
