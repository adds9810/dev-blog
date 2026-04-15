import Link from "next/link";
import type { Post } from "@/types/blog";

type PostCardProps = {
  post: Post;
};

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateStr));
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-[--radius-md] border border-[--color-border] bg-[--color-surface] p-5 shadow-[--shadow-sm] transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-brand-600] focus-visible:ring-offset-2 md:p-6"
    >
      <time dateTime={post.date} className="text-xs text-[--text-secondary]">
        {formatDate(post.date)}
      </time>

      <h2 className="mt-2 text-base font-semibold leading-snug tracking-tight group-hover:text-[--color-brand-600] md:text-lg">
        {post.title}
      </h2>

      {post.description && (
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-[--text-secondary]">
          {post.description}
        </p>
      )}

      {post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[--color-border] bg-[--color-muted] px-2 py-0.5 text-xs text-[--text-secondary]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
