import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Calendar, Tag, Share2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/app/components/ui/Button';
import { Badge } from '@/app/components/ui/Badge';
import { POSTS } from '@/app/data/mock';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function BlogPost() {
  const { id } = useParams();
  // In a real app, fetch by ID. Here we just pick the first one or find by ID if it matched
  const post = POSTS.find(p => p.id === id) || POSTS[0];
  const [activeSection, setActiveSection] = useState('');

  // Mock TOC
  const toc = [
    { id: 'intro', title: '들어가며' },
    { id: 'problem', title: '문제 정의' },
    { id: 'solution', title: '해결 방안' },
    { id: 'conclusion', title: '결론' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Simple scroll spy logic
      const sections = toc.map(t => document.getElementById(t.id));
      const scrollPos = window.scrollY + 100;
      
      for (const section of sections) {
        if (section && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
          setActiveSection(section.id);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-6">
      <Link to="/blog">
        <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-indigo-600">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Button>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content */}
        <article className="lg:col-span-8 space-y-8">
          <header className="space-y-6 mb-10">
            <div className="flex gap-2 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 font-['Noto_Sans_KR'] leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-slate-500 dark:text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> 5 min read
              </div>
            </div>
            <div className="aspect-video w-full rounded-2xl overflow-hidden mt-8">
               <ImageWithFallback
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none font-['Noto_Sans_KR'] text-slate-700 dark:text-slate-300">
            <p className="lead text-xl text-slate-600 dark:text-slate-400 mb-8 font-medium">
              {post.excerpt}
            </p>

            <section id="intro" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">들어가며</h2>
              <p className="mb-4">
                프론트엔드 개발을 하다 보면 다양한 문제에 직면합니다. 이번 글에서는 최근 프로젝트에서 겪었던
                성능 최적화 이슈와 그 해결 과정에 대해 공유하고자 합니다.
              </p>
            </section>

            <section id="problem" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">문제 정의</h2>
              <p className="mb-4">
                초기 로딩 속도가 느리고, LCP(Largest Contentful Paint) 지표가 좋지 않았습니다.
                특히 모바일 환경에서의 사용자 경험이 저하되는 문제가 있었습니다.
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>이미지 리소스 최적화 미비</li>
                <li>불필요한 JS 번들 로딩</li>
                <li>렌더링 블로킹 리소스 존재</li>
              </ul>
            </section>

            <section id="solution" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">해결 방안</h2>
              <p className="mb-4">
                Next.js의 Image 컴포넌트를 활용하여 이미지를 최적화하고, 
                Code Splitting을 통해 번들 사이즈를 줄였습니다.
              </p>
              <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg my-6 font-mono text-sm">
                <code>
                  // Example Code<br/>
                  import dynamic from 'next/dynamic';<br/><br/>
                  const HeavyComponent = dynamic(() =&gt; import('./Heavy'), &#123;<br/>
                  &nbsp;&nbsp;loading: () =&gt; &lt;p&gt;Loading...&lt;/p&gt;,<br/>
                  &#125;);
                </code>
              </div>
            </section>

            <section id="conclusion" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">결론</h2>
              <p>
                이러한 최적화 과정을 통해 LCP를 2.5초에서 1.2초로 단축할 수 있었습니다.
                앞으로도 성능 지표를 꾸준히 모니터링하며 개선해 나갈 예정입니다.
              </p>
            </section>
          </div>

          <hr className="border-slate-200 dark:border-slate-800 my-12" />

          <div className="flex justify-between items-center">
             <div className="flex gap-2">
                {post.tags.map(tag => (
                   <Badge key={tag} variant="outline">#{tag}</Badge>
                ))}
             </div>
             <Button variant="outline" size="sm" className="gap-2">
               <Share2 className="w-4 h-4" /> Share
             </Button>
          </div>
        </article>

        {/* Sidebar (TOC) */}
        <aside className="hidden lg:block lg:col-span-4 pl-8">
          <div className="sticky top-24 space-y-8">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4">
                Table of Contents
              </h3>
              <nav className="space-y-1 border-l-2 border-slate-100 dark:border-slate-800">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`block pl-4 py-2 text-sm transition-colors border-l-2 -ml-[2px] ${
                      activeSection === item.id
                        ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 font-medium'
                        : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
