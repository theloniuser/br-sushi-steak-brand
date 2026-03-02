import { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface NavigationItem {
 label: string
 href: string
 isActive?: boolean
}

interface MainNavProps {
 navigationItems: NavigationItem[]
 logoSrc?: string
 logoAlt?: string
 onNavigate?: (href: string) => void
}

export function MainNav({
 navigationItems,
 logoSrc,
 logoAlt = '[Brand Name] Brand Guidelines',
 onNavigate,
}: MainNavProps) {
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

 const handleNavigate = (href: string) => {
 if (onNavigate) {
 onNavigate(href)
 }
 setMobileMenuOpen(false)
 }

 return (
 <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
 <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex items-center justify-between h-36">
 {/* Logo */}
 <div className="flex-shrink-0">
 {logoSrc ? (
 <img
 src={logoSrc}
 alt={logoAlt}
 className="h-32 w-auto"
 onError={(e) => {
 (e.target as HTMLImageElement).src = '/assets/ADS-placeholderThm@3x.png'
 }}
 />
 ) : (
 <div className="text-lg font-semibold text-slate-900">
 {logoAlt}
 </div>
 )}
 </div>

 {/* Desktop Navigation */}
 <div className="hidden md:flex md:items-center md:space-x-1">
 {navigationItems.map((item) => (
 <button
 key={item.href}
 onClick={() => handleNavigate(item.href)}
 className={`
 px-3 py-2 rounded-md text-sm font-medium transition-colors
 ${
 item.isActive
 ? 'bg-brand-action-hover text-white'
 : 'bg-brand-action text-white hover:bg-brand-action-hover'
 }
 `}
 >
 {item.label}
 </button>
 ))}
 </div>

 {/* Mobile menu button */}
 <div className="md:hidden">
 <button
 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
 className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100 hover:text-slate-900"
 aria-expanded={mobileMenuOpen}
 >
 <span className="sr-only">Open main menu</span>
 {mobileMenuOpen ? (
 <X className="block h-6 w-6" />
 ) : (
 <Menu className="block h-6 w-6" />
 )}
 </button>
 </div>
 </div>
 </nav>

 {/* Mobile Navigation */}
 {mobileMenuOpen && (
 <div className="md:hidden border-t border-slate-200 bg-white">
 <div className="px-2 pt-2 pb-3 space-y-1">
 {navigationItems.map((item) => (
 <button
 key={item.href}
 onClick={() => handleNavigate(item.href)}
 className={`
 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors
 ${
 item.isActive
 ? 'bg-brand-action-hover text-white'
 : 'bg-brand-action text-white hover:bg-brand-action-hover'
 }
 `}
 >
 {item.label}
 </button>
 ))}
 </div>
 </div>
 )}
 </header>
 )
}
