// =============================================================================
// Data Types
// =============================================================================

export interface RGBColor {
  r: number
  g: number
  b: number
}

export interface CMYKColor {
  c: number
  m: number
  y: number
  k: number
}

export interface BrandColor {
  id: string
  name: string
  description: string
  pantone: string
  rgb: RGBColor
  cmyk: CMYKColor
  hex: string
  usage: string
}

export interface TypographyStyle {
  id: string
  styleName: string
  fontFamily: string
  fontWeight: string
  fontSize: string
  lineHeight: string
  letterSpacing: string
  example: string
  usage: string
}

export interface LogoFile {
  format: 'SVG' | 'PNG' | 'EPS' | string
  size: string
  downloadUrl: string
}

export interface LogoAsset {
  id: string
  name: string
  description: string
  category: 'primary' | 'icon' | 'monochrome' | 'alternate' | 'location-specific' | string
  usageGuidelines: string
  files: LogoFile[]
}

export interface FontFile {
  id: string
  fontFamily: string
  weight: string
  style: 'Normal' | 'Italic' | string
  format: 'OTF' | 'TTF' | 'WOFF' | 'WOFF2' | string
  fileName: string
  fileSize: string
  downloadUrl: string
}

export interface BrandGuideline {
  id: string
  title: string
  category: 'logo-usage' | 'color' | 'typography' | string
  rule: string
  doExample: string
  dontExample: string
  exampleImageUrl: string
}

// =============================================================================
// Component Props
// =============================================================================

export interface BrandFoundationProps {
  /** Brand color palette with complete specifications */
  colors: BrandColor[]
  /** Typography styles with sizing and usage information */
  typographyStyles: TypographyStyle[]
  /** Logo variations available for download */
  logoAssets: LogoAsset[]
  /** Font files available for download */
  fontFiles: FontFile[]
  /** Brand usage guidelines with visual examples */
  brandGuidelines: BrandGuideline[]
  /** Called when user copies a color code to clipboard */
  onColorCopy?: (colorId: string, format: 'hex' | 'rgb' | 'cmyk' | 'pantone') => void
  /** Called when user downloads a logo file */
  onLogoDownload?: (logoId: string, format: string) => void
  /** Called when user downloads a font file */
  onFontDownload?: (fontId: string) => void
}
