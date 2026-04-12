"use client";

import { useEffect, useSyncExternalStore, type ReactNode } from "react";
import { createPortal } from "react-dom";

type MobileNavPortalProps = {
  open: boolean;
  onClose: () => void;
  navId: string;
  "aria-label": string;
  children: ReactNode;
};

function subscribeToNothing() {
  return () => {};
}

/**
 * 헤더의 backdrop-filter가 fixed 조상이 되어 메뉴/딤이 뷰포트 기준이 아니게 되는 문제를 피하기 위해
 * 모바일 드로어를 document.body로 포털합니다.
 */
export function MobileNavPortal({
  open,
  onClose,
  navId,
  "aria-label": ariaLabel,
  children,
}: MobileNavPortalProps) {
  const isClient = useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false,
  );

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!isClient || !open) return null;

  return createPortal(
    <>
      <button
        type="button"
        className="fixed inset-0 top-14 z-[9998] bg-[rgb(0_0_0/0.6)] backdrop-blur-sm md:hidden"
        aria-label="메뉴 닫기"
        onClick={onClose}
      />
      <nav
        id={navId}
        aria-label={ariaLabel}
        className="fixed inset-x-0 top-14 z-[9999] max-h-[min(70vh,calc(100dvh-3.5rem))] overflow-y-auto border-b border-[--color-border] p-4 shadow-2xl md:hidden"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        {children}
      </nav>
    </>,
    document.body,
  );
}
