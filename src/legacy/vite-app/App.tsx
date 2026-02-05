import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { HomePage } from '../pages/Home';
import { ResumePage } from '../pages/Resume';
import { PortfolioPage } from '../pages/Portfolio';
import { BlogPage } from '../pages/Blog';
import { ContactPage } from '../pages/Contact';
import { useEffect } from 'react';

import { PortfolioDetailPage } from '../pages/PortfolioDetail';
import { BlogDetailPage } from '../pages/BlogDetail';

// Initialize React Query Client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
          <Layout>
            <main className="max-w-7xl mx-auto px-6 w-full pt-20">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/resume" element={<ResumePage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/portfolio/:slug" element={<PortfolioDetailPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogDetailPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
          </Layout>
        </div>
      </Router>
    </QueryClientProvider>
  );
}
