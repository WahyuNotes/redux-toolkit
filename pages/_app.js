import "../styles/globals.css";
import { store } from "../store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./api/apiSlice";

function MyApp({ Component, pageProps }) {
  return (
    <ApiProvider api={apiSlice}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApiProvider>
  );
}

export default MyApp;
