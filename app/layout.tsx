import type { Metadata } from "next";

import { profile } from "@/data/portfolio";
import { Providers } from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description:
    "Frontend Engineer building scalable SaaS, workflow systems, real-time applications and high-performance interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
