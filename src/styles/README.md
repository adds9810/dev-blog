# styles

전역·토큰용 **추가 CSS**를 둘 때 사용합니다.  
지금은 Tailwind 엔트리가 `src/app/globals.css` 에 있고, `src/styles/tokens.css`를 `@import` 해서 사용합니다.

- `tokens.css`: 브레이크포인트, container, spacing, color/radius/shadow 같은 최소 토큰
- 브레이크포인트는 모바일 퍼스트 기준으로 `md`를 `48rem(768px)`으로 두어 `767px 이하`를 모바일로 봅니다.
