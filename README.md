# Sighthound Redactor – Competitive Analysis Hub

A Next.js 14 port of the original `redactor-pricing-calculator.html`, ready to deploy to **Vercel**. It preserves every tab (Pricing Calculator, Executive Summary, Product Updates, ICP & Personas, Competitor Profiles, Feature Comparison, Pricing Analysis, Positioning Strategy, Discovery Questions) and adds a Key Marketing Resources workspace for Redactor collateral.

## Tech stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Host:** Vercel
- **Icons:** Lucide (CDN)
- **Fonts:** Google Fonts – Inter, Sora, DM Sans

## Project layout

```
redactor-calculator/
├── app/
│   ├── layout.tsx        # Root layout: fonts, Lucide, script loader, globals.css
│   ├── page.tsx          # Server component that injects content/body.html
│   └── globals.css       # All original styles (including #pricing-calculator scope)
├── content/
│   └── body.html         # The original <body> markup (minus the inline <script>)
├── public/
│   └── script.js         # All original JS (switchTab, calculatePricing, etc.)
├── extract-body.ps1      # Helper: regenerates content/body.html from the source HTML
├── next.config.mjs
├── next-env.d.ts
├── package.json
├── tsconfig.json
└── README.md
```

### How it works

1. `app/layout.tsx` loads the Google Fonts, the Lucide CDN, and `/public/script.js` (which defines every global function used by the inline `onclick` handlers in the markup).
2. `app/page.tsx` reads `content/body.html` on the server and injects it into the page with `dangerouslySetInnerHTML`. The browser re-parses that HTML, so the inline `onclick="switchTab(...)"` handlers continue to work against the global functions defined in `script.js`.
3. `script.js` also runs its own initialization (`updateComparison`, `updateVersionDetails`, `updateDiscoveryQuestions`, `toggleScrollButton`, `lucide.createIcons()`) once the DOM is ready.

## Run locally

Prerequisites: **Node.js 18.17+** and npm.

```bash
cd redactor-calculator
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

### Option A – Vercel Dashboard (recommended)

1. Push this folder to a new GitHub/GitLab/Bitbucket repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Sighthound Redactor Next.js app"
   git branch -M main
   git remote add origin <YOUR_REPO_URL>
   git push -u origin main
   ```
2. Go to <https://vercel.com/new> and import the repository.
3. Vercel auto-detects Next.js – keep the defaults and click **Deploy**.

### Option B – Vercel CLI

```bash
npm i -g vercel
cd redactor-calculator
vercel          # first deploy (preview)
vercel --prod   # production deploy
```

No environment variables are required.

## Updating the content

The single source of truth for the markup is `content/body.html`. To regenerate it from the original standalone HTML file:

```powershell
# Edit extract-body.ps1 to point $src at your updated source file
powershell -ExecutionPolicy Bypass -File .\extract-body.ps1
```

Alternatively, edit `content/body.html` directly. For JavaScript changes, edit `public/script.js`; for styles, edit `app/globals.css`.
