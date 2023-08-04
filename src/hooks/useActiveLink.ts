import { create } from "zustand";

const useActiveLink = create((set) => ({
  activeLink: parseInt(localStorage.getItem("activeLink")!, 10) || 1,
  setActiveLink: (currentId: number) => {
    set({ activeLink: currentId });
    localStorage.setItem("activeLink", String(currentId));
  },
}));

export default useActiveLink;
