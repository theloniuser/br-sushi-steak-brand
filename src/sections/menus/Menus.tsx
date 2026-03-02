import { useState } from 'react'
import data from '@/../product/sections/menus/data.json'
import { Menus as MenusComponent } from './components/Menus'
import { ImageModal } from '@/components/ImageModal'

export default function MenusPreview() {
 const [modalImage, setModalImage] = useState<{ url: string; name: string } | null>(null)

 const handleMenuDownload = (menuId: string, format: string) => {
   // Search all sections for the menu
   let menu = null
   for (const section of data.sections) {
     menu = section.menus.find(m => m.id === menuId)
     if (menu) break
   }

   if (!menu) return

   const file = menu.files.find(f => f.format === format)
   if (!file) return

   const link = document.createElement('a')
   link.href = file.downloadUrl
   link.download = file.downloadUrl.split('/').pop() || `${menu.name}.${format.toLowerCase()}`
   document.body.appendChild(link)
   link.click()
   document.body.removeChild(link)
 }

 const handleMenuView = (menuId: string) => {
   // Search all sections for the menu
   let menu = null
   for (const section of data.sections) {
     menu = section.menus.find(m => m.id === menuId)
     if (menu) break
   }

   if (!menu || !menu.viewUrl) return

   setModalImage({ url: menu.viewUrl, name: menu.name })
 }

 return (
 <>
 <MenusComponent
 sections={data.sections}
 onMenuDownload={handleMenuDownload}
 onMenuView={handleMenuView}
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
