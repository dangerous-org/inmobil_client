import { create } from "zustand";
import Cookies from "js-cookie";
import { signUpHttp, signInHttp, authenticateUseHttp } from "../api/userHttp";

const authStore = create((set) => ({
  user: null,
  message: null,
  googleToken: null,
  isAuthenticated: false,
  signUp: async (data) => {
    try {
      const response = await signUpHttp(data);
      set(() => ({ user: response.data.User }));
      set(() => ({ isAuthenticated: true }));
    } catch (error) {
      set(() => ({ message: error.response.data.message }));
      set(() => ({ isAuthenticated: false }));
    }
  },
  signIn: async (data) => {
    try {
      const response = await signInHttp(data);
      set(() => ({ user: response.data }));
      set(() => ({ isAuthenticated: true }));
    } catch (error) {
      set(() => ({ message: error.response.data.message }));
      set(() => ({ isAuthenticated: false }));
    }
  },
  googleAuth: async (token) => set(() => ({ googleToken: token })),
  authenticateUser: async () => {
    try {
      const token = Cookies.get("authToken");
      const response = await authenticateUseHttp(token);
      set(() => ({ isAuthenticated: true }));
      set(() => ({ user: response.data }));
    } catch (error) {
      set(() => ({ isAuthenticated: false }));
    }
  },
  setMessage: (error) => set(() => ({ message: error })),
}));

export default authStore;
