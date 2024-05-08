import { create } from "zustand";

const utilStore = create((set) => ({
  isModalOpen: false,
  dropMenuDisabled: false,
  currentPath: "",
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
}));

export default utilStore;
