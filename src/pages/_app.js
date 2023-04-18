import "@/styles/globals.css";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import { Provider, useSelector } from "react-redux";
import store from "../app/store";
import persistor from "../app/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import { useEffect } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#99999",
    },
  },
  shape: {
    borderRadius: 0,
  },
});

console.log(theme);

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          {() => <Component {...pageProps} />}
        </PersistGate>
      </ThemeProvider>
    </Provider>
  );
}
