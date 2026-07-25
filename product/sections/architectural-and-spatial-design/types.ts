// Image in a gallery
export interface ArchitecturalImage {
  id: string
  name: string
  description: string
  imageUrl: string
  category?: string
}

// Component props
export interface ArchitecturalSpatialProps {
  interiors: ArchitecturalImage[]
  exteriors: ArchitecturalImage[]
  murals: ArchitecturalImage[]
  onViewFullSize?: (imageId: string) => void
  onDownload?: (imageId: string) => void
}
