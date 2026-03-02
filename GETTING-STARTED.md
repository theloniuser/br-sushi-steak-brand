# Brand Guidelines Template — Getting Started

This is a blank brand guidelines site built with design-os. To customize it for a new brand:

## 1. Add Brand Content

### Logos
Drop logo files into `public/assets/logos/` and update:
`product/sections/brand-foundation/data.json` → `logoAssets`

### Fonts
Drop font files into `public/assets/fonts/` and update:
`product/sections/brand-foundation/data.json` → `fontFiles` and `typographyStyles`

### Colors
Edit `product/sections/brand-foundation/data.json` → `colors`

### Photos / Exteriors / Interiors
Drop images into `public/assets/architectural-spatial-design/` and update:
`product/sections/architectural-and-spatial-design/data.json`

### Menus & Signage
Drop files into `public/assets/menus-signage/` and update:
`product/sections/menus/data.json` and `product/sections/signage/data.json`

### Visual Assets
Drop files into `public/assets/visual-assets/` and update:
`product/sections/visual-assets/data.json`

## 2. Update Brand Name

Replace `[Brand Name]` throughout:
- `product/product-overview.md`
- `src/shell/components/AppShell.tsx` (logoAlt default)
- `src/shell/components/MainNav.tsx` (logoAlt default)

## 3. Update Hero Backgrounds

Each section component has a hero area. Currently using a neutral dark bg.
To add a hero photo, update the `bg-zinc-800` class in each section file under:
`src/sections/*/components/*.tsx`

## 4. Run Locally

```bash
npm install
npm run dev
```
