import data from '@/../product/sections/brand-foundation/data.json'
import { BrandFoundation as BrandFoundationComponent } from './components/BrandFoundation'

export default function BrandFoundationPreview() {
 const handleLogoDownload = (logoId: string, format: string) => {
   const logo = data.logoAssets.find(l => l.id === logoId)
   if (!logo) return

   const file = logo.files.find(f => f.format === format)
   if (!file) return

   const link = document.createElement('a')
   link.href = file.downloadUrl
   link.download = file.downloadUrl.split('/').pop() || `${logo.name}.${format.toLowerCase()}`
   document.body.appendChild(link)
   link.click()
   document.body.removeChild(link)
 }

 const handleFontDownload = (fontId: string) => {
   const font = data.fontFiles.find(f => f.id === fontId)
   if (!font || !font.downloadUrl || !font.fileName) return

   const link = document.createElement('a')
   link.href = font.downloadUrl
   link.download = font.fileName
   document.body.appendChild(link)
   link.click()
   document.body.removeChild(link)
 }

 return (
 <BrandFoundationComponent
 colors={data.colors}
 typographyStyles={data.typographyStyles}
 logoAssets={data.logoAssets}
 fontFiles={data.fontFiles}
 brandGuidelines={data.brandGuidelines}
 onColorCopy={(colorId, format) => console.log('Copy color:', colorId, format)}
 onLogoDownload={handleLogoDownload}
 onFontDownload={handleFontDownload}
 />
 )
}
