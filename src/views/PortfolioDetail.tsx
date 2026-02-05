import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useProject, useProjects } from '../hooks/useData';
import { Section } from '../components/ui/Section';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Github, ExternalLink, ArrowLeft, ArrowRight, Calendar, User, Database, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export const PortfolioDetailPage = () => {
  const params = useParams();
  const slugParam = (params as { slug?: string | string[] })?.slug;
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

  const { data: project, isLoading, error } = useProject(slug || '');
  const { data: allProjects } = useProjects();

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto py-20 px-6 animate-pulse">
        <div className="h-10 bg-zinc-200 dark:bg-zinc-800 w-2/3 mb-4 rounded-lg"/>
        <div className="h-6 bg-zinc-100 dark:bg-zinc-900 w-1/3 mb-12 rounded-lg"/>
        <div className="h-96 bg-zinc-100 dark:bg-zinc-900 rounded-2xl mb-12"/>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="max-w-7xl mx-auto py-32 px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <Link href="/portfolio" className="text-blue-600 hover:underline">Back to Portfolio</Link>
      </div>
    );
  }

  // Next/Prev Logic
  const currentIndex = allProjects?.findIndex(p => p.id === project.id) ?? -1;
  const prevProject = currentIndex > 0 ? allProjects?.[currentIndex - 1] : null;
  const nextProject = currentIndex >= 0 && allProjects && currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  return (
    <article className="pb-20">
      {/* 1. Hero Section */}
      <Section className="py-12 md:py-20 bg-zinc-50 dark:bg-zinc-900/30 -mx-6 px-6 mb-12 border-b border-zinc-200 dark:border-zinc-800">
         <div className="max-w-5xl mx-auto">
            <Link href="/portfolio" className="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white mb-8 transition-colors">
                <ArrowLeft size={16} className="mr-2"/> Back to Projects
            </Link>
            
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6"
            >
                {project.title}
            </motion.h1>
            
            <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed mb-8">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
                {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm text-zinc-600 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-800 pt-8">
                <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>{project.period}</span>
                </div>
                <div className="flex items-center gap-2">
                    <User size={18} />
                    <span>{project.role}</span>
                </div>
                <div className="flex gap-4 md:ml-auto">
                     <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                        <Github size={18} /> Source Code
                     </a>
                     <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                        <ExternalLink size={18} /> Live Demo
                     </a>
                </div>
            </div>
         </div>
      </Section>

      <div className="max-w-4xl mx-auto px-6 space-y-24">
        
        {/* 2. Overview */}
        {project.overview && (
            <Section>
                <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white">Overview</h2>
                <div className="prose prose-zinc dark:prose-invert max-w-none text-lg text-zinc-600 dark:text-zinc-300">
                    <p>{project.overview}</p>
                </div>
            </Section>
        )}

        {/* 3. Tech Stack */}
        {project.techStack && (
            <Section>
                <h2 className="text-2xl font-bold mb-8 text-zinc-900 dark:text-white">Tech Stack</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {project.techStack.map((tech) => (
                        <div key={tech.name} className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                            <div className="font-semibold text-zinc-900 dark:text-white mb-1">{tech.name}</div>
                            <div className="text-sm text-zinc-500 dark:text-zinc-400">{tech.reason}</div>
                        </div>
                    ))}
                </div>
            </Section>
        )}

        {/* 4. State Management (Zustand / TanStack Query) */}
        {project.stateManagement && (
            <Section>
                 <div className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold mb-8 text-zinc-900 dark:text-white flex items-center gap-3">
                        <Database className="text-blue-600" />
                        State Management Architecture
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* UI State */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Layers className="text-zinc-500" size={20}/>
                                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Client State (Zustand)</h3>
                            </div>
                            <ul className="space-y-3">
                                {project.stateManagement.uiStore.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                         {/* Server State */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Database className="text-blue-500" size={20}/>
                                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Server State (TanStack Query)</h3>
                            </div>
                             <ul className="space-y-3">
                                {project.stateManagement.serverState.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                 </div>
            </Section>
        )}

        {/* 5. Problem -> Approach -> Result */}
        {project.challenges && (
            <Section>
                <h2 className="text-2xl font-bold mb-8 text-zinc-900 dark:text-white">Challenges & Solutions</h2>
                <div className="space-y-6">
                    {project.challenges.map((challenge, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                            <div className="md:w-1/3">
                                <h3 className="font-bold text-lg text-zinc-900 dark:text-white mb-2">{challenge.title}</h3>
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{challenge.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        )}

        {/* 6. Gallery */}
        {project.gallery && project.gallery.length > 0 && (
            <Section>
                <h2 className="text-2xl font-bold mb-8 text-zinc-900 dark:text-white">Gallery</h2>
                <div className="grid gap-6">
                    {project.gallery.map((img, i) => (
                         <div key={i} className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
                            <ImageWithFallback 
                                src={img} 
                                alt={`${project.title} screenshot ${i + 1}`} 
                                className="w-full h-auto"
                            />
                        </div>
                    ))}
                </div>
            </Section>
        )}

        {/* 7. Navigation */}
        <div className="flex flex-col md:flex-row justify-between gap-6 pt-12 border-t border-zinc-200 dark:border-zinc-800">
            {prevProject ? (
                 <Link href={`/portfolio/${prevProject.slug}`} className="group flex-1 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-all text-left">
                    <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2 block group-hover:text-blue-500">Previous Project</span>
                    <span className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">{prevProject.title}</span>
                 </Link>
            ) : <div className="flex-1" />}
            
            {nextProject && (
                 <Link href={`/portfolio/${nextProject.slug}`} className="group flex-1 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-all text-right">
                    <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2 block group-hover:text-blue-500">Next Project</span>
                    <span className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">{nextProject.title}</span>
                 </Link>
            )}
        </div>

      </div>
    </article>
  );
};
