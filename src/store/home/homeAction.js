import { instance } from "../../utils/APi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getHomeInfo = createAsyncThunk(
  "home/getHomeInfo",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await instance.get(`/api/home-infos?populate=*`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return rejectWithValue(error.message);
    }
  }
);
