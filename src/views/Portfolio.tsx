import { useState } from 'react';
import { useProjects } from '../hooks/useData';
import { usePortfolioStore } from '../store/useStore';
import { Section } from '../components/ui/Section';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Github, ExternalLink, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Link from 'next/link';

export const PortfolioPage = () => {
  const { data: projects, isLoading } = useProjects();
  const { selectedTag, setTag } = usePortfolioStore();
  const [search, setSearch] = useState('');

  // Extract unique tags
  const allTags = projects 
    ? Array.from(new Set(projects.flatMap(p => p.tags)))
    : [];

  // Filter Logic
  const filteredProjects = projects?.filter(project => {
    const matchesTag = selectedTag ? project.tags.includes(selectedTag) : true;
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) || 
                          project.description.toLowerCase().includes(search.toLowerCase());
    return matchesTag && matchesSearch;
  }) || [];

  return (
    <div className="py-12">
      <Section>
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6">Portfolio</h1>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mb-12">
          A collection of projects showcasing my journey in software development.
          <br/>
          <span className="text-xs text-zinc-400 mt-2 block">(Global state used for filtering: Zustand)</span>
        </p>
      </Section>

      {/* Controls */}
      <Section delay={0.1} className="sticky top-20 z-30 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-sm py-4 mb-8 border-b border-zinc-100 dark:border-zinc-800">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <button
                    onClick={() => setTag(null)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                        selectedTag === null
                         ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                         : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'
                    }`}
                >
                    All
                </button>
                {allTags.map(tag => (
                    <button
                        key={tag}
                        onClick={() => setTag(tag)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                            selectedTag === tag
                            ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                            : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'
                        }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input 
                    type="text" 
                    placeholder="Search projects..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                />
            </div>
        </div>
      </Section>

      {/* Grid */}
      <Section delay={0.2}>
        {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4].map(i => <div key={i} className="h-64 bg-zinc-100 dark:bg-zinc-800 rounded-2xl animate-pulse"/>)}
            </div>
        ) : (
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.article 
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={project.id} 
                            className="flex flex-col bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-xl hover:shadow-zinc-200/50 dark:hover:shadow-zinc-900/50 transition-all duration-300 group"
                        >
                            <Link href={`/portfolio/${project.slug}`} className="block relative h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                                <ImageWithFallback 
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </Link>
                            <div className="p-6 flex-1 flex flex-col">
                                <Link href={`/portfolio/${project.slug}`}>
                                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                </Link>
                                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 line-clamp-2">{project.description}</p>
                                
                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.slice(0, 3).map(tag => (
                                            <span key={tag} className="text-xs px-2 py-1 bg-zinc-50 dark:bg-zinc-800/80 text-zinc-500 dark:text-zinc-400 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center border-t border-zinc-100 dark:border-zinc-800 pt-4">
                                        <div className="flex gap-4">
                                            <a href={project.github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"><Github size={18}/></a>
                                            <a href={project.link} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"><ExternalLink size={18}/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </AnimatePresence>
            </motion.div>
        )}
        
        {!isLoading && filteredProjects.length === 0 && (
            <div className="text-center py-20 text-zinc-500">
                No projects found matching your criteria.
            </div>
        )}
      </Section>
    </div>
  );
};
