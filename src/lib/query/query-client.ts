import { QueryClient } from "@tanstack/react-query";

/** 앱 전역 기본값. 필요하면 여기만 조정하거나 라우트별로 `useQuery` 옵션을 덮어씁니다. */
export function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        gcTime: 5 * 60 * 1000,
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  });
}
