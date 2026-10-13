import { useState } from 'react'
import data from '@/../product/sections/visual-assets/data.json'
import { VisualAssets as VisualAssetsComponent } from './components/VisualAssets'
import { ImageModal } from '@/components/ImageModal'

export default function VisualAssetsPreview() {
 const [modalImage, setModalImage] = useState<{ url: string; name: string } | null>(null)

 const handleViewFullSize = (imageUrl: string, imageName: string) => {
   setModalImage({ url: imageUrl, name: imageName })
 }

 const handleAssetDownload = (assetId: string, format: string) => {
   // Search all asset arrays for the item
   const allAssets = [
     ...data.graphics,
     ...data.icons,
     ...data.decorativeElements
   ]

   const asset = allAssets.find(a => a.id === assetId)
   if (!asset) return

   const file = asset.files.find(f => f.format === format)
   if (!file) return

   const link = document.createElement('a')
   link.href = file.downloadUrl
   link.download = file.downloadUrl.split('/').pop() || `${asset.name}.${format.toLowerCase()}`
   document.body.appendChild(link)
   link.click()
   document.body.removeChild(link)
 }

 return (
 <>
 <VisualAssetsComponent
 graphics={data.graphics}
 icons={data.icons}
 decorativeElements={data.decorativeElements}
 onAssetDownload={handleAssetDownload}
 onViewFullSize={handleViewFullSize}
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
