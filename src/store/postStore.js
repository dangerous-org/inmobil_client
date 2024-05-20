import { create } from "zustand";
import { getPosts, getPostById, createPost } from "../api/postHttp";

const postStore = create((set) => ({
  isLoading: false,
  isPostsLoading: false,
  post: [],
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
      set(() => ({ isPostsLoading: true }));
      const response = await getPosts();
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
      set(() => ({ isPostsLoading: true }));
      const response = await getPostById(postId);
      set(() => ({ postSelected: response.data }));
    } catch (error) {
      set(() => ({ message: error.response.data.message }));
    }finally{
      set(() => ({ isPostsLoading: false }));
    }
  },
  setMessage: (error) => {
    set(() => ({ message: error }));
  },
}));

export default postStore;
