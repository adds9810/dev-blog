import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@/app/context/ThemeContext';
import { Layout } from '@/app/components/layout/Layout';
import { Home } from '@/app/pages/Home';
import { Resume } from '@/app/pages/Resume';
import { Portfolio } from '@/app/pages/Portfolio';
import { PortfolioDetail } from '@/app/pages/PortfolioDetail';
import { Blog } from '@/app/pages/Blog';
import { BlogPost } from '@/app/pages/BlogPost';
import { Contact } from '@/app/pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<PortfolioDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
