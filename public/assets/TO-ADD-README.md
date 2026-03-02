# To-Add Folders

## Purpose

The `to-add` folders throughout the asset directories are staging areas for new brand assets that will be added to the website.

## How to Use

1. **Add new files** to the appropriate `to-add` folder based on the asset type:
   - Signage environmental → `menus-signage/signage/environmental/to-add/`
   - Signage promotional → `menus-signage/signage/promotional/to-add/`
   - Menus → `menus-signage/menus/to-add/`
   - Visual asset backgrounds → `visual-assets/backgrounds/to-add/`
   - Visual asset icons → `visual-assets/Icons/to-add/`
   - Visual asset misc graphics → `visual-assets/misc-graphics/to-add/`
   - Architectural interiors → `architectural-spatial-design/interiors/to-add/`
   - Architectural exteriors → `architectural-spatial-design/exteriors/to-add/`
   - Brand logos → `brand-foundation-design/logos/to-add/`
   - Brand fonts → `brand-foundation-design/fonts/to-add/`

2. **Update the data.json file** for the corresponding section to reference the new asset files

3. **Move the files** from the `to-add` folder to the parent directory once they're properly configured in the data file

## Folder Structure

Each asset directory now contains:
- **Active files** (root) - Currently displayed on the website
- **removed/** - Files for cards removed per client request
- **unused/** - Files that exist but aren't referenced in data.json
- **to-add/** - Staging area for new files to be added

## Notes

- Files in `to-add` folders are tracked by git but won't appear on the website until properly configured
- Remember to move files out of `to-add` after adding them to the appropriate data.json file
- Keep file names consistent with existing naming conventions
