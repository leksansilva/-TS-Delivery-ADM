import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { styles } from "../../components/styles/template";
import Header from "../../components/Header";
import Sidebar from "../../components/SideBar";
import Copyright from "../../components/Copyright";

function UserTemplate(props) {
  const { classes } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

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
        <Header onDrawerToggle={handleDrawerToggle} name="Usuários" tabs={[]} />
        <main className={classes.main}>{props.content()}</main>
        <footer className={classes.footer}>
          <Copyright />
        </footer>
      </div>
    </div>
  );
}

UserTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserTemplate);
