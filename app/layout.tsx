import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { Container } from "../components/container";

export const metadata: Metadata = {
  title: {
    default: "Jihye Portfolio",
    template: "%s · Jihye Portfolio"
  },
  description: "포트폴리오와 블로그",
  metadataBase: new URL("http://localhost:3000")
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="appShell">
          <SiteHeader />
          <main className="main">
            <Container>{children}</Container>
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}


