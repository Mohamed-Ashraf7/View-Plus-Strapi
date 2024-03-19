import { createSlice } from "@reduxjs/toolkit";
import { getProducts, getcategory } from "./productAction";

const initialState = {
  Products: [],
  category: [],
  loading: "pending",
  error: null,
};

const Products = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.Products = action.payload;
      state.error = null;
    });
    builder.addCase(getcategory.fulfilled, (state, action) => {
      state.category = action.payload;
      state.error = null;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export default Products.reducer;
