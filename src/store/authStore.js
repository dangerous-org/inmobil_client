/* eslint-disable no-unused-vars */
import { create } from "zustand";

const authStore = create((set) => ({
  user: null,
  signIn: (data) => set(() => ({ user: data })),
}));

export default authStore;
