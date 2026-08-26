import { useEffect } from 'react'
import { X } from 'lucide-react'

interface VideoModalProps {
  isOpen: boolean
  videoUrl: string
  videoName: string
  posterUrl?: string
  onClose: () => void
}

export function VideoModal({ isOpen, videoUrl, videoName, posterUrl, onClose }: VideoModalProps) {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90" />

      {/* Modal Content */}
      <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6 text-white" strokeWidth={2} />
        </button>

        {/* Video */}
        <video
          src={videoUrl}
          poster={posterUrl}
          controls
          autoPlay
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-white">
            Your browser doesn&apos;t support embedded video. <a href={videoUrl} download>{videoName}</a>
          </p>
        </video>
      </div>
    </div>
  )
}
