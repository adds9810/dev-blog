import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useProjects, usePosts } from '../hooks/useData';
import { Section } from '../components/ui/Section';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const HomePage = () => {
  const { data: projects, isLoading: isProjectsLoading } = useProjects();
  const { data: posts, isLoading: isPostsLoading } = usePosts();

  const featuredProjects = projects?.filter((p) => p.featured).slice(0, 3) || [];
  const latestPosts = posts?.slice(0, 3) || [];

  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero Section */}
      <Section className="min-h-[80vh] flex flex-col justify-center max-w-4xl pt-20">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
          Building digital products with <span className="text-blue-600 dark:text-blue-500">purpose</span>.
        </h1>
        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed mb-10">
          I'm a Senior Frontend Engineer specializing in <strong className="text-zinc-900 dark:text-white">Next.js</strong>, <strong className="text-zinc-900 dark:text-white">TypeScript</strong>, and <strong className="text-zinc-900 dark:text-white">Design Systems</strong>. 
          Currently focused on building accessible and performant web applications.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/portfolio" 
            className="px-8 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            View Portfolio
          </Link>
          <Link 
            href="/resume" 
            className="px-8 py-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-medium rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          >
            View Resume
          </Link>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section delay={0.2}>
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Featured Projects</h2>
          <Link href="/portfolio" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 group">
            All Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {isProjectsLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-[400px] bg-zinc-100 dark:bg-zinc-800 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <article key={project.id} className="group flex flex-col bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-blue-500/50 transition-colors">
                <div className="relative h-48 overflow-hidden">
                    <Link href={`/portfolio/${project.slug}`}>
                        <ImageWithFallback 
                            src={project.imageUrl} 
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </Link>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <Link href={`/portfolio/${project.slug}`}>{project.title}</Link>
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 flex-1 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-xs font-medium text-zinc-600 dark:text-zinc-300 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                     <a href={project.github} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-black dark:hover:text-white">
                        <Github size={18} />
                     </a>
                     <a href={project.link} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-black dark:hover:text-white">
                        <ExternalLink size={18} />
                     </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </Section>

      {/* Latest Blog */}
      <Section delay={0.3}>
         <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Latest Writing</h2>
          <Link href="/blog" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 group">
            Read Blog <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {isPostsLoading ? (
            <div className="flex flex-col gap-4">
                 {[1, 2, 3].map((i) => (
                    <div key={i} className="h-24 bg-zinc-100 dark:bg-zinc-800 rounded-xl animate-pulse" />
                 ))}
            </div>
        ) : (
            <div className="flex flex-col gap-6">
                {latestPosts.map(post => (
                    <Link href={`/blog/${post.slug}`} key={post.id} className="group block p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-8">
                            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {post.title}
                            </h3>
                            <span className="text-sm text-zinc-500 shrink-0">{post.date}</span>
                        </div>
                        <p className="mt-2 text-zinc-600 dark:text-zinc-400 max-w-3xl">
                            {post.excerpt}
                        </p>
                    </Link>
                ))}
            </div>
        )}
      </Section>
    </div>
  );
};
