import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/app/components/ui/Button';
import { Input } from '@/app/components/ui/Input';
import { Card, CardContent } from '@/app/components/ui/Card';
import { SectionHeader } from '@/app/components/ui/SectionHeader';

export function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 max-w-5xl">
      <SectionHeader 
        title="Contact" 
        description="프로젝트 문의나 채용 제안 등 자유롭게 연락주세요."
        className="mb-12 text-center md:text-left"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-['Noto_Sans_KR']">
              현재 새로운 프로젝트와 팀에 합류할 준비가 되어 있습니다. 
              기술적인 고민을 나누거나 커피챗도 언제나 환영합니다.
              아래 폼을 작성하시거나 이메일로 직접 연락주세요.
            </p>
          </div>

          <div className="space-y-4">
            <a href="mailto:contact@kimdev.com" className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Email</div>
                <div className="font-medium text-slate-900 dark:text-slate-100">contact@kimdev.com</div>
              </div>
            </a>
            
            <a href="#" className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:scale-110 transition-transform">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Github</div>
                <div className="font-medium text-slate-900 dark:text-slate-100">@kimdev</div>
              </div>
            </a>

            <a href="#" className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-slate-500 dark:text-slate-400">LinkedIn</div>
                <div className="font-medium text-slate-900 dark:text-slate-100">Kim Developer</div>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border-slate-200 dark:border-slate-800 shadow-lg">
            <CardContent className="p-6 md:p-8">
              {isSent ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">메시지가 전송되었습니다!</h3>
                  <p className="text-slate-500">빠른 시일 내에 답변 드리겠습니다.</p>
                  <Button 
                    variant="outline" 
                    className="mt-6"
                    onClick={() => setIsSent(false)}
                  >
                    새 메시지 보내기
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                    <Input 
                      id="name" 
                      placeholder="홍길동" 
                      required 
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="hello@example.com" 
                      required 
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400"
                      placeholder="프로젝트 의뢰 내용을 적어주세요..."
                      required
                      value={formState.message}
                      onChange={e => setFormState({...formState, message: e.target.value})}
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? '전송 중...' : '메시지 보내기'}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
