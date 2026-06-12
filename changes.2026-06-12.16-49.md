# Session: 2026-06-12 4:49 PM — BR Sushi & Steak Brand Site Setup

**Session**: June 12, 2026 ~4:49 PM EDT
**Duration**: ~2 hours
**Focus**: Initial brand asset setup, data population, shell build

---

## Summary

Set up the complete asset folder scaffold, populated all data.json files with real brand data from the Figma export, copied current menu PDFs from Google Drive, built the brand-styled application shell, and fixed several component errors in the blank template.

---

## Changes Made

### Asset Folder Scaffold

Created `public/assets/` folder structure matching sibling projects (br-sushibar-brand, brfc-brand):
- `logos/` — 8 logo variants (Primary + Secondary × Black, GoldGray, GoldWhite, White)
- `fonts/` — stub, no files yet (Boston OTF files needed)
- `visual-assets/Icons/` — Symbol1–Symbol6
- `visual-assets/misc-graphics/` — Mountain, Mountain-BK, Mountain-Logo-Black, Waves, Kanji-Story, Business Cards
- `visual-assets/backgrounds/`, `visual-assets/photography/` — empty, ready
- `menus-signage/menus/` — 4 PDFs copied in
- `menus-signage/signage/environmental/`, `menus-signage/signage/promotional/` — empty, ready
- `brand-foundation-design/logos/`, `brand-foundation-design/fonts/` — empty

### Brand Colors (from Figma Swatches)

Three brand colors confirmed from `/public/assets/visual-assets/Swatches/`:
- `#000000` — Black (primary dominant)
- `#AD936D` — Gold (logo color variant, accents)
- `#BD2846` — Crimson (high-impact accent, use sparingly)
- `#FFFFFF` — White (added for reversed lockup context)

### Data Files Populated

**`product/sections/brand-foundation/data.json`**
- 4 colors with hex/RGB/CMYK (Pantone stubbed as TBD)
- 8 typography styles: Lapture Display Bold (Display/Page/Section headings), Boston Regular/SemiBold/Bold (body)
- 8 logo assets: Primary and Secondary × GoldGray, Black, White, GoldWhite
- 4 font entries: Lapture Display (Adobe Fonts source), Boston Regular/SemiBold/Bold (OTF stubs)
- 5 brand guidelines

**`product/sections/visual-assets/data.json`**
- Renamed `textures` → `graphics` (no textures in this brand)
- 2 decorative elements: Crescent, Frame
- 6 icons: Symbol1–Symbol6
- 8 graphics: Mountain, Mountain-BK, Mountain-Logo-Black, Waves, Kanji-Story, Business Card front/back/JonathanS-back

**`product/sections/menus/data.json`**
- 3 sections: Dinner & Lunch, Beverage & Specialty, Catering & Group Dining
- 4 menus: Dinner (5.27.26), Lunch (5.6.26), Beverage (6.5.26), Catering (1.13.26)

**`product/sections/signage/data.json`**
- Emptied to `{ "signageStandards": [], "wayfinding": [], "promotional": [] }` — no files yet

### Menu PDFs Copied

**Source**: Google Drive `/Shared drives/Sushi & Steak/BR Sushi & Steak Menus/`

**Destination**: `public/assets/menus-signage/menus/`
- `SushiSteak-DinnerMenu-5.27.26.pdf`
- `SushiSteak-LunchMenu-5.6.26.pdf`
- `SushiSteak-BeverageList-6.5.26.pdf`
- `SushiSteak-CateringMenu-1.13.26.pdf`

### Font Setup

**`src/index.css`**
- Removed BRFC placeholder font-face declarations (Epidemia, Alfons Display, Hops & Barley, Noyh A Cafe)
- Added Boston @font-face stubs (Regular/SemiBold/Bold) — will load once OTF files are in `public/assets/fonts/`
- `--font-display`: DM Sans (matches sibling projects; Lapture Display applied explicitly in components)
- `--font-body` / `--font-sans`: Boston
- `--brand-action`: `oklch(0.637 0.074 68.4)` — brand gold (#AD936D)
- h1–h6 base rule: `font-bold tracking-tight uppercase` (Lapture Display is always all-caps)

**`index.html`**
- Added Adobe Fonts embed: `https://use.typekit.net/mdk0vkx.css`
- Added Google Fonts DM Sans import
- Updated page title to "BR Sushi & Steak Brand Guidelines"

**Font name for CSS**: `"jaf-lapture-display"` (Adobe Fonts internal name)

### Design System Tokens

**`product/design-system/colors.json`** — updated with brand colors object
**`product/design-system/typography.json`** — `heading: "Lapture Display"`, `body: "Boston"`

### Application Shell

**`src/shell/components/AppShell.tsx`** — cleaned up, correct brand alt text

**`src/shell/components/MainNav.tsx`** — full brand styling:
- Black header (`bg-black`), `border-white/10` bottom
- Logo: `BR-Sushi-Steak_Primary-White.svg`
- Nav links: text-only (no button backgrounds), uppercase, tracked
- Inactive: `text-white/60` → hover: `text-white` → active: `text-[#AD936D]` (gold)
- Mobile: hamburger on black drawer, same text treatment

**`src/components/ScreenDesignPage.tsx`** — fixed hardcoded logo path:
- Before: `/assets/logos/brand-primary-logo-black.svg`
- After: `/assets/logos/BR-Sushi-Steak_Primary-White.svg`

**`product/shell/spec.md`** — updated with actual design decisions (was blank template)

### Visual Assets Component Fix

**Files**: `src/sections/visual-assets/components/VisualAssets.tsx`, `src/sections/visual-assets/VisualAssets.tsx`, `product/sections/visual-assets/types.ts`

**Problem**: Component expected `textures` prop; our data has `graphics`.

**Fix**:
- Rewrote `types.ts` with simplified types matching actual data shape
- Renamed `Texture` → `GraphicAsset`, updated `VisualAssetsProps.textures` → `graphics`
- Updated component JSX: "Textures" section → "Graphics" section
- Updated preview entry to pass `data.graphics`

### Color Swatch UI Fixes

**`src/sections/brand-foundation/components/BrandFoundation.tsx:71`**
- Removed `bg-gradient-to-br from-transparent via-transparent to-black/10` overlay from all color swatches
- Added `border-b border-zinc-200` on white swatch only (to distinguish from white card background)

---

## Decisions Made

1. **Font display variable**: Use DM Sans for `--font-display` (matches brfc-brand and br-sushibar-brand). Lapture Display loaded via Adobe Fonts embed and applied explicitly in section components. Considered making it global but matched sibling convention.

2. **Lapture Display casing**: Always uppercase — enforced in CSS `h1–h6` base rule with `uppercase` class. All typography examples updated to all-caps.

3. **Adobe Fonts handling**: Lapture Display is an Adobe CC font (`jaf-lapture-display`). Cannot be self-hosted. Font entry in `brand-foundation/data.json` has `source: "adobe-fonts"`, `fontPageUrl`, `licenseNote`, and null `downloadUrl`. UI should render "View on Adobe Fonts →" instead of download button.

4. **Visual assets structure**: Renamed `textures` → `graphics` throughout. This brand has cultural motifs, illustrations, and collateral mockups — not textures.

5. **Signage section**: Left empty. No signage files available yet.

---

## Running State

- Dev server: http://localhost:3458/ (Vite, running in background)
- No open worktrees or branches

---

## Next Steps

- [ ] Add Boston font OTF files to `public/assets/fonts/` — download from foundry
- [ ] Add `fontPageUrl` UI treatment in BrandFoundation typography section (Adobe Fonts link instead of download button)
- [ ] Design Brand Foundation section screen (`/design-os:design-screen`)
- [ ] Design Visual Assets section screen
- [ ] Design Menus section screen
- [ ] Signage section — add files when available
- [ ] Architectural & Spatial Design section — add files when available
- [ ] ADA audit before launch

---

## Notes

- Brand Google Drive: `/Shared drives/Sushi & Steak/`
- Adobe Fonts web project embed: `https://use.typekit.net/mdk0vkx.css`
- Pantone/CMYK values for Gold and Crimson are TBD — user to provide
- No photography in `visual-assets/photography/` yet
- Business card files in `misc-graphics/` include a staff-specific card (JonathanS) — do not use as generic template
