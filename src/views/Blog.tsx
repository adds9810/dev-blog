import { usePosts } from '../hooks/useData';
import { Section } from '../components/ui/Section';
import Link from 'next/link';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

export const BlogPage = () => {
  const { data: posts, isLoading } = usePosts();

  return (
    <div className="max-w-4xl mx-auto py-12">
      <Section className="mb-16">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6">Writing</h1>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Thoughts on software development, state management, and the modern web ecosystem.
        </p>
      </Section>

      <Section delay={0.1}>
        {isLoading ? (
             <div className="space-y-8">
                {[1, 2, 3].map(i => <div key={i} className="h-32 bg-zinc-100 dark:bg-zinc-800 rounded-2xl animate-pulse"/>)}
             </div>
        ) : (
            <div className="space-y-8">
                {posts?.map((post) => (
                    <article key={post.id} className="group relative bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mb-4">
                            <div className="flex gap-2">
                                {post.tags.map(tag => (
                                    <span key={tag} className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center gap-4 text-xs text-zinc-500 font-medium uppercase tracking-wider">
                                <div className="flex items-center gap-1">
                                    <Calendar size={14} />
                                    {post.date}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock size={14} />
                                    {post.readTime}
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {post.title}
                        </h2>
                        
                        <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                            {post.excerpt}
                        </p>

                        <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-semibold text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            Read Article <ChevronRight size={16} className="ml-1" />
                        </Link>
                    </article>
                ))}
            </div>
        )}
      </Section>
    </div>
  );
};
