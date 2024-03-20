import { createSlice } from "@reduxjs/toolkit";
import { formData } from "./FormAction";

const initialState = {
  form: [],
  loading: "pending",
  error: null,
};

const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(formData.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(formData.fulfilled, (state, action) => {
      state.form = action.payload;
      console.log(state.form);
      state.error = null;
    });
    builder.addCase(formData.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export default formSlice.reducer;
