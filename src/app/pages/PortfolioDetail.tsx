import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/app/components/ui/Button';
import { Badge } from '@/app/components/ui/Badge';
import { PROJECTS } from '@/app/data/mock';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function PortfolioDetail() {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id) || PROJECTS[0];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <Link to="/portfolio">
        <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-indigo-600">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
        </Button>
      </Link>

      <div className="space-y-16">
        {/* Header */}
        <div className="space-y-6 max-w-4xl">
          <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 hover:bg-indigo-200">{project.category}</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-50 font-['Noto_Sans_KR']">
            {project.title}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-['Noto_Sans_KR'] max-w-2xl">
            {project.description}
          </p>
          
          <div className="flex gap-4 pt-4">
            <Button className="gap-2">
              <ExternalLink className="w-4 h-4" /> Visit Site
            </Button>
            <Button variant="outline" className="gap-2">
              <Github className="w-4 h-4" /> View Code
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
           <ImageWithFallback
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          <div className="lg:col-span-1 space-y-8">
             <div>
               <h3 className="font-bold text-slate-900 dark:text-slate-50 mb-3">Tech Stack</h3>
               <div className="flex flex-wrap gap-2">
                 {project.tags.map(tag => (
                   <Badge key={tag} variant="secondary">{tag}</Badge>
                 ))}
               </div>
             </div>
             <div>
               <h3 className="font-bold text-slate-900 dark:text-slate-50 mb-3">Role</h3>
               <p className="text-slate-600 dark:text-slate-400">Frontend Lead, UI Design</p>
             </div>
             <div>
               <h3 className="font-bold text-slate-900 dark:text-slate-50 mb-3">Timeline</h3>
               <p className="text-slate-600 dark:text-slate-400">3 Weeks (Aug 2023)</p>
             </div>
          </div>

          <div className="lg:col-span-2 space-y-12 font-['Noto_Sans_KR']">
            <section>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                이 프로젝트는 사용자가 복잡한 데이터를 직관적으로 파악할 수 있도록 돕는 대시보드입니다.
                기존의 느린 로딩 속도와 불편한 UX를 개선하기 위해 시작되었으며, 
                최신 웹 기술을 도입하여 성능과 접근성을 모두 확보하는 것을 목표로 했습니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Challenge & Problem</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                가장 큰 문제는 대량의 데이터 렌더링 시 발생하는 프레임 드랍 현상이었습니다.
                또한 모바일 환경에서 테이블 뷰가 깨지는 반응형 이슈가 존재했습니다.
              </p>
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border-l-4 border-indigo-500">
                <p className="font-medium text-slate-800 dark:text-slate-200">
                  "데이터가 1000건이 넘어가면 브라우저가 멈춰버려요." - 사용자 피드백
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Solution</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                React Window를 도입하여 가상화 리스트(Virtualization)를 구현, 
                DOM 노드 수를 획기적으로 줄였습니다. 
                또한 Tanstack Query를 활용하여 데이터 캐싱 및 낙관적 업데이트를 적용했습니다.
              </p>
              {/* Gallery / Image Grid Mock */}
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/3] bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
                <div className="aspect-[4/3] bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
              </div>
            </section>

             <section>
              <h2 className="text-2xl font-bold mb-4">Result</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                초기 로딩 속도 50% 개선 및 사용자 만족도 4.8/5.0 달성.
                클라이언트로부터 "기대 이상의 부드러운 사용감"이라는 평가를 받았습니다.
              </p>
            </section>
          </div>
        </div>

        {/* Next Project Nav */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex justify-between">
           <div className="text-left">
             <div className="text-sm text-slate-500">Previous Project</div>
             <div className="font-bold text-lg hover:text-indigo-600 cursor-pointer">Finance App</div>
           </div>
           <div className="text-right">
             <div className="text-sm text-slate-500">Next Project</div>
             <div className="font-bold text-lg hover:text-indigo-600 cursor-pointer">Travel Log</div>
           </div>
        </div>
      </div>
    </div>
  );
}
