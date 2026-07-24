import { Download, ZoomIn } from 'lucide-react'
import type { ArchitecturalSpatialProps } from '@/../product/sections/architectural-and-spatial-design/types'
import { downloadAsZip } from '@/lib/downloadUtils'

export function ArchitecturalSpatial({
 interiors,
 exteriors,
 onViewFullSize,
 onDownload
}: ArchitecturalSpatialProps) {
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
 Architectural & Spatial Design
 </h1>
 <p className="text-xl font-semibold text-white leading-relaxed drop-shadow-md">
 Interior and exterior photography showcasing [Brand] restaurant design, branding elements, and architectural details.
 </p>
 </div>
 </div>
 </div>

 <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 space-y-24">
 {/* Interiors Section */}
 <section id="interiors">
 <div className="mb-12">
 <div className="flex items-start justify-between mb-4">
 <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight">
 Interiors
 </h2>
 <button
 onClick={async () => {
 // Download all interior images as zip
 const files = interiors.map(image => ({
 url: image.imageUrl,
 filename: image.imageUrl.split('/').pop() || `${image.name}.jpg`
 }))
 await downloadAsZip(files, '[Brand]-Architectural-Interiors')
 }}
 className="flex items-center gap-2 px-4 py-2.5 bg-brand-action hover:bg-brand-action-hover text-white rounded-lg font-semibold transition-colors whitespace-nowrap"
 >
 <Download className="w-4 h-4" />
 Download All ({interiors.length})
 </button>
 </div>
 <p className="text-lg text-zinc-600 max-w-2xl">
 Interior photographs showcasing [Brand] restaurant design, decor, wall treatments, and interior branding elements.
 </p>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
 {interiors.map((image) => (
 <div
 key={image.id}
 className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-zinc-200/50 border border-zinc-200 hover:shadow-xl hover:shadow-zinc-300/50:shadow-black/70 transition-all duration-300 group"
 >
 <div
 className="relative aspect-[4/3] bg-[#e6e7e8] overflow-hidden cursor-pointer"
 onClick={() => onViewFullSize?.(image.id)}
 >
 <img
 src={image.imageUrl || '/assets/ADS-placeholderThm@3x.png'}
              onError={(e) => { (e.target as HTMLImageElement).src = '/assets/ADS-placeholderThm@3x.png' }}
 alt={image.name}
 loading="lazy"
 className="w-full h-full object-cover"
 />
 {/* Overlay on Hover - Desktop only */}
 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 pointer-events-none">
 <button
 onClick={(e) => {
 e.stopPropagation()
 onViewFullSize?.(image.id)
 }}
 className="p-3 bg-white/90 hover:bg-white rounded-full transition-colors pointer-events-auto"
 title="View Full Size"
 >
 <ZoomIn className="w-5 h-5 text-zinc-900" strokeWidth={2} />
 </button>
 <button
 onClick={(e) => {
 e.stopPropagation()
 onDownload?.(image.id)
 }}
 className="p-3 bg-brand-action hover:bg-brand-action-hover rounded-full transition-colors pointer-events-auto"
 title="Download"
 >
 <Download className="w-5 h-5 text-white" strokeWidth={2} />
 </button>
 </div>
 </div>
 <div className="p-5">
 <h3 className="text-base font-bold text-zinc-900 mb-1">
 {image.name}
 </h3>
 <p className="text-sm text-zinc-600">
 {image.description}
 </p>
 </div>
 </div>
 ))}
 </div>
 </section>

 {/* Exteriors Section */}
 <section id="exteriors">
 <div className="mb-12">
 <div className="flex items-start justify-between mb-4">
 <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight">
 Exteriors
 </h2>
 <button
 onClick={async () => {
 // Download all exterior images as zip
 const files = exteriors.map(image => ({
 url: image.imageUrl,
 filename: image.imageUrl.split('/').pop() || `${image.name}.jpg`
 }))
 await downloadAsZip(files, '[Brand]-Architectural-Exteriors')
 }}
 className="flex items-center gap-2 px-4 py-2.5 bg-brand-action hover:bg-brand-action-hover text-white rounded-lg font-semibold transition-colors whitespace-nowrap"
 >
 <Download className="w-4 h-4" />
 Download All ({exteriors.length})
 </button>
 </div>
 <p className="text-lg text-zinc-600 max-w-2xl">
 Exterior photographs showing storefront designs, signage, awnings, and building facades for [Brand] locations.
 </p>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
 {exteriors.map((image) => (
 <div
 key={image.id}
 className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-zinc-200/50 border border-zinc-200 hover:shadow-xl hover:shadow-zinc-300/50:shadow-black/70 transition-all duration-300 group"
 >
 <div
 className="relative aspect-[4/3] bg-[#e6e7e8] overflow-hidden cursor-pointer"
 onClick={() => onViewFullSize?.(image.id)}
 >
 <img
 src={image.imageUrl || '/assets/ADS-placeholderThm@3x.png'}
              onError={(e) => { (e.target as HTMLImageElement).src = '/assets/ADS-placeholderThm@3x.png' }}
 alt={image.name}
 loading="lazy"
 className="w-full h-full object-cover"
 />
 {/* Overlay on Hover - Desktop only */}
 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 pointer-events-none">
 <button
 onClick={(e) => {
 e.stopPropagation()
 onViewFullSize?.(image.id)
 }}
 className="p-3 bg-white/90 hover:bg-white rounded-full transition-colors pointer-events-auto"
 title="View Full Size"
 >
 <ZoomIn className="w-5 h-5 text-zinc-900" strokeWidth={2} />
 </button>
 <button
 onClick={(e) => {
 e.stopPropagation()
 onDownload?.(image.id)
 }}
 className="p-3 bg-brand-action hover:bg-brand-action-hover rounded-full transition-colors pointer-events-auto"
 title="Download"
 >
 <Download className="w-5 h-5 text-white" strokeWidth={2} />
 </button>
 </div>
 </div>
 <div className="p-5">
 <h3 className="text-base font-bold text-zinc-900 mb-1">
 {image.name}
 </h3>
 <p className="text-sm text-zinc-600">
 {image.description}
 </p>
 </div>
 </div>
 ))}
 </div>
 </section>
 </div>
 </div>
 )
}
