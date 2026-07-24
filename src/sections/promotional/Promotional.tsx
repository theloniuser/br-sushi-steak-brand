import { useState } from 'react'
import rawData from '@/../product/sections/promotional/data.json'
import { Promotional as PromotionalComponent } from './components/Promotional'
import { PdfModal } from '@/components/PdfModal'
import { ImageModal } from '@/components/ImageModal'
import type { MarketingAsset, PromotionalSection } from '@/../product/sections/promotional/types'

const data = rawData as { sections: PromotionalSection[] }

function findAsset(assetId: string): MarketingAsset | null {
 for (const section of data.sections) {
 const asset = section.assets.find((a) => a.id === assetId)
 if (asset) return asset
 }
 return null
}

export default function PromotionalPreview() {
 const [modalPdf, setModalPdf] = useState<{ url: string; name: string } | null>(null)
 const [modalImage, setModalImage] = useState<{ url: string; name: string } | null>(null)

 const handleAssetDownload = (assetId: string, format: string) => {
 const asset = findAsset(assetId)
 if (!asset) return

 const file = asset.files.find((f) => f.format === format)
 if (!file) return

 const link = document.createElement('a')
 link.href = file.downloadUrl
 link.download = file.downloadUrl.split('/').pop() || `${asset.name}.${format.toLowerCase()}`
 document.body.appendChild(link)
 link.click()
 document.body.removeChild(link)
 }

 const handleAssetView = (assetId: string) => {
 const asset = findAsset(assetId)
 if (!asset || !asset.viewUrl) return

 if (asset.viewUrl.toLowerCase().endsWith('.pdf')) {
 setModalPdf({ url: asset.viewUrl, name: asset.name })
 } else {
 setModalImage({ url: asset.viewUrl, name: asset.name })
 }
 }

 return (
 <>
 <PromotionalComponent
 sections={data.sections}
 onAssetDownload={handleAssetDownload}
 onAssetView={handleAssetView}
 />
 <PdfModal
 isOpen={!!modalPdf}
 pdfUrl={modalPdf?.url || ''}
 pdfName={modalPdf?.name || ''}
 onClose={() => setModalPdf(null)}
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
