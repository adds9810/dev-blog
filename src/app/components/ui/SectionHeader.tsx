import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SectionHeaderProps {
  title: string;
  description?: string;
  linkText?: string;
  href?: string;
  className?: string;
}

export function SectionHeader({ title, description, linkText, href, className }: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-12", className)}>
      <div className="space-y-2">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 font-['Noto_Sans_KR']"
        >
          {title}
        </motion.h2>
        {description && (
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl font-['Noto_Sans_KR']"
          >
            {description}
          </motion.p>
        )}
      </div>
      
      {linkText && href && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Link 
            to={href}
            className="group inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
          >
            {linkText}
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      )}
    </div>
  );
}
