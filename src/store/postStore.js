import { create } from "zustand";
import { getPosts, getPostById, createPost } from "../api/postHttp";

const postStore = create((set) => ({
  isLoading: false,
  isPostsLoading: false,
  post: null,
  message: null,
  postSelected: [],
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
      set(() => ({ isPostsLoading: true }));
      set(() => ({ post: response.data }));
      return response;
    } catch (error) {
      set(() => ({ message: error.response.data.message }));
    } finally {
      set(() => ({ isPostsLoading: false }));
    }
  },
  getPostById: async (postId) => {
    try {
      const response = await getPostById(postId);
      console.log(response);
      set(() => ({ postSelected: response.data }));
    } catch (error) {
      set(() => ({ message: error.response.data.message }));
    }
  },
  setMessage: (error) => {
    set(() => ({ message: error }));
  },
}));

export default postStore;
