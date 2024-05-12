import { create } from "zustand";
import {
  getUserProfileHttp,
  updateUserProfileHttp,
} from "../api/userProfileHttp";
const userProfileStore = create((set) => ({
  userProfile: [],
  userProfilePosts: [],
  isProfileLoading: false,
  getUserProfile: async (userName) => {
    try {
      set(() => ({ isProfileLoading: true }));
      const response = await getUserProfileHttp(userName);
      set(() => ({ userProfile: response.data.UserProfile }));
      set(() => ({ userProfilePosts: response.data.Posts }));
    } catch (error) {
      console.log(error);
    } finally {
      set(() => ({ isProfileLoading: false }));
    }
  },
  updateeUserProfile: async (userData, userId) => {
    try {
      set(() => ({ isProfileLoading: true }));
      const response = await updateUserProfileHttp(userData, userId);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      set(() => ({ isProfileLoading: false }));
    }
  },
}));

export default userProfileStore;
