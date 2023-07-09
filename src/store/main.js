import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeIndex: {},
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setActiveIndex(state, action) {
      state.activeIndex = action.payload;
    },
  },
});

export const { setActiveIndex } = mainSlice.actions;

export default mainSlice.reducer;
