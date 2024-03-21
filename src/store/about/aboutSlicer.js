import { createSlice } from "@reduxjs/toolkit";

import { getAbout } from "./aboutAction";

const initialState = {
  info: [],
  loading: "pending",
  error: null,
};

const aboutSlice = createSlice({
  name: "about",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAbout.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(getAbout.fulfilled, (state, action) => {
      state.info = action.payload;
      state.loading = "idle";
      state.error = null;
    });
    builder.addCase(getAbout.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export default aboutSlice.reducer;
