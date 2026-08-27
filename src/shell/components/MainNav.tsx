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
  logoAlt = 'BR Sushi & Steak Brand Guidelines',
  onNavigate,
}: MainNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavigate = (href: string) => {
    if (onNavigate) onNavigate(href)
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#772733] border-b border-white/10">
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
                  (e.target as HTMLImageElement).style.display = 'none'
                }}
              />
            ) : (
              <span
                className="text-white text-lg tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {logoAlt}
              </span>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigate(item.href)}
                className={`
                  text-sm tracking-wider uppercase transition-colors font-medium pb-1
                  ${item.isActive
                    ? 'text-white border-b-2 border-[#AD936D]'
                    : 'text-white/80 hover:text-white border-b-2 border-transparent'
                  }
                `}
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white/60 hover:text-white transition-colors"
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
        <div className="md:hidden border-t border-white/10 bg-[#772733]">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigate(item.href)}
                className={`
                  block w-full text-left px-3 py-3 text-sm tracking-wider uppercase transition-colors
                  ${item.isActive
                    ? 'text-white border-l-2 border-[#AD936D]'
                    : 'text-white/80 hover:text-white border-l-2 border-transparent'
                  }
                `}
                style={{ fontFamily: 'var(--font-sans)' }}
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
