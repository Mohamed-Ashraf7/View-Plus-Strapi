import { createSlice } from "@reduxjs/toolkit";
import { getSlides } from "./SliderAction";

const initialState = {
  Data: [],
  loading: "pending",
  error: null,
};

const Slider = createSlice({
  name: "slides",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSlides.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(getSlides.fulfilled, (state, action) => {
      state.Data = action.payload;
      state.loading = "idle";
      state.error = null;
    });
    builder.addCase(getSlides.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export default Slider.reducer;
