import { useState } from 'react'
import data from '@/../product/sections/signage/data.json'
import type { SignageStandard, WayfindingElement, PromotionalSignage } from '@/../product/sections/signage/types'
import { Signage as SignageComponent } from './components/Signage'
import { ImageModal } from '@/components/ImageModal'

export default function SignagePreview() {
 const [modalImage, setModalImage] = useState<{ url: string; name: string } | null>(null)

 const handleSignageDownload = (signageId: string, format: string) => {
   // Search all signage arrays for the item
   const allSignage = [
     ...(data.signageStandards as SignageStandard[]),
     ...(data.wayfinding as WayfindingElement[]),
     ...(data.promotional as PromotionalSignage[])
   ]

   const signage = allSignage.find(s => s.id === signageId)
   if (!signage) return

   const file = signage.files.find(f => f.format === format)
   if (!file) return

   const link = document.createElement('a')
   link.href = file.downloadUrl
   link.download = file.downloadUrl.split('/').pop() || `${signage.name}.${format.toLowerCase()}`
   document.body.appendChild(link)
   link.click()
   document.body.removeChild(link)
 }

 const handleSignageView = (imageUrl: string, imageName: string) => {
   setModalImage({ url: imageUrl, name: imageName })
 }

 return (
 <>
 <SignageComponent
 signageStandards={data.signageStandards}
 wayfinding={data.wayfinding}
 promotional={data.promotional}
 onSignageDownload={handleSignageDownload}
 onSignageView={handleSignageView}
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
