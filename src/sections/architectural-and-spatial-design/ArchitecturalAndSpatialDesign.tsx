import { useState } from 'react'
import data from '@/../product/sections/architectural-and-spatial-design/data.json'
import { ArchitecturalSpatial as ArchitecturalSpatialComponent } from './components/ArchitecturalSpatial'
import { ImageModal } from '@/components/ImageModal'

export default function ArchitecturalSpatialPreview() {
 const [modalImage, setModalImage] = useState<{ url: string; name: string } | null>(null)

 const handleViewFullSize = (imageId: string) => {
 const allImages = [...data.interiors, ...data.exteriors]
 const image = allImages.find(img => img.id === imageId)
 if (image) {
 setModalImage({ url: image.imageUrl, name: image.name })
 }
 }

 const handleDownload = (imageId: string) => {
 const allImages = [...data.interiors, ...data.exteriors]
 const image = allImages.find(img => img.id === imageId)
 if (image) {
 const link = document.createElement('a')
 link.href = image.imageUrl
 link.download = image.name
 document.body.appendChild(link)
 link.click()
 document.body.removeChild(link)
 }
 }

 return (
 <>
 <ArchitecturalSpatialComponent
 interiors={data.interiors}
 exteriors={data.exteriors}
 onViewFullSize={handleViewFullSize}
 onDownload={handleDownload}
 />
 <ImageModal
 isOpen={!!modalImage}
 imageUrl={modalImage?.url || ''}
 imageName={modalImage?.name || ''}
 onClose={() => setModalImage(null)}
 />
 </>
 )
}
