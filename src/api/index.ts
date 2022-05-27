import axios from "axios";

const API = axios.create({
  // baseURL: process.env.REACT_APP_API_ROOT,
  baseURL: `${process.env.REACT_APP_API_ROOT}`,
  timeout: 10000,
  params: {},
  withCredentials: true,
});

export default API;
