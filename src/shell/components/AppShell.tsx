import React from 'react'
import { MainNav } from './MainNav'

interface NavigationItem {
  label: string
  href: string
  isActive?: boolean
}

interface AppShellProps {
  children: React.ReactNode
  navigationItems: NavigationItem[]
  logoSrc?: string
  logoAlt?: string
  onNavigate?: (href: string) => void
}

export function AppShell({
  children,
  navigationItems,
  logoSrc,
  logoAlt = 'BR Sushi & Steak Brand Guidelines',
  onNavigate,
}: AppShellProps) {
  return (
    <div className="min-h-screen bg-stone-50">
      <MainNav
        navigationItems={navigationItems}
        logoSrc={logoSrc}
        logoAlt={logoAlt}
        onNavigate={onNavigate}
      />
      <main className="pt-36">
        {children}
      </main>
    </div>
  )
}
