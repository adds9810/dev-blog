import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/Button';
import { Card, CardContent } from '@/app/components/ui/Card';
import { Badge } from '@/app/components/ui/Badge';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { PROJECTS, POSTS } from '@/app/data/mock';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Home() {
  return (
    <div className="space-y-24 md:space-y-32 container mx-auto px-4 md:px-6">
      
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <Badge variant="accent" className="mb-6 px-4 py-1 text-sm">
            Frontend Developer Portfolio
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-6 leading-tight font-['Noto_Sans_KR']">
            사용자 중심의 인터랙션과<br className="hidden md:block" />
            <span className="text-indigo-600">유지보수성</span>에 집중하는<br className="hidden md:block" />
            프론트엔드 개발자.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed font-['Noto_Sans_KR']">
            안녕하세요, 김이름입니다. 디자인 감각을 갖춘 퍼블리셔 출신 개발자로서, 
            심미적인 UI와 견고한 코드 사이의 균형을 추구합니다.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/portfolio">
              <Button size="lg" className="rounded-full">
                프로젝트 보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/resume">
              <Button variant="outline" size="lg" className="rounded-full">
                이력서 확인 <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Abstract Shape or Image Decoration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 -z-10 hidden lg:block opacity-20 dark:opacity-10"
        >
          <div className="w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-3xl filter" />
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section>
        <SectionHeader 
          title="Featured Projects" 
          description="주요 프로젝트를 소개합니다."
          linkText="모든 프로젝트 보기"
          href="/portfolio"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to="/portfolio" className="block h-full">
                <Card className="h-full overflow-hidden group border-0 shadow-lg dark:bg-slate-900/50">
                  <div className="aspect-video relative overflow-hidden">
                    <ImageWithFallback 
                      src={project.thumbnail} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors font-['Noto_Sans_KR']">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 font-['Noto_Sans_KR']">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Latest Posts */}
      <section>
        <SectionHeader 
          title="Latest Posts" 
          description="최근 작성한 기술 블로그 글입니다."
          linkText="전체 글 보기"
          href="/blog"
        />
        
        <div className="space-y-6">
          {POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/blog/${post.id}`} className="block group">
                <article className="flex flex-col md:flex-row gap-6 items-start p-4 -mx-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                  <div className="w-full md:w-64 aspect-[16/10] rounded-xl overflow-hidden flex-shrink-0">
                    <ImageWithFallback 
                      src={post.thumbnail} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 min-w-0 py-2">
                    <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-2">
                      <span className="font-medium text-indigo-600 dark:text-indigo-400">{post.category}</span>
                      <span>•</span>
                      <time>{post.date}</time>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors font-['Noto_Sans_KR']">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-3 font-['Noto_Sans_KR']">
                      {post.excerpt}
                    </p>
                    <div className="flex gap-2">
                      {post.tags.map(tag => (
                        <span key={tag} className="text-xs text-slate-400">#{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 font-['Noto_Sans_KR']">함께 일할 준비가 되셨나요?</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 font-['Noto_Sans_KR']">
            새로운 프로젝트나 협업 제안은 언제나 환영합니다.
            커피 한 잔 하며 이야기 나눠봐요.
          </p>
          <Link to="/contact">
            <Button size="lg" className="rounded-full px-10">
              연락하기
            </Button>
          </Link>
        </div>
        
        {/* Decorative Circle */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </section>
    </div>
  );
}
