import axios from "axios";
import { refresh, refreshErrorHandle } from "./refreshToken";

const API = axios.create({
  // baseURL: process.env.REACT_APP_API_ROOT,
  baseURL: `${process.env.REACT_APP_API_ROOT}`,
  timeout: 10000,
  params: {},
  withCredentials: true,
});

API.interceptors.request.use(refresh, refreshErrorHandle);

export default API;
