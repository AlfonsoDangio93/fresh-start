---
name: hommi-brand
description: "Brand guidelines and design system for Hommi, a SaaS platform for property maintenance management. Use when building or modifying any Hommi UI: pages, components, layouts, copy, or design decisions. Triggers on: website design, landing page, component creation, UI review, copy writing, branding tasks for Hommi."
---

# Hommi Brand & Design System

## Product

Hommi is a SaaS for property managers managing short-term rentals (affitti brevi). Core features:

1. **Ticketing guasti** — Report a fault, track status to resolution with verified technicians
2. **Dashboard & reporting** — Costs, history, response times, per-property analytics

**Claim:** "Gestisci la tua casa, anche da lontano."
**Subline:** "Ci occupiamo di guasti e imprevisti al posto tuo, con tecnici selezionati e aggiornamenti in tempo reale."

**Target:** Property managers (20-100+ properties). NOT individual homeowners.

## Voice & Tone

Direct, confident, no-fluff. Like JetHR.

- Short sentences. Facts over promises.
- "Facciamo" not "promettiamo". Show numbers.
- Italian language, informal "tu" form.
- Never use: emojis in UI, buzzwords, vague claims.

Examples:
- Good: "Ogni guasto risolto. In giornata."
- Good: "2.000+ alloggi gestiti. 97% risolti entro 24h."
- Bad: "La soluzione innovativa e all-avanguardia per il property management"

## Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#F16B01` | CTA buttons, accents, highlights, active states |
| `dark` | `#101103` | Headlines, body text, navbar, footer background |
| `secondary` | `#344966` | Secondary text, descriptions, muted elements |
| `white` | `#FFFFFF` | Backgrounds, cards, contrast text on dark |
| `surface` | `#F7F7F7` | Section backgrounds, alternating rows |
| `border` | `#E5E5E5` | Card borders, dividers, input borders |
| `success` | `#16A34A` | Positive status, resolved tickets |
| `error` | `#DC2626` | Errors, urgent tickets |

Contrast rules:
- `#101103` on `#FFFFFF` = 19.5:1 (AAA)
- `#F16B01` on `#FFFFFF` = 3.5:1 (use only for large text/icons, not small body)
- `#F16B01` on `#101103` = 5.5:1 (AA)
- Always pair `primary` orange with `dark` or `white` backgrounds

## Typography

| Role | Font | Weight | Size |
|------|------|--------|------|
| Headings | **Poppins** | 600-700 | 32-60px |
| Body | **Open Sans** | 400-500 | 15-18px |
| Small/Labels | **Open Sans** | 500-600 | 12-14px |
| Code/Data | **JetBrains Mono** | 400 | 14px |

Tailwind config:
```
font-display: Poppins
font-sans: Open Sans
```

## Layout (JetHR-style)

### Page structure
```
1. Navbar (fixed, glass/solid, floating with top-4 spacing)
2. Hero (product screenshot + claim + CTA)
3. Social proof (client logos or press mentions)
4. Stats bar (key metrics with count-up)
5. How it works (3 steps)
6. Features/Services (grid)
7. Testimonials (3 cards with quotes)
8. CTA section (gradient banner)
9. Footer (dark, multi-column links)
```

### Key design rules
- **Navbar**: Fixed, floating (`top-4 left-4 right-4`), glass or solid white, rounded-full
- **Hero**: Product screenshot/mockup as hero image (not abstract icons). Claim left, screenshot right on desktop
- **Cards**: `bg-white` with `border border-[#E5E5E5]`, `rounded-2xl`, `hover:shadow-lg`, `transition-all duration-200`
- **Buttons primary**: `bg-[#F16B01] hover:bg-[#D95E01] text-white rounded-full px-8 py-3.5 font-semibold`
- **Buttons secondary**: `bg-[#101103] hover:bg-[#2A2A2D] text-white rounded-full`
- **Max-width**: `max-w-[1200px]` for content sections
- **Section padding**: `py-20 md:py-28`
- **Spacing between sections**: Consistent, generous whitespace

### Component patterns
- **Step number**: Large faded number (01, 02, 03) as background decoration
- **Icon containers**: 48x48 or 56x56, `rounded-xl`, gradient background, white icon
- **Social proof**: Greyed-out logos/names in a horizontal bar
- **Stats**: Large number + suffix in `primary` color + label below

## Accessibility

- Focus rings: `focus:outline-none focus:ring-2 focus:ring-[#F16B01]/50 focus:ring-offset-2`
- All SVG icons: `aria-hidden="true"`
- Icon-only buttons: `aria-label="..."`
- `prefers-reduced-motion`: Disable all animations
- Minimum touch targets: 44x44px
- `cursor-pointer` on all interactive elements

## Anti-patterns (Never do)

- Emojis as icons — use SVG (Lucide)
- Glassmorphism as primary style — use solid whites/darks
- Purple/teal as brand color — Hommi is orange + dark
- Abstract floating icons in hero — use product screenshots
- Generic HR/corporate copy — Hommi is property maintenance
- "Innovativo", "all'avanguardia", "rivoluzionario" — be direct
- `z-index: 9999` — use scale (10, 20, 30, 50)
- Animations > 300ms for UI interactions
