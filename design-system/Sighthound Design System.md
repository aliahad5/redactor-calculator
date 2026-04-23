# Sighthound Design System — Single-File Bundle

> Generated 2026-04-20. This file contains the entire design system in one document: brand guidelines, design tokens, and the full source for both UI kits.

**Contents**

1. [Brand guidelines (README)](#brand-guidelines)
2. [Agent skill manifest (SKILL.md)](#skill-manifest)
3. [Design tokens — `colors_and_type.css`](#design-tokens)
4. [UI kit — Sighthound marketing](#ui-kit--sighthound-marketing)
5. [UI kit — Sighthound Redactor app](#ui-kit--sighthound-redactor-app)
6. [Asset manifest](#asset-manifest)

---

<a id="brand-guidelines"></a>
## 1. Brand guidelines (`README.md`)

# Sighthound Design System

A design system for **Sighthound Inc.** and its sub-brand **Sighthound Redactor**.
Based on the official *Sighthound Brand Guidelines* (April 2022) plus live context from
[sighthound.com](https://www.sighthound.com) and [redactor.com](https://www.redactor.com).

---

## About the brand

**Sighthound** is an IoT / computer-vision company that turns video feeds into actionable
data. Their tagline is **"Turning sight into insight."** The greyhound (named **Lucy**,
after the founder's dog) is the mascot — a visual metaphor for keeping things in sight and
tracking them with speed and responsiveness.

### Products
| Product | What it is | Site |
|---|---|---|
| **Sighthound ALPR+** | Automatic License Plate Recognition + vehicle make/model/color/generation (MMCG) | sighthound.com/products/alpr |
| **Sighthound Redactor** | AI-powered video, image & audio redaction (faces, plates, audio) for FOIA / GDPR / CJIS workflows | redactor.com |
| **Sighthound Hardware** | Edge AI compute cameras & nodes; IP67 rugged, made in USA | sighthound.com/products/hardware |
| **Sighthound Video** | Flexible agile Video Management System (VMS) — the original product | sighthound.com/products/sighthound-video |

### Audience
Government, Engineering, and Enterprise — City Traffic Engineers, Retail Store Managers,
Python Developers, Business Developers, Law Enforcement.

### Brand pillars
Easy · Insightful · Data-Driven · Evolving · Connecting · Protecting

### Differentiators
Made in USA · Specialized CV expertise · Outcomes-focused · Free 24×7×365 support · Future-proof (software-defined hardware) · High performance.

---

## Sources used

- **`uploads/Sighthound-BrandGuidelines-Jul12.pdf`** — Official 62-page brand guide (April 2022). Primary source of truth.
- **www.sighthound.com** (live site, Squarespace) — product pages, hero imagery, iconography reference.
- **www.redactor.com** (live site, Webflow) — sub-brand visuals, Redactor-specific product marketing.
- No codebase or Figma link was provided; if one exists, attach it for higher-fidelity UI-kit work.

---

## Content Fundamentals

**Tone.** *Informal yet polished.* The brand guide puts it explicitly: "We speak human, even
if we are referring to extremely complex technical concepts." Short, honest, solution-oriented.
No arrogance, no "talking at" the reader. Sleeves-up, collaborative.

**Voice traits.** Authentic · Succinct · Approachable · Helpful · A little quirky (the team is
a mix of entrepreneurs, AI researchers and CV scientists — "we might be the oddballs in the
industry, but we're fine with that").

**Person.** Prefers **we/our** (Sighthound) → **you/your** (customer). Collaborative, not
prescriptive. Examples from the sites:
- *"We solve complex edge & visual AI problems at scale."*
- *"Redactor gives you full control over what stays visible, and what gets anonymized."*
- *"Let's chat and see how we can make Sighthound ALPR+ work for you."*

**Case.** Sentence case everywhere except H4 / overlines / running headers which are
ALL CAPS. Titles are Title Case. Logo wordmark is all-lowercase. Never use all-lowercase
body copy.

**Copy patterns.**
- Benefit-led, metric-backed: *"Cut Costs by 93%"*, *"Up to 160 FPS on GPU"*, *"Over 2,800 Customers & Partners"*.
- "Made Easy" framing: *"Vehicle & Pedestrian Insights Made Easy."*
- Action verbs in CTAs: **Talk to our team** · **Get started** · **Book demo** · **Start Free Trial** · **Watch Demo** · **Explore Compute Hardware**.
- Checkmark lists for features (3–4 bullets, parallel construction).

**Emoji & gifs.** The brand guide says they "aim to keep things fun, with gifs, puns and
casual writing" — but the production websites use **no emoji**. Treat emoji as internal /
social-only; avoid in product and marketing UI. For icons, use the brand's illustrated
system (see Iconography).

**Examples to emulate.**
- *"The fastest, most accurate, and automated Video Redaction product available today."*
- *"Rugged. Proven Powerful. Made in the USA."*
- *"A privacy tool that works as hard as you do."*

---

## Visual Foundations

### Color
- **Primary:** Blurple `#4f60dc` + White. Blurple drives ~60% of a composition.
- **Secondary:** Dark Navy `#1a1d38` + Neutral Gray `#eff3f7`. ~30%. **All body text is Dark Navy on light backgrounds.**
- **Accents:** Light Orange `#f99f25` · Medium Orange `#f05d22` · Red Orange `#f62470`. Sparingly (~10%) — icons, gradients, illustration pops, key highlights. On orange/pink backgrounds, headings are **white**.
- **Gradients:** Used sparingly (~10%). Freeform or linear, any angle, built from palette colors. Brand gradient runs Blurple → Red Orange.

### Typography
- **Primary:** **Lexend** (Google Fonts, weights 300/500/600). Body is Light, H1 is Medium, H4 / overline / running headers are Semibold ALL CAPS.
- **Alternative (email/software):** **Verdana** (Regular replaces Lexend Light, Bold replaces Lexend Semibold). Used where custom web fonts aren't supported.
- **Logo wordmark:** **Robofan** — proprietary; never recreate the wordmark. Use the logo files in `assets/`.
- **Hierarchy (digital):** H1 46/1.2 · H2 32/1.33 · H3 16/1.5 · H4 16 semibold ALL CAPS · H5 18/1.5 · Body 16/1.5 · Button 16.

### Spacing, radii, shadows
- Rounded corners are generous and modern. **Buttons: 20px radius.** Cards: 12px.
- Spacing scale is 4/8/12/16/24/32/48/64/96 — friendly, not tight.
- Shadows are soft and navy-tinted (not black) — see `colors_and_type.css`.
- Borders are subtle; navy on interactive hover/focus.

### Imagery & photography
- **People:** warm, human, smiling — families, parents, business owners, law enforcement. Undertones of orange emphasized for warmth.
- **Vehicles / expansive views:** bird's-eye, panorama, metropolitan, highways, day-time. Large-scale-impact feeling.
- **Equipment:** product on black laptops / monitors / phones (matches Windows-using customer base).
- **Redactor-specific:** raw surveillance footage → redacted (face/plate blurring) side-by-side. The blur IS the hero.
- **Avoid:** screenshots of code (reads as intimidating), low-quality/pixelated images, heavy text overlays, software screenshots without a device mockup.

### Motion & interaction
- Motion is subtle and purposeful — the Redactor homepage uses a looping product-demo video. No bouncy/playful anim; favor standard `cubic-bezier(0.2, 0, 0.2, 1)` fades and slides at 200–320ms.
- **Hover:** buttons invert (primary → darker blurple; secondary white→navy background); links underline and deepen in blurple. No glow, no scale.
- **Press:** mild darken, no shrink.
- **Focus:** 3px blurple ring at 35% alpha for accessibility.

### Layout & graphic motifs
- **The wave.** The signature graphic element — a flowing curved form that can appear horizontal, angled or vertical. "Innovation, global technology, all-reaching, scanning, futuristic." Can be any palette color or gradient; transparency adjusted to blend.
- **Illustrations.** Flat, minimalist, abstract. No more than 3 colors. Subjects: office supplies, data/charts, cities, highways, parking.
- **Cards.** White surface, 12px radius, soft navy-tinted shadow, thin `#e4e8ef` border. No colored left-accent.
- **Transparency & blur.** Used most in redacted imagery (the product IS blur); otherwise used lightly over wave graphics.
- **Corner radii.** Buttons 20px · Cards 12px · Inputs 8px · Pills 999px.

---

## Iconography

**Primary icons.** Flat illustration style (closer to a small illustration than a line
icon). Orange + navy palette, slightly rounded edges, outline style with a medium stroke
weight. Used only for major products, services, industries. The Redactor feature grid
is the canonical example — see `assets/redactor-icon-*.avif`.

**Secondary icons.** Same design language but applied more freely (list items, benefits,
contact). May use an **orange gradient** with navy or white.

**Emoji?** No, not in production. Brand guide allows gifs/puns in casual internal comms, but
the live marketing sites contain no emoji.

**What's in this project.**
- Product illustrations (hero imagery) — `assets/hero-*`.
- Redactor feature icons (6) — `assets/redactor-icon-*.avif`.
- Compute hardware renders — `assets/sighthound-compute-*.png`.
- Logos (horizontal/white, Redactor sub-brand) — `assets/sighthound-logo-*`, `assets/redactor-logo-*`.
- For UI-level icons, use **Lucide** (`unpkg.com/lucide@latest`) at 1.75 stroke weight,
  `currentColor`. This is the minimalist house icon set — navy by default, blurple for
  brand-forward moments, orange reserved for primary-icon illustrations.

---

## Index

```
├── README.md                  ← you are here
├── SKILL.md                   ← Agent Skill manifest
├── colors_and_type.css        ← design tokens + semantic CSS vars
├── assets/                    ← logos, hero imagery, product icons, hardware renders
├── preview/                   ← design-system preview cards (registered in Asset panel)
├── ui_kits/
│   ├── sighthound-marketing/  ← sighthound.com recreation
│   │   ├── index.html
│   │   └── *.jsx components
│   └── redactor-app/          ← Redactor product UI recreation
│       ├── index.html
│       └── *.jsx components
└── uploads/                   ← source materials (brand guidelines PDF)
```

---

## Caveats

- **Guidelines are from April 2022.** The live Redactor site uses a slightly evolved
  palette — specifically more navy-on-white with less blurple. This system follows the
  **official 2022 guide** as the source of truth; the Redactor app kit uses the same tokens.
- **Robofan** (logo wordmark typeface) is proprietary and not included — the logo files
  in `assets/` are the only approved way to set the wordmark.
- **No codebase / Figma provided** — UI kits are built from live-site observation + brand
  tokens. For pixel-perfect fidelity, attach the codebase or a Figma library.
- **UI icons** use Lucide as a stand-in for the (unprovided) internal icon set.


---

<a id="skill-manifest"></a>
## 2. Agent skill manifest (`SKILL.md`)

```markdown
---
name: sighthound-design
description: Use this skill to generate well-branded interfaces and assets for Sighthound (and the Sighthound Redactor sub-brand) — either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and
create static HTML files for the user to view. If working on production code, you can copy
assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build
or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_
production code, depending on the need.

## Quick orientation

- `README.md` — brand story, voice, visual foundations, iconography, index.
- `colors_and_type.css` — drop-in CSS: design tokens + semantic element styles.
- `assets/` — real logos, hero imagery, product icons, hardware renders. Copy, don't redraw.
- `preview/` — small cards that render each part of the system.
- `ui_kits/sighthound-marketing/` — React recreation of sighthound.com.
- `ui_kits/redactor-app/` — React recreation of the Redactor product UI.

## Non-negotiables

- Body text is **Dark Navy `#1a1d38`** on light backgrounds. Never black.
- Primary color is **Blurple `#4f60dc`** (~60% of design).
- Orange accents (`#f99f25` / `#f05d22` / `#f62470`) are **~10%** only — pops, not fills.
- **Buttons are always 20px radius**, padding 14/29, Lexend Light 16.
- Primary font: **Lexend** (Google, free). Fallback: Verdana. The wordmark uses Robofan — never recreate it; always use a logo file.
- Tagline: *"Turning sight into insight."*
- Voice: informal yet polished, human, succinct, no arrogance. We/you.
- No emoji in production UI. Use the brand's illustrated icon set.

## Signature motifs
The **wave** graphic (curved flowing form, any angle, any palette color, often with transparency) and Blurple → Red-Orange gradients are the two hallmark brand devices. Use sparingly.

```

---

<a id="design-tokens"></a>
## 3. Design tokens — `colors_and_type.css`

Drop-in CSS with all brand tokens as custom properties plus semantic element styles (headings, buttons, links, etc).

```css
/* =========================================================
   Sighthound Design System — colors_and_type.css
   Source: Sighthound Brand Guidelines (April 2022)
   ========================================================= */

/* Lexend — primary brand typeface (Google Fonts, open source) */
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap');

:root {
  /* ---------- COLOR — Primary ---------- */
  --sh-blurple:          #4f60dc; /* combination of blue & purple; primary brand hue (60% of design) */
  --sh-blurple-700:      #3d4bc2;
  --sh-blurple-800:      #2e3ba4;
  --sh-blurple-300:      #8792e8;
  --sh-blurple-100:      #dee2f8;
  --sh-blurple-50:       #eef1fc;

  --sh-white:            #ffffff;

  /* ---------- COLOR — Secondary (30% of design) ---------- */
  --sh-navy:             #1a1d38; /* text color on light; brand dark */
  --sh-navy-700:         #2a2e56;
  --sh-navy-500:         #4b4f73;
  --sh-gray:             #eff3f7; /* neutral gray surface */
  --sh-gray-200:         #d9dfe6;
  --sh-gray-400:         #9aa3b2;
  --sh-gray-600:         #64708a;

  /* ---------- COLOR — Accents (10% — pops of color) ---------- */
  --sh-orange-light:     #f99f25;
  --sh-orange-medium:    #f05d22;
  --sh-orange-red:       #f62470;

  /* ---------- COLOR — Gradients (~10% usage) ---------- */
  --sh-gradient-brand:   linear-gradient(135deg, #4f60dc 0%, #f62470 100%);
  --sh-gradient-warm:    linear-gradient(135deg, #f99f25 0%, #f05d22 50%, #f62470 100%);
  --sh-gradient-cool:    linear-gradient(135deg, #1a1d38 0%, #4f60dc 100%);
  --sh-gradient-surface: linear-gradient(180deg, #eff3f7 0%, #ffffff 100%);

  /* ---------- SEMANTIC — Foreground ---------- */
  --fg-1:                var(--sh-navy);       /* primary text */
  --fg-2:                var(--sh-navy-500);   /* secondary text */
  --fg-3:                var(--sh-gray-600);   /* tertiary / meta */
  --fg-inverse:          var(--sh-white);
  --fg-accent:           var(--sh-blurple);
  --fg-link:             var(--sh-blurple);

  /* ---------- SEMANTIC — Background ---------- */
  --bg-canvas:           var(--sh-white);
  --bg-surface:          var(--sh-gray);
  --bg-raised:           #ffffff;
  --bg-inverse:          var(--sh-navy);
  --bg-brand:            var(--sh-blurple);

  /* ---------- SEMANTIC — Border ---------- */
  --border-subtle:       #e4e8ef;
  --border-default:      var(--sh-gray-200);
  --border-strong:       var(--sh-navy-500);
  --border-focus:        var(--sh-blurple);

  /* ---------- SEMANTIC — Status ---------- */
  --status-success:      #1f9d55;
  --status-warning:      var(--sh-orange-light);
  --status-danger:       var(--sh-orange-red);
  --status-info:         var(--sh-blurple);

  /* ---------- TYPE — Families ---------- */
  --font-sans:           'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', Verdana, sans-serif;
  --font-fallback:       Verdana, Geneva, sans-serif; /* brand-approved fallback for email/software */
  --font-mono:           'SF Mono', Menlo, Consolas, 'Roboto Mono', monospace;
  /* NOTE: the logo wordmark uses Robofan, a proprietary type; NEVER recreate the wordmark — use the logo files in assets/ */

  /* ---------- TYPE — Weights (Lexend) ---------- */
  --fw-light:            300;
  --fw-regular:          400;
  --fw-medium:           500;
  --fw-semibold:         600;
  --fw-bold:             700;

  /* ---------- TYPE — Scale (digital hierarchy, from brand guide) ---------- */
  --fs-h1:               46px;  /* Lexend Medium, line-height 1.2 */
  --fs-h2:               32px;  /* Lexend Light,  line-height 1.33, Title Case */
  --fs-h3:               16px;  /* Lexend Light,  line-height 1.5 */
  --fs-h4:               16px;  /* Lexend Semibold, ALL CAPS, line-height 1.5 */
  --fs-h5:               18px;  /* Lexend Light,  line-height 1.5 */
  --fs-body:             16px;  /* Lexend Light,  line-height 1.5 */
  --fs-button:           16px;  /* Lexend Light */
  --fs-caption:          13px;
  --fs-overline:         12px;  /* Lexend Semibold, ALL CAPS, tracking 0.08em */

  /* ---------- SPACING ---------- */
  --space-1:             4px;
  --space-2:             8px;
  --space-3:             12px;
  --space-4:             16px;
  --space-5:             20px;
  --space-6:             24px;
  --space-8:             32px;
  --space-10:            40px;
  --space-12:            48px;
  --space-16:            64px;
  --space-20:            80px;
  --space-24:            96px;

  /* ---------- RADII ---------- */
  --radius-sm:           4px;
  --radius-md:           8px;
  --radius-lg:           12px;
  --radius-button:       20px;   /* buttons are rounded 20px per brand spec */
  --radius-pill:         999px;

  /* ---------- SHADOWS ---------- */
  --shadow-xs:           0 1px 2px rgba(26, 29, 56, 0.06);
  --shadow-sm:           0 2px 6px rgba(26, 29, 56, 0.08);
  --shadow-md:           0 8px 20px rgba(26, 29, 56, 0.10);
  --shadow-lg:           0 20px 40px rgba(26, 29, 56, 0.14);
  --shadow-focus:        0 0 0 3px rgba(79, 96, 220, 0.35);

  /* ---------- MOTION ---------- */
  --ease-standard:       cubic-bezier(0.2, 0.0, 0.2, 1);
  --ease-out:            cubic-bezier(0.0, 0.0, 0.2, 1);
  --dur-fast:            120ms;
  --dur-base:            200ms;
  --dur-slow:            320ms;
}

/* =========================================================
   Semantic element styles
   ========================================================= */

html, body {
  font-family: var(--font-sans);
  font-weight: var(--fw-regular);
  font-size: var(--fs-body);
  line-height: 1.5;
  color: var(--fg-1);
  background: var(--bg-canvas);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

h1, .h1 {
  font-family: var(--font-sans);
  font-weight: var(--fw-medium);
  font-size: var(--fs-h1);
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: var(--fg-1);
  margin: 0 0 var(--space-6);
}

h2, .h2 {
  font-family: var(--font-sans);
  font-weight: var(--fw-light);
  font-size: var(--fs-h2);
  line-height: 1.33;
  color: var(--fg-1);
  margin: 0 0 var(--space-5);
}

h3, .h3 {
  font-family: var(--font-sans);
  font-weight: var(--fw-light);
  font-size: var(--fs-h3);
  line-height: 1.5;
  margin: 0 0 var(--space-3);
}

h4, .h4 {
  font-family: var(--font-sans);
  font-weight: var(--fw-semibold);
  font-size: var(--fs-h4);
  line-height: 1.5;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0 0 var(--space-3);
}

h5, .h5 {
  font-family: var(--font-sans);
  font-weight: var(--fw-light);
  font-size: var(--fs-h5);
  line-height: 1.5;
  margin: 0 0 var(--space-3);
}

p, .p {
  font-weight: var(--fw-regular);
  font-size: var(--fs-body);
  line-height: 1.5;
  margin: 0 0 var(--space-4);
  text-wrap: pretty;
}

.overline {
  font-size: var(--fs-overline);
  font-weight: var(--fw-semibold);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--fg-2);
}

.caption { font-size: var(--fs-caption); color: var(--fg-3); }

a, .link {
  color: var(--fg-link);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1px;
  transition: color var(--dur-fast) var(--ease-standard);
}
a:hover { color: var(--sh-blurple-700); }

code, pre, .mono {
  font-family: var(--font-mono);
  font-size: 0.92em;
}

/* ---------- Button base ---------- */
button, .btn {
  font-family: var(--font-sans);
}
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-weight: var(--fw-regular);
  font-size: var(--fs-button);
  line-height: 1;
  padding: 14px 29px;                 /* per brand spec */
  border-radius: var(--radius-button); /* 20px */
  border: 1px solid transparent;
  cursor: pointer;
  transition: all var(--dur-base) var(--ease-standard);
  white-space: nowrap;
}
.btn-primary { background: var(--sh-blurple); color: var(--sh-white); }
.btn-primary:hover { background: var(--sh-blurple-700); }
.btn-secondary { background: var(--sh-white); color: var(--sh-navy); border-color: var(--sh-navy); }
.btn-secondary:hover { background: var(--sh-navy); color: var(--sh-white); }
.btn-tertiary { background: transparent; color: var(--sh-blurple); padding: 14px 12px; }
.btn-tertiary:hover { color: var(--sh-blurple-800); text-decoration: underline; }

```

---

<a id="ui-kit--sighthound-marketing"></a>
## 4. UI kit — Sighthound marketing site

# Sighthound marketing site — UI kit

A hi-fi recreation of **sighthound.com** built from live-site observation and brand tokens.

## Components
- `Nav.jsx` — top navigation with dropdown menus
- `Hero.jsx` — homepage hero block with CTA pair
- `Capabilities.jsx` — 5-card capability grid with product tags
- `CustomerLogos.jsx` — "Over 2,800 customers" marquee block
- `Footer.jsx` — four-column footer with horizontal white logo
- `Marquee.jsx` — "Why Choose" scrolling marquee of proof points
- `ProductHero.jsx` — ALPR+ product-page style hero with stat cards

Open `index.html` to see them assembled as the homepage.

## Notes
- No codebase was provided; components are cosmetic-level React built from brand tokens in `../../colors_and_type.css`.
- Images pulled from the live Squarespace CDN + saved under `../../assets/`.


### `ui_kits/sighthound-marketing/Nav.jsx`

```jsx
const { useState } = React;

function Nav() {
  const [open, setOpen] = useState(null);
  const menus = {
    Products: ['Sighthound ALPR+', 'Sighthound Redactor', 'Sighthound Hardware', 'Sighthound Video'],
    Solutions: ['Parking & EV', 'Law Enforcement', 'Retail & QSR', 'Education & Campus Security', 'Legal & FOIA', 'Transportation & Logistics'],
    Support: ['Frequently Asked Questions', 'Developer Resources'],
    About: ['Team', 'Technology', 'Partners', 'Careers', 'News', 'Blog'],
  };
  return (
    <nav style={{position:'sticky',top:0,zIndex:50,background:'#fff',borderBottom:'1px solid #e4e8ef'}}>
      <div style={{maxWidth:1240,margin:'0 auto',padding:'16px 32px',display:'flex',alignItems:'center',gap:32}}>
        <img src="../../assets/sighthound-logo-horizontal.jpg" style={{height:40}} alt="Sighthound"/>
        <div style={{display:'flex',gap:4,flex:1}} onMouseLeave={()=>setOpen(null)}>
          {Object.keys(menus).map(k => (
            <div key={k} style={{position:'relative'}} onMouseEnter={()=>setOpen(k)}>
              <button style={{background:'none',border:0,padding:'10px 14px',fontFamily:'Lexend',fontWeight:300,fontSize:15,color:'#1a1d38',cursor:'pointer'}}>{k}</button>
              {open===k && (
                <div style={{position:'absolute',top:'100%',left:0,background:'#fff',border:'1px solid #e4e8ef',borderRadius:12,boxShadow:'0 8px 20px rgba(26,29,56,.10)',padding:8,minWidth:240}}>
                  {menus[k].map(i => <a key={i} href="#" style={{display:'block',padding:'10px 14px',fontSize:14,color:'#1a1d38',textDecoration:'none',borderRadius:8,fontWeight:300}} onMouseEnter={e=>e.currentTarget.style.background='#eff3f7'} onMouseLeave={e=>e.currentTarget.style.background='transparent'}>{i}</a>)}
                </div>
              )}
            </div>
          ))}
        </div>
        <a href="#" style={{fontFamily:'Lexend',fontWeight:300,fontSize:15,color:'#1a1d38',textDecoration:'none'}}>Contact</a>
        <button className="btn btn-primary" style={{padding:'12px 22px'}}>Talk to our team</button>
      </div>
    </nav>
  );
}
window.Nav = Nav;

```

### `ui_kits/sighthound-marketing/Hero.jsx`

```jsx
function Hero() {
  return (
    <section style={{position:'relative',overflow:'hidden',background:'#fff'}}>
      {/* wave backdrop */}
      <svg viewBox="0 0 1440 520" preserveAspectRatio="none" style={{position:'absolute',inset:0,width:'100%',height:'100%',opacity:.9}}>
        <defs>
          <linearGradient id="hb1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#eef1fc"/>
            <stop offset="100%" stopColor="#ffffff"/>
          </linearGradient>
          <linearGradient id="hb2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4f60dc" stopOpacity=".08"/>
            <stop offset="60%" stopColor="#f99f25" stopOpacity=".07"/>
            <stop offset="100%" stopColor="#f62470" stopOpacity=".10"/>
          </linearGradient>
        </defs>
        <rect width="1440" height="520" fill="url(#hb1)"/>
        <path d="M0,330 C240,240 480,410 760,320 C1000,240 1240,380 1440,310 L1440,520 L0,520 Z" fill="url(#hb2)"/>
      </svg>
      <div style={{position:'relative',maxWidth:1240,margin:'0 auto',padding:'96px 32px 120px',display:'grid',gridTemplateColumns:'1.1fr 1fr',gap:64,alignItems:'center'}}>
        <div>
          <div className="overline" style={{marginBottom:16}}>Vehicle & Pedestrian Insights, Made Easy</div>
          <h1 style={{fontSize:56,lineHeight:1.1,margin:'0 0 20px'}}>We solve complex edge & visual AI problems at scale.</h1>
          <p style={{fontSize:18,color:'#4b4f73',maxWidth:560,marginBottom:28}}>Sighthound's AI-powered video solutions unlock the power of your data — resulting in valuable user insights, reduced operational cost, and increased revenue.</p>
          <div style={{display:'flex',gap:12}}>
            <button className="btn btn-primary">Talk to our team</button>
            <button className="btn btn-tertiary">Watch demo →</button>
          </div>
        </div>
        <div style={{position:'relative',borderRadius:20,overflow:'hidden',boxShadow:'0 20px 40px rgba(26,29,56,.14)',aspectRatio:'4/3'}}>
          <img src="../../assets/white-tesla-alpr.jpg" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
          <div style={{position:'absolute',left:20,bottom:20,padding:'10px 14px',background:'rgba(26,29,56,.85)',color:'#fff',borderRadius:10,fontSize:12,fontFamily:'Lexend'}}>
            <div style={{fontWeight:600,fontSize:11,letterSpacing:'.08em',textTransform:'uppercase',color:'#8792e8',marginBottom:4}}>ALPR+</div>
            Tesla Model 3 · White · CA 7ABC123
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;

```

### `ui_kits/sighthound-marketing/Capabilities.jsx`

```jsx
function Capabilities() {
  const cards = [
    { img:'../../assets/hero-vehicle-detection.jpg', title:'Vehicle Detection & Recognition', tag:'Sighthound ALPR+', body:'Detect vehicles from static or moving cameras and return make, model, color and generation for vehicles sold from 1991 onwards.' },
    { img:'../../assets/hero-object-tracking.jpg', title:'Object Detection & Tracking', tag:'Sighthound ALPR+', body:'Distinguish between vehicles, trucks, buses, motorbikes, people, bicycles and license plates — then track them across frames.' },
    { img:'../../assets/hero-redaction.png', title:'Redaction', tag:'Sighthound Redactor', body:'Remove personally identifiable information automatically from video feeds or files. Finds faces and plates; allows other data to be edited manually.' },
    { img:'../../assets/hero-lpr.jpg', title:'License Plate Recognition', tag:'Sighthound ALPR+', body:'Read plates from most countries in the world, reporting the alphanumeric characters and region for US, Canada, and major EU countries.' },
    { img:'../../assets/edge-ai-hardware.png', title:'Powerful Edge AI Hardware', tag:'Sighthound Hardware', body:'Deep neural network devices deliver the highest accuracy and lowest latency at the edge. No need for clunky servers in data cabinets.' },
  ];
  return (
    <section style={{padding:'96px 32px',background:'#eff3f7'}}>
      <div style={{maxWidth:1240,margin:'0 auto'}}>
        <div className="overline" style={{marginBottom:8}}>Capabilities</div>
        <h2 style={{fontSize:40,maxWidth:760,marginBottom:48}}>State-of-the-art deep learning from Sighthound's own computer vision research lab.</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))',gap:20}}>
          {cards.map(c => (
            <article key={c.title} style={{background:'#fff',borderRadius:16,overflow:'hidden',border:'1px solid #e4e8ef',boxShadow:'0 2px 6px rgba(26,29,56,.06)',display:'flex',flexDirection:'column'}}>
              <div style={{height:160,background:'#1a1d38'}}>
                <img src={c.img} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
              </div>
              <div style={{padding:'22px 24px',flex:1,display:'flex',flexDirection:'column'}}>
                <h3 style={{fontSize:20,fontWeight:500,marginBottom:10,lineHeight:1.25}}>{c.title}</h3>
                <p style={{fontSize:14,color:'#4b4f73',flex:1,marginBottom:16}}>{c.body}</p>
                <a href="#" style={{fontSize:13,fontWeight:500,color:'#4f60dc',textDecoration:'none'}}>{c.tag} →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Capabilities = Capabilities;

```

### `ui_kits/sighthound-marketing/CustomerLogos.jsx`

```jsx
function CustomerLogos() {
  const customers = ['Argonne Laboratory','Atea','Lotus','Zepcam','Garmin','SafeFleet','Bynet','Consilio','Bioclinica','LensLock'];
  return (
    <section style={{padding:'80px 32px',background:'#fff',textAlign:'center'}}>
      <div className="overline" style={{marginBottom:8}}>Trusted partners</div>
      <h2 style={{fontSize:36,marginBottom:48}}>Over 2,800 Customers & Partners</h2>
      <div style={{maxWidth:1080,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:24,rowGap:40}}>
        {customers.map(c => (
          <div key={c} style={{height:56,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Lexend',fontWeight:600,fontSize:16,color:'#9aa3b2',letterSpacing:'.02em',border:'1px dashed #e4e8ef',borderRadius:10}}>{c}</div>
        ))}
      </div>
    </section>
  );
}
window.CustomerLogos = CustomerLogos;

```

### `ui_kits/sighthound-marketing/Marquee.jsx`

```jsx
function Marquee() {
  const items = ['Industry-Leading Accuracy','Comprehensive Vehicle Analytics','Flexible Deployment Options','Seamless Integration','Real-Time Processing','Scalable and Customizable','Secure and Compliant','Proven Track Record','Innovative AI-Driven Technology','Global Support and Expertise'];
  const row = [...items, ...items];
  return (
    <section style={{background:'#1a1d38',color:'#fff',padding:'28px 0',overflow:'hidden',borderTop:'1px solid #2a2e56',borderBottom:'1px solid #2a2e56'}}>
      <style>{`@keyframes mq { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      <div style={{display:'flex',gap:56,animation:'mq 60s linear infinite',whiteSpace:'nowrap',width:'max-content'}}>
        {row.map((t,i)=>(
          <span key={i} style={{fontFamily:'Lexend',fontWeight:300,fontSize:22,display:'inline-flex',alignItems:'center',gap:56}}>
            {t} <span style={{color:'#f99f25'}}>•</span>
          </span>
        ))}
      </div>
    </section>
  );
}
window.Marquee = Marquee;

```

### `ui_kits/sighthound-marketing/Footer.jsx`

```jsx
function Footer() {
  const cols = [
    { h:'Solutions', items:['Retail & QSR','Law Enforcement','Parking & EV','Legal, FOIA & Evidence Review'] },
    { h:'Products', items:['Sighthound ALPR+','Sighthound Redactor','Sighthound Hardware','Sighthound Video'] },
    { h:'Support', items:['Frequently Asked Questions','Contact Sales','Create Support Ticket'] },
    { h:'About', items:['Blog','Team','Technology','Partners'] },
  ];
  return (
    <footer style={{background:'#1a1d38',color:'#fff',padding:'80px 32px 32px'}}>
      <div style={{maxWidth:1240,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:40,paddingBottom:48}}>
        {cols.map(c => (
          <div key={c.h}>
            <div style={{fontSize:12,fontWeight:600,textTransform:'uppercase',letterSpacing:'.08em',color:'#8792e8',marginBottom:18}}>{c.h}</div>
            <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:10}}>
              {c.items.map(i => <li key={i}><a href="#" style={{color:'#dee2f8',fontSize:14,fontWeight:300,textDecoration:'none'}}>{i}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{maxWidth:1240,margin:'0 auto',borderTop:'1px solid #2a2e56',paddingTop:32,display:'flex',justifyContent:'space-between',alignItems:'center',color:'#8792e8',fontSize:13}}>
        <img src="../../assets/sighthound-logo-white.png" style={{height:32}}/>
        <div>© 2026 Sighthound, Inc. &nbsp;·&nbsp; Privacy Policy &nbsp;·&nbsp; Terms of Use</div>
      </div>
    </footer>
  );
}
window.Footer = Footer;

```

### `ui_kits/sighthound-marketing/index.html`

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Sighthound — Marketing UI Kit</title>
<link rel="stylesheet" href="../../colors_and_type.css">
<style>html,body{margin:0;background:#fff}</style>
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>
</head>
<body>
<div id="root"></div>
<script type="text/babel" src="Nav.jsx"></script>
<script type="text/babel" src="Hero.jsx"></script>
<script type="text/babel" src="Capabilities.jsx"></script>
<script type="text/babel" src="Marquee.jsx"></script>
<script type="text/babel" src="CustomerLogos.jsx"></script>
<script type="text/babel" src="Footer.jsx"></script>
<script type="text/babel" data-presets="env,react">
  function App() {
    return (
      <div data-screen-label="sighthound-home">
        <Nav />
        <Hero />
        <Capabilities />
        <Marquee />
        <CustomerLogos />
        <Footer />
      </div>
    );
  }
  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
</script>
</body>
</html>

```

---

<a id="ui-kit--sighthound-redactor-app"></a>
## 5. UI kit — Sighthound Redactor app

# Sighthound Redactor — UI kit

A hi-fi recreation of the Redactor desktop/web application UI for video redaction.

## Components
- `AppShell.jsx` — sidebar + top bar for the editor
- `MediaList.jsx` — project file list with status pills
- `Timeline.jsx` — scrubber + per-track tag blocks (faces, plates, audio)
- `VideoCanvas.jsx` — playback with redaction boxes overlayed
- `DetectionPanel.jsx` — right-side detection list with toggles
- `Uploader.jsx` — empty-state dropzone
- `ExportModal.jsx` — export settings dialog

Open `index.html` for the assembled app view.

## Caveats
Built from marketing site + brand tokens only. No internal codebase provided — if you share
one we'll refactor to match real component APIs.


### `ui_kits/redactor-app/AppShell.jsx`

```jsx
const { useState } = React;

function AppShell({ children, active, onNav }) {
  const nav = [
    { k:'projects', l:'Projects', i:'M3 7h18M3 12h18M3 17h12' },
    { k:'editor', l:'Editor', i:'M12 4v16m8-8H4' },
    { k:'library', l:'Library', i:'M4 4h16v16H4zM4 10h16' },
    { k:'activity', l:'Activity', i:'M4 12h4l2-6 4 12 2-6h4' },
    { k:'settings', l:'Settings', i:'M12 8a4 4 0 100 8 4 4 0 000-8z' },
  ];
  return (
    <div style={{display:'grid',gridTemplateColumns:'240px 1fr',height:'100vh',background:'#f6f8fb'}}>
      <aside style={{background:'#1a1d38',color:'#fff',padding:'20px 14px',display:'flex',flexDirection:'column',fontFamily:'Lexend',fontWeight:400}}>
        <div style={{display:'flex',alignItems:'center',gap:10,padding:'4px 10px 24px'}}>
          <img src="../../assets/redactor-logo-horizontal.webp" style={{height:30,filter:'brightness(0) invert(1)'}}/>
        </div>
        <button className="btn btn-primary" style={{margin:'0 6px 18px',padding:'12px 16px',fontSize:14,background:'#4f60dc'}}>+ New project</button>
        <nav style={{display:'flex',flexDirection:'column',gap:2,flex:1}}>
          {nav.map(n=>(
            <button key={n.k} onClick={()=>onNav?.(n.k)} style={{textAlign:'left',background:active===n.k?'#2a2e56':'transparent',border:0,color:active===n.k?'#fff':'#dee2f8',fontFamily:'Lexend',fontSize:14,fontWeight:400,padding:'10px 12px',borderRadius:8,cursor:'pointer',display:'flex',gap:10,alignItems:'center'}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d={n.i}/></svg>
              {n.l}
            </button>
          ))}
        </nav>
        <div style={{borderTop:'1px solid #2a2e56',paddingTop:14,display:'flex',alignItems:'center',gap:10}}>
          <div style={{width:34,height:34,borderRadius:999,background:'linear-gradient(135deg,#f99f25,#f62470)'}}/>
          <div style={{fontSize:13}}>
            <div style={{fontWeight:500}}>K. Skelly</div>
            <div style={{color:'#8792e8',fontSize:11}}>Heritage School</div>
          </div>
        </div>
      </aside>
      <div style={{display:'flex',flexDirection:'column',minWidth:0}}>
        {children}
      </div>
    </div>
  );
}

function TopBar({ title, subtitle }) {
  return (
    <header style={{background:'#fff',borderBottom:'1px solid #e4e8ef',padding:'18px 28px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:24}}>
      <div>
        <div className="overline" style={{marginBottom:2}}>Editor</div>
        <div style={{fontFamily:'Lexend',fontWeight:500,fontSize:20,color:'#1a1d38'}}>{title}</div>
        {subtitle && <div style={{fontSize:13,color:'#64708a',marginTop:2}}>{subtitle}</div>}
      </div>
      <div style={{display:'flex',gap:10,alignItems:'center'}}>
        <div style={{padding:'6px 12px',background:'#eef1fc',color:'#2e3ba4',borderRadius:999,fontSize:12,fontWeight:500}}>Auto-saved · just now</div>
        <button className="btn btn-secondary" style={{padding:'10px 18px',fontSize:14}}>Preview</button>
        <button className="btn btn-primary" style={{padding:'10px 18px',fontSize:14}}>Export</button>
      </div>
    </header>
  );
}
window.AppShell = AppShell;
window.TopBar = TopBar;

```

### `ui_kits/redactor-app/MediaList.jsx`

```jsx
function MediaList({ items, activeId, onSelect }) {
  return (
    <div style={{width:280,background:'#fff',borderRight:'1px solid #e4e8ef',padding:16,overflow:'auto'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:14}}>
        <div className="overline">Project files</div>
        <button style={{border:0,background:'#eef1fc',color:'#4f60dc',padding:'4px 10px',borderRadius:999,fontSize:11,fontWeight:500,cursor:'pointer'}}>+ Upload</button>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:8}}>
        {items.map(it=>{
          const isActive = it.id===activeId;
          const sColor = it.status==='Redacted'?'#1f9d55':it.status==='Processing'?'#f99f25':'#64708a';
          const sBg    = it.status==='Redacted'?'#e7f4ed':it.status==='Processing'?'#fff4e0':'#eff3f7';
          return (
            <button key={it.id} onClick={()=>onSelect?.(it.id)} style={{textAlign:'left',background:isActive?'#eef1fc':'#fff',border:'1px solid '+(isActive?'#4f60dc':'#e4e8ef'),borderRadius:10,padding:10,display:'flex',gap:10,cursor:'pointer',fontFamily:'Lexend'}}>
              <div style={{width:56,height:40,borderRadius:6,background:'#1a1d38',overflow:'hidden',flexShrink:0}}>
                {it.thumb && <img src={it.thumb} style={{width:'100%',height:'100%',objectFit:'cover'}}/>}
              </div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontSize:13,fontWeight:500,color:'#1a1d38',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{it.name}</div>
                <div style={{fontSize:11,color:'#64708a',marginTop:2}}>{it.duration} · {it.size}</div>
                <span style={{display:'inline-block',marginTop:5,fontSize:10,fontWeight:500,color:sColor,background:sBg,padding:'2px 8px',borderRadius:999}}>{it.status}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
window.MediaList = MediaList;

```

### `ui_kits/redactor-app/VideoCanvas.jsx`

```jsx
function VideoCanvas({ src, detections, playing, onTogglePlay, time, duration }) {
  return (
    <div style={{flex:1,padding:20,display:'flex',flexDirection:'column',minWidth:0,minHeight:0}}>
      <div style={{flex:1,background:'#1a1d38',borderRadius:14,position:'relative',overflow:'hidden',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 8px 20px rgba(26,29,56,.10)'}}>
        <img src={src} style={{width:'100%',height:'100%',objectFit:'cover',opacity:.92}}/>
        {/* Detection overlays */}
        {detections.map((d,i)=>(
          <div key={i} style={{position:'absolute',left:d.x+'%',top:d.y+'%',width:d.w+'%',height:d.h+'%',border:'2px solid '+(d.type==='face'?'#f62470':d.type==='plate'?'#f99f25':'#4f60dc'),borderRadius:6,background:'rgba(26,29,56,.55)',backdropFilter:'blur(8px)',pointerEvents:'none'}}>
            <div style={{position:'absolute',top:-20,left:-2,padding:'2px 8px',background:d.type==='face'?'#f62470':d.type==='plate'?'#f99f25':'#4f60dc',color:'#fff',fontSize:10,borderRadius:4,fontWeight:500,fontFamily:'Lexend',textTransform:'uppercase',letterSpacing:'.06em'}}>{d.type} · {d.conf}%</div>
          </div>
        ))}
        <div style={{position:'absolute',top:14,left:14,padding:'6px 12px',background:'rgba(26,29,56,.7)',color:'#fff',borderRadius:999,fontSize:11,fontFamily:'Lexend',fontWeight:500,display:'flex',alignItems:'center',gap:8}}>
          <span style={{width:6,height:6,borderRadius:999,background:'#f62470'}}/> REC · Bodycam 04
        </div>
      </div>
      <div style={{marginTop:14,display:'flex',alignItems:'center',gap:14,padding:'10px 14px',background:'#fff',border:'1px solid #e4e8ef',borderRadius:12}}>
        <button onClick={onTogglePlay} style={{width:40,height:40,borderRadius:999,background:'#4f60dc',color:'#fff',border:0,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}>
          {playing ? <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/></svg>
                   : <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4l14 8-14 8z"/></svg>}
        </button>
        <div style={{fontSize:12,color:'#4b4f73',fontVariantNumeric:'tabular-nums',fontFamily:'Lexend',fontWeight:500}}>{time} / {duration}</div>
        <div style={{flex:1,height:6,background:'#eff3f7',borderRadius:999,position:'relative'}}>
          <div style={{position:'absolute',inset:'0 60% 0 0',background:'linear-gradient(90deg,#4f60dc,#f62470)',borderRadius:999}}/>
          <div style={{position:'absolute',left:'40%',top:-4,width:14,height:14,borderRadius:999,background:'#fff',border:'2px solid #4f60dc',boxShadow:'0 2px 6px rgba(26,29,56,.2)'}}/>
        </div>
        <div style={{fontSize:11,color:'#64708a'}}>1.0×</div>
      </div>
    </div>
  );
}
window.VideoCanvas = VideoCanvas;

```

### `ui_kits/redactor-app/DetectionPanel.jsx`

```jsx
function DetectionPanel({ detections, onToggle }) {
  const colorFor = t => t==='face'?'#f62470':t==='plate'?'#f99f25':t==='audio'?'#4f60dc':'#64708a';
  return (
    <aside style={{width:300,background:'#fff',borderLeft:'1px solid #e4e8ef',padding:18,overflow:'auto',display:'flex',flexDirection:'column',gap:18}}>
      <div>
        <div className="overline" style={{marginBottom:10}}>Auto-detected</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
          {[['Faces',12,'#f62470'],['Plates',4,'#f99f25'],['People',7,'#4f60dc'],['Screens',1,'#1a1d38']].map(([l,n,c])=>(
            <div key={l} style={{padding:10,background:'#f6f8fb',borderRadius:10}}>
              <div style={{fontSize:20,fontWeight:500,color:c,fontFamily:'Lexend'}}>{n}</div>
              <div style={{fontSize:11,color:'#64708a'}}>{l}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:8}}>
          <div className="overline">Detections</div>
          <a href="#" style={{fontSize:11,fontWeight:500}}>Invert selection</a>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:6}}>
          {detections.map((d,i)=>(
            <label key={i} style={{display:'flex',alignItems:'center',gap:10,padding:'8px 10px',border:'1px solid #e4e8ef',borderRadius:8,cursor:'pointer'}}>
              <input type="checkbox" checked={d.on} onChange={()=>onToggle?.(i)} style={{accentColor:'#4f60dc'}}/>
              <span style={{width:8,height:8,borderRadius:999,background:colorFor(d.type)}}/>
              <span style={{fontSize:13,color:'#1a1d38',textTransform:'capitalize',fontFamily:'Lexend'}}>{d.type} #{String(i+1).padStart(2,'0')}</span>
              <span style={{marginLeft:'auto',fontSize:11,color:'#64708a'}}>{d.t}</span>
            </label>
          ))}
        </div>
      </div>
      <div style={{marginTop:'auto',padding:14,background:'#eef1fc',borderRadius:12}}>
        <div style={{fontSize:12,fontWeight:500,color:'#2e3ba4',marginBottom:4}}>CJIS compliance</div>
        <div style={{fontSize:12,color:'#4b4f73',lineHeight:1.5}}>Media never leaves your environment. Chain of custody preserved.</div>
      </div>
    </aside>
  );
}
window.DetectionPanel = DetectionPanel;

```

### `ui_kits/redactor-app/index.html`

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Sighthound Redactor — App UI Kit</title>
<link rel="stylesheet" href="../../colors_and_type.css">
<style>html,body,#root{margin:0;height:100%;background:#f6f8fb;overflow:hidden}</style>
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>
</head>
<body>
<div id="root"></div>
<script type="text/babel" src="AppShell.jsx"></script>
<script type="text/babel" src="MediaList.jsx"></script>
<script type="text/babel" src="VideoCanvas.jsx"></script>
<script type="text/babel" src="DetectionPanel.jsx"></script>
<script type="text/babel" data-presets="env,react">
const { useState } = React;

const FILES = [
  { id:'f1', name:'Bodycam_04_2025-04-18.mp4', duration:'02:14', size:'118 MB', status:'Redacted', thumb:'../../assets/redactor-police.avif' },
  { id:'f2', name:'Interview_Room_3.mp4',       duration:'14:02', size:'512 MB', status:'Processing', thumb:'../../assets/redactor-courtroom-redacted.avif' },
  { id:'f3', name:'Crosswalk_cam_14.mp4',        duration:'00:42', size:'32 MB',  status:'Ready',      thumb:'../../assets/redactor-crosswalk.avif' },
  { id:'f4', name:'Toll_highway_2B.mp4',         duration:'03:28', size:'204 MB', status:'Ready',      thumb:'../../assets/redactor-cars-tolls.avif' },
  { id:'f5', name:'Hospital_lobby_02.mp4',       duration:'08:11', size:'340 MB', status:'Redacted',   thumb:'../../assets/redactor-hospital-redacted.avif' },
];

const DETECTIONS_IMG = {
  f1: '../../assets/redactor-police.avif',
  f2: '../../assets/redactor-courtroom-redacted.avif',
  f3: '../../assets/redactor-crosswalk.avif',
  f4: '../../assets/redactor-cars-tolls.avif',
  f5: '../../assets/redactor-hospital-redacted.avif',
};

function App() {
  const [active, setActive] = useState('f1');
  const [playing, setPlaying] = useState(false);
  const [dets, setDets] = useState([
    { type:'face',  on:true,  t:'00:02' },
    { type:'face',  on:true,  t:'00:05' },
    { type:'plate', on:true,  t:'00:07' },
    { type:'face',  on:false, t:'00:09' },
    { type:'audio', on:true,  t:'00:11' },
    { type:'plate', on:true,  t:'00:14' },
  ]);
  const boxes = [
    { type:'face',  x:20, y:24, w:12, h:18, conf:98 },
    { type:'face',  x:58, y:30, w:10, h:16, conf:94 },
    { type:'plate', x:42, y:64, w:18, h:7,  conf:99 },
  ];
  const file = FILES.find(f=>f.id===active);
  return (
    <div data-screen-label="redactor-editor">
      <AppShell active="editor">
        <TopBar title={file.name} subtitle="Law enforcement · FOIA-ready · 6 detections"/>
        <div style={{flex:1,display:'flex',minHeight:0}}>
          <MediaList items={FILES} activeId={active} onSelect={setActive}/>
          <VideoCanvas
            src={DETECTIONS_IMG[active]}
            detections={boxes}
            playing={playing}
            onTogglePlay={()=>setPlaying(p=>!p)}
            time="00:42" duration="02:14"
          />
          <DetectionPanel detections={dets} onToggle={i=>setDets(d=>d.map((x,j)=>j===i?{...x,on:!x.on}:x))}/>
        </div>
      </AppShell>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
</script>
</body>
</html>

```

---

<a id="asset-manifest"></a>
## 6. Asset manifest

Binary assets (logos, hero imagery, product icons) live in `assets/` and cannot be inlined in markdown. Copy them from the project filesystem.

| File | Purpose |
|---|---|
| `assets/edge-ai-hardware.png` | Edge AI hardware product render |
| `assets/hero-lpr.jpg` | ALPR+ hero imagery |
| `assets/hero-object-tracking.jpg` | Object tracking hero imagery |
| `assets/hero-redaction.png` | Redaction hero imagery |
| `assets/hero-vehicle-detection.jpg` | Vehicle detection hero imagery |
| `assets/redactor-cars-tolls.avif` | Highway toll redaction example |
| `assets/redactor-courtroom-redacted.avif` | Courtroom redaction example |
| `assets/redactor-crosswalk.avif` | Crosswalk redaction example |
| `assets/redactor-hospital-redacted.avif` | Hospital lobby redaction example |
| `assets/redactor-icon-audio.avif` | Redactor feature icon — audio redaction |
| `assets/redactor-icon-bulk.avif` | Redactor feature icon — bulk processing |
| `assets/redactor-icon-custom.avif` | Redactor feature icon — custom detectors |
| `assets/redactor-icon-deploy.avif` | Redactor feature icon — deployment |
| `assets/redactor-icon-language.avif` | Redactor feature icon — language support |
| `assets/redactor-icon-smart.avif` | Redactor feature icon — smart detection |
| `assets/redactor-logo-horizontal.webp` | Redactor sub-brand horizontal wordmark |
| `assets/redactor-police.avif` | Police bodycam — redaction example |
| `assets/redactor-traffic.avif` | Traffic redaction example |
| `assets/sighthound-compute-camera.png` | Compute camera render |
| `assets/sighthound-compute-node.png` | Compute node render |
| `assets/sighthound-logo-horizontal.jpg` | Primary horizontal wordmark (navy on white) |
| `assets/sighthound-logo-white.png` | White horizontal wordmark (for dark backgrounds) |
| `assets/white-tesla-alpr.jpg` | ALPR demonstration photo |
