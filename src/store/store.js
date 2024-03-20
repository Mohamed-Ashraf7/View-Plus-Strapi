import { configureStore } from "@reduxjs/toolkit";
import slider from "./slider/SliderSlice";
import Products from "./products/productSlice";
import teamSlice from "./team/teamSlice";
import homeSlicer from "./home/homeSlicer";
import projectSlicer from "./project/projectSlicer";
import aboutSlicer from "./about/aboutSlicer";
import contactSlice from "./contact/contactSlice";
import formSlicer from "./form/formSlicer";
const store = configureStore({
  reducer: {
    slider,
    Products,
    teamSlice,
    homeSlicer,
    projectSlicer,
    aboutSlicer,
    contactSlice,
    formSlicer,
  },
});

export default store;
