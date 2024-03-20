import axios from "axios";

export const instance = axios.create({
  baseURL: "https://diligent-canvas-56429d634c.strapiapp.com",
  headers: {
    "content-type": "application/json",
  },
});
export const baseUrl = "https://diligent-canvas-56429d634c.strapiapp.com";
