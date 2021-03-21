import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CssBaseline, StylesProvider } from "@material-ui/core";
import "@fontsource/roboto";
import { ThemeProvider } from "styled-components";
import { theme } from "./core/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <CssBaseline />
        <App />
      </StylesProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
