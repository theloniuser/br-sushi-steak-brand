import { useState } from 'react'
import menusData from '@/../product/sections/menus/data.json'
import signageData from '@/../product/sections/signage/data.json'
import type { SignageStandard, WayfindingElement, PromotionalSignage } from '@/../product/sections/signage/types'
import { Menus } from '../menus/components/Menus'
import { Signage } from '../signage/components/Signage'
import { PdfModal } from '@/components/PdfModal'
import { ImageModal } from '@/components/ImageModal'

export default function MenusAndSignagePreview() {
 const [modalPdf, setModalPdf] = useState<{ url: string; name: string } | null>(null)
 const [modalImage, setModalImage] = useState<{ url: string; name: string } | null>(null)

 const handleMenuDownload = (menuId: string, format: string) => {
 let menu = null
 for (const section of menusData.sections) {
 menu = section.menus.find((m) => m.id === menuId)
 if (menu) break
 }

 if (!menu) return

 const file = menu.files.find((f) => f.format === format)
 if (!file) return

 const link = document.createElement('a')
 link.href = file.downloadUrl
 link.download = file.downloadUrl.split('/').pop() || `${menu.name}.${format.toLowerCase()}`
 document.body.appendChild(link)
 link.click()
 document.body.removeChild(link)
 }

 const handleMenuView = (menuId: string) => {
 let menu = null
 for (const section of menusData.sections) {
 menu = section.menus.find((m) => m.id === menuId)
 if (menu) break
 }

 if (!menu || !menu.viewUrl) return

 setModalPdf({ url: menu.viewUrl, name: menu.name })
 }

 const handleSignageDownload = (signageId: string, format: string) => {
 const allSignage = [
 ...(signageData.signageStandards as SignageStandard[]),
 ...(signageData.wayfinding as WayfindingElement[]),
 ...(signageData.promotional as PromotionalSignage[])
 ]

 const signage = allSignage.find((s) => s.id === signageId)
 if (!signage) return

 const file = signage.files.find((f) => f.format === format)
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
 <div className="min-h-screen bg-slate-50">
 {/* Combined Hero */}
 <div
 className="relative bg-zinc-800 bg-cover bg-center overflow-hidden"
 style={{ backgroundImage: "url('/assets/architectural-spatial-design/interiors/Dining-Room-Evening-Service-Brighter.jpg')" }}
 >
 <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/30"></div>
 <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
 <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
 <div className="max-w-3xl">
 <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
 Menus & Signage
 </h1>
 <p className="text-xl font-semibold text-white leading-relaxed drop-shadow-md">
 Menu designs, signage standards, wayfinding systems, and promotional materials for consistent brand presentation.
 </p>
 </div>
 </div>
 </div>

 <Menus
 sections={menusData.sections}
 onMenuDownload={handleMenuDownload}
 onMenuView={handleMenuView}
 hideHero
 />
 <Signage
 signageStandards={signageData.signageStandards}
 wayfinding={signageData.wayfinding}
 promotional={signageData.promotional}
 onSignageDownload={handleSignageDownload}
 onSignageView={handleSignageView}
 hideHero
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
 </div>
 )
}
