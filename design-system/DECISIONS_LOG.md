# Decisions Log

Items requiring formal cross-functional sign-off before they become canonical in the
design system. Each row links back to **`AUTHORITATIVE_STATUS.md`** for full context.

| # | Decision | Owner(s) | Status | Notes |
|---|---|---|---|---|
| 1 | **WCAG target level** — commit to 2.1 AA minimum | Ryan Campbell, Brent | 🔴 Open | Government customer base makes this legal/reputational risk |
| 2 | **Semantic color mapping** (success / warning / danger / info) | Brent + Marketing | 🔴 Open | Current mapping in `colors_and_type.css` is unblessed |
| 3 | **App type spec** — formally bless 14px Regular for app density | Brent, Julianna | 🔴 Open | Marketing stays 16px; app overrides documented |
| 4 | **ALPR UI product sub-brand** — pick from Checkpoint / Beacon / Command (or other) and commission wordmark | Roger, Brent | 🔴 Open | Naming actively in flight |
| 5 | **Palette ratios since 2022** — bless or revise the 60/30/10 Blurple/Navy/Orange | Roger | 🔴 Open | Redactor's navy drift is unratified |
| 6 | **Icon system** — formally adopt Lucide for UI; commission illustration set for primary icons | Brent | 🔴 Open | Current Lucide use is unblessed practice |
| 7 | **Dark mode palette** | Brent + Marketing | 🔴 Open | No palette, no priority stated |
| 8 | **Robofan license / access** | Ryan Campbell | 🔴 Open | Currently vendor-locked to logo files |
| 9 | **Font fallback chain** — ratify `Lexend → Verdana → Geneva → sans-serif` | Marketing | 🔴 Open | Verdana is practice; never ratified |
| 10 | **Button radii split** — bless 20px CTA / 8px compact | Brent, Julianna | 🔴 Open | Defensible but unblessed |
| 11 | **Compliance copy kit** — accuracy disclaimer, data-privacy statement, footer legal | Ryan Campbell, Brent | 🔴 Open | High-risk; minimum viable kit needed |
| 12 | **Error & empty-state voice patterns** | Roger, Brent | 🔴 Open | Decide on "Hounds couldn't find this" vs literal |
| 13 | **AI disclosure language** — external-facing copy | Roger, Brent | 🔴 Open | Internal "manual verification" rule confirmed |
| 14 | **Motion & animation spec** — durations, easing, reduced-motion | Brent, design | 🔴 Open | None documented |
| 15 | **Data visualization palette** — charts, maps, dashboards | Brent, product | 🔴 Open | Becomes critical for ALPR dashboards |
| 16 | **Partner / OEM white-label rules** | Roger | 🔴 Open | Embedded Redactor strips branding — no policy |
| 17 | **Photography DAM** — shared, organized library | Marketing | 🔴 Open | Squarespace CDN + Drive is de facto |
| 18 | **Wave graphic source files + usage rules** | Original 2022 designer / Marketing | 🔴 Open | No canonical SVGs |
| 19 | **Sub-brand architecture diagram** — master → sub-brand → product | Roger, Brent | 🔴 Open | Essential as ALPR UI gets named |
| 20 | **Localization placeholder** — markets, dates, RTL | — | ⏸️ Deferred | US/English-first; revisit when needed |

## How to use this log
- Each row stays open until the owner formally signs off (Slack post, doc comment, or PR
  approval).
- When closed, move the rationale into `AUTHORITATIVE_STATUS.md` under the relevant
  section and update the status legend (🔴 → ✅).
- Add new rows here as the system grows; never bake unblessed decisions into
  `README.md` or `colors_and_type.css` without a corresponding entry.

## Confirmed since the May 2026 audit
These were closed by the Slackbot audit and now live as ✅ in `AUTHORITATIVE_STATUS.md`:

- Lexend remains primary
- Sighthound + Redactor are one unified brand
- "Sighthound Redactor" proper case
- "ALPR+" canonical (not "ALPR Plus", not "ALPR")
- AI-generated content must be manually verified before publishing
- "Sighthound does not collect customer data" is a usable privacy claim
- Sentence case for blog/web headers (per Content Style Guide v2026.04)
