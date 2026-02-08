import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/Button';
import { Input } from '@/app/components/ui/Input';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { POSTS } from '@/app/data/mock';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const CATEGORIES = ['All', 'Tech', 'Design', 'Culture', 'Life'];
const TAGS = ['React', 'Next.js', 'Tailwind', 'Performance', 'Career', 'Figma'];

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = POSTS.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 md:px-6">
      <SectionHeader 
        title="Blog" 
        description="개발 경험과 학습한 내용을 기록합니다."
        className="mb-12"
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Sidebar (Desktop) / Topbar (Mobile) */}
        <div className="lg:col-span-1 space-y-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input 
              placeholder="글 검색..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-slate-900 dark:text-slate-100">Categories</h3>
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-2 lg:pb-0 no-scrollbar">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden lg:block space-y-4">
            <h3 className="font-bold text-slate-900 dark:text-slate-100">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {TAGS.map(tag => (
                <span key={tag} className="text-xs border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 px-2 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Post List */}
        <div className="lg:col-span-3 space-y-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col md:flex-row gap-6 md:gap-8 items-start pb-8 border-b border-slate-100 dark:border-slate-900 last:border-0"
            >
              <Link to={`/blog/${post.id}`} className="w-full md:w-1/3 aspect-video rounded-xl overflow-hidden block">
                 <ImageWithFallback
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">{post.category}</span>
                  <span>•</span>
                  <time>{post.date}</time>
                </div>
                
                <Link to={`/blog/${post.id}`}>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 group-hover:text-indigo-600 transition-colors font-['Noto_Sans_KR']">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed font-['Noto_Sans_KR']">
                  {post.excerpt}
                </p>
                
                <div className="pt-2">
                   <Link to={`/blog/${post.id}`} className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">
                     Read more <ChevronRight className="w-4 h-4 ml-1" />
                   </Link>
                </div>
              </div>
            </motion.article>
          ))}
          
          {filteredPosts.length === 0 && (
            <div className="py-12 text-center text-slate-500">
              해당하는 글이 없습니다.
            </div>
          )}

          {filteredPosts.length > 0 && (
            <div className="pt-8 flex justify-center">
              <Button variant="outline" className="w-full md:w-auto">Load More</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
