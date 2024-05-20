import { create } from "zustand";

const utilStore = create((set) => ({
  isModalOpen: false,
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
}));

export default utilStore;
