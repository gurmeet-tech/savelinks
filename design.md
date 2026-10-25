---
version: alpha
name: Vibrant Design
description: A bright, editorial discovery system with crisp neutrals, a saturated blue accent, and lightweight cards.
colors:
  primary: "#3F80FF"
  secondary: "#202020"
  tertiary: "#E5E7EB"
  neutral: "#F7F7F8"
  surface: "#FFFFFF"
  on-surface: "#202020"
  error: "#EF4444"
  border: "#E5E7EB"
  muted: "#6B7280"
  primary-contrast: "#FFFFFF"
typography:
  headline-display:
    fontFamily: "Inter Variable"
    fontSize: "22px"
    fontWeight: 500
    lineHeight: 25.3px
    letterSpacing: "-0.33px"
  headline-lg:
    fontFamily: "Inter Variable"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: "0px"
  headline-md:
    fontFamily: "Inter Variable"
    fontSize: "19px"
    fontWeight: 500
    lineHeight: 23px
    letterSpacing: "0px"
  headline-sm:
    fontFamily: "Inter Variable"
    fontSize: "17px"
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: "0px"
  body-lg:
    fontFamily: "Inter Variable"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: "0px"
  body-md:
    fontFamily: "Inter Variable"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: "0px"
  body-sm:
    fontFamily: "Inter Variable"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: "0px"
  label-lg:
    fontFamily: "Inter Variable"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: "0px"
  label-md:
    fontFamily: "Inter Variable"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 18px
    letterSpacing: "0px"
  label-sm:
    fontFamily: "Inter Variable"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: "0px"
  caption:
    fontFamily: "Inter Variable"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 14px
    letterSpacing: "0px"
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 10px
  xl: 12px
  full: 9999px
spacing:
  xs: 2px
  sm: 6px
  md: 14px
  lg: 24px
  xl: 64px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-contrast}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.lg}"
    padding: "0px 14px"
    height: "32px"
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-contrast}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.lg}"
    padding: "0px 14px"
    height: "32px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.lg}"
    padding: "0px 14px"
    height: "32px"
  button-tertiary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    padding: "0px 12px"
    height: "28px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "16px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "0px 14px"
    height: "32px"
  chip:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.muted}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "0px 12px"
    height: "32px"
---

# Vibrant Design

## Overview
Vibrant Design feels like a curated inspiration marketplace: modern, editorial, and highly visual, with a friendly product tone rather than a corporate one. The interface is spacious and airy, but the dense masonry grid keeps the page feeling full of discovery and momentum. The emotional balance is optimistic and energetic, anchored by a vivid blue accent and clean grayscale surfaces.

## Colors
- **Primary (#3F80FF):** A saturated electric blue used for the main CTA, active states, and selected navigation pills. It carries the brand energy and provides the strongest interactive signal.
- **Secondary / On-surface (#202020):** A deep charcoal used for headlines, body copy, icons, and controls. It gives the layout strong contrast without feeling harsh black.
- **Neutral (#F7F7F8):** A soft off-white background tone that supports the gallery-like presentation and keeps cards and chrome feeling light.
- **Surface (#FFFFFF):** Pure white appears in panels, cards, and button surfaces to create crisp separation from the pale page background.
- **Tertiary / Border (#E5E7EB):** A light gray used for dividers, card outlines, and subtle structural separation. It keeps the system calm and understated.
- **Muted (#6B7280):** A softer gray for secondary text, meta labels, and less important navigation items.
- **Error (#EF4444):** A clear alert red reserved for negative states, validation, or destructive emphasis when needed.
- **Primary contrast (#FFFFFF):** White text and icons on the blue primary fill for maximum legibility.

## Typography
The system is built on Inter Variable, which suits the product’s clean, contemporary, and utility-first feel. Headings use medium weight rather than heavy bold, so the UI stays approachable and editorial instead of loud.

- `headline-display`, `headline-lg`, `headline-md`, and `headline-sm` cover the visible hierarchy from large section titles to smaller card headlines. The sizes are tight and compact, matching the screenshot’s information-dense curation pattern.
- `body-lg` is the main reading style for descriptions and longer supporting copy. It uses 16px with a comfortable 24px line height for clarity.
- `body-md` and `body-sm` support labels, helper text, metadata, and compact UI content.
- `label-lg`, `label-md`, and `label-sm` are used for buttons, pills, and navigation items. They use 500 weight to feel crisp without becoming visually heavy.
- `caption` is reserved for tiny metadata and timestamps.
- Letter spacing is generally neutral; the interface does not rely on uppercase or exaggerated tracking, which keeps it modern and content-first.

## Layout
The layout is a spacious, fixed-width editorial canvas with a strong top navigation and a masonry-style content grid beneath it. Content is organized into rounded cards with consistent gutters, allowing many image-heavy tiles to coexist without visual chaos.

Spacing feels rhythmically simple: small controls use the `xs` and `sm` scale, while cards and sections lean on `md` and `lg`. The overall page breathes through large outer margins and a generous `xl` separation between major zones, but internal card padding remains modest so the content density stays high.

Navigation pills, buttons, and utility controls are compact, generally around a 32px control height. This keeps the header lightweight and ensures the images remain the primary focus.

## Elevation & Depth
The system is mostly flat, relying on contrast, borders, and white surfaces rather than dramatic shadow stacks. Cards use subtle 1px borders and light tonal separation to define boundaries while preserving the gallery’s clean, magazine-like feel.

Depth is introduced selectively through soft shadows on buttons and a few polished control states. The strongest elevation belongs to the primary CTA, which uses a layered blue shadow treatment to make it feel pressable and prominent.

## Shapes
The shape language is soft and modern, with rounded corners used consistently across controls and cards. `rounded.md` and `rounded.lg` create a friendly, approachable feel without drifting into overly playful UI.

Pills and chips use `rounded.full` for a compact, high-clarity discovery pattern. Larger content cards stay gently rounded rather than pill-like, which helps the masonry grid feel structured.

## Components
Buttons are compact and polished:
- `button-primary` is the main action style. Use the blue fill, white text, 14px copy, 32px height, and 14px horizontal padding. It should feel clearly interactive and slightly elevated.
- `button-secondary` is a quiet alternative for supporting actions. It uses transparent fill, dark text, and the same compact sizing as primary actions.
- `button-tertiary` is appropriate for low-emphasis controls, segmented actions, and lightweight prompts.
- Hover states should stay subtle; the system favors continuity over dramatic color shifts.

Cards use `card` styling with white or near-white backgrounds, 1px borders, `rounded.md`, and 16px padding. They should frame imagery first and supporting text second.

Inputs should match the button rhythm: compact, clean, and minimally bordered. Use `rounded.lg`, white backgrounds, and restrained spacing so forms feel aligned with the header controls.

Chips and pills are an important navigation pattern in this interface. They should remain short, horizontal, and softly rounded, with selected states using the primary blue and unselected states staying neutral.

Lists, tabs, and utility links should avoid heavy separators. Prefer spacing, tone, and active-state color to indicate structure.

## Do's and Don'ts
- Do keep the interface airy at the page level, even when the content grid is dense.
- Do use Inter Variable consistently for all UI text to preserve the product’s clean editorial voice.
- Do reserve the primary blue for selected states and core actions so it retains impact.
- Do keep cards light, bordered, and only lightly shadowed.
- Don't introduce heavy gradients, dark themes, or dramatic depth effects that conflict with the current flat aesthetic.
- Don't use oversized type or bold, shouty headings; the brand should feel refined, not loud.
- Don't over-round content containers beyond the established 8px–10px family.
- Don't clutter the header with extra chrome; compact controls and clear hierarchy are part of the identity.