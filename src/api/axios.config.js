import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "http://localhost:8056/api",
  withCredentials: true,
});

export default axiosConfig;
