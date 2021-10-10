import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme } from "../../components/styles/template";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import api from "../../services/api";
import {
  getToken,
  login,
  setExpiration,
  setExpirationRefreshToken,
  setRefreshToken,
} from "../../services/auth";
import { Redirect, useHistory } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Copyright from "../../components/Copyright";
import { IconButton, InputAdornment } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#AF231C",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [open, setOpen] = useState({state:false, message:''});
  const [visibility, setVisbility] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleClickShowPassword = (click) => {
    click ? setVisbility(false) : setVisbility(true);
  };
  const onError = function (error) {
    console.log("Request Failed:", error.config);
    if (error.response) {
      console.log(error.response.status);
      if (error.response.status === 404) {
        setOpen({state:true, message:'Senha ou usuário incorreto!'});
      }
    } else {
      setOpen({state: false, message:''});
      console.log(error.message);
      if(error.message === 'Network Error'){
        setOpen({state: true, message:'Sem acesso a internet...'});
      }
    }

    return Promise.reject(error.response || error.message);
  };

  async function handleSubimit() {
    await api
      .post("/api/Auth/SignIn", { email, password })
      .then((response) => {
        if (response.status === 200) {
          login(response.data.token);
          setExpiration(response.data.expiration);
          setRefreshToken(response.data.refreshToken);
          setExpirationRefreshToken(response.data.expirationRefreshToken);
          history.push("/");
        }
      })
      .catch(onError);
  }

  return getToken() ? (
    <Redirect to="/" />
  ) : (
    <MuiThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Faça Login
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Digite seu email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Digite sua senha"
            type={visibility ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => handleClickShowPassword(visibility)}
                  >
                    {visibility ? (
                      <Visibility color="primary" />
                    ) : (
                      <VisibilityOff color="primary" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubimit}
          >
            Entrar
          </Button>
        </div>
        <Box mt={8}>
          <Snackbar open={open.state} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
              {open.message}
            </Alert>
          </Snackbar>
        </Box>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </MuiThemeProvider>
  );
}
