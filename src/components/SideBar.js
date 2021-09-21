import React from "react";
import Hidden from "@material-ui/core/Hidden";
import Navigator from "../components/Navigator";
import { CssBaseline } from "@material-ui/core";

const drawerWidth = 256;
export default function Sidebar({
  drawer,
  mobileOpen,
  handleDrawerToggle,
  newOrder,
}) {
  return (
    <>
      <CssBaseline />
      <nav className={drawer}>
        <Hidden smUp implementation="js">
          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
          />
        </Hidden>
        <Hidden xsDown implementation="css">
          <Navigator PaperProps={{ style: { width: drawerWidth } }} />
        </Hidden>
      </nav>
    </>
  );
}
