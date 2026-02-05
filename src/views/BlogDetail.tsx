import Link from 'next/link';
import { useParams } from 'next/navigation';
import { usePost, usePosts } from '../hooks/useData';
import { Section } from '../components/ui/Section';
import { MarkdownContent } from '../components/ui/MarkdownContent';
import { ArrowLeft, Calendar, Clock, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

// Simple TOC Component
const TableOfContents = ({ content }: { content: string }) => {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);

  useEffect(() => {
    // Simple regex to parse markdown headers
    const regex = /^(#{2,3})\s+(.+)$/gm;
    const found = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2];
      const id = text.toLowerCase().replace(/[^\w]+/g, '-');
      found.push({ id, text, level });
    }
    setHeadings(found);
  }, [content]);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-24 hidden lg:block w-64 shrink-0">
        <h4 className="font-semibold text-sm uppercase tracking-wider text-zinc-900 dark:text-white mb-4">On this page</h4>
        <ul className="space-y-3 text-sm border-l border-zinc-200 dark:border-zinc-800 pl-4">
            {headings.map((h, i) => (
                <li key={i} className={`${h.level === 3 ? 'pl-4' : ''}`}>
                    <a href={`#${h.id}`} className="text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors block">
                        {h.text}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  );
};

export const BlogDetailPage = () => {
  const params = useParams();
  const slugParam = (params as { slug?: string | string[] })?.slug;
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

  const { data: post, isLoading, error } = usePost(slug || '');
  const { data: allPosts } = usePosts();

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-6 animate-pulse">
        <div className="h-8 bg-zinc-200 dark:bg-zinc-800 w-3/4 mb-4 rounded"/>
        <div className="h-4 bg-zinc-100 dark:bg-zinc-900 w-1/4 mb-12 rounded"/>
        <div className="space-y-4">
             <div className="h-4 bg-zinc-100 dark:bg-zinc-900 rounded w-full"/>
             <div className="h-4 bg-zinc-100 dark:bg-zinc-900 rounded w-full"/>
             <div className="h-4 bg-zinc-100 dark:bg-zinc-900 rounded w-2/3"/>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="max-w-7xl mx-auto py-32 px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <Link href="/blog" className="text-blue-600 hover:underline">Back to Writing</Link>
      </div>
    );
  }

  // Next/Prev Logic (list order)
  const currentPostIndex = allPosts?.findIndex((p) => p.id === post.id) ?? -1;
  const newerPost = currentPostIndex > 0 ? allPosts?.[currentPostIndex - 1] : null;
  const olderPost =
    currentPostIndex >= 0 && currentPostIndex < (allPosts?.length || 0) - 1
      ? allPosts?.[currentPostIndex + 1]
      : null;

  return (
    <article className="pb-20">
       <div className="max-w-7xl mx-auto px-6 pt-12 pb-20">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
             <Link href="/blog" className="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white mb-8 transition-colors">
                <ArrowLeft size={16} className="mr-2"/> Back to Writing
            </Link>
            
            <div className="flex items-center justify-center gap-4 text-sm text-zinc-500 mb-6">
                 <span className="flex items-center gap-1.5"><Calendar size={14}/> {post.date}</span>
                 <span className="flex items-center gap-1.5"><Clock size={14}/> {post.readTime}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
                {post.title}
            </h1>

            <div className="flex flex-wrap justify-center gap-2">
                {post.tags.map(tag => (
                     <span key={tag} className="px-2.5 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded text-xs font-semibold">
                        {tag}
                     </span>
                ))}
            </div>
        </div>

        <div className="lg:flex lg:gap-12">
            {/* Content */}
            <div className="flex-1 max-w-3xl mx-auto min-w-0">
                <MarkdownContent content={post.content} />
                
                {/* Footer Navigation */}
                 <div className="flex flex-col sm:flex-row justify-between gap-6 pt-12 mt-20 border-t border-zinc-200 dark:border-zinc-800">
                    {olderPost ? (
                        <Link href={`/blog/${olderPost.slug}`} className="group flex-1 text-left">
                            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1 block">Previous Article</span>
                            <div className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                {olderPost.title}
                            </div>
                        </Link>
                    ) : <div className="flex-1" />}

                    {newerPost ? (
                        <Link href={`/blog/${newerPost.slug}`} className="group flex-1 text-right">
                            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1 block">Next Article</span>
                             <div className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                {newerPost.title}
                            </div>
                        </Link>
                    ) : <div className="flex-1" />}
                 </div>
            </div>
            
            {/* TOC Desktop */}
            <TableOfContents content={post.content} />
        </div>

       </div>
    </article>
  );
};
