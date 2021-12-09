import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { DefaultTheme } from "./components/styles/template";

import Routes from "./Routes";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
