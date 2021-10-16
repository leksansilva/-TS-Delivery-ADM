import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { theme } from "./components/styles/template";

import Routes from "./Routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
