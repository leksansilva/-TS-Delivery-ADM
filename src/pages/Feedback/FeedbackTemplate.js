import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider, withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme, styles } from "../../components/styles/template";
import Header from "../../components/Header";
import Sidebar from "../../components/SideBar";
import Copyright from "../../components/Copyright";

function FeedbackTemplate(props) {
  const { classes } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Sidebar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          drawer={classes.drawer}
        />
        <div className={classes.app}>
          <Header
            onDrawerToggle={handleDrawerToggle}
            name="Feedback"
            tabs={[]}
          />
          <main className={classes.main}>{props.feedback()}</main>
          <footer className={classes.footer}>
            <Copyright />
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

FeedbackTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeedbackTemplate);
