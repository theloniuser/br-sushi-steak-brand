export interface PromoFile {
  format: 'PNG' | 'JPG' | 'PDF' | 'PSD' | 'AI' | string
  size?: string
  downloadUrl: string
}

export interface MarketingAsset {
  id: string
  name: string
  description: string
  channel?: string
  dimensions?: {
    width: string
    height: string
  }
  previewUrl: string
  viewUrl: string
  files: PromoFile[]
}

export interface PromotionalSection {
  id: string
  title: string
  description: string
  assets: MarketingAsset[]
}

export interface PromotionalProps {
  sections: PromotionalSection[]
  onAssetDownload?: (assetId: string, format: string) => void
  onAssetView?: (assetId: string) => void
}
