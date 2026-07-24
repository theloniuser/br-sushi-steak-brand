import { useEffect, useRef, useState } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download } from 'lucide-react'
import * as pdfjsLib from 'pdfjs-dist'
import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl

interface PdfModalProps {
  isOpen: boolean
  pdfUrl: string
  pdfName: string
  onClose: () => void
}

export function PdfModal({ isOpen, pdfUrl, pdfName, onClose }: PdfModalProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const docRef = useRef<pdfjsLib.PDFDocumentProxy | null>(null)
  const loadingTaskRef = useRef<pdfjsLib.PDFDocumentLoadingTask | null>(null)
  const renderTaskRef = useRef<ReturnType<pdfjsLib.PDFPageProxy['render']> | null>(null)
  const [pageNum, setPageNum] = useState(1)
  const [numPages, setNumPages] = useState(0)
  const [scale, setScale] = useState(1.2)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Load the document when opened
  useEffect(() => {
    if (!isOpen || !pdfUrl) return

    let cancelled = false
    setIsLoading(true)
    setError(null)
    setPageNum(1)
    setScale(1.2)

    const loadingTask = pdfjsLib.getDocument({ url: pdfUrl })
    loadingTaskRef.current = loadingTask

    loadingTask.promise
      .then((doc) => {
        if (cancelled) return
        docRef.current = doc
        setNumPages(doc.numPages)
        setIsLoading(false)
      })
      .catch((err) => {
        if (cancelled) return
        console.error('Failed to load PDF', err)
        setError('Unable to load this PDF.')
        setIsLoading(false)
      })

    return () => {
      cancelled = true
      loadingTaskRef.current?.destroy()
      loadingTaskRef.current = null
      docRef.current = null
    }
  }, [isOpen, pdfUrl])

  // Render the current page whenever page/scale/doc changes
  useEffect(() => {
    const doc = docRef.current
    const canvas = canvasRef.current
    if (!doc || !canvas || isLoading) return

    let cancelled = false

    doc.getPage(pageNum).then((page) => {
      if (cancelled) return
      const dpr = window.devicePixelRatio || 1
      const viewport = page.getViewport({ scale })
      const context = canvas.getContext('2d')
      if (!context) return

      canvas.width = viewport.width * dpr
      canvas.height = viewport.height * dpr
      canvas.style.width = `${viewport.width}px`
      canvas.style.height = `${viewport.height}px`
      context.scale(dpr, dpr)

      renderTaskRef.current?.cancel()
      const task = page.render({ canvasContext: context, viewport, canvas })
      renderTaskRef.current = task
      task.promise.catch(() => {})
    })

    return () => {
      cancelled = true
    }
  }, [pageNum, scale, isLoading])

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setPageNum((p) => Math.min(p + 1, numPages))
      if (e.key === 'ArrowLeft') setPageNum((p) => Math.max(p - 1, 1))
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKey)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose, numPages])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col animate-fade-in"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/90" />

      {/* Toolbar */}
      <div
        className="relative z-10 flex items-center justify-between gap-4 px-6 py-4 bg-black/60 backdrop-blur-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-white font-semibold truncate">{pdfName}</p>

        <div className="flex items-center gap-2">
          {numPages > 1 && (
            <>
              <button
                onClick={() => setPageNum((p) => Math.max(p - 1, 1))}
                disabled={pageNum <= 1}
                className="p-2 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 rounded-full transition-colors"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <span className="text-white text-sm tabular-nums min-w-[4.5rem] text-center">
                {pageNum} / {numPages}
              </span>
              <button
                onClick={() => setPageNum((p) => Math.min(p + 1, numPages))}
                disabled={pageNum >= numPages}
                className="p-2 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 rounded-full transition-colors"
                aria-label="Next page"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
              <div className="w-px h-6 bg-white/20 mx-1" />
            </>
          )}
          <button
            onClick={() => setScale((s) => Math.max(s - 0.2, 0.4))}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Zoom out"
          >
            <ZoomOut className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={() => setScale((s) => Math.min(s + 0.2, 3))}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Zoom in"
          >
            <ZoomIn className="w-5 h-5 text-white" />
          </button>
          <a
            href={pdfUrl}
            download
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Download PDF"
          >
            <Download className="w-5 h-5 text-white" />
          </a>
          <button
            onClick={onClose}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Page canvas */}
      <div
        className="relative flex-1 overflow-auto flex items-start justify-center p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {isLoading && <p className="text-white/70 mt-20">Loading PDF…</p>}
        {error && <p className="text-white/70 mt-20">{error}</p>}
        <canvas ref={canvasRef} className="shadow-2xl rounded-lg bg-white" />
      </div>
    </div>
  )
}
