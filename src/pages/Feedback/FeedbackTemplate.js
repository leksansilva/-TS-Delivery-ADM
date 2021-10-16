import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useStyles } from "../../components/styles/template";
import Header from "../../components/Header";
import Sidebar from "../../components/SideBar";
import Copyright from "../../components/Copyright";

function FeedbackTemplate(props) {
  const classes = useStyles();
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
        <Header onDrawerToggle={handleDrawerToggle} name="Feedback" tabs={[]} />
        <main className={classes.main}>{props.feedback()}</main>
        <footer className={classes.footer}>
          <Copyright />
        </footer>
      </div>
    </div>
  );
}

export default FeedbackTemplate;
