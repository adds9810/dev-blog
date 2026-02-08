import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { motion } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 transition-colors duration-300">
      <Header />
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow pt-24 pb-16"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
