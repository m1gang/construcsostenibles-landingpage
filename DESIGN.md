# Design System — Construcciones Sostenibles

<!-- impeccable:design-schema 1 -->

## Palette

| Token | Value | Use |
|---|---|---|
| `--paper` | `#f5f2ea` | Page ground (papel claro cálido) |
| `--sheet` | `#fbf9f3` | Panel/card background |
| `--ink` | `#20251f` | Primary text, borders |
| `--ink-2` | `#4d554b` | Secondary text |
| `--ink-3` | `#6f7769` | Tertiary text, labels mono |
| `--line` | `#c9c2b0` | Primary borders, rules |
| `--line-soft` | `#ddd6c5` | Light dividers |
| `--green` | `#1e8a4c` | Primary accent (CTAs, active states) |
| `--green-deep` | `#146639` | Hover accent |
| `--green-wash` | `rgba(30,138,76,0.09)` | Hover background wash |
| `--grid` | `rgba(32,37,31,0.055)` | Fine grid lines (measurement surface) |
| `--grid-strong` | `rgba(32,37,31,0.11)` | Major grid lines |

**Strategy:** Restrained — neutral paper ground + graphite ink, one saturated green accent (from logo) reserved for action and active states. Background grid IS the measurement surface, not decoration.

## Typography

- **Display:** Archivo, `font-stretch: 112–125%`, weight 500–900, letter-spacing -0.035em
- **Body:** Archivo 400–600, `font-stretch: normal`, line-height 1.55
- **Mono/Labels:** JetBrains Mono 400–700, used for: cajetín labels, coordinate readouts, service codes, CTA buttons, station IDs

**Scale:** display clamp(2.6rem, 7vw, 5.2rem), body clamp(1rem, 1.6vw, 1.2rem), tag 0.6875rem

## Component Character

- **Cards/panels:** flat 1px border `var(--line)`, no radius, no shadow at rest; green border + soft shadow on hover
- **Section headers:** `.rule-label` — filete line with mono tag centered, like an axis of cut on a drawing
- **Service index:** 2-column grid of category groups, each a register table with code rows (code | name | description)
- **Team stamps:** cajetín boxes with avatar initials, role, colegiatura, and SVG signature line
- **CTAs:** solid green fill (primary) or transparent with 1px ink border (secondary), mono uppercase, no radius
- **Proyectos plates:** framed SVG elevation drawings with hatching background, clear "fotografía por incorporar" labels

## Motion

- **Scroll reveal:** IntersectionObserver fade+lift (18px) with `--ease-out-expo` 600ms, one per section
- **Hero coordinates:** mousemove updates E/N readout in real-time
- **Hover states:** border-color 200ms + subtle translateY, no scattered effects

## Imagery

- **No raster imagery shipped.** All visual content is code-drawn SVG (survey plate, elevation sketches, signatures)
- Logo: `/logo.png` from client (PNG, not vectorized)
- Sections awaiting real photography clearly labeled as placeholders

## Layout

- Max width: 76rem (1216px), centered
- Padding: `clamp(1rem, 4vw, 2.5rem)`
- Grid: 2-column for servicios, proyectos, contact; 4-column for team; 3-column for proceso
- Responsive: single-column below 48rem

## Browser Surfaces

- `::selection`: green background, sheet text
- `:focus-visible`: 2px dashed green-deep, 3px offset
- Scrollbar: custom webkit, green thumb on hover
- Scroll behavior: smooth

## What this world refuses

- Same-size icon+heading+text cards as page structure
- Hero-metric template (big number + supporting stats)
- Kickers/eyebrows above headings
- Gradient text, glass/blur decoration
- Emoji or Unicode glyphs as icons
- Monospace as costume (mono is functional: coordinates, codes, labels)
- Shadows without blur
- Sparklines, progress rings standing in for content
