/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { creatPost } from "../api/postHttp";

const postStore = create((set) => ({
  isLoading: true,
  post: null,
  createPost: async (data) => {
    const response = await creatPost(data);
    console.log(response);
  },
}));

export default postStore;
