import axiosConfig from "./axios.config";

export const getUserProfileHttp = async (userName) => {
  const response = await axiosConfig.get(
    `/userProfile/getUserInfo/${userName}`
  );
  return response;
};

export const updateUserProfileHttp = async (userData, userId) => {
  const response = await axiosConfig.put(
    `/userProfile/update/${userId}`,
    userData
  );
  return response;
};
