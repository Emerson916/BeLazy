import axios from "axios";

export const api = axios.create({
  // baseURL: "http://172.16.16.151:3000",
  baseURL: "http://192.168.18.9:3000",
});