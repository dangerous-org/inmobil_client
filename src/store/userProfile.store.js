import { create } from "zustand";
import {
  getUserProfileHttp,
  updateUserProfileHttp,
} from "../api/userProfileHttp";

const userProfileStore = create((set) => ({
  userProfile: [],
  userProfilePosts: [],
  isProfileLoading: false,
  isProfileUpdated: false,
  userProfileMessage: null,
  getUserProfile: async (userName) => {
    try {
      set(() => ({ isProfileLoading: true }));
      const response = await getUserProfileHttp(userName);
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
      set(() => ({ userProfile: response.data, isProfileUpdated: true }));
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
  resetProfileUpdated: (status) => {
    set(() => ({ isProfileUpdated: status }));
  },
}));

export default userProfileStore;
