import { create } from "zustand";
import {
  getUserProfileHttp,
  updateUserProfileHttp,
} from "../api/userProfileHttp";
const userProfileStore = create((set) => ({
  userProfile: [],
  userProfilePosts: [],
  isProfileLoading: false,
  userProfileMessage: null,
  getUserProfile: async (userName) => {
    try {
      set(() => ({ isProfileLoading: true }));
      const response = await getUserProfileHttp(userName);
      console.log(response.data.UserProfile);
      set(() => ({ userProfile: response.data.UserProfile }));
      set(() => ({ userProfilePosts: response.data.Posts }));
    } catch (error) {
      console.log(error);
      set(() => ({ userProfileMessage: error.response.data.message }));
    } finally {
      set(() => ({ isProfileLoading: false }));
    }
  },
  updateeUserProfile: async (userData, userId) => {
    try {
      set(() => ({ isProfileLoading: true }));
      const response = await updateUserProfileHttp(userData, userId);
      return response;
    } catch (error) {
      console.log(error);
      set(() => ({ userProfileMessage: error.response.data.message }));
    } finally {
      set(() => ({ isProfileLoading: false }));
    }
  },
  setUserProfileMessage: (status) => {
    set(() => ({ userProfileMessage: status }));
  },
}));

export default userProfileStore;
