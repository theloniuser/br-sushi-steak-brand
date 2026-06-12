# Application Shell Specification

## Overview
The BR Sushi & Steak Brand Guidelines site uses a fixed top navigation with a black header. The shell emphasizes the premium, dark brand aesthetic while providing clear access to all five sections.

## Navigation Structure
- **Brand Foundation** → `/sections/brand-foundation`
- **Visual Assets** → `/sections/visual-assets`
- **Architectural & Spatial Design** → `/sections/architectural-and-spatial-design`
- **Menus** → `/sections/menus`
- **Signage** → `/sections/signage`

## Header
- **Background:** Black (`#000000`)
- **Height:** 144px (h-36), logo at 128px (h-32)
- **Logo:** `BR-Sushi-Steak_Primary-White.svg` (white variant for dark background)
- **Logo position:** Left
- **Nav position:** Right
- **Bottom border:** `border-white/10` (subtle white at 10% opacity)

## Navigation Style
- **Inactive:** `text-white/60` — muted white text, uppercase, tracked
- **Hover:** `text-white` — full white
- **Active:** `text-[#AD936D]` — brand gold
- **Font:** Boston SemiBold, small, tracked, uppercase
- **No button backgrounds** — text-only link treatment

## Layout Pattern
Fixed top navigation, scrollable content area below. Content area background: stone-50.

## Responsive Behavior
- **Desktop (md+):** Full horizontal nav links
- **Mobile:** Hamburger icon (white), slide-down mobile menu with black background, same text treatment

## Design Notes
- Black header reinforces the dark, premium brand character
- Gold active state creates a clear but restrained highlight
- No authentication UI — this is a public-facing brand reference site
- Default section: Brand Foundation
