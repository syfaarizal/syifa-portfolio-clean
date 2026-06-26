import type { ReactNode } from 'react'
import { useState } from 'react'
import Footer from '../../components/Footer'
import ProjectDetailModal from './ProjectDetailModal'
import { projects, type Project } from '../../data/projects'
import { navigateWithTransition } from '../../lib/navigation'

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" />
    <path d="M10 7h7v7" />
  </svg>
)

function ProjectButton({
  href,
  children,
  variant = 'ghost',
  onClick,
}: {
  href?: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
  onClick?: () => void
}) {
  const base =
    'inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2 font-sans text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 sm:w-auto'

  const classes =
    variant === 'primary'
      ? 'bg-burgundy text-white hover:bg-burgundy-900'
      : 'border border-[#E8DDD9] bg-white text-gray-800 hover:border-burgundy hover:text-burgundy'

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={`${base} ${classes}`}>
        {children}
        <ExternalIcon />
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={`${base} ${classes}`}>
      {children}
      <ArrowIcon />
    </button>
  )
}

function ProjectCard({
  project,
  onDetail,
}: {
  project: Project
  onDetail: (project: Project) => void
}) {
  return (
    <article className="group overflow-hidden rounded-[30px] border border-[#E8DDD9] bg-white/95 shadow-[0_18px_48px_rgba(122,15,22,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(122,15,22,0.1)]">
      <div className="overflow-hidden border-b border-[#EFE4E0] bg-[#f8f3f1]">
        <img
          src={project.img}
          alt={project.title}
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-burgundy">
              {project.category}
            </p>
            <h3 className="mt-2 font-serif text-[1.4rem] font-semibold leading-tight text-gray-950 sm:text-[1.7rem]">
              {project.title}
            </h3>
          </div>
          <span className="shrink-0 rounded-full border border-[#E8DDD9] bg-[#fcf7f6] px-3 py-1 font-sans text-xs font-semibold text-gray-600">
            {project.year}
          </span>
        </div>

        <p className="mt-4 max-w-md font-sans text-[0.98rem] leading-7 text-gray-600">
          {project.desc}
        </p>

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

        <div className="mt-6 flex flex-wrap gap-2">
          <ProjectButton href={project.demoUrl} variant="primary">
            Demo
          </ProjectButton>
          <ProjectButton href={project.sourceUrl}>Source</ProjectButton>
          <ProjectButton onClick={() => onDetail(project)}>Detail</ProjectButton>
        </div>
      </div>
    </article>
  )
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div className="page-shell page-enter min-h-screen bg-[linear-gradient(180deg,#fffdfc_0%,#fff7f6_100%)] text-gray-900">
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-burgundy/10 blur-3xl" />
          <div className="absolute right-0 top-48 h-80 w-80 rounded-full bg-[#e6c7cd]/40 blur-3xl" />
        </div>

        <section id="home" className="relative mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8 lg:pt-10">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={() => navigateWithTransition('/#projects')}
              className="inline-flex items-center gap-2 self-start rounded-full border border-[#E6DAD7] bg-white/90 px-4 py-2 font-sans text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-burgundy hover:text-burgundy"
            >
              <ArrowIcon />
              Back To Home
            </button>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
            <div className="relative z-10 max-w-3xl">
              <p className="section-label sm:text-[1.05rem]">Projects Showcase</p>
              <h1 className="mt-4 font-serif text-[clamp(2.6rem,11vw,5.2rem)] leading-[0.92] font-semibold tracking-tight text-gray-950">
                Selected work, simplified and easier to scan.
              </h1>
              <p className="mt-5 max-w-2xl font-sans text-[0.98rem] leading-7 text-gray-600 sm:text-[1.1rem]">
                A focused collection of projects with direct access to demo, source, and a detailed
                breakdown in a modal.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onDetail={setSelectedProject} />
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
}
