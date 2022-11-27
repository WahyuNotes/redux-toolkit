import { createSlice } from "@reduxjs/toolkit";

export const counterSlice2 = createSlice({
  name: "counter2",
  initialState: {
    value2: 0,
    text: "aku",
  },
  reducers: {
    changeText: (state, action) => {
      state.text = action.payload;
    },
    increment2: (state) => {
      state.value2 += 1;
    },
    decrement2: (state) => {
      state.value2 -= 1;
    },
    incrementByAmount2: (state, action) => {
      state.value2 += action.payload;
    },
  },
});
export const { increment2, changeText, decrement2, incrementByAmount2 } =
  counterSlice2.actions;
export default counterSlice2.reducer;
