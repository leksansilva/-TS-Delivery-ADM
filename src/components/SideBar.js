import React from "react";
import Hidden from "@material-ui/core/Hidden";
import Navigator from "../components/Navigator";


export default function Sidebar({
  drawer,
  mobileOpen,
  handleDrawerToggle,
  newOrder,
}) {
  return (
    <>
      <nav className={drawer}>
        <Hidden smUp implementation="js">
          <Navigator

            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
          />
        </Hidden>
        <Hidden xsDown implementation="css">
          <Navigator  />
        </Hidden>
      </nav>
    </>
  );
}
