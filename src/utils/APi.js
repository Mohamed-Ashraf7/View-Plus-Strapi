import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:1337",
  headers: {
    "content-type": "application/json",
  },
});
export const baseUrl = "http://localhost:1337";
