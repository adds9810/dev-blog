# store

클라이언트 **전역 상태**를 둡니다.

- `ui-store.ts`: 모바일 메뉴 열림·테마(라이트 / 다크 / 시스템). 테마만 `localStorage` 키 `seed-kit-ui` 로 persist.
- `index.ts`: 스토어 re-export.
- 커지면 슬라이스별 파일로 나누거나 `combine` 패턴으로 확장하면 됩니다.
