# Brand Guidelines Template

A production-ready template for creating beautiful, interactive brand guidelines websites **through conversation with Claude**. No manual file editing required - just answer questions and Claude builds everything for you.

Built with React, TypeScript, and Vite.

## Features

- 🤖 **Design OS Workflow Included** - Guided Q&A process to build brand guidelines through conversation with Claude
- 🎨 **Clean, Responsive Design** - Works beautifully on desktop, tablet, and mobile
- 📱 **Mobile-Friendly Navigation** - Optimized touch interactions and navigation
- 🚀 **Production Ready** - Built with modern web technologies for performance
- ⚡️ **Fast Development** - Hot module replacement for rapid iteration
- 📦 **Easy Deployment** - Deploy to any static hosting service
- 🎯 **Customizable** - Easy to adapt to any brand's identity (guided or manual)
- 💾 **Asset Downloads** - Built-in download functionality for logos, fonts, and other assets

## Tech Stack

- **React 19** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library

## Quick Start

### 1. Use This Template

Click the "Use this template" button on GitHub, or clone directly:

```bash
git clone https://github.com/yourusername/brand-guidelines-template.git my-brand-guidelines
cd my-brand-guidelines
npm install
```

### 2. Start the Dev Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build Your Brand Through Conversation

Open Claude Code CLI in this directory and start with:

```
/product-vision
```

Claude will guide you through the entire process by asking questions. That's it!

---

## Building Your Brand Guidelines

This template includes **Design OS** - a conversational workflow where Claude guides you through creating brand guidelines by asking questions. No need to manually edit files!

## The Guided Workflow (Recommended)

Simply use slash commands in Claude Code CLI and answer questions. Claude handles the file creation automatically.

### Step 1: Define Your Brand

**Command:** `/product-vision`

Claude will ask:
- "Tell me about your brand - what problem are you solving?"
- "Who is your primary audience?"
- "What makes your approach different?"

**Result:** Claude automatically creates your product overview with perfect formatting.

### Step 2: Plan Your Sections

**Command:** `/product-roadmap`

Claude will ask:
- "What sections should your guidelines include?"
- "What will each section contain?"

**Result:** Roadmap structure generated automatically.

**Common sections:**
- Brand Foundation (colors, typography, logos)
- Visual Assets (graphics, marketing materials)
- Brand Voice (tone, messaging)
- Usage Guidelines (do's and don'ts)

### Step 3: Choose Colors & Typography

**Command:** `/design-tokens`

Claude will ask:
- "What are your brand colors?"
- "Do you have specific fonts in mind?"

**Result:** Design system configured automatically with your choices.

### Step 4: Build Each Section

For each section in your roadmap:

**A. Define Requirements** - `/shape-section`
- Claude asks about features and user needs
- Generates section specification

**B. Create Sample Data** - `/sample-data`
- Claude creates realistic example content
- Generates TypeScript types automatically

**C. Design the Screen** - `/design-screen`
- Claude builds the UI components
- Applies your design tokens
- Creates production-ready React code

### Step 5: Export Everything

**Command:** `/export-product`

Generates complete handoff package ready for deployment.

## Why Use the Guided Workflow?

✅ **No file editing required** - Claude creates everything for you
✅ **Asks the right questions** - Ensures you don't miss important details
✅ **Perfect formatting** - Files are structured correctly every time
✅ **Faster** - Build in minutes instead of hours
✅ **Beginner-friendly** - No need to understand the file structure
✅ **Production-ready** - Components follow best practices automatically

## Example Conversation

```
You: /product-vision

Claude: "Tell me about your brand - share any notes or thoughts.
         What problem are you solving? Who is it for?"

You: "We're Acme Widgets, making affordable home organization
      products for busy parents..."

Claude: "Great! Who is your primary audience - can you describe them?"

You: "Working parents aged 30-45 who need quick solutions..."

Claude: "Perfect! Here's what I'm capturing for Acme Widgets:
         [Shows draft]
         Does this capture your vision?"

You: "Yes, looks great!"

Claude: ✅ Created product/product-overview.md
```

**That's it!** Claude handles all the file creation and formatting.

---

## Advanced: Manual Customization

For power users who prefer direct file editing:

### Step 1: Brand Content

Update the product definition files:

**`product/product-overview.md`**
- Replace with your brand name and description
- Update problems and features

**`product/product-roadmap.md`**
- Define your guideline sections
- List what each section will contain

### Step 2: Design System

**Colors** - `product/design-system/colors.json`
```json
{
  "primary": "red",
  "secondary": "gray",
  "neutral": "stone"
}
```
Use Tailwind CSS color names (red, blue, emerald, indigo, etc.)

**Typography** - `product/design-system/typography.json`
```json
{
  "headingFont": "Your Heading Font",
  "bodyFont": "Your Body Font"
}
```

### Step 3: Add Your Assets

**Logos** - `public/assets/logos/`
- Add SVG, PNG, and EPS versions
- Include variations (primary, monochrome, icon, etc.)

**Fonts** - `public/assets/fonts/`
- Add your brand font files (.otf, .ttf, .woff)
- Update the Google Fonts import in `index.html` if using web fonts

**Images** - `public/assets/images/`
- Add photos, graphics, or other visual assets
- Organize into subfolders as needed

### Step 4: Favicon & Page Title

**Update `index.html`:**
```html
<title>Your Brand - Brand Guidelines</title>
```

**Replace favicon:**
- Add your brand icon as `public/favicon.svg`

### Step 5: Create Sections

Each section follows this structure:

```
product/sections/[section-id]/
├── spec.md          # Section requirements
├── data.json        # Sample data
└── types.ts         # TypeScript interfaces

src/sections/[section-id]/
├── [ComponentName].tsx
└── components/
    └── [SubComponent].tsx
```

**Example sections:**
- brand-foundation (colors, typography, logos)
- visual-assets (graphics, photos)
- brand-voice (tone, messaging)
- templates (presentation, social media)

## Project Structure

```
brand-guidelines-template/
├── public/
│   ├── assets/           # Your brand assets
│   │   ├── logos/       # Logo files
│   │   ├── fonts/       # Font files
│   │   └── images/      # Photos/graphics
│   ├── .htaccess        # Apache routing config
│   └── favicon.svg      # Site favicon
├── product/
│   ├── product-overview.md
│   ├── product-roadmap.md
│   ├── design-system/   # Color & typography tokens
│   ├── sections/        # Section specifications
│   └── shell/           # Navigation config
├── src/
│   ├── components/      # Reusable UI components
│   ├── sections/        # Section implementations
│   ├── shell/          # Navigation & layout
│   ├── lib/            # Utilities
│   └── main.tsx        # App entry point
└── dist/               # Production build (generated)
```

## Building for Production

### Build Command

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### What Gets Built

- Minified JavaScript bundles
- Optimized CSS
- Compressed assets
- `.htaccess` file for Apache routing
- All public assets

## Deployment

### Apache Hosting (SiteGround, cPanel, etc.)

1. Build your site: `npm run build`
2. Upload the contents of `dist/` to your web root
3. Ensure `.htaccess` is included for proper routing
4. Configure your domain to point to the files

**Important:** The `.htaccess` file is required for client-side routing to work properly.

### Netlify

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

### Vercel

1. Connect your GitHub repository
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy!

### GitHub Pages

1. Build: `npm run build`
2. Deploy the `dist/` folder to your `gh-pages` branch
3. Configure GitHub Pages to serve from `gh-pages` branch

## Development Tips

### Hot Reload

The dev server supports hot module replacement - changes appear instantly without full page reload.

### TypeScript

Full TypeScript support with strict mode enabled. Add types to `src/types/` as needed.

### Component Development

- Keep components small and focused
- Use TypeScript interfaces for props
- Place reusable components in `src/components/`
- Place section-specific components in `src/sections/[section]/components/`

### Styling

- Tailwind CSS utility classes for styling
- Dark mode support with `dark:` variants
- Responsive design with `sm:`, `md:`, `lg:` prefixes

## Common Customizations

### Change Primary Color

Update `product/design-system/colors.json`:
```json
{
  "primary": "emerald",
  "secondary": "gray",
  "neutral": "stone"
}
```

### Add Custom Fonts

1. Add font files to `public/assets/fonts/`
2. Update `product/design-system/typography.json`
3. If using Google Fonts, update the import in `index.html`

### Update Navigation

Navigation is automatically generated from your section definitions in `product/product-roadmap.md`.

### Add Download Buttons

Use the built-in download functionality:
```tsx
<a
  href="/assets/logos/my-logo.svg"
  download="my-logo.svg"
  className="..."
>
  Download SVG
</a>
```

## Support & Documentation

### Design OS

This template is built using Design OS - a product planning and design tool for creating structured, production-ready components.

Learn more: [buildermethods.com/design-os](https://buildermethods.com/design-os)

### Community

For questions and support:
- [Design OS Documentation](https://buildermethods.com/design-os)
- [Builder Methods Pro](https://buildermethods.com/pro) - Official support & training
- [GitHub Issues](https://github.com/yourusername/brand-guidelines-template/issues)

## License

MIT License - feel free to use for any brand guidelines project.

## Credits

Template created using [Design OS](https://buildermethods.com/design-os) by Brian Casel.

---

**Happy Building!** 🚀
