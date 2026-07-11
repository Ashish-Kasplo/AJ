import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { profile, socialLinks } from "@/lib/portfolio"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinksList = [
    { icon: <Github className="h-5 w-5" />, href: socialLinks.github, label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: socialLinks.linkedin, label: "LinkedIn" },
    { icon: <Mail className="h-5 w-5" />, href: socialLinks.email, label: "Email" },
  ]

  return (
    <footer className="border-t border-border/60 bg-muted/40 py-12 text-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-3 text-2xl font-semibold tracking-tight text-foreground">
            {profile.name}
          </div>
          <p className="mb-6 text-sm text-muted-foreground">{profile.role}</p>

          <div className="mb-8 flex gap-4">
            {socialLinksList.map((link) => (
              <Button key={link.label} variant="ghost" size="icon" asChild className="text-foreground hover:bg-accent hover:text-accent-foreground">
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  {link.icon}
                </a>
              </Button>
            ))}
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-6">
            {[
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Experience", "#experience"],
              ["Projects", "#projects"],
              ["Education", "#education"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <Link key={label} href={href} className="text-sm text-muted-foreground transition hover:text-foreground">
                {label}
              </Link>
            ))}
          </div>

          <div className="text-center text-sm text-muted-foreground">
            © {currentYear} {profile.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
