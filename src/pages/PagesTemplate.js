import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { styles } from "../components/styles/template";
import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import Copyright from "../components/Copyright";
import { useLocation, useParams } from "react-router";

function PagesTemplate(props) {
  const { classes } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { id } = useParams();
  const currentTab = {
    "/":"Home",
    "/Pedidos/EmEspera": "Pedidos",
    "/Pedidos/EmAndamento": "Pedidos",
    "/Pedidos/Pronto": "Pedidos",
    "/Pedidos/SaiuParaEntrega": "Pedidos",
    "/Pedidos/Entregue": "Pedidos",
    "/Pedidos/NaoEntregue": "Pedidos",
    "/Pedidos/Cancelado": "Pedidos",

    "/Cadastrar/Comidas": "Cadastrar",
    "/Cadastrar/Comida/Nova": "Cadastrar",
    "/Cadastrar/Adicionais": "Cadastrar",
    "/Cadastrar/Adicional/Novo": "Cadastrar",
    "/Cadastrar/Categorias": "Cadastrar",
    "/Cadastrar/Categoria/Nova": "Cadastrar",
    "/Cadastrar/Categoria/": "Cadastrar",

    "/Usuários": "Usuários",

    "/Feedback": "Feedbacks",
  };

  const headerName = currentTab[location.pathname]
    ? currentTab[location.pathname]
    : location.pathname === `/Cadastrar/Adicional/${id}`
    ? "Cadastrar"
    : location.pathname === `/Cadastrar/Categoria/${id}`
    ? "Cadastrar"
    : location.pathname === `/Cadastrar/Comida/${id}`
    ? "Cadastrar"
    : location.pathname === `/Usuário/${id}`
    ? "Usuários"
    : "";

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        drawer={classes.drawer}
      />
      <div className={classes.app}>
        <Header onDrawerToggle={handleDrawerToggle} name={headerName} tabs={[]} />
        <main className={classes.main}>{props.routes()}</main>
        <footer className={classes.footer}>
          <Copyright />
        </footer>
      </div>
    </div>
  );
}

PagesTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PagesTemplate);
