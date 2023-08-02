import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeIndex: {},
  lngActiveIndex: 1,
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
    setLngActiveIndex(state, action) {
      state.lngActiveIndex = action.payload;
    },
  },
});

export const { setActiveIndex, setSubActiveIndex, setLngActiveIndex } =
  mainSlice.actions;

export default mainSlice.reducer;
