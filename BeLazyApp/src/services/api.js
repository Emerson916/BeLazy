import axios from "axios";

export const api = axios.create({
  baseURL: "http://172.16.16.151:3000",
});