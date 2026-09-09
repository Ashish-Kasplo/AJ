import type { Metadata } from "next";

import { profile } from "@/data/portfolio";

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
        {children}
      </body>
    </html>
  );
}
