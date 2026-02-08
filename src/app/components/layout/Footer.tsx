import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 font-['Noto_Sans_KR']">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-xl font-bold tracking-tight block mb-4">
              KIM<span className="text-indigo-600">DEV</span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-6">
              사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다.
              디테일한 인터랙션과 깔끔한 코드를 지향합니다.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:hello@example.com" className="text-slate-400 hover:text-indigo-600 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">사이트맵</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-500 hover:text-indigo-600 transition-colors">홈</Link></li>
              <li><Link to="/resume" className="text-slate-500 hover:text-indigo-600 transition-colors">이력서</Link></li>
              <li><Link to="/portfolio" className="text-slate-500 hover:text-indigo-600 transition-colors">포트폴리오</Link></li>
              <li><Link to="/blog" className="text-slate-500 hover:text-indigo-600 transition-colors">블로그</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">연락처</h3>
            <ul className="space-y-2">
              <li className="text-slate-500">Seoul, South Korea</li>
              <li><a href="mailto:contact@kimdev.com" className="text-slate-500 hover:text-indigo-600 transition-colors">contact@kimdev.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          © {currentYear} KimDev. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
