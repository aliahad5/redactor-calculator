# AGENTS.md – Sighthound Design System Integration

## Overview

This document outlines the integration of the **Sighthound Design System v04.22.2026** into the redactor-calculator project. This is a starter setup aligned with **SH branding guidelines**.

## Design System Location

The design system has been extracted to:

```
redactor-calculator/
├── design-system/
│   ├── assets/              # Design system assets (icons, graphics, etc.)
│   ├── fonts/               # Custom fonts and typography assets
│   ├── preview/             # Preview files and reference materials
│   ├── ui_kits/             # UI component kits and templates
│   ├── uploads/             # Uploaded resources and supporting files
│   ├── colors_and_type.css  # Color palette and typography definitions
│   ├── README.md            # Design system documentation
│   ├── Sighthound Design System.md  # Comprehensive design guidelines
│   ├── Sighthound Redactor App.html # Reference implementation
│   └── SKILL.md             # Warp skill documentation (if applicable)
```

## Integration Points

### 1. CSS & Styling

The design system's CSS assets are available in `design-system/colors_and_type.css`. To integrate:

- Import the design system CSS in `app/globals.css`:
  ```css
  @import '../design-system/colors_and_type.css';
  ```
- Reference design tokens (colors, typography) when styling components

### 2. Assets & Resources

All design assets are located in `design-system/assets/` and `design-system/fonts/`:

- Use assets in components via relative imports
- Font files are available for custom font declarations
- Graphics and icons follow SH branding specifications

### 3. Component References

The `design-system/ui_kits/` directory contains reusable component templates and patterns aligned with SH brand guidelines.

### 4. Documentation

Refer to `design-system/Sighthound Design System.md` for:
- Color palette specifications
- Typography guidelines
- Component patterns
- Branding standards
- Design principles

## Configuration

### Current Setup

- **Framework:** Next.js 14 (App Router)
- **Design System Version:** 04.22.2026
- **Status:** Extracted and ready for integration

### Required Configuration

No additional configuration is required for the design system to be recognized. The folder structure maintains integrity, and all references use relative paths from the project root.

## Development Workflow

### Adding SH Branded Components

1. Reference the design system documentation: `design-system/Sighthound Design System.md`
2. Use color and typography tokens from `design-system/colors_and_type.css`
3. Implement components following patterns in `design-system/ui_kits/`
4. Test against the preview: `design-system/preview/`

### Using Design Assets

- Store new design assets in `design-system/assets/`
- Reference fonts from `design-system/fonts/`
- Maintain asset organization following existing structure

## Verification Checklist

- [x] Design system folder extracted to `design-system/`
- [x] Folder structure intact with all subdirectories
- [x] CSS files accessible at `design-system/colors_and_type.css`
- [x] Documentation available in `design-system/*.md`
- [x] UI kits accessible in `design-system/ui_kits/`
- [x] Assets and fonts in place

## Next Steps

### Immediate Tasks

1. **Review Design System Docs**
   - Read `design-system/Sighthound Design System.md` for brand guidelines
   - Review `design-system/colors_and_type.css` for available tokens

2. **Integrate Design Tokens**
   - Import design system CSS in `app/globals.css`
   - Create CSS custom properties (variables) for colors and typography
   - Update component styles to use design tokens

3. **Component Implementation**
   - Build SH-branded components using design system specifications
   - Reference `design-system/ui_kits/` for component patterns
   - Ensure consistency with design guidelines

4. **Testing & Validation**
   - Run development server: `npm run dev`
   - Verify design tokens are applied correctly
   - Compare rendered output against `design-system/preview/`

### Future Work

- **Dedicated Repository:** A dedicated design system repository will be created for better maintainability
- **Component Library:** Build a reusable component library based on the design system
- **Brand Refinements:** Further refinements to align with evolving SH brand standards

## Project Status

- **Setup Phase:** Complete ✓
- **Integration Phase:** Ready to begin
- **Production Phase:** Pending component implementation

## Support

For design system inquiries:
- Refer to: `design-system/Sighthound Design System.md`
- Review templates: `design-system/ui_kits/`
- Check examples: `design-system/Sighthound Redactor App.html`

---

**Last Updated:** 2026-04-23  
**Design System Version:** 04.22.2026  
**Status:** Integrated and Ready for Development
