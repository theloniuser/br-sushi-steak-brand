import { createBrowserRouter, Navigate } from 'react-router-dom'
import { ScreenDesignFullscreen } from '@/components/ScreenDesignPage'

export const router = createBrowserRouter([
 {
 path: '/',
 element: <Navigate to="/sections/brand-foundation/screen-designs/BrandFoundation/fullscreen" replace />,
 },
 {
 path: '/sections/:sectionId/screen-designs/:screenDesignName/fullscreen',
 element: <ScreenDesignFullscreen />,
 },
 {
 path: '*',
 element: <Navigate to="/sections/brand-foundation/screen-designs/BrandFoundation/fullscreen" replace />,
 },
])
