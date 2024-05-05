import { create } from "zustand";

const utilStore = create((set) => ({
  isModalOpen: false,
  openModal: () => {
    set(() => ({ isModalOpen: true }));
  },
  closeModal: () => {
    set(() => ({ isModalOpen: false }));
  },
}));

export default utilStore;
