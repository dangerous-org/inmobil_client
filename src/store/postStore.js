import { create } from "zustand";
import { getPosts, createPost } from "../api/postHttp";

const postStore = create((set) => ({
  isLoading: false,
  post: null,
  message: null,
  createPost: async (data) => {
    try {
      set(() => ({ isLoading: true }));
      const response = await createPost(data);
      set(() => ({ post: response.data }));
      return response;
    } catch (error) {
      set(() => ({ message: error.response.data.message }));
    } finally {
      set(() => ({ isLoading: false }));
    }
  },
  getPosts: async () => {
    try {
      const response = await getPosts();
      set(() => ({ post: response.data }));
      return response;
    } catch (error) {
      set(() => ({ message: error.response.data.message }));
    }
  },
  setMessage: (error) => {
    set(() => ({ message: error }));
  },
}));

export default postStore;
