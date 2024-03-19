import { instance } from "../../utils/APi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProjects = createAsyncThunk(
  "projects/getProjects",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await instance.get(`/api/projects?populate=*`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return rejectWithValue(error.message);
    }
  }
);
export const getProjectCat = createAsyncThunk(
  "projects/getProjectCat",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await instance.get(`/api/project-categories`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return rejectWithValue(error.message);
    }
  }
);
export const getPotrofiloInfo = createAsyncThunk(
  "projects/getPortofiloInfo",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await instance.get(`/api/portfolios?populate=*`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return rejectWithValue(error.message);
    }
  }
);
