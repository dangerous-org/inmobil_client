import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
});

export default axiosConfig;
