import { MuiThemeProvider } from "@material-ui/core";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { theme } from "./components/styles/template";

ReactDOM.render(
  <Fragment>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Fragment>,
  document.getElementById("root")
);
