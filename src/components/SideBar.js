import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import Navigator from '../components/Navigator';



export default function Sidebar(props){


    return(
      
        <nav className={props.classes.drawer}>
          <Hidden smUp implementation="js">
            <Navigator
              PaperProps={{ style: { width: 256 } }}
              variant="temporary"
              open={props.mobileOpen}
              onClose={props.handleDrawerToggle}
            />
          </Hidden>
          <Hidden xsDown implementation="css">
            <Navigator PaperProps={{ style: { width: 256 } }} />
          </Hidden>
        </nav>

    )
}