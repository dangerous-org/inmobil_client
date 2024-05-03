import axiosConfig from "./axios.config";

export const creatPost = async (data) => {
  const response = await axiosConfig.post("/posts/create", data);
  return response;
};
