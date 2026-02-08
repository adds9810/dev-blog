import React from 'react';
import { motion } from 'motion/react';
import { Download, Mail, MapPin, Briefcase } from 'lucide-react';
import { Button } from '@/app/components/ui/Button';
import { Badge } from '@/app/components/ui/Badge';
import { Card, CardContent } from '@/app/components/ui/Card';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { EXPERIENCE, SKILLS } from '@/app/data/mock';

export function Resume() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-20">
      
      {/* Resume Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row gap-8 items-start justify-between border-b border-slate-200 dark:border-slate-800 pb-10"
      >
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight font-['Noto_Sans_KR']">김이름</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">Frontend Developer</p>
          
          <div className="flex flex-col gap-2 text-slate-500 dark:text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Seoul, South Korea
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> contact@kimdev.com
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Open to work
            </div>
          </div>
          
          <p className="max-w-xl text-slate-600 dark:text-slate-400 leading-relaxed pt-2 font-['Noto_Sans_KR']">
            웹 표준과 접근성을 준수하며, 사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다. 
            React 생태계에 깊은 관심을 가지고 있으며, 효율적인 협업 프로세스를 만드는 것을 좋아합니다.
          </p>
        </div>
        
        <Button variant="outline" className="shrink-0 gap-2">
          <Download className="w-4 h-4" /> Resume PDF
        </Button>
      </motion.div>

      {/* Skills */}
      <section>
        <SectionHeader title="Skills" className="mb-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map(skill => (
                      <Badge key={skill} variant="secondary" className="text-sm py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section>
        <SectionHeader title="Experience" className="mb-8" />
        
        <div className="border-l-2 border-slate-200 dark:border-slate-800 ml-3 space-y-12">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-4 border-indigo-600" />
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">{exp.role}</h3>
                <span className="text-sm font-medium text-slate-500 font-mono">{exp.period}</span>
              </div>
              
              <div className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">{exp.company}</div>
              
              <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600 dark:text-slate-400 font-['Noto_Sans_KR']">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education (Static placeholder) */}
      <section>
        <SectionHeader title="Education" className="mb-8" />
        <div className="relative pl-8 md:pl-12 border-l-2 border-slate-200 dark:border-slate-800 ml-3">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-700" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Computer Science / Bachelor</h3>
          <p className="text-slate-500 mb-1">Seoul University</p>
          <span className="text-sm text-slate-400 font-mono">2016 - 2020</span>
        </div>
      </section>
    </div>
  );
}
