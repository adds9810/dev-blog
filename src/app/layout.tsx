import type { Metadata } from 'next';
import { Providers } from './providers';
import { Layout } from '../components/layout/Layout';

import '../styles/index.css';

export const metadata: Metadata = {
  title: 'Dev Portfolio',
  description: 'Resume, portfolio, and technical blog in one place.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}

