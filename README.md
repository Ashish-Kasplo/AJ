# Ashish’s portfolio

A responsive Next.js portfolio with a terminal/editor visual style, TypeScript and Framer Motion.

## Development

Use Node.js 22 or newer.

```sh
npm ci
npm run dev
```

Visit http://localhost:3000. For a production check:

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

Browser checks (Google Chrome must be installed):

```sh
npm run build
npm run test:e2e
```

Use `npm run format:check` to check formatting. The PostCSS override applies a compatible patched 8.x release to Next.js’s CSS pipeline.

## Content

Edit `data/portfolio.ts` to update:

- `profile`: name, role, email, social URLs, optional resume URL, availability and career start date.
- `projects`: cards and generated `/projects/[slug]` pages. Optional `liveUrl` and `sourceUrl` fields expose external links when supplied. Keep slugs unique and URL-safe.
- `experience`, `skillGroups`, `stats`, `about` and `heroWords`: portfolio content. Experience years are calculated from the career start date.
- `articles`: title, summary and optional published `url`. Entries without URLs display “Planned article”.

Content is maintained in the repo and takes effect after rebuilding/deploying. There is no CMS or database. The existing project descriptions and career claims were retained; verify those and the impact statistics before publishing. Resume, live project links and published article links are still to be supplied.

## Interactions

- Filter projects by technology and browse their detail pages.
- Select projects and sections in the project explorer.
- Open quick navigation with Cmd/Ctrl+K and search by section name.
- Use the footer terminal (`help` lists commands).
- Theme preferences persist in local storage. On first visit the site follows the system theme.
- Native modal dialogs support Escape, focus containment and focus restoration.
- Reduced-motion preferences stop the rotating headline and floating badges.

## Contact

The form validates required fields and opens an encoded `mailto:` draft addressed to Ashish. The visitor must send it from their email app; the website does not claim delivery or store messages. The direct email link remains available if no mail handler is installed. Server-side delivery would require choosing and configuring an email provider.

## Structure

- `app/`: homepage, project routes, metadata, not-found page and styles.
- `components/Portfolio.tsx`: page composition and navigation.
- `components/Projects.tsx`, `Contact.tsx`, `Footer.tsx`: project explorer, email form and terminal.
- `components/Providers.tsx`: shared theme and motion preferences.
- `components/Dialog.tsx`: native accessible modal wrapper.
- `data/portfolio.ts`: shared typed content.

Unknown project slugs return the custom 404 page. Project titles and descriptions are included in route metadata. No external fonts, image services or API credentials are required.
