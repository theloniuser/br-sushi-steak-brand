export interface AssetFile {
  format: 'SVG' | 'PNG' | 'JPG' | string
  size?: string
  downloadUrl: string
}

export interface GraphicAsset {
  id: string
  name: string
  description: string
  usageGuidelines?: string
  previewUrl: string
  files: AssetFile[]
}

export interface IconAsset {
  id: string
  name: string
  description: string
  previewUrl: string
  files: AssetFile[]
}

export interface DecorativeElement {
  id: string
  name: string
  description: string
  usageGuidelines?: string
  previewUrl: string
  files: AssetFile[]
}

export interface VisualAssetsProps {
  graphics: GraphicAsset[]
  icons: IconAsset[]
  decorativeElements: DecorativeElement[]
  onAssetDownload?: (assetId: string, format: string) => void
}
