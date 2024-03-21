import { createSlice } from "@reduxjs/toolkit";
import { getContactInfo } from "./contactAction";

const initialState = {
  info: [],
  loading: "pending",
  error: null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getContactInfo.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(getContactInfo.fulfilled, (state, action) => {
      state.info = action.payload;
      state.loading = "idle";
      state.error = null;
    });
    builder.addCase(getContactInfo.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export default contactSlice.reducer;
