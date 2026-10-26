---
version: alpha
name: Vibrant Design
description: A clean inspiration gallery system with crisp neutrals, vivid blue accents, and playful content-first cards.
colors:
  primary: "#3F80FF"
  secondary: "#202020"
  tertiary: "#E5E7EB"
  neutral: "#F7F7F8"
  surface: "#FFFFFF"
  on-surface: "#202020"
  error: "#EF4444"
  primary-60: "#6A9AFF"
  primary-70: "#4F87FF"
  primary-80: "#2F67E6"
  border: "#E5E7EB"
  muted: "#6B7280"
typography:
  headline-display:
    fontFamily: "Inter Variable"
    fontSize: "32px"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline-lg:
    fontFamily: "Inter Variable"
    fontSize: "22px"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  headline-md:
    fontFamily: "Inter Variable"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0em"
  headline-sm:
    fontFamily: "Inter Variable"
    fontSize: "19px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0em"
  body-lg:
    fontFamily: "Inter Variable"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  body-md:
    fontFamily: "Inter Variable"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  body-sm:
    fontFamily: "Inter Variable"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0em"
  label-lg:
    fontFamily: "Inter Variable"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0em"
  label-md:
    fontFamily: "Inter Variable"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0em"
  label-sm:
    fontFamily: "Inter Variable"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0em"
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
  gutter: 16px
  section: 32px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    padding: "0px 14px"
    height: "32px"
  button-primary-hover:
    backgroundColor: "{colors.primary-70}"
    textColor: "{colors.surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    padding: "0px 14px"
    height: "32px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    padding: "0px 14px"
    height: "32px"
  button-tertiary:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "0px"
    height: "auto"
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "16px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "10px 12px"
    height: "32px"
  chip:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.muted}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "6px 10px"
---
# Vibrant Design

## Overview
Vibrant Design feels like a curated inspiration marketplace: energetic, visual, and lightly editorial, but still very functional. The interface is built for browsing large amounts of content quickly, so it stays bright, airy, and highly scannable rather than dense or corporate. The emotional tone is playful and contemporary, with a strong emphasis on showcasing imagery and letting the content do most of the visual work.

## Colors
- **Primary (#3F80FF):** A saturated electric blue used for the main call to action, active states, and the strongest interactive emphasis.
- **Secondary (#202020):** The core ink tone for headlines, navigation, and body text. It provides the high contrast needed for a clean gallery-style layout.
- **Neutral (#F7F7F8):** A soft off-white background that keeps the UI light and allows cards and thumbnails to breathe.
- **Surface (#FFFFFF):** Pure white surfaces used for elevated controls, buttons, and content containers that need to stand apart from the page background.
- **Tertiary (#E5E7EB):** A quiet border and divider tone that supports structure without creating heavy visual noise.
- **On-surface (#202020):** The default readable text color on light surfaces.
- **Muted (#6B7280):** A subdued gray for secondary metadata, helper text, and lower-priority labels.
- **Error (#EF4444):** A clear alert color reserved for destructive actions and validation states.
- **Primary scale (#6A9AFF, #4F87FF, #2F67E6):** Slightly lighter and darker blue steps for hover, pressed, and depth variations.

## Typography
Inter Variable is the sole type family, giving the system a modern, neutral, product-led voice. Headline levels use medium weight 500, with the largest styles reserved for page titles and card leads; the visual hierarchy comes from size and line-height more than heavy weight changes. Body text stays at 400 for readability, while labels and controls use 500 to feel crisp and tappable.

The typography is compact and efficient: headings are slightly tightened with negative tracking at the top level, while most other sizes remain neutral with no visible letterspacing tricks. Uppercase styling is not a defining pattern here; the system reads as sentence-case, straightforward, and easy to scan.

## Layout
The layout is wide, fluid, and grid-based, optimized for a dense masonry-like gallery of large preview cards. Content sits inside a spacious shell with generous horizontal breathing room and clear separation between navigation, filters, and the main feed. Spacing follows a restrained rhythm using 2px, 6px, 14px, 24px, and 64px steps, which keeps the page airy while still aligning controls tightly.

Cards and interactive surfaces use consistent internal padding of 16px or nearby values, while buttons keep compact horizontal padding for a lightweight toolbar feel. Section spacing is intentionally broad so the page can accommodate many thumbnails without feeling cramped.

## Elevation & Depth
Depth is subtle and mostly achieved through white-on-off-white contrast, thin borders, and content layering rather than dramatic shadows. The overall system is fairly flat, with light card borders and minimal elevation used to separate controls from the background. Primary buttons are the main exception: they use a stronger shadow treatment to signal action and interactivity.

This restrained approach lets imagery remain the focal point. Instead of stacking UI chrome, the design relies on tonal separation and clean spacing to organize information.

## Shapes
The shape language is friendly and softly rounded without feeling bubbly. Small controls lean on 8px–10px radii, which gives pills, buttons, and cards a polished but approachable character. Full pills are used for filter chips and navigation tabs, reinforcing the lightweight browsing experience.

Overall, the system reads as rounded but not whimsical: smooth edges, compact proportions, and no sharp geometry.

## Components
Buttons are compact and text-forward. Primary buttons (`button-primary`) use the blue fill, white text, 32px height, and 14px horizontal padding to create a confident call to action. Secondary buttons (`button-secondary`) stay light with a white surface and dark text, keeping them visually quieter than primary actions. Tertiary buttons (`button-tertiary`) are transparent and should be used for subtle inline actions or low-emphasis navigation. Hover states should deepen the primary blue slightly using `button-primary-hover` rather than changing shape or size.

Cards (`card`) are foundational building blocks: soft neutral background, thin border, 8px radius, and comfortable padding. They should frame imagery and small content blocks without introducing heavy shadows. Keep card interiors simple and content-first; the gallery thumbnails should remain the visual hero.

Inputs should match the button language: 32px tall, softly rounded, and visually calm with a white surface and clear text color. Focus states should use the primary blue accent, but avoid overly ornamental outlines or gradients. Chips should be pill-shaped, small, and subdued, using the muted tone for low-priority tags and filters; active chips can borrow the primary color to show selection.

Navigation pills and category filters should behave like chips: compact, rounded, and easy to scan. Any list rows, toolbars, or metadata blocks should stay minimal and rely on typography contrast rather than decorative separators.

## Do's and Don'ts
- Do keep the UI bright, airy, and image-led.
- Do use the primary blue sparingly for the strongest actions and active states.
- Do keep buttons compact and consistent in height and radius.
- Do use thin borders and tonal contrast before adding shadow.
- Don't introduce dark, heavy, or highly dramatic surfaces.
- Don't over-round containers beyond the established pill and 8px–10px language.
- Don't increase type weight aggressively; rely on size and spacing for hierarchy.
- Don't clutter cards with extra chrome when the imagery already carries the composition.


