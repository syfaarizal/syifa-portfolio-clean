import { createPortal } from 'react-dom'
import { useEffect, type ReactNode } from 'react'
import type { Project } from '../../data/projects'

type ProjectDetailModalProps = {
  project: Project | null
  onClose: () => void
}

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="M6 6l12 12" />
  </svg>
)

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" />
    <path d="M10 7h7v7" />
  </svg>
)

function Section({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section>
      <div className="flex items-center gap-3">
        <span className="h-[3px] w-6 rounded-full bg-burgundy/70" aria-hidden="true" />
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-burgundy">
          {title}
        </p>
      </div>
      <div className="mt-3 font-sans text-[0.98rem] leading-7 text-gray-600">{children}</div>
    </section>
  )
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    if (!project) return

    const previousOverflow = document.body.style.overflow
    const previousPaddingRight = document.body.style.paddingRight
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    return () => {
      document.body.style.overflow = previousOverflow
      document.body.style.paddingRight = previousPaddingRight
    }
  }, [project])

  if (!project) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 px-4 py-6 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-[32px] border border-white/70 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.3)]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-modal-title-${project.id}`}
      >
        <header className="shrink-0 border-b border-[#EFE7E4] bg-[linear-gradient(180deg,#fffdfd_0%,#fff8f6_100%)] px-6 py-5 sm:px-8 sm:py-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-burgundy">
                {project.category}
              </p>
              <h3
                id={`project-modal-title-${project.id}`}
                className="mt-2 max-w-[100ch] font-serif text-[1.7rem] font-semibold leading-tight text-gray-950 sm:text-[2.15rem]"
              >
                {project.title}
              </h3>
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                  {project.year}
                </span>
                <span className="h-3 w-px bg-[#E3D8D4]" aria-hidden="true" />
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#E8DDD9] bg-white/80 px-3 py-1 font-sans text-xs font-semibold text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E8DDD9] bg-white/70 text-gray-600 transition-colors duration-200 hover:border-burgundy hover:text-burgundy"
              aria-label="Close project detail"
            >
              <CloseIcon />
            </button>
          </div>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-7">
          <div className="grid gap-x-10 gap-y-7 lg:grid-cols-2">
            <div className="space-y-7">
              <Section title="Overview">{project.detail.overview}</Section>
              <Section title="Challenge">{project.detail.challenge}</Section>
              <Section title="Solution">{project.detail.solution}</Section>
              <Section title="Design Process">{project.detail.designProcess}</Section>
            </div>

            <div className="space-y-7">
              <section className="rounded-[22px] border border-[#EFE7E4] bg-[#fffaf9] p-5">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-500">
                  Tech Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.detail.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#E8DDD9] bg-white px-3 py-1 font-sans text-xs font-semibold text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3">
                  <span className="h-[3px] w-6 rounded-full bg-burgundy/70" aria-hidden="true" />
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-burgundy">
                    Key Features
                  </p>
                </div>
                <ul className="mt-3 space-y-2.5 font-sans text-[0.98rem] leading-7 text-gray-600">
                  {project.detail.keyFeatures.map((feature) => (
                    <li key={feature} className="flex gap-2.5">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-[22px] border border-[#EFE7E4] bg-[#4a0810] p-5 text-white">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-white/65">
                  Problem → Process → Outcome
                </p>
                <div className="mt-4 space-y-4 font-sans text-[0.95rem] leading-7 text-white/85">
                  <div>
                    <p className="font-semibold text-white">Problem</p>
                    <p>{project.detail.problem}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Process</p>
                    <p>{project.detail.process}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Outcome</p>
                    <p>{project.detail.outcome}</p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <section className="mt-8 rounded-[22px] border border-[#EFE7E4] bg-[#fffaf9] p-6 sm:p-7">
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-6 rounded-full bg-burgundy/70" aria-hidden="true" />
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-burgundy">
                Lessons Learned
              </p>
            </div>
            <p className="mt-4 max-w-[100ch] font-serif text-[1.05rem] font-semibold leading-8 text-gray-700 sm:text-[1.12rem]">
              {project.detail.lessonsLearned}
            </p>
          </section>
        </div>

        <footer className="shrink-0 border-t border-[#EFE7E4] bg-[#fffaf9] px-6 py-4 sm:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-sans text-sm text-gray-500">
              Interested in a build like this?
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-burgundy px-5 py-2.5 font-sans text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-burgundy-900"
              >
                Open Demo
                <ExternalIcon />
              </a>
              {project.sourceUrl ? (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#E8DDD9] bg-white px-5 py-2.5 font-sans text-sm font-semibold text-gray-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-burgundy hover:text-burgundy"
                >
                  Open Source
                  <ExternalIcon />
                </a>
              ) : null}
            </div>
          </div>
        </footer>
      </div>
    </div>
  , document.body)
}
