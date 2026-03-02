import { Download, Copy, Check } from 'lucide-react'
import { useState } from 'react'
import type { BrandFoundationProps } from '@/../product/sections/brand-foundation/types'
import { downloadAsZip } from '@/lib/downloadUtils'

export function BrandFoundation({
 colors,
 typographyStyles,
 logoAssets,
 fontFiles,
 brandGuidelines,
 onColorCopy,
 onLogoDownload,
 onFontDownload
}: BrandFoundationProps) {
 const [copiedColor, setCopiedColor] = useState<string | null>(null)

 const handleColorCopy = (colorId: string, value: string, format: 'hex' | 'rgb' | 'cmyk' | 'pantone') => {
 navigator.clipboard.writeText(value)
 setCopiedColor(`${colorId}-${format}`)
 onColorCopy?.(colorId, format)
 setTimeout(() => setCopiedColor(null), 2000)
 }

 const formatRGB = (rgb: { r: number; g: number; b: number }) =>
 `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`

 const formatCMYK = (cmyk: { c: number; m: number; y: number; k: number }) =>
 `C${cmyk.c} M${cmyk.m} Y${cmyk.y} K${cmyk.k}`

 return (
 <div className="min-h-screen bg-slate-50">
 {/* Hero Section */}
 <div className="relative bg-zinc-800 bg-cover bg-center overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/30"></div>
 <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
 <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
 <div className="max-w-3xl">
 <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
 Brand Foundation
 </h1>
 <p className="text-xl font-semibold text-white leading-relaxed drop-shadow-md">
 Complete visual identity standards for this brand. Reference this guide for colors, typography, logos, and brand usage.
 </p>
 </div>
 </div>
 </div>

 <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 space-y-24">
 {/* Colors Section */}
 <section id="colors">
 <div className="mb-12">
 <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 mb-4 tracking-tight">
 Color Palette
 </h2>
 <p className="text-lg text-zinc-600 max-w-2xl">
 Our brand colors with complete specifications. Click any value to copy to clipboard.
 </p>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
 {colors.map((color) => (
 <div
 key={color.id}
 className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-zinc-200/50 border border-zinc-200 hover:shadow-xl hover:shadow-zinc-300/50:shadow-black/70 transition-all duration-300"
 >
 <div
 className="h-32 relative"
 style={{ backgroundColor: color.hex }}
 >
 <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10"></div>
 </div>
 <div className="p-6 space-y-4">
 <div>
 <h3 className="text-2xl font-bold text-zinc-900 mb-1">
 {color.name}
 </h3>
 <p className="text-sm text-zinc-600">
 {color.description}
 </p>
 </div>

 <div className="grid grid-cols-2 gap-3">
 <button
 onClick={() => handleColorCopy(color.id, color.hex, 'hex')}
 className="group relative bg-zinc-50 hover:bg-[#e6e7e8]:bg-zinc-750 border border-zinc-200 rounded-lg px-4 py-3 transition-all duration-200 active:scale-95"
 >
 <div className="flex items-center justify-between">
 <div className="text-left">
 <div className="text-xs font-medium text-zinc-500 mb-0.5">HEX</div>
 <div className="text-sm font-mono font-semibold text-zinc-900">
 {color.hex}
 </div>
 </div>
 {copiedColor === `${color.id}-hex` ? (
 <Check className="w-4 h-4 text-emerald-600" />
 ) : (
 <Copy className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600:text-zinc-300" />
 )}
 </div>
 </button>

 <button
 onClick={() => handleColorCopy(color.id, formatRGB(color.rgb), 'rgb')}
 className="group relative bg-zinc-50 hover:bg-[#e6e7e8]:bg-zinc-750 border border-zinc-200 rounded-lg px-4 py-3 transition-all duration-200 active:scale-95"
 >
 <div className="flex items-center justify-between">
 <div className="text-left">
 <div className="text-xs font-medium text-zinc-500 mb-0.5">RGB</div>
 <div className="text-xs font-mono font-semibold text-zinc-900">
 {color.rgb.r}, {color.rgb.g}, {color.rgb.b}
 </div>
 </div>
 {copiedColor === `${color.id}-rgb` ? (
 <Check className="w-4 h-4 text-emerald-600" />
 ) : (
 <Copy className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600:text-zinc-300" />
 )}
 </div>
 </button>

 <button
 onClick={() => handleColorCopy(color.id, formatCMYK(color.cmyk), 'cmyk')}
 className="group relative bg-zinc-50 hover:bg-[#e6e7e8]:bg-zinc-750 border border-zinc-200 rounded-lg px-4 py-3 transition-all duration-200 active:scale-95"
 >
 <div className="flex items-center justify-between">
 <div className="text-left">
 <div className="text-xs font-medium text-zinc-500 mb-0.5">CMYK</div>
 <div className="text-xs font-mono font-semibold text-zinc-900">
 {color.cmyk.c}/{color.cmyk.m}/{color.cmyk.y}/{color.cmyk.k}
 </div>
 </div>
 {copiedColor === `${color.id}-cmyk` ? (
 <Check className="w-4 h-4 text-emerald-600" />
 ) : (
 <Copy className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600:text-zinc-300" />
 )}
 </div>
 </button>

 <button
 onClick={() => handleColorCopy(color.id, color.pantone, 'pantone')}
 className="group relative bg-zinc-50 hover:bg-[#e6e7e8]:bg-zinc-750 border border-zinc-200 rounded-lg px-4 py-3 transition-all duration-200 active:scale-95"
 >
 <div className="flex items-center justify-between">
 <div className="text-left">
 <div className="text-xs font-medium text-zinc-500 mb-0.5">PANTONE</div>
 <div className="text-xs font-mono font-semibold text-zinc-900">
 {color.pantone}
 </div>
 </div>
 {copiedColor === `${color.id}-pantone` ? (
 <Check className="w-4 h-4 text-emerald-600" />
 ) : (
 <Copy className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600:text-zinc-300" />
 )}
 </div>
 </button>
 </div>

 <div className="pt-2 border-t border-zinc-100">
 <p className="text-sm text-zinc-600 leading-relaxed">
 {color.usage}
 </p>
 </div>
 </div>
 </div>
 ))}
 </div>
 </section>

 {/* Typography Section */}
 <section id="typography">
 <div className="mb-12">
 <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 mb-4 tracking-tight">
 Typography
 </h2>
 <p className="text-lg text-zinc-600 max-w-2xl">
 Our type system with specifications for all text styles.
 </p>
 </div>

 <div className="space-y-6">
 {typographyStyles.map((style) => (
 <div
 key={style.id}
 className="bg-white rounded-2xl p-8 shadow-lg shadow-zinc-200/50 border border-zinc-200 hover:shadow-xl hover:shadow-zinc-300/50:shadow-black/70 transition-all duration-300"
 >
 <div className="grid lg:grid-cols-[1fr,auto] gap-8 items-start">
 <div>
 <div className="mb-6">
 <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-3">
 {style.styleName}
 </h3>
 <p className="text-zinc-900 mb-2"
 style={{
 fontFamily: style.fontFamily,
 fontSize: `min(${style.fontSize}, 3rem)`,
 lineHeight: '1.2',
 fontWeight: style.fontWeight.toLowerCase().includes('bold') ? '700' :
 style.fontWeight.toLowerCase().includes('semibold') ? '600' :
 style.fontWeight.toLowerCase().includes('medium') ? '500' : '400'
 }}>
 {style.example}
 </p>
 <p className="text-sm text-zinc-600">
 {style.usage}
 </p>
 </div>

 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
 <div>
 <div className="text-xs font-medium text-zinc-500 mb-1">Font Family</div>
 <div className="font-mono text-zinc-900">{style.fontFamily}</div>
 </div>
 <div>
 <div className="text-xs font-medium text-zinc-500 mb-1">Weight</div>
 <div className="font-mono text-zinc-900">{style.fontWeight}</div>
 </div>
 <div>
 <div className="text-xs font-medium text-zinc-500 mb-1">Size</div>
 <div className="font-mono text-zinc-900">{style.fontSize}</div>
 </div>
 <div>
 <div className="text-xs font-medium text-zinc-500 mb-1">Line Height</div>
 <div className="font-mono text-zinc-900">{style.lineHeight}</div>
 </div>
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>

 {/* Font Files Download */}
 <div className="mt-12 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-8 lg:p-12 shadow-xl">
 <h3 className="text-2xl font-bold text-white mb-6">Download Font Files</h3>
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
 {fontFiles.map((font) => (
 <button
 key={font.id}
 onClick={() => onFontDownload?.(font.id)}
 className="group bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 rounded-lg p-4 transition-all duration-200 text-left active:scale-95"
 >
 <div className="flex items-start justify-between mb-2">
 <div className="flex-1 min-w-0">
 <div className="text-sm font-semibold text-white truncate">
 {font.fontFamily}
 </div>
 <div className="text-xs text-zinc-300">
 {font.weight} {font.style}
 </div>
 </div>
 <Download className="w-4 h-4 text-zinc-300 group-hover:text-white flex-shrink-0 ml-2" />
 </div>
 <div className="flex items-center gap-2 text-xs text-zinc-400">
 <span className="font-mono">{font.format}</span>
 <span>·</span>
 <span>{font.fileSize}</span>
 </div>
 </button>
 ))}
 </div>
 </div>
 </section>

 {/* Logos Section */}
 <section id="logos">
 <div className="mb-12">
 <div className="flex items-start justify-between mb-4">
 <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight">
 Logo Assets
 </h2>
 <button
 onClick={async () => {
 // Download all logos as zip
 const files = logoAssets.flatMap(logo =>
 logo.files.map(file => ({
 url: file.downloadUrl,
 filename: file.downloadUrl.split('/').pop() || `${logo.name}.${file.format.toLowerCase()}`
 }))
 )
 await downloadAsZip(files, 'Brand-Logos')
 }}
 className="flex items-center gap-2 px-4 py-2.5 bg-brand-action hover:bg-brand-action-hover text-white rounded-lg font-semibold transition-colors whitespace-nowrap"
 >
 <Download className="w-4 h-4" />
 Download All ({logoAssets.length})
 </button>
 </div>
 <p className="text-lg text-zinc-600 max-w-2xl">
 Download logo variations in multiple formats for print and digital use.
 </p>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
 {logoAssets.map((logo) => (
 <div
 key={logo.id}
 className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-zinc-200/50 border border-zinc-200 hover:shadow-xl hover:shadow-zinc-300/50:shadow-black/70 transition-all duration-300"
 >
 <div className="aspect-[4/3] bg-[#e6e7e8] flex items-center justify-center p-8 border-b border-zinc-200">
 {logo.files.find(f => f.format === 'SVG' || f.format === 'PNG') ? (
 <img
 src={logo.files.find(f => f.format === 'SVG')?.downloadUrl || logo.files.find(f => f.format === 'PNG')?.downloadUrl || '/assets/ADS-placeholderThm@3x.png'}
                  onError={(e) => { (e.target as HTMLImageElement).src = '/assets/ADS-placeholderThm@3x.png' }}
 alt={logo.name}
 loading="lazy"
 className="max-w-full max-h-full object-contain"
 />
 ) : (
 <div className="text-center text-zinc-400 text-sm font-medium">
 Logo Preview
 </div>
 )}
 </div>
 <div className="p-6 space-y-4">
 <div>
 <h3 className="text-lg font-bold text-zinc-900 mb-1">
 {logo.name}
 </h3>
 <p className="text-sm text-zinc-600">
 {logo.description}
 </p>
 </div>

 <div className="pt-2 border-t border-zinc-100">
 <p className="text-xs text-zinc-500 mb-3">
 {logo.usageGuidelines}
 </p>
 <div className="flex flex-wrap gap-2">
 {logo.files.map((file, idx) => (
 <button
 key={idx}
 onClick={() => onLogoDownload?.(logo.id, file.format)}
 className="group bg-brand-action hover:bg-brand-action-hover text-white px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 active:scale-95"
 >
 <Download className="w-3.5 h-3.5" />
 {file.format}
 <span className="text-zinc-400">({file.size})</span>
 </button>
 ))}
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>
 </section>

 {/* Brand Guidelines Section */}
 <section id="guidelines">
 <div className="mb-12">
 <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 mb-4 tracking-tight">
 Brand Guidelines
 </h2>
 <p className="text-lg text-zinc-600 max-w-2xl">
 Visual standards for correct brand usage.
 </p>
 </div>

 <div className="space-y-6">
 {brandGuidelines.map((guideline) => (
 <div
 key={guideline.id}
 className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-zinc-200/50 border border-zinc-200"
 >
 <div className="p-8 lg:p-10">
 <h3 className="text-2xl font-bold text-zinc-900 mb-4">
 {guideline.title}
 </h3>
 <p className="text-base text-zinc-700 leading-relaxed mb-6">
 {guideline.rule}
 </p>
 <div className="grid grid-cols-2 gap-4">
 <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
 <div className="text-xs font-bold text-emerald-700 uppercase tracking-wide mb-2">
 ✓ Do
 </div>
 <p className="text-sm text-zinc-700">
 {guideline.doExample}
 </p>
 </div>
 <div className="bg-red-50 border border-red-200 rounded-lg p-4">
 <div className="text-xs font-bold text-red-700 uppercase tracking-wide mb-2">
 ✗ Don't
 </div>
 <p className="text-sm text-zinc-700">
 {guideline.dontExample}
 </p>
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
