// Asset file format type
export interface AssetFile {
  format: 'SVG' | 'PNG' | 'AI' | 'EPS' | string
  size?: string
  dimensions?: string
  downloadUrl: string
}

// Pattern asset type
export interface Pattern {
  id: string
  name: string
  description: string
  category: 'geometric' | 'organic' | 'textured' | 'branded'
  colorTheme: 'red' | 'gold' | 'neutral' | 'multicolor'
  usageGuidelines: string
  previewUrl: string
  files: AssetFile[]
}

// Texture asset type
export interface Texture {
  id: string
  name: string
  description: string
  style: 'subtle' | 'bold' | 'rustic' | 'modern' | string
  colorTheme: 'light' | 'dark' | 'neutral' | 'warm' | string
  usageGuidelines: string
  previewUrl: string
  files: AssetFile[]
}

// Icon asset type
export interface IconAsset {
  id: string
  name: string
  description: string
  category: 'ui' | 'food' | 'location' | 'social' | 'functional' | string
  style: 'outline' | 'filled' | 'duotone' | string
  sizes: number[]
  usageGuidelines: string
  previewUrl: string
  files: AssetFile[]
}

// Decorative element type
export interface DecorativeElement {
  id: string
  name: string
  description: string
  type: 'border' | 'divider' | 'ornament' | 'badge' | string
  colorTheme: 'red' | 'gold' | 'neutral' | 'brand' | string
  usageGuidelines: string
  previewUrl: string
  files: AssetFile[]
}

// Main component props
export interface VisualAssetsProps {
  textures: Texture[]
  icons: IconAsset[]
  decorativeElements: DecorativeElement[]
  onAssetDownload?: (assetId: string, format: string) => void
}
