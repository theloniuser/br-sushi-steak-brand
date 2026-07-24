import { Download } from 'lucide-react'
import type { VisualAssetsProps } from '@/../product/sections/visual-assets/types'
import { downloadAsZip } from '@/lib/downloadUtils'

export function VisualAssets({
 graphics,
 icons,
 decorativeElements,
 onAssetDownload
}: VisualAssetsProps) {
 return (
 <div className="min-h-screen bg-slate-50">
 {/* Hero Section */}
 <div
 className="relative bg-zinc-800 bg-cover bg-center overflow-hidden"
 style={{ backgroundImage: "url('/assets/architectural-spatial-design/interiors/Dining-Room-Evening-Service-Brighter.jpg')" }}
 >
 <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/30"></div>
 <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
 <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
 <div className="max-w-3xl">
 <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
 Visual Assets
 </h1>
 <p className="text-xl font-semibold text-white leading-relaxed drop-shadow-md">
 Comprehensive library of graphics and icons for this brand. Download textures, icons, and decorative elements for use across all branded materials.
 </p>
 </div>
 </div>
 </div>

 <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 space-y-24">
 {/* Graphics Section */}
 <section id="graphics">
 <div className="mb-12">
 <div className="flex items-start justify-between mb-4">
 <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight">
 Graphics
 </h2>
 <button
 onClick={async () => {
 const files = graphics.flatMap(graphic =>
 graphic.files.map(file => ({
 url: file.downloadUrl,
 filename: file.downloadUrl.split('/').pop() || `${graphic.name}.${file.format.toLowerCase()}`
 }))
 )
 await downloadAsZip(files, 'Brand-Graphics')
 }}
 className="flex items-center gap-2 px-4 py-2.5 bg-brand-action hover:bg-brand-action-hover text-white rounded-lg font-semibold transition-colors whitespace-nowrap"
 >
 <Download className="w-4 h-4" />
 Download All ({graphics.length})
 </button>
 </div>
 <p className="text-lg text-zinc-600 max-w-2xl">
 Brand graphic elements including cultural motifs, illustrated lockups, and collateral.
 </p>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
 {graphics.map((graphic) => (
 <div
 key={graphic.id}
 className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-zinc-200/50 border border-zinc-200 hover:shadow-xl hover:shadow-zinc-300/50:shadow-black/70 transition-all duration-300"
 >
 <div className="aspect-[4/3] bg-[#e6e7e8] flex items-center justify-center p-6 border-b border-zinc-200 overflow-hidden">
 <img
 src={graphic.previewUrl || '/assets/ADS-placeholderThm@3x.png'}
 onError={(e) => { (e.target as HTMLImageElement).src = '/assets/ADS-placeholderThm@3x.png' }}
 alt={graphic.name}
 loading="lazy"
 className="w-full h-full object-contain"
 />
 </div>
 <div className="p-5 space-y-3">
 <div>
 <h3 className="text-base font-bold text-zinc-900 mb-1">
 {graphic.name}
 </h3>
 <p className="text-xs text-zinc-600 line-clamp-2">
 {graphic.description}
 </p>
 </div>
 <div className="pt-2 border-t border-zinc-100">
 <div className="flex flex-wrap gap-1.5">
 {graphic.files.map((file, idx) => (
 <button
 key={idx}
 onClick={() => onAssetDownload?.(graphic.id, file.format)}
 className="group bg-brand-action hover:bg-brand-action-hover text-white px-2.5 py-1.5 rounded text-xs font-semibold transition-all duration-200 flex items-center gap-1 active:scale-95"
 >
 <Download className="w-3 h-3" />
 {file.format}
 </button>
 ))}
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>
 </section>

 {/* Icon Library Section */}
 <section id="icons">
 <div className="mb-12">
 <div className="flex items-start justify-between mb-4">
 <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight">
 Icon Library
 </h2>
 <button
 onClick={async () => {
 // Download all icons as zip
 const files = icons.flatMap(icon =>
 icon.files.map(file => ({
 url: file.downloadUrl,
 filename: file.downloadUrl.split('/').pop() || `${icon.name}.${file.format.toLowerCase()}`
 }))
 )
 await downloadAsZip(files, 'Brand-Icons')
 }}
 className="flex items-center gap-2 px-4 py-2.5 bg-brand-action hover:bg-brand-action-hover text-white rounded-lg font-semibold transition-colors whitespace-nowrap"
 >
 <Download className="w-4 h-4" />
 Download All ({icons.length})
 </button>
 </div>
 <p className="text-lg text-zinc-600 max-w-2xl">
 Complete icon set for [Brand] brand including food, UI, and decorative icons.
 </p>
 </div>

 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
 {icons.map((icon) => (
 <div
 key={icon.id}
 className="bg-white rounded-xl overflow-hidden shadow-lg shadow-zinc-200/50 border border-zinc-200 hover:shadow-xl hover:shadow-zinc-300/50:shadow-black/70 transition-all duration-300"
 >
 <div className="aspect-square bg-[#e6e7e8] flex items-center justify-center p-6 border-b border-zinc-200 overflow-hidden">
 <img
 src={icon.previewUrl || '/assets/ADS-placeholderThm@3x.png'}
              onError={(e) => { (e.target as HTMLImageElement).src = '/assets/ADS-placeholderThm@3x.png' }}
 alt={icon.name}
 loading="lazy"
 className="w-20 h-20 object-contain"
 />
 </div>
 <div className="p-4 space-y-2">
 <div>
 <h4 className="text-sm font-bold text-zinc-900 mb-0.5">
 {icon.name}
 </h4>
 <p className="text-xs text-zinc-500 line-clamp-1">
 {icon.description}
 </p>
 </div>
 <div className="pt-2 border-t border-zinc-100">
 <div className="flex gap-1.5">
 {icon.files.slice(0, 2).map((file, idx) => (
 <button
 key={idx}
 onClick={() => onAssetDownload?.(icon.id, file.format)}
 className="group flex-1 bg-brand-action hover:bg-brand-action-hover text-white px-2 py-1.5 rounded text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1 active:scale-95"
 >
 <Download className="w-3 h-3" />
 {file.format}
 </button>
 ))}
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>
 </section>

 {/* Decorative Elements Section */}
 <section id="decorative">
 <div className="mb-12">
 <div className="flex items-start justify-between mb-4">
 <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight">
 Decorative Elements
 </h2>
 <button
 onClick={async () => {
 // Download all decorative elements as zip
 const files = decorativeElements.flatMap(element =>
 element.files.map(file => ({
 url: file.downloadUrl,
 filename: file.downloadUrl.split('/').pop() || `${element.name}.${file.format.toLowerCase()}`
 }))
 )
 await downloadAsZip(files, 'Brand-Decorative-Elements')
 }}
 className="flex items-center gap-2 px-4 py-2.5 bg-brand-action hover:bg-brand-action-hover text-white rounded-lg font-semibold transition-colors whitespace-nowrap"
 >
 <Download className="w-4 h-4" />
 Download All ({decorativeElements.length})
 </button>
 </div>
 <p className="text-lg text-zinc-600 max-w-2xl">
 Graphic elements including borders, dividers, ornaments, and badges for enhancing branded materials.
 </p>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
 {decorativeElements.map((element) => (
 <div
 key={element.id}
 className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-zinc-200/50 border border-zinc-200 hover:shadow-xl hover:shadow-zinc-300/50:shadow-black/70 transition-all duration-300"
 >
 <div className="aspect-[4/3] bg-[#e6e7e8] flex items-center justify-center p-8 border-b border-zinc-200 overflow-hidden">
 <img
 src={element.previewUrl || '/assets/ADS-placeholderThm@3x.png'}
              onError={(e) => { (e.target as HTMLImageElement).src = '/assets/ADS-placeholderThm@3x.png' }}
 alt={element.name}
 loading="lazy"
 className="max-w-full max-h-full object-contain"
 />
 </div>
 <div className="p-6 space-y-4">
 <div>
 <h3 className="text-lg font-bold text-zinc-900 mb-1">
 {element.name}
 </h3>
 <p className="text-sm text-zinc-600">
 {element.description}
 </p>
 </div>


 <div className="pt-2 border-t border-zinc-100">
 <p className="text-xs text-zinc-500 mb-3">
 {element.usageGuidelines}
 </p>
 <div className="flex flex-wrap gap-2">
 {element.files.map((file, idx) => (
 <button
 key={idx}
 onClick={() => onAssetDownload?.(element.id, file.format)}
 className="group bg-brand-action hover:bg-brand-action-hover text-white px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 active:scale-95"
 >
 <Download className="w-3.5 h-3.5" />
 {file.format}
 {file.size && (
 <span className="text-zinc-400">({file.size})</span>
 )}
 </button>
 ))}
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>
 </section>
 </div>
 </div>
 )
}
