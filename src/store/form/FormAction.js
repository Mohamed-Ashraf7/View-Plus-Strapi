import { instance } from "../../utils/APi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const formData = createAsyncThunk(
  "form/formData",
  async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await instance.post(`/api/forms`, { data: userData });
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return rejectWithValue(error.message);
    }
  }
);
