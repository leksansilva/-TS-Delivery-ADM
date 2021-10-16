import { ThemeProvider } from "@material-ui/styles";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { theme } from "./components/styles/template";

ReactDOM.render(
  <Fragment>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Fragment>,
  document.getElementById("root")
);
