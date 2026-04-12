import { PublicSiteShell } from "@/components/layout/PublicSiteShell";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PublicSiteShell>{children}</PublicSiteShell>;
}
