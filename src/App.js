import React from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import Routes from "./Routes";
import { DefaultTheme } from "./components/styles/template";
function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
