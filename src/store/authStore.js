/* eslint-disable no-unused-vars */
import { create } from "zustand";
import Cookies from "js-cookie";
import {
  signUpHttp,
  signInHttp,
  authenticateUseHttp,
  googleAuth,
} from "../api/userHttp";

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
  googleAuth: async (token) => {
    try {
      const response = await googleAuth(token);
      set(() => ({ user: response.data.User }));
      set(() => ({ isAuthenticated: true }));
    } catch (error) {
      set(() => ({ message: error.response.data.message }));
      set(() => ({ isAuthenticated: false }));
    }
  },
  authenticateUser: async () => {
    try {
      const token = Cookies.get("authToken");
      const response = await authenticateUseHttp(token);
      set(() => ({ user: response.data }));
      set(() => ({ isAuthenticated: true }));
    } catch (error) {
      set(() => ({ isAuthenticated: false }));
    }
  },
  logOutUser: () => {
    Cookies.remove('authToken');
    set(() => ({ user: null }));
    set(() => ({ isAuthenticated: false }));
  },
  setMessage: (error) => set(() => ({ message: error })),
}));

export default authStore;
