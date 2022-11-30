import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./pages/features/counter/counterSlice";
import counterReducer2 from "./pages/features/counter/counterSlice2";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "./pages/api/apiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    counter2: counterReducer2,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
setupListeners(store.dispatch);
