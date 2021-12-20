import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { makeStyles, Tooltip } from "@material-ui/core";
import { getToken, logout } from "../services/auth";

const lightColor = "rgba(255, 255, 255, 0.7)";

const useStyles = makeStyles((theme) => ({
  secondaryBar: {
    zIndex: 0,
    position: "static",
    width: "100%",
    backgroundColor: "#1D1F2A",
  },
  menuButton: {
    marginLeft: "-1rem",
  },
  badge: {
    right: 2,
    position: "fixed",
  },
  button: {
    borderColor: lightColor,
  },
  header: {
    backgroundColor: "#1D1F2A",
    position: "sticky",
  },
  item: {
    color: "#ffff",
  },
}));

function Header(props) {
  const { onDrawerToggle } = props;
  const classes = useStyles();
  const tabs = props.tabs;
  const location = useLocation();
  const { id } = useParams();
  const history = useHistory();
  const currentTab = {
    "/Pedidos/EmEspera": 0,
    "/Pedidos/EmAndamento": 1,
    "/Pedidos/Pronto": 2,
    "/Pedidos/SaiuParaEntrega": 3,
    "/Pedidos/Entregue": 4,
    "/Pedidos/NaoEntregue": 5,
    "/Pedidos/Cancelado": 6,

    "/Cadastrar/Comidas": 0,
    "/Cadastrar/Comida/Nova": 0,
    "/Cadastrar/Adicionais": 1,
    "/Cadastrar/Adicional/Novo": 1,
    "/Cadastrar/Categorias": 2,
    "/Cadastrar/Categoria/Nova": 2,
  };

  const [value, setValue] = useState(
    currentTab[location.pathname]
      ? currentTab[location.pathname]
      : location.pathname === `/Cadastrar/Adicional/${id}`
      ? 1
      : location.pathname === `/Cadastrar/Categoria/${id}`
      ? 2
      : location.pathname === `/Cadastrar/Comida/${id}`
      ? 0
      : currentTab[location.pathname]
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function onClickLogout() {
    logout();
    if (!getToken()) {
      history.push("/Login");
    }
  }
  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: "#1D1F2A",
          position: "sticky",
        }}
      >
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Hidden smUp>
              <Grid item>
                <IconButton
                  aria-label="open drawer"
                  onClick={onDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon className={classes.item} />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item xs />
            <Grid item>
              <Tooltip title="Sair">
                <IconButton onClick={onClickLogout}>
                  <ExitToAppIcon className={classes.item} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </div>
      <div color="inherit" className={classes.secondaryBar}>
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography className={classes.item} variant="h5" component="h1">
                {props.name}
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </div>
      <div color="inherit" className={classes.secondaryBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabs.map((tab) => (
            <Tab
              component={Link}
              key={tab.name}
              to={tab.link}
              className={classes.tab}
              label={
                <div>
                  &nbsp;&nbsp;
                  <Badge
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    badgeContent={tab.count}
                    color="secondary"
                  >
                    <Typography className={classes.item} variant="body2">
                      {" "}
                      {tab.name}{" "}
                    </Typography>
                  </Badge>
                  &nbsp;&nbsp;&nbsp;
                </div>
              }
              textColor="inherit"
            />
          ))}
        </Tabs>
      </div>
    </React.Fragment>
  );
}

export default Header;
