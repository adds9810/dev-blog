import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/Button';
import { Card, CardContent } from '@/app/components/ui/Card';
import { Badge } from '@/app/components/ui/Badge';
import { Input } from '@/app/components/ui/Input';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { PROJECTS } from '@/app/data/mock';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const CATEGORIES = ['All', 'Web App', 'Web Site', 'Mobile App', 'Design'];

export function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = PROJECTS.filter(project => {
    const matchesCategory = filter === 'All' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="mb-12 space-y-8">
        <SectionHeader 
          title="Portfolio" 
          description="지금까지 작업한 프로젝트들을 모았습니다."
        />

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex overflow-x-auto pb-2 md:pb-0 w-full md:w-auto gap-2 no-scrollbar">
            {CATEGORIES.map(category => (
              <Button
                key={category}
                variant={filter === category ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setFilter(category)}
                className="whitespace-nowrap rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input 
              placeholder="프로젝트 검색..." 
              className="pl-10 rounded-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Link to={`/portfolio/${project.id}`} className="block h-full group">
                <Card className="h-full overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 dark:bg-slate-900/50">
                  <div className="aspect-[4/3] relative overflow-hidden">
                     <ImageWithFallback
                      src={project.thumbnail} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Badge className="bg-white/90 text-black hover:bg-white px-4 py-2">View Case Study</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors font-['Noto_Sans_KR']">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2 font-['Noto_Sans_KR']">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-slate-500">검색 결과가 없습니다.</p>
          <Button variant="ghost" onClick={() => {setFilter('All'); setSearchQuery('');}} className="mt-4">
            필터 초기화
          </Button>
        </div>
      )}
    </div>
  );
}
