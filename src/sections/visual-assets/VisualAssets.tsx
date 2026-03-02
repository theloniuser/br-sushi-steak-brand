import data from '@/../product/sections/visual-assets/data.json'
import { VisualAssets as VisualAssetsComponent } from './components/VisualAssets'

export default function VisualAssetsPreview() {
 const handleAssetDownload = (assetId: string, format: string) => {
   // Search all asset arrays for the item
   const allAssets = [
     ...data.textures,
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
 <VisualAssetsComponent
 textures={data.textures}
 icons={data.icons}
 decorativeElements={data.decorativeElements}
 onAssetDownload={handleAssetDownload}
 />
 )
}
