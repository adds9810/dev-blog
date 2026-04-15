import type { Metadata } from "next";
import { getPostList } from "@/lib/api/notion";
import { PostCard } from "@/components/blog/PostCard";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "블로그",
  description: "프론트엔드 개발자 김지혜의 개발 기록",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "블로그",
    description: "프론트엔드 개발자 김지혜의 개발 기록",
    url: "/blog",
    type: "website",
  },
  twitter: {
    title: "블로그",
    description: "프론트엔드 개발자 김지혜의 개발 기록",
  },
};

export default async function BlogPage() {
  const posts = await getPostList();

  return (
    <div className="section-gap">
      <div className="page-container space-y-8">
        <header className="space-y-3">
          <p className="text-sm font-medium text-[--color-brand-600]">Blog</p>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            개발 기록
          </h1>
          <p className="max-w-2xl text-sm text-[--text-secondary] md:text-base">
            공부하고 경험한 것들을 기록합니다.
          </p>
        </header>

        {posts.length === 0 ? (
          <div className="rounded-[--radius-md] border border-[--color-border] bg-[--color-surface] p-10 text-center shadow-[--shadow-sm]">
            <p className="text-sm text-[--text-secondary]">
              아직 작성된 글이 없습니다.
            </p>
          </div>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2" role="list">
            {posts.map((post) => (
              <li key={post.id}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
