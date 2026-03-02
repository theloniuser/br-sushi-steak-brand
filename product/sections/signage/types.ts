// File interfaces
export interface SignageFile {
  format: 'PDF' | 'AI' | 'EPS' | 'DWG' | string
  size?: string
  downloadUrl: string
}

export interface PromoFile {
  format: 'PDF' | 'AI' | 'PNG' | 'PSD' | 'JPG' | string
  size?: string
  downloadUrl: string
}

// Signage standard
export interface SignageStandard {
  id: string
  name: string
  description: string
  category: 'exterior' | 'interior' | 'window' | 'monument' | string
  dimensions: {
    width: string
    height: string
    depth?: string
  }
  material: string
  illumination: 'backlit' | 'front-lit' | 'non-illuminated' | 'led' | string
  placement: string
  usageGuidelines: string
  previewUrl: string
  files: SignageFile[]
}

// Wayfinding element
export interface WayfindingElement {
  id: string
  name: string
  description: string
  type: 'directional' | 'informational' | 'identification' | 'regulatory' | string
  size: 'small' | 'medium' | 'large' | string
  dimensions: {
    width: string
    height: string
  }
  mounting: string
  location: string
  usageGuidelines: string
  previewUrl: string
  files: SignageFile[]
}

// Promotional signage
export interface PromotionalSignage {
  id: string
  name: string
  description: string
  category: 'seasonal' | 'promotional' | 'event' | 'limited-time' | string
  format: 'poster' | 'banner' | 'window-cling' | 'table-tent' | 'a-frame' | 'window-sign' | 'card' | 'duratrans' | 'durabond' | 'menu' | 'napkin-box' | 'tent-card' | 'panel' | 'digital' | 'photo-frame' | 'sticker' | 'postcard' | string
  dimensions: {
    width: string
    height: string
  }
  duration: string
  usageGuidelines: string
  previewUrl: string
  files: PromoFile[]
}

// Component props
export interface SignageProps {
  signageStandards: SignageStandard[]
  wayfinding: WayfindingElement[]
  promotional: PromotionalSignage[]
  onSignageDownload?: (signageId: string, format: string) => void
  onSignageView?: (imageUrl: string, imageName: string) => void
}
