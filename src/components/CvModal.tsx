import { createPortal } from 'react-dom'
import { useEffect, type ReactNode } from 'react'

const CV_PATH = '/assets/cv/Syifa_Fauziyah_Arizal_CV.pdf'
const CV_FILE = 'Syifa_Fauziyah_Arizal_CV.pdf'

type CvModalProps = {
  open: boolean
  onClose: () => void
}

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="M6 6l12 12" />
  </svg>
)

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
  </svg>
)

const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" />
    <path d="M10 7h7v7" />
  </svg>
)

function PdfFallback({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
      {children}
    </div>
  )
}

export default function CvModal({ open, onClose }: CvModalProps) {
  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    const previousPaddingRight = document.body.style.paddingRight
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.body.style.paddingRight = previousPaddingRight
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/60 px-3 py-3 backdrop-blur-sm sm:px-6 sm:py-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="flex h-[calc(100vh-1.5rem)] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/60 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:h-[calc(100vh-3rem)] sm:max-h-[900px] sm:rounded-[28px]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
      >
        <div className="flex items-center justify-between gap-3 border-b border-[#EAEAEA] px-4 py-3 sm:px-6 sm:py-4">
          <div className="min-w-0">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-burgundy sm:text-[11px]">
              Curriculum Vitae
            </p>
            <h3
              id="cv-modal-title"
              className="mt-0.5 truncate font-serif text-[1.35rem] font-semibold leading-tight text-gray-950 sm:text-[1.75rem]"
            >
              Syifa Fauziyah Arizal
            </h3>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={CV_PATH}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#E8DDD9] bg-white px-3 py-2 font-sans text-xs font-semibold text-gray-800 transition-colors duration-200 hover:border-burgundy hover:text-burgundy sm:px-4 sm:text-sm"
              aria-label="Buka CV di tab baru"
            >
              <ExternalIcon />
              <span>Buka</span>
            </a>
            <a
              href={CV_PATH}
              download={CV_FILE}
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#E8DDD9] bg-white px-3 py-2 font-sans text-xs font-semibold text-gray-800 transition-colors duration-200 hover:border-burgundy hover:text-burgundy sm:px-4 sm:text-sm"
              aria-label="Download CV"
            >
              <DownloadIcon />
              <span className="hidden sm:inline">Download</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8DDD9] text-gray-600 transition-colors duration-200 hover:border-burgundy hover:text-burgundy"
              aria-label="Close CV"
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="relative min-h-0 flex-1 bg-[#f4f1f0]">
          <iframe
            src={`${CV_PATH}#view=FitH`}
            title="Pratinjau CV Syifa Fauziyah Arizal"
            className="h-full w-full border-0"
          >
            <PdfFallback>
              <p className="font-sans text-sm text-gray-600">
                Browser kamu belum bisa menampilkan PDF di sini.
              </p>
              <a
                href={CV_PATH}
                download={CV_FILE}
                className="rounded-xl bg-burgundy px-5 py-2.5 font-sans text-sm font-semibold text-white transition-colors duration-200 hover:bg-burgundy-900"
              >
                Download CV
              </a>
            </PdfFallback>
          </iframe>
        </div>
      </div>
    </div>,
    document.body
  )
}
