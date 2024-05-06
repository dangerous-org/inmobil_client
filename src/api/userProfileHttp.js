import axiosConfig from "./axios.config";
export const getUserProfileHttp = async (userName) => {
  const response = await axiosConfig.get(
    `/userProfile/getUserInfo/${userName}`
  );
  return response;
};
