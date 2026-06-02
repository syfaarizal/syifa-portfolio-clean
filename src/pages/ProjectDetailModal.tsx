import type { ReactNode } from 'react'
import type { Project } from '../data/projects'

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

function SectionCard({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="rounded-[24px] border border-[#E8DDD9] bg-[#fffaf9] p-5">
      <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-500">
        {title}
      </p>
      <div className="mt-3 font-sans text-[0.98rem] leading-7 text-gray-600">
        {children}
      </div>
    </section>
  )
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 px-4 py-6 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/70 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.3)]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-modal-title-${project.id}`}
      >
        <div className="flex items-center justify-between border-b border-[#EAEAEA] px-5 py-4 sm:px-6">
          <div>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-burgundy">
              Project Detail
            </p>
            <h3
              id={`project-modal-title-${project.id}`}
              className="mt-1 font-serif text-[1.75rem] font-semibold leading-tight text-gray-950"
            >
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8DDD9] text-gray-600 transition-colors duration-200 hover:border-burgundy hover:text-burgundy"
            aria-label="Close project detail"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="max-h-[calc(92vh-72px)] overflow-y-auto">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="border-b border-[#EAEAEA] lg:border-b-0 lg:border-r">
              <div className="bg-[linear-gradient(180deg,#fffdfd_0%,#fff6f4_100%)] p-5 sm:p-6">
                <div className="overflow-hidden rounded-[26px] border border-[#E8DDD9] bg-white shadow-sm">
                  <img src={project.img} alt={project.title} className="h-[280px] w-full object-cover" />
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#E8DDD9] bg-white px-3 py-1 font-sans text-xs font-semibold text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4 p-5 sm:p-6">
              <SectionCard title="Project Overview">{project.detail.overview}</SectionCard>
              <SectionCard title="Challenge">{project.detail.challenge}</SectionCard>
              <SectionCard title="Solution">{project.detail.solution}</SectionCard>

              <section className="rounded-[24px] border border-[#E8DDD9] bg-[#fffaf9] p-5">
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

              <section className="rounded-[24px] border border-[#E8DDD9] bg-[#fffaf9] p-5">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-500">
                  Key Features
                </p>
                <ul className="mt-3 space-y-2 font-sans text-[0.98rem] leading-7 text-gray-600">
                  {project.detail.keyFeatures.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <SectionCard title="Design Process">{project.detail.designProcess}</SectionCard>
              <SectionCard title="Lessons Learned">{project.detail.lessonsLearned}</SectionCard>

              {/* <section className="rounded-[24px] border border-[#E8DDD9] bg-[#fffaf9] p-5">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-500">
                  Demo & Source
                </p>
                <div className="mt-3 space-y-2 font-sans text-[0.98rem] leading-7 text-gray-600">
                  <p>
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" className="font-semibold text-burgundy hover:underline">
                      Demo
                    </a>
                    {' '} - {project.demoUrl}
                  </p>
                  <p>
                    <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="font-semibold text-burgundy hover:underline">
                      Source
                    </a>
                    {' '} - {project.sourceUrl.replace('https://github.com/', '')}
                  </p>
                  <p>{project.detail.demoSource}</p>
                </div>
              </section> */}

              <section className="rounded-[24px] border border-[#E8DDD9] bg-[#4a0810] p-5 text-white">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-white/65">
                  Problem → Process → Outcome
                </p>
                <div className="mt-4 space-y-4 font-sans text-[0.98rem] leading-7 text-white/85">
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

              <div className="flex flex-wrap gap-2 pt-1">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-burgundy px-4 py-2 font-sans text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-burgundy-900"
                >
                  Open Demo
                  <ExternalIcon />
                </a>
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#E8DDD9] bg-white px-4 py-2 font-sans text-sm font-semibold text-gray-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-burgundy hover:text-burgundy"
                >
                  Open Source
                  <ExternalIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
