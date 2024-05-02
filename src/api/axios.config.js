import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "http://localhost:8054/api",
  withCredentials: true,
});

export default axiosConfig;
