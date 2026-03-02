import { AppShell } from './components/AppShell'

export default function ShellPreview() {
 const navigationItems = [
 { label: 'Brand Foundation', href: '/brand-foundation', isActive: false },
 { label: 'Visual Assets', href: '/visual-assets', isActive: false },
 { label: 'Architectural & Spatial Design', href: '/architectural-and-spatial-design', isActive: false },
 { label: 'Menus & Signage', href: '/menus-signage', isActive: false },
 ]

 return (
 <AppShell
 navigationItems={navigationItems}
 logoSrc="/assets/ADS-placeholderThm@3x.png"
 logoAlt="[Brand] Brand Guidelines"
 onNavigate={(href) => console.log('Navigate to:', href)}
 >
 {/* Table of Contents - Default View */}
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
 <div className="text-center mb-12">
 <h1 className="text-4xl font-bold text-slate-900 mb-4">
 [Brand] Brand Guidelines
 </h1>
 <p className="text-lg text-slate-600 max-w-3xl mx-auto">
 A comprehensive brand guidelines website that provides all stakeholders—internal teams, franchisees, partners, contractors, and agencies—with instant access to logos, brand assets, photos, menus, and signage specifications.
 </p>
 </div>

 <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
 {/* Section 1 */}
 <div className="bg-white border border-slate-200 rounded-lg p-6 hover:border-zinc-300:border-zinc-700 transition-colors cursor-pointer">
 <div className="flex items-center justify-between mb-3">
 <span className="text-sm font-semibold text-zinc-600">Section 1</span>
 </div>
 <h2 className="text-xl font-bold text-slate-900 mb-2">
 Brand Foundation
 </h2>
 <p className="text-slate-600">
 Core visual identity including colors, typography, logos, and usage guidelines.
 </p>
 </div>

 {/* Section 2 */}
 <div className="bg-white border border-slate-200 rounded-lg p-6 hover:border-zinc-300:border-zinc-700 transition-colors cursor-pointer">
 <div className="flex items-center justify-between mb-3">
 <span className="text-sm font-semibold text-zinc-600">Section 2</span>
 </div>
 <h2 className="text-xl font-bold text-slate-900 mb-2">
 Visual Assets
 </h2>
 <p className="text-slate-600">
 Graphics, photos, marketing materials, and promotional assets.
 </p>
 </div>

 {/* Section 3 */}
 <div className="bg-white border border-slate-200 rounded-lg p-6 hover:border-zinc-300:border-zinc-700 transition-colors cursor-pointer">
 <div className="flex items-center justify-between mb-3">
 <span className="text-sm font-semibold text-zinc-600">Section 3</span>
 </div>
 <h2 className="text-xl font-bold text-slate-900 mb-2">
 Architectural & Spatial Design
 </h2>
 <p className="text-slate-600">
 Construction plans, elevations, measurements, and material specifications.
 </p>
 </div>

 {/* Section 4 */}
 <div className="bg-white border border-slate-200 rounded-lg p-6 hover:border-zinc-300:border-zinc-700 transition-colors cursor-pointer">
 <div className="flex items-center justify-between mb-3">
 <span className="text-sm font-semibold text-zinc-600">Section 4</span>
 </div>
 <h2 className="text-xl font-bold text-slate-900 mb-2">
 Menus & Signage
 </h2>
 <p className="text-slate-600">
 Food menu designs, signage templates, and wayfinding standards.
 </p>
 </div>

 </div>
 </div>
 </AppShell>
 )
}
