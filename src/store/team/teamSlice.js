import { createSlice } from "@reduxjs/toolkit";
import {getTeams} from "./teamAction";


const initialState = {
  teams: [],
  loading: "pending",
  error: null,
};

const teamSlice = createSlice({
  name: "teams",
  initialState:initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTeams.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(getTeams.fulfilled, (state, action) => {
      state.teams = action.payload;
      state.error = null;
    });
    builder.addCase(getTeams.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export default  teamSlice.reducer;