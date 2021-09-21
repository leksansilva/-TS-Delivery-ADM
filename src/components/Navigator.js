/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PeopleIcon from "@material-ui/icons/People";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ListAltIcon from "@material-ui/icons/ListAlt";
import logo from "../assets/logo.png";
import FeedbackIcon from "@material-ui/icons/Feedback";
import { Link, useLocation, useParams } from "react-router-dom";
import { Button } from "@material-ui/core";

const styles = (theme) => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: "rgba(255, 255, 255, 0.7)",
    "&:hover,&:focus": {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
    },
  },
  itemCategory: {
    backgroundColor: "#1D1F2A",
    boxShadow: "0 -1px 0 #404854 inset",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
  },
  firebase: {
    fontSize: 200,
    color: theme.palette.common.white,
  },
  itemActiveItem: {
    color: "#BD9B60",
  },
  itemPrimary: {
    fontSize: "inherit",
  },
  itemIcon: {
    minWidth: "auto",
    marginRight: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
  img: {},
  link: {
    textDecoration: "none",
  },
});

function Navigator(props) {
  const { classes, ...other } = props;
  const location = useLocation();
  const { id } = useParams();
  const categories = [
    {
      id: "Menu",
      children: [
        {
          id: "Pedidos",
          icon: <NotificationsIcon />,
          link: "/Pedidos/EmEspera",
        },
        { id: "Usuários", icon: <PeopleIcon />, link: "/Usuários" },
        { id: "Cadastrar", icon: <ListAltIcon />, link: "/Cadastrar/Comidas" },
        { id: "Feedbacks", icon: <FeedbackIcon />, link: "/Feedback" },
      ],
    },
  ];
  const currentTab = {
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
  const [active, setActive] = useState(
    currentTab[location.pathname]
      ? currentTab[location.pathname]
      : location.pathname === `/Cadastrar/Adicional/${id}`
      ? "Cadastrar"
      : location.pathname === `/Cadastrar/Categoria/${id}`
      ? "Cadastrar"
      : location.pathname === `/Cadastrar/Comida/${id}`
      ? "Cadastrar"
      : ""
  );
  const handleChange = (event, newValue) => {
    setActive(newValue);
  };
  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          className={clsx(classes.firebase, classes.item, classes.itemCategory)}
        >
          <Button component={Link} to="/">
            <img src={logo} />
          </Button>
        </ListItem>
        {categories.map(({ id, children }) => (
          <Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, link }) => (
              <ListItem
                onChange={handleChange}
                component={Link}
                to={link}
                key={childId}
                className={clsx(
                  classes.item,
                  childId === active && classes.itemActiveItem
                )}
              >
                <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                >
                  {childId}
                </ListItemText>
              </ListItem>
            ))}

            <Divider className={classes.divider} />
          </Fragment>
        ))}
      </List>
    </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);
