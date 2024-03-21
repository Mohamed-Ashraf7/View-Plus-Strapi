import { createSlice } from "@reduxjs/toolkit";

import { getProjects, getPotrofiloInfo, getProjectCat } from "./projectAction";

const initialState = {
  Projects: [],
  info: [],
  categories: [],
  loading: "pending",
  error: null,
};

const projects = createSlice({
  name: "projects",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProjects.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(getProjects.fulfilled, (state, action) => {
      state.Projects = action.payload;
      state.loading = "idle";
      state.error = null;
    });
    builder.addCase(getPotrofiloInfo.fulfilled, (state, action) => {
      state.info = action.payload;
      state.loading = "idle";
      state.error = null;
    });
    builder.addCase(getProjectCat.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.loading = "idle";
      state.error = null;
    });
    builder.addCase(getProjects.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export default projects.reducer;
