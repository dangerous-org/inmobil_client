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
      set(() => ({ post: response.data.post }));
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
      set(() => ({ isLoading: true }));
      set(() => ({ post: response.data }));
      return response;
    } catch (error) {
      set(() => ({ message: error.response.data.message }));
    } finally {
      set(() => ({ isLoading: false }));
    }
  },
  setMessage: (error) => {
    set(() => ({ message: error }));
  },
}));

export default postStore;
