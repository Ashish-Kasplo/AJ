"use client"

import { ThemeProvider, useTheme as useNextTheme } from "next-themes"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}

export function useTheme() {
  const { theme, setTheme } = useNextTheme()

  return {
    theme: theme === "light" ? "light" : "dark",
    changeTheme: (value: "dark" | "light") => setTheme(value),
  }
}
