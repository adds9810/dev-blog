import { create } from "zustand";
import { persist } from "zustand/middleware";

/** 사용자가 고를 수 있는 색 테마(시스템은 OS 설정 따름). */
export type ThemePreference = "light" | "dark" | "system";

/**
 * 전역 UI 스토어
 *
 * 슬라이스 파일로 쪼개지 않았을 때를 대비해, 한 store 안에서 섹션 주석으로만 구역을 나눴습니다.
 * 규모가 커지면 `create<NavSlice>()(...)`, `create<ThemeSlice>()(...)` 를 `combine` 하거나
 * 폴더를 `store/ui/nav-store.ts` 처럼 나누는 패턴으로 확장하면 됩니다.
 */
type UiState = {
  /* --- 내비 / 오버레이 (탭·라우트 이동 시 닫기 등, persist 제외) --- */
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;

  /* --- 테마 (localStorage 에 `theme` 만 저장) --- */
  theme: ThemePreference;
  setTheme: (theme: ThemePreference) => void;
};

export const useUiStore = create<UiState>()(
  persist(
    (set) => ({
      mobileMenuOpen: false,
      setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
      toggleMobileMenu: () =>
        set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
      closeMobileMenu: () => set({ mobileMenuOpen: false }),

      theme: "system",
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "dev-blog-ui",
      partialize: (state) => ({ theme: state.theme }),
    },
  ),
);
