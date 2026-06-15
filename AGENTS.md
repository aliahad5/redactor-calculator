# AGENTS.md – Sighthound Design System Integration

## Overview
This project uses the **Sighthound Design System v06.15.2026 / v0.9.1 provisional** for the redactor-calculator Next.js app. Sighthound Redactor is treated as part of one unified Sighthound brand, with ALPR+, Redactor, Edge Compute, and Video sharing the same visual and content foundations.

## Design System Locations
The canonical project copy lives in `design-system/`. A mirrored static copy lives in `public/design-system/` so previews, assets, and UI kit references can be served by the app.

```
redactor-calculator/
├── design-system/
│   ├── assets/
│   ├── fonts/
│   ├── preview/
│   ├── ui_kits/
│   │   ├── alpr-app/
│   │   ├── redactor-app/
│   │   ├── sighthound-marketing/
│   │   └── video-app/
│   ├── uploads/
│   ├── AUTHORITATIVE_STATUS.md
│   ├── colors_and_type.css
│   ├── DECISIONS_LOG.md
│   ├── OPERATING_MODE.md
│   ├── README.md
│   ├── Sighthound Design System.md
│   ├── Sighthound Redactor App.html
│   ├── SKILL.md
│   ├── _adherence.oxlintrc.json
│   ├── _ds_bundle.js
│   └── _ds_manifest.json
└── public/design-system/
    └── mirrored static copy of the same files
```

## Integration Points
### CSS and styling
- `app/globals.css` carries the app-specific token block sourced from `design-system/colors_and_type.css`.
- Keep Sighthound body text Dark Navy `#1a1d38`; do not use pure black.
- Use Blurple `#4f60dc` as the primary action/brand color.
- Use orange accents sparingly and avoid orange/pink for body text because of contrast risk.
- Prefer 20px radius for CTA/marketing buttons and 8px for dense app controls.
- Use the v0.9.1 composition utilities where imagery is unnecessary: `.sh-pattern-dots`, `.sh-pattern-grid`, `.sh-pattern-topo`, `.sh-pattern-scan`, `.sh-pattern-detect`, `.sh-soft-mist`, and `.sh-soft-fade`.

### Assets and resources
- Use existing logo, image, icon, and hardware assets from `design-system/assets/` or `/design-system/assets/`.
- Do not recreate the wordmark; use the provided logo files.
- Imagery is optional. Prefer typography-led layouts, cards, data panels, soft gradients, detection/grid/topo patterns, and schematics when imagery does not add specific meaning.

### Documentation
Read these before design-heavy changes:
- `design-system/README.md` for brand story, voice, visual foundations, and product naming.
- `design-system/AUTHORITATIVE_STATUS.md` for confirmed rules, practice-not-policy items, and open gaps.
- `design-system/OPERATING_MODE.md` for how to use the provisional system.
- `design-system/DECISIONS_LOG.md` for pending decisions.
- `design-system/Sighthound Design System.md` for the comprehensive reference.

### Product naming and voice
- Use **Sighthound Redactor** in proper case.
- Use **ALPR+** exactly; do not write “ALPR Plus” or bare “ALPR” in marketing/product headers.
- Spell out **Make/Model/Color/Generation (MMCG)** on first use.
- Keep copy informal, polished, succinct, and human. Use sentence case for headings unless the design pattern explicitly calls for an overline/all-caps label.
- Do not use emoji in production UI.

## Configuration
- **Framework:** Next.js 16 App Router.
- **Deployment:** Vercel via GitHub repository `aliahad5/redactor-calculator`.
- **Live site:** `https://redactor-calculator.vercel.app/`.
- **Design System Version:** v06.15.2026 / v0.9.1 provisional.
- **Status:** Integrated into `design-system/`, `public/design-system/`, and app-level global tokens.

## Development Workflow
1. Reference `design-system/README.md` and `design-system/colors_and_type.css`.
2. Use app tokens from `app/globals.css` for project-specific styling.
3. Reference UI kit examples in `design-system/ui_kits/` for ALPR+, Redactor, marketing, and Video app patterns.
4. Validate with `npm run lint`, `npm test`, and `npm run build` before deployment.
5. Keep `design-system/` and `public/design-system/` synchronized when updating the package.

## Verification Checklist
- [x] v06.15.2026 package copied into `design-system/`.
- [x] Static design-system copy mirrored to `public/design-system/`.
- [x] v0.9.1 tokens and composition utilities available in `app/globals.css`.
- [x] Documentation and manifest files available in the project.
- [x] ALPR+, Redactor, Sighthound marketing, and Video UI kits available.

---

**Last Updated:** 2026-06-15  
**Design System Version:** v06.15.2026 / v0.9.1 provisional  
**Status:** Integrated and Ready for Development
