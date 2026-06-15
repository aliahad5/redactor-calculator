# Sighthound Redactor – Competitive Intelligence Hub

A Next.js 16 App Router project for Sighthound Redactor and Sighthound ALPR+ competitive intelligence, ready to deploy to **Vercel**. The app preserves the Redactor pricing calculator and market-analysis tabs, adds an ALPR+ hub, and integrates the Sighthound Design System v06.15.2026 / v0.9.1 provisional package across source and public assets.

## Tech stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Host:** Vercel
- **Icons:** Lucide (CDN)
- **Fonts:** Google Fonts – Lexend
- **Design system:** Sighthound Design System v06.15.2026 / v0.9.1 provisional

## Project layout

```
redactor-calculator/
├── app/
│   ├── layout.tsx        # Root layout: Lucide, script loader, globals.css
│   ├── page.tsx          # Server component that injects content/body.html
│   └── globals.css       # App styles and Sighthound token layer
├── content/
│   └── body.html         # The page markup injected into the app
├── design-system/        # Canonical Sighthound design-system docs, assets, previews, UI kits
├── public/
│   ├── design-system/    # Static mirror served from /design-system
│   └── script.js         # App JavaScript and global inline-handler functions
├── extract-body.ps1      # Helper: regenerates content/body.html from source HTML
├── next.config.mjs
├── next-env.d.ts
├── package.json
├── tsconfig.json
└── README.md
```

### How it works

1. `app/layout.tsx` loads the Lucide CDN and `/public/script.js`.
2. `app/page.tsx` reads `content/body.html` on the server and injects it into the page with `dangerouslySetInnerHTML`; inline handlers call functions defined in `public/script.js`.
3. `app/globals.css` carries app-specific Sighthound tokens sourced from `design-system/colors_and_type.css`, including v0.9.1 pattern and soft-gradient utilities.
4. `design-system/` is mirrored into `public/design-system/` so docs, assets, previews, and UI kits are accessible in the deployed app.

## Run locally

Prerequisites: **Node.js 20.9+** and npm.

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

Production build:

```bash
npm run build
npm start
```

## Deploy to Vercel

This project is deployed from GitHub to Vercel:

- **GitHub:** <https://github.com/aliahad5/redactor-calculator>
- **Live site:** <https://redactor-calculator.vercel.app/>

Push changes to the configured GitHub branch and Vercel will build/deploy from the repository settings.

## Updating the content

The single source of truth for the markup is `content/body.html`. To regenerate it from an original standalone HTML file:

```powershell
powershell -ExecutionPolicy Bypass -File .\extract-body.ps1
```

Alternatively, edit `content/body.html` directly. For JavaScript changes, edit `public/script.js`; for styles, edit `app/globals.css`.

## Updating the design system

Keep `design-system/` and `public/design-system/` synchronized. `design-system/` is the source reference for docs, tokens, previews, UI kits, and assets; `public/design-system/` is the static mirror available to the deployed app at `/design-system/...`.
