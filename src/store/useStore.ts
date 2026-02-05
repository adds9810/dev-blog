import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Theme Store
interface ThemeState {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDarkMode: false,
      toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: 'theme-storage',
    }
  )
);

// UI Store (for Modals, Sidebar, etc.)
interface UIState {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isMobileMenuOpen: false,
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
}));

// Portfolio Filter Store
interface PortfolioState {
  selectedTag: string | null;
  setTag: (tag: string | null) => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  selectedTag: null,
  setTag: (tag) => set({ selectedTag: tag }),
}));
