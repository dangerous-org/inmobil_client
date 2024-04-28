import axiosConfig from "./axios.config";

export const signUpHttp = async (data) => {
  const response = await axiosConfig.post("/users/create", data);
  return response;
};

export const signInHttp = async (data) => {
  const response = await axiosConfig.post("/users/login", data);
  return response;
};

export const authenticateUseHttp = async (token) => {
  const response = await axiosConfig.post("/users/authenticateUser", token);
  return response;
};

export const googleAuth = async (token) => {
  const response = await axiosConfig.post("/users/googleOauth", {token});
  return response;
};
