/* eslint-disable no-unused-vars */
import { create } from "zustand";

const authStore = create((set) => ({
  user: null,
  googleToken: null,
  isAuthenticated: false,
  signIn: async (data) => set(() => ({ user: data })),
  signUp: async (data) => set(() => ({ user: data })),
  googleAuth: async (token) => set(() => ({ googleToken: token })),
  setIsAuthenticated: (status) => set(() => ({ isAuthenticated: status })),
}));

export default authStore;
