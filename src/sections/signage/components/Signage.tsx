import { Download, ZoomIn } from 'lucide-react'
import type { SignageProps } from '@/../product/sections/signage/types'
import { downloadAsZip } from '@/lib/downloadUtils'

export function Signage({
  signageStandards,
  wayfinding,
  promotional,
  onSignageDownload,
  onSignageView
}: SignageProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative bg-zinc-800 bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/30"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
              Signage
            </h1>
            <p className="text-xl font-semibold text-white leading-relaxed drop-shadow-md">
              Comprehensive signage examples, wayfinding systems, and promotional materials for consistent brand presentation.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 space-y-32">
        {/* Environmental Section */}
        <div>
          <div className="mb-16">
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight">
                Environmental
              </h2>
              <button
                onClick={async () => {
                  // Download all environmental signage as zip
                  const allEnvironmental = [...signageStandards, ...wayfinding]
                  const files = allEnvironmental.flatMap(item =>
                    item.files.map(file => ({
                      url: file.downloadUrl,
                      filename: file.downloadUrl.split('/').pop() || `${item.name}.${file.format.toLowerCase()}`
                    }))
                  )
                  await downloadAsZip(files, '[Brand]-Signage-Environmental')
                }}
                className="flex items-center gap-2 px-4 py-2.5 bg-brand-action hover:bg-brand-action-hover text-white rounded-lg font-semibold transition-colors whitespace-nowrap"
              >
                <Download className="w-4 h-4" />
                Download All ({signageStandards.length + wayfinding.length})
              </button>
            </div>
            <p className="text-xl text-zinc-600 max-w-3xl">
              Interior and exterior signage for [Brand] locations.
            </p>
          </div>

          {/* Signage Standards and Wayfinding - Combined into single grid */}
          <section id="signage-standards">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {signageStandards.map((signage) => (
                <div
                  key={signage.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-zinc-200/50 border border-zinc-200 hover:shadow-xl hover:shadow-zinc-300/50 transition-all duration-300 group"
                >
                  <div
                    className="relative aspect-[4/3] bg-[#e6e7e8] overflow-hidden cursor-pointer"
                    onClick={() => onSignageView?.(signage.previewUrl, signage.name)}
                  >
                    <img
                      src={signage.previewUrl || '/assets/ADS-placeholderThm@3x.png'}
                      onError={(e) => { (e.target as HTMLImageElement).src = '/assets/ADS-placeholderThm@3x.png' }}
                      alt={signage.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay on Hover - Desktop only */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 pointer-events-none">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          onSignageView?.(signage.previewUrl, signage.name)
                        }}
                        className="p-3 bg-white/90 hover:bg-white rounded-full transition-colors pointer-events-auto"
                        title="View Full Size"
                      >
                        <ZoomIn className="w-5 h-5 text-zinc-900" strokeWidth={2} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          onSignageDownload?.(signage.id, 'PNG')
                        }}
                        className="p-3 bg-brand-action hover:bg-brand-action-hover rounded-full transition-colors pointer-events-auto"
                        title="Download"
                      >
                        <Download className="w-5 h-5 text-white" strokeWidth={2} />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-zinc-900 mb-1">
                      {signage.name}
                    </h4>
                    <p className="text-sm text-zinc-600">
                      {signage.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Wayfinding items continue in same grid */}
              {wayfinding.map((element) => (
                <div
                  key={element.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-zinc-200/50 border border-zinc-200 hover:shadow-xl hover:shadow-zinc-300/50 transition-all duration-300 group"
                >
                  <div
                    className="relative aspect-[4/3] bg-[#e6e7e8] overflow-hidden cursor-pointer"
                    onClick={() => onSignageView?.(element.previewUrl, element.name)}
                  >
                    <img
                      src={element.previewUrl || '/assets/ADS-placeholderThm@3x.png'}
                      onError={(e) => { (e.target as HTMLImageElement).src = '/assets/ADS-placeholderThm@3x.png' }}
                      alt={element.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay on Hover - Desktop only */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 pointer-events-none">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          onSignageView?.(element.previewUrl, element.name)
                        }}
                        className="p-3 bg-white/90 hover:bg-white rounded-full transition-colors pointer-events-auto"
                        title="View Full Size"
                      >
                        <ZoomIn className="w-5 h-5 text-zinc-900" strokeWidth={2} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          onSignageDownload?.(element.id, 'PNG')
                        }}
                        className="p-3 bg-brand-action hover:bg-brand-action-hover rounded-full transition-colors pointer-events-auto"
                        title="Download"
                      >
                        <Download className="w-5 h-5 text-white" strokeWidth={2} />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-zinc-900 mb-1">
                      {element.name}
                    </h4>
                    <p className="text-sm text-zinc-600">
                      {element.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Promotional Section */}
        <div>
          <div className="mb-16">
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight">
                Promotional
              </h2>
              <button
                onClick={async () => {
                  // Download all promotional signage as zip
                  const files = promotional.flatMap(promo =>
                    promo.files.map(file => ({
                      url: file.downloadUrl,
                      filename: file.downloadUrl.split('/').pop() || `${promo.name}.${file.format.toLowerCase()}`
                    }))
                  )
                  await downloadAsZip(files, '[Brand]-Signage-Promotional')
                }}
                className="flex items-center gap-2 px-4 py-2.5 bg-brand-action hover:bg-brand-action-hover text-white rounded-lg font-semibold transition-colors whitespace-nowrap"
              >
                <Download className="w-4 h-4" />
                Download All ({promotional.length})
              </button>
            </div>
            <p className="text-xl text-zinc-600 max-w-3xl">
              Seasonal campaigns, limited-time offers, and event-based promotional signage.
            </p>
          </div>

          <section id="promotional">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {promotional.map((promo) => (
                <div
                  key={promo.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-zinc-200/50 border border-zinc-200 hover:shadow-xl hover:shadow-zinc-300/50 transition-all duration-300 group"
                >
                  <div
                    className="relative aspect-[4/3] bg-[#e6e7e8] overflow-hidden cursor-pointer"
                    onClick={() => onSignageView?.(promo.previewUrl, promo.name)}
                  >
                    <img
                      src={promo.previewUrl || '/assets/ADS-placeholderThm@3x.png'}
                      onError={(e) => { (e.target as HTMLImageElement).src = '/assets/ADS-placeholderThm@3x.png' }}
                      alt={promo.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay on Hover - Desktop only */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 pointer-events-none">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          onSignageView?.(promo.previewUrl, promo.name)
                        }}
                        className="p-3 bg-white/90 hover:bg-white rounded-full transition-colors pointer-events-auto"
                        title="View Full Size"
                      >
                        <ZoomIn className="w-5 h-5 text-zinc-900" strokeWidth={2} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          onSignageDownload?.(promo.id, 'PNG')
                        }}
                        className="p-3 bg-brand-action hover:bg-brand-action-hover rounded-full transition-colors pointer-events-auto"
                        title="Download"
                      >
                        <Download className="w-5 h-5 text-white" strokeWidth={2} />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-zinc-900 mb-1">
                      {promo.name}
                    </h4>
                    <p className="text-sm text-zinc-600">
                      {promo.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
