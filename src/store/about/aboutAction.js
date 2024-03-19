// SliderAction.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../utils/APi";

export const getAbout = createAsyncThunk(
  "about/getAbout",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await instance.get(`/api/about-infos?populate=*`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return rejectWithValue(error.message);
    }
  }
);
