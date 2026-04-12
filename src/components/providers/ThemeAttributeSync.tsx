"use client";

import { useEffect } from "react";

import { useUiStore } from "@/store";

/**
 * 스토어의 `theme` 를 `document.documentElement` 의 `dark` 클래스로 반영합니다.
 * `system` 일 때는 `prefers-color-scheme` 을 따르고, 변경 시 다시 계산합니다.
 */
export function ThemeAttributeSync() {
  const theme = useUiStore((s) => s.theme);

  useEffect(() => {
    const root = document.documentElement;

    const apply = () => {
      let isDark = false;
      if (theme === "dark") isDark = true;
      else if (theme === "light") isDark = false;
      else isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.toggle("dark", isDark);
    };

    apply();

    if (theme !== "system") return;

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [theme]);

  return null;
}
