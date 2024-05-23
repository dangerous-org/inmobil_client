import axiosConfig from "./axios.config";

export const createPost = async (data) => {
  const response = await axiosConfig.post("/posts/create", data);
  return response;
};

export const getPosts = async () => {
  const response = await axiosConfig.get("/posts/getAll");
  return response;
};

export const getPostById = async (postId) => {
  const response = await axiosConfig.get(`/posts/findbyid?id=${postId}`);
  return response;
};

export const getPostFilteredHttp = async (filter) => {
  const response = await axiosConfig.get(`/posts/find?termino=${filter}`);
  return response;
};

export const updatePostHttp = async (data, postId) => {
  const response = await axiosConfig.put(`/posts/update?id=${postId}`, data);
  return response;
};
