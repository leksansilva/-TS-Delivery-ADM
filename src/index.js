import { ThemeProvider } from "@material-ui/core";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DefaultTheme } from "./components/styles/template";

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,

  document.getElementById("root")
);
