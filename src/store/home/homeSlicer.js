import { createSlice } from "@reduxjs/toolkit";
import { getHomeInfo } from "./homeAction";

const initialState = {
  info: [],
  loading: "pending",
  error: null,
};

const homeSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHomeInfo.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(getHomeInfo.fulfilled, (state, action) => {
      state.info = action.payload;
      state.loading = "idle";
      state.error = null;
    });
    builder.addCase(getHomeInfo.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export default homeSlice.reducer;
