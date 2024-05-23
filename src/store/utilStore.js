import { create } from "zustand";

const utilStore = create((set) => ({
  isModalOpen: false,
  isPostModalCarrouselOpen: false,
  isModalEditPostOpen: false,
  dropMenuDisabled: false,
  currentPath: "",
  selectedImages: [],
  indexImg: null,
  openModal: () => {
    set(() => ({ isModalOpen: true }));
  },
  closeModal: () => {
    set(() => ({ isModalOpen: false }));
  },
  setDropMenuDisabled: (status) => {
    set(() => ({ dropMenuDisabled: status }));
  },
  setCurrentPath: (path) => {
    set(() => ({ currentPath: path }));
  },
  setSelectedImage: (image) => {
    set(() => ({ selectedImages: image }));
  },
  setSelectedImageIndex: (index) => {
    set(() => ({ indexImg: index }));
  },
  openPostModalCarrousel: () => {
    set(() => ({ isPostModalCarrouselOpen: true }));
  },
  closePostModalCarrousel: () => {
    set(() => ({ isPostModalCarrouselOpen: false }));
  },
  openEditPostModal: () => {
    set(() => ({ isModalEditPostOpen: true }));
  },
  closeEditPostModal: () => {
    set(() => ({ isModalEditPostOpen: false }));
  },
}));

export default utilStore;
