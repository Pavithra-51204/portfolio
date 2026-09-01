# Pavithra Manogaran — Portfolio

Astro + TypeScript + Tailwind v4, fully static. Deployed on Netlify.

## Local development

```sh
npm install
npm run dev       # http://localhost:4321
```

Other useful commands:

| Command | Action |
| --- | --- |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Serve the built `./dist/` locally |
| `npx astro check` | Type-check the whole project |

## Editing content

All real content lives outside the components, as typed data — no need to touch
component code to update text.

| To change... | Edit this file |
| --- | --- |
| Featured projects | `src/data/projects.json` |
| Work experience | `src/data/experience.json` |
| Publications | `src/data/publications.json` |
| Patents | `src/data/patents.json` |
| Skills groups | `src/data/skills.json` |
| Name, bio, links, education, certifications | `src/data/site.ts` |

Shapes are enforced by `src/content.config.ts` (Zod schemas) — `npx astro check`
will catch a malformed entry (missing field, bad URL, etc.) before you deploy.

Each featured project's detail page (`/projects/<id>/`) is generated
automatically from its entry in `projects.json`; nothing else needs updating
when you add or remove a project. `featured: true` controls whether it shows
in the "Selected work" list, `order` controls its position.

The résumé PDF is served from `public/Pavithra_Manogaran_Resume.pdf` — replace
that file (keep the same name) to update it everywhere it's linked.

## Redeploying

Netlify is wired to this repo's `main` branch — pushing to `main` triggers a
production deploy automatically, and every pull request gets its own deploy
preview.

To deploy manually from the CLI instead:

```sh
npx netlify-cli deploy --build          # draft preview URL
npx netlify-cli deploy --build --prod   # production
```

## Quality checks before shipping a content change

```sh
npx astro check   # types
npm run build     # confirms the build itself succeeds
```

Lighthouse (performance/accessibility/best-practices/SEO) should stay at or
above 95 across the board — run it against a deploy preview URL, not
`localhost`, since headers and asset caching only apply on Netlify.
