# CSS Refinements - Code Reference

This document provides a quick reference to all CSS changes implemented in the competitive analysis web app.

---

## 🎯 Quick Navigation

1. [Header & Navigation](#header--navigation)
2. [Typography](#typography)
3. [Tables](#tables)
4. [Badges & Indicators](#badges--indicators)
5. [Cards](#cards)
6. [Forms & Inputs](#forms--inputs)
7. [Boxes & Emphasis](#boxes--emphasis)
8. [Price Tags](#price-tags)

---

## Header & Navigation

### Header Enhancement
```css
header {
    background: white;
    padding: 40px 20px;
    border-radius: 10px;
    margin-bottom: 30px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);  /* Enhanced shadow */
    border-top: 4px solid #667eea;                 /* Brand accent */
}
```

### Navigation Tab Styling
```css
.nav-tab {
    padding: 12px 20px;
    background: none;
    border: none;
    border-bottom: 3px solid transparent;
    cursor: pointer;
    font-size: 1em;
    font-weight: 500;
    color: #666;
    transition: all 0.3s ease;
    border-radius: 4px 4px 0 0;                    /* Rounded top corners */
}

.nav-tab:hover {
    color: #667eea;
    background: rgba(102, 126, 234, 0.05);        /* Subtle hover background */
}

.nav-tab.active {
    color: #667eea;
    border-bottom-color: #667eea;
    font-weight: 600;                              /* Bold when active */
    background: rgba(102, 126, 234, 0.1);        /* Stronger background */
}
```

---

## Typography

### Heading Styling
```css
h2 {
    color: #667eea;
    margin-bottom: 20px;
    font-size: 2em;
    border-bottom: 3px solid #667eea;             /* Changed from gray #f0f0f0 */
    padding-bottom: 10px;
    font-weight: 700;                              /* Bolder */
    letter-spacing: -0.5px;                        /* Tighter spacing */
}

h3 {
    color: #764ba2;
    margin-top: 25px;                              /* Increased spacing */
    margin-bottom: 15px;
    font-size: 1.4em;
    font-weight: 600;                              /* More weight */
}
```

### Section Styling
```css
.section {
    display: none;
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);  /* Enhanced shadow */
    margin-bottom: 30px;
    animation: fadeIn 0.3s ease;                   /* Smooth entrance */
}

.section.active {
    display: block;
}
```

---

## Tables

### Table Header
```css
th {
    background: linear-gradient(135deg, #f8f9fa 0%, #f0f5ff 100%);  /* Gradient */
    padding: 15px;
    text-align: left;
    font-weight: 600;
    border-bottom: 2px solid #667eea;
    color: #667eea;
    position: sticky;
    top: 0;
    text-transform: capitalize;                    /* Capitalize headers */
    letter-spacing: 0.5px;                         /* Spaced letters */
}
```

### Table Rows
```css
td {
    padding: 12px 15px;
    border-bottom: 1px solid #eee;
}

tbody tr:hover {
    background-color: #f8f9fa;
    transition: background-color 0.2s ease;
}

tbody tr:nth-child(even) {
    background-color: #fafbff;                     /* Zebra striping */
}
```

---

## Badges & Indicators

### Check Mark (✓)
```css
.check {
    color: #28a745;
    font-weight: bold;
    font-size: 1.2em;
    display: inline-block;
    padding: 2px 6px;                             /* Pill shape */
    border-radius: 3px;
    background: rgba(40, 167, 69, 0.1);          /* Light green */
}
```

### Cross Mark (✗)
```css
.cross {
    color: #dc3545;
    font-weight: bold;
    font-size: 1.2em;
    display: inline-block;
    padding: 2px 6px;
    border-radius: 3px;
    background: rgba(220, 53, 69, 0.1);          /* Light red */
}
```

### Limited Badge (⚠)
```css
.limited {
    color: #ffc107;
    font-weight: bold;
    display: inline-block;
    padding: 2px 6px;
    border-radius: 3px;
    background: rgba(255, 193, 7, 0.1);          /* Light yellow */
}
```

---

## Cards

### Positioning Cards
```css
.positioning-card {
    background: #f8f9fa;
    border: 2px solid #eee;
    padding: 20px;
    border-radius: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);  /* Subtle shadow */
}

.positioning-card:hover {
    border-color: #667eea;
    background: #f0f5ff;
    box-shadow: 0 6px 12px rgba(102, 126, 234, 0.15);  /* Enhanced */
    transform: translateY(-2px);                        /* Lift effect */
}

.positioning-card h4 {
    color: #667eea;
    margin-bottom: 10px;
    font-size: 1.1em;
    font-weight: 600;
}
```

### Competitor Cards
```css
.competitor-card {
    border: 2px solid #eee;
    border-radius: 8px;
    padding: 25px;
    margin-bottom: 25px;
    transition: all 0.3s ease;
    background: #fafafa;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.competitor-card:hover {
    border-color: #667eea;
    box-shadow: 0 8px 16px rgba(102, 126, 234, 0.15);  /* Dramatic lift */
    transform: translateY(-2px);
}

.competitor-card:hover .competitor-title {
    color: #764ba2;                                     /* Color change */
}
```

---

## Forms & Inputs

### Filter Controls
```css
.filter-group select,
.filter-group input {
    padding: 8px 12px;
    border: 2px solid #ddd;
    border-radius: 5px;
    font-size: 0.95em;
    transition: all 0.3s ease;
    background: white;
    cursor: pointer;
}

.filter-group select:hover,
.filter-group input:hover {
    border-color: #bbb;
}

.filter-group select:focus,
.filter-group input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);   /* Glow effect */
}
```

---

## Boxes & Emphasis

### Strengths Box
```css
.strengths {
    background: #f0f9ff;
    border-left: 4px solid #28a745;
    padding: 15px;
    margin: 15px 0;
    border-radius: 4px;
    box-shadow: inset 0 1px 3px rgba(40, 167, 69, 0.1);  /* Inset depth */
}
```

### Weaknesses Box
```css
.weaknesses {
    background: #fff8f0;
    border-left: 4px solid #dc3545;
    padding: 15px;
    margin: 15px 0;
    border-radius: 4px;
    box-shadow: inset 0 1px 3px rgba(220, 53, 69, 0.1);  /* Inset depth */
}
```

### Comparison Row
```css
.comparison-row {
    margin-bottom: 20px;
    padding: 15px;
    background: #f9f9f9;
    border-left: 4px solid #667eea;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(102, 126, 234, 0.1);
}

.comparison-row:hover {
    background: #f5f7ff;
    box-shadow: 0 2px 6px rgba(102, 126, 234, 0.15);
}
```

---

## Price Tags

### Price Tag Styling
```css
.price-tag {
    display: inline-block;
    background: linear-gradient(135deg, #fff3cd 0%, #ffe680 100%);  /* Gradient */
    color: #856404;
    padding: 6px 12px;
    border-radius: 20px;                           /* Pill shape */
    font-weight: 600;
    font-size: 0.9em;
    margin: 5px 0;
    box-shadow: 0 2px 4px rgba(133, 100, 4, 0.1);  /* Subtle shadow */
}
```

---

## Color Palette Reference

| Element | Color | Usage |
|---------|-------|-------|
| Primary | `#667eea` | Headers, borders, accents |
| Secondary | `#764ba2` | Subheadings, secondary text |
| Success | `#28a745` | Check marks, positive states |
| Danger | `#dc3545` | Cross marks, negative states |
| Warning | `#ffc107` | Limited badges, warnings |
| Background | `#f8f9fa` | Hover states, light backgrounds |
| Border | `#eee` | Card borders, dividers |
| Text | `#333` | Primary text |
| Subtle Text | `#666` | Secondary text |
| Light Text | `#888` | Tertiary text |

---

## Animation Reference

### Fade In Animation
```css
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
```

### Applied to:
- `.section` - `animation: fadeIn 0.3s ease;`

---

## Transition Timing

All interactive elements use consistent timing:
```css
transition: all 0.3s ease;
```

This ensures:
- Smooth color changes
- Smooth border changes
- Smooth shadow changes
- Smooth transform animations

---

## Box Shadow Values

### Subtle (Default)
```css
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
```

### Medium (Hover)
```css
box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
```

### Strong (Active/Emphasis)
```css
box-shadow: 0 8px 16px rgba(102, 126, 234, 0.15);
```

### Inset (Depth)
```css
box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
```

---

## Browser Compatibility

All CSS properties used are compatible with:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance Notes

- All shadows are GPU-accelerated
- Transform animations use hardware acceleration
- Transitions use `ease` timing function for smoothness
- No layout thrashing from rapid repaints
- Optimized for 60fps on modern devices

---

## Responsive Design Considerations

All styling maintains responsive behavior:

```css
@media (max-width: 768px) {
    h1 { font-size: 1.8em; }
    .nav-tabs { flex-direction: column; }
    .positioning-grid { grid-template-columns: 1fr; }
    /* etc. */
}
```

---

**Last Updated:** April 15, 2026  
**Version:** 1.1 - Refined
