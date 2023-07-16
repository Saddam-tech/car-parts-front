import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeIndex: {},
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setActiveIndex(state, action) {
      state.activeIndex["parent"] = action.payload;
    },
    setSubActiveIndex(state, action) {
      state.activeIndex["child"] = action.payload;
    },
  },
});

export const { setActiveIndex, setSubActiveIndex } = mainSlice.actions;

export default mainSlice.reducer;
