import { create } from "zustand";
import {
  getPosts,
  getPostById,
  createPost,
  getPostFilteredHttp,
} from "../api/postHttp";

const postStore = create((set) => ({
  isLoading: false,
  isPostsLoading: false,
  post: [],
  message: null,
  postSearch: "",
  postSelected: [],
  postToEdit: {},
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
    } finally {
      set(() => ({ isPostsLoading: false }));
    }
  },
  setMessage: (error) => {
    set(() => ({ message: error }));
  },
  getPostFiltered: async (filter) => {
    try {
      set(() => ({ isPostsLoading: true }));
      const response = await getPostFilteredHttp(filter);
      set(() => ({ post: response.data }));
    } catch (error) {
      console.log(error);
    } finally {
      set(() => ({ isPostsLoading: false }));
    }
  },
  setPostSearch: (state) => {
    set(() => ({ postSearch: state }));
  },
  setPostToEdit: (post) => {
    set(() => ({ postToEdit: post }));
  },
}));

export default postStore;
