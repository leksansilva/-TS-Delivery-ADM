import React from "react";
import { useStyles } from "../../components/styles/template";
import Header from "../../components/Header";
import Sidebar from "../../components/SideBar";
import Copyright from "../../components/Copyright";

function RegisterTemplate(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const tabs = [
    { name: "Comidas", link: "/Cadastrar/Comidas" },
    { name: "Adicionais", link: "/Cadastrar/Adicionais" },
    { name: "Categorias", link: "/Cadastrar/Categorias" },
  ];

  return (
    <div className={classes.root}>
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        drawer={classes.drawer}
        editId={props.id}
      />
      <div className={classes.app}>
        <Header
          onDrawerToggle={handleDrawerToggle}
          name="Cadastrar"
          tabs={tabs}
          editId={props.id}
        />
        <main className={classes.main}>{props.register()}</main>
        <footer className={classes.footer}>
          <Copyright />
        </footer>
      </div>
    </div>
  );
}

export default RegisterTemplate;
