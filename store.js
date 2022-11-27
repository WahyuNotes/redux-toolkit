import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./pages/features/counter/counterSlice";
import counterReducer2 from "./pages/features/counter/counterSlice2";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    counter2: counterReducer2,
  },
});
