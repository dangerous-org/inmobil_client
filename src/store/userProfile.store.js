import { create } from "zustand";
import { getUserProfileHttp } from "../api/userProfileHttp";
const userProfileStore = create((set) => ({
  userProfile: [],
  isProfileLoading: false,
  getUserProfile: async (userName) => {
    try {
      set(() => ({ isProfileLoading: true }));
      const response = await getUserProfileHttp(userName);
      console.log(response);
      set(() => ({ userProfile: response.data }));
    } catch (error) {
      console.log(error);
    } finally {
      set(() => ({ isProfileLoading: false }));
    }
  },
}));

export default userProfileStore;
