import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  num: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    plusNum: (state) => {
      state.num += 1;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, plusNum } =
  counterSlice.actions;

export default counterSlice.reducer;
