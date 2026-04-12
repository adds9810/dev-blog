"use client";

import { useQuery } from "@tanstack/react-query";

import { Button } from "@/components/ui/Button";
import { fetchJsonPlaceholderPost } from "@/lib/api/json-placeholder";

const DEMO_POST_ID = 1;

/**
 * TanStack Query `useQuery` 예시. `queryFn`은 `lib/api`의 fetch를 그대로 씁니다.
 */
export function JsonPlaceholderPostSample() {
  const { data, isPending, isError, error, refetch, isFetching } = useQuery({
    queryKey: ["jsonPlaceholder", "post", DEMO_POST_ID],
    queryFn: () => fetchJsonPlaceholderPost(DEMO_POST_ID),
  });

  return (
    <div className="rounded-[--radius-md] border border-[--color-border] bg-[--color-surface] p-5 shadow-[--shadow-sm] md:p-6">
      <h3 className="text-base font-semibold md:text-lg">
        TanStack Query 예시 (JSONPlaceholder)
      </h3>
      <p className="mt-2 text-sm text-[--text-secondary]">
        외부 데모 API 한 건을 불러옵니다. 실서비스에서는{" "}
        <code className="rounded bg-[--color-muted] px-1 py-0.5 text-xs">
          src/lib/api
        </code>{" "}
        를 자체 API 클라이언트로 갈아끼우면 됩니다.
      </p>

      <div className="mt-4" aria-live="polite">
        {isPending && <p className="text-sm text-[--text-secondary]">불러오는 중…</p>}
        {isError && (
          <p className="text-sm text-red-600 dark:text-red-400" role="alert">
            {error instanceof Error ? error.message : "오류가 발생했습니다."}
          </p>
        )}
        {data && !isPending && (
          <article>
            <h4 className="text-sm font-medium text-[--color-foreground]">
              {data.title}
            </h4>
            <p className="mt-2 line-clamp-4 text-sm text-[--text-secondary]">
              {data.body}
            </p>
            <p className="mt-2 text-xs text-[--text-secondary]">
              post id: {data.id} · userId: {data.userId}
            </p>
          </article>
        )}
      </div>

      <div className="mt-4">
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={isFetching}
          onClick={() => refetch()}
        >
          {isFetching ? "다시 요청 중…" : "다시 불러오기"}
        </Button>
      </div>
    </div>
  );
}
