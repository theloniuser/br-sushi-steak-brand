# Sections

This folder contains the content and specifications for each section of your brand guidelines.

## Adding a New Section

1. **Create folder structure:**
   ```
   sections/[section-id]/
   ├── spec.md          # Section specification
   ├── data.json        # Sample data
   └── types.ts         # TypeScript interfaces
   ```

2. **Create corresponding React components:**
   ```
   src/sections/[section-id]/
   ├── [ComponentName].tsx       # Screen design component
   └── components/
       └── [SubComponent].tsx    # Sub-components
   ```

3. **Update product-roadmap.md** to list the new section

## Example Section Structure

See the Design OS documentation for detailed examples of creating sections.

Each section should define:
- What content it displays
- What data it needs
- What user interactions are available
- What download options are provided
