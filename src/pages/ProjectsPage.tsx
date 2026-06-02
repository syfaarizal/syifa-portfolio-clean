import { useMemo, useState, type ReactNode } from 'react'
import Footer from '../components/Footer'
import {
  featuredProject,
  projectCategories,
  projectStacks,
  projectTimeline,
  projects,
} from '../data/projects'
import { navigateTo } from '../lib/navigation'

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

const SourceIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l-6-6 6-6" />
    <path d="M15 6l6 6-6 6" />
  </svg>
)

const DetailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 1 0 10 10" />
    <path d="M12 7v5l3 3" />
  </svg>
)

type ActionLinkProps = {
  href: string
  label: string
  icon: ReactNode
}

function ActionLink({ href, label, icon }: ActionLinkProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-[#E6DAD7] bg-white px-4 py-2 font-sans text-sm font-semibold text-gray-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-burgundy hover:text-burgundy"
    >
      {label}
      {icon}
    </a>
  )
}

function filterDescription(category: string, stack: string, count: number) {
  const parts = []

  if (category !== 'All') {
    parts.push(category)
  }

  if (stack !== 'All') {
    parts.push(stack)
  }

  if (parts.length === 0) {
    return `Showing all ${count} projects across the portfolio.`
  }

  return `Showing ${count} project${count > 1 ? 's' : ''} filtered by ${parts.join(' and ')}.`
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedStack, setSelectedStack] = useState('All')

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
      const matchesStack = selectedStack === 'All' || project.tags.includes(selectedStack)
      return matchesCategory && matchesStack
    })
  }, [selectedCategory, selectedStack])

  const featuredTags = featuredProject.tags.join(' · ')

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fffdfc_0%,#fff7f6_100%)] text-gray-900">
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-burgundy/10 blur-3xl" />
          <div className="absolute right-0 top-48 h-80 w-80 rounded-full bg-[#e6c7cd]/40 blur-3xl" />
          <div className="absolute bottom-20 left-1/2 h-48 w-[40rem] -translate-x-1/2 rounded-full bg-burgundy/5 blur-3xl" />
        </div>

        <section id="home" className="relative mx-auto max-w-7xl px-6 pb-16 pt-8 sm:px-8 lg:pt-10">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => navigateTo('/')}
              className="inline-flex items-center gap-2 rounded-full border border-[#E6DAD7] bg-white/90 px-4 py-2 font-sans text-sm font-semibold text-gray-700 shadow-sm backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-burgundy hover:text-burgundy"
            >
              <ArrowIcon />
              Back to Home
            </button>

            <div className="flex flex-wrap items-center gap-3 font-sans text-sm text-gray-500">
              <span className="rounded-full border border-[#E8DBD8] bg-white/85 px-3 py-1 backdrop-blur">
                {projects.length} projects
              </span>
              <span className="rounded-full border border-[#E8DBD8] bg-white/85 px-3 py-1 backdrop-blur">
                {projectStacks.length - 1} stack filters
              </span>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="relative z-10 max-w-3xl">
              <p className="section-label sm:text-[1.15rem]">Projects Showcase</p>
              <h1 className="mt-4 font-serif text-[clamp(3rem,6vw,5.5rem)] leading-[0.92] font-semibold tracking-tight text-gray-950">
                Built work, clear context, and a cleaner way to browse it.
              </h1>
              <p className="mt-5 max-w-2xl font-sans text-[1.05rem] leading-7 text-gray-600 sm:text-[1.15rem]">
                This page collects every project from the homepage into one curated space with filters, featured
                context, and a timeline that explains how the portfolio evolved.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#E7D9D5] bg-white/90 px-4 py-2 font-sans text-sm font-medium text-gray-700 shadow-sm">
                  Filter by category
                </span>
                <span className="rounded-full border border-[#E7D9D5] bg-white/90 px-4 py-2 font-sans text-sm font-medium text-gray-700 shadow-sm">
                  Filter by stack
                </span>
                <span className="rounded-full border border-[#E7D9D5] bg-white/90 px-4 py-2 font-sans text-sm font-medium text-gray-700 shadow-sm">
                  Featured project
                </span>
              </div>
            </div>

            <div className="relative z-10 grid gap-4">
              <div className="rounded-[28px] border border-white/70 bg-white/80 p-5 shadow-[0_20px_60px_rgba(122,15,22,0.08)] backdrop-blur">
                <p className="font-sans text-sm font-semibold uppercase tracking-[0.25em] text-burgundy">
                  Quick note
                </p>
                <p className="mt-3 font-sans text-[1.02rem] leading-7 text-gray-600">
                  The main showcase focuses on portfolio-ready cards. The featured panel below gives the strongest
                  project extra room, while the timeline explains the growth of the page itself.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-[#E8DDD9] bg-white/85 p-5 shadow-sm backdrop-blur">
                  <p className="font-sans text-xs uppercase tracking-[0.24em] text-gray-500">Featured</p>
                  <p className="mt-2 font-serif text-[2rem] font-semibold leading-none text-gray-950">
                    {featuredProject.title}
                  </p>
                </div>
                <div className="rounded-[24px] border border-[#E8DDD9] bg-[#7a0f16] p-5 text-white shadow-sm">
                  <p className="font-sans text-xs uppercase tracking-[0.24em] text-white/70">Primary stack</p>
                  <p className="mt-2 font-serif text-[2rem] font-semibold leading-none">{featuredTags}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 pb-8 sm:px-8">
          <div className="rounded-[32px] border border-[#E8DBD8] bg-white/85 p-5 shadow-[0_18px_48px_rgba(122,15,22,0.06)] backdrop-blur">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <p className="section-label sm:text-[1.05rem]">Filter</p>
                <h2 className="section-heading mt-2 sm:text-[2.5rem]">Browse by category or stack</h2>
                <p className="mt-3 font-sans text-[1rem] leading-7 text-gray-600">
                  {filterDescription(selectedCategory, selectedStack, filteredProjects.length)}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All')
                  setSelectedStack('All')
                }}
                className="inline-flex items-center gap-2 self-start rounded-full border border-[#E8DDD9] bg-white px-4 py-2 font-sans text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-burgundy hover:text-burgundy"
              >
                Reset filters
                <ArrowIcon />
              </button>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
                  Category
                </p>
                <div className="flex flex-wrap gap-2">
                  {projectCategories.map((category) => {
                    const active = selectedCategory === category
                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setSelectedCategory(category)}
                        className={`rounded-full border px-4 py-2 font-sans text-sm font-semibold transition-all duration-200 ${
                          active
                            ? 'border-burgundy bg-burgundy text-white shadow-sm'
                            : 'border-[#E8DDD9] bg-white text-gray-700 hover:border-burgundy hover:text-burgundy'
                        }`}
                      >
                        {category}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div>
                <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
                  Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {projectStacks.map((stack) => {
                    const active = selectedStack === stack
                    return (
                      <button
                        key={stack}
                        type="button"
                        onClick={() => setSelectedStack(stack)}
                        className={`rounded-full border px-4 py-2 font-sans text-sm font-semibold transition-all duration-200 ${
                          active
                            ? 'border-[#4a0810] bg-[#4a0810] text-white shadow-sm'
                            : 'border-[#E8DDD9] bg-white text-gray-700 hover:border-[#4a0810] hover:text-[#4a0810]'
                        }`}
                      >
                        {stack}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8">
          <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="section-label sm:text-[1.1rem]">Projects Showcase</p>
              <h2 className="section-heading sm:text-[3rem]">Main collection</h2>
              <p className="mt-3 font-sans text-[1rem] leading-7 text-gray-600">
                This grid contains every project from the homepage, now expanded with actions and richer context.
              </p>
            </div>

            <div className="rounded-full border border-[#E9DDD9] bg-white/90 px-4 py-2 font-sans text-sm text-gray-500 shadow-sm">
              {filteredProjects.length} result{filteredProjects.length === 1 ? '' : 's'}
            </div>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid gap-6 lg:grid-cols-2">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  id={`project-${project.id}`}
                  className="group overflow-hidden rounded-[30px] border border-[#E8DDD9] bg-white/90 shadow-[0_18px_48px_rgba(122,15,22,0.06)] backdrop-blur"
                >
                  <div className="grid gap-0 lg:grid-cols-[1.03fr_0.97fr]">
                    <div className="border-b border-[#EFE4E0] lg:border-b-0 lg:border-r">
                      <div
                        id={`project-${project.id}-demo`}
                        className="relative h-full min-h-[280px] overflow-hidden bg-gradient-to-br from-[#f7ece9] via-white to-[#f2dbdf]"
                      >
                        <img
                          src={project.img}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent p-5 text-white">
                          <p className="font-sans text-xs uppercase tracking-[0.28em] text-white/70">
                            Demo preview
                          </p>
                          <p className="mt-1 font-serif text-[1.7rem] font-semibold leading-tight">
                            {project.year}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col p-6 sm:p-7">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-burgundy">
                            {project.category}
                          </p>
                          <h3 className="mt-2 font-serif text-[clamp(1.8rem,2vw,2.4rem)] leading-tight font-semibold text-gray-950">
                            {project.title}
                          </h3>
                        </div>
                        <span className="rounded-full border border-[#E8DDD9] bg-[#fcf7f6] px-3 py-1 font-sans text-xs font-semibold text-gray-600">
                          {project.year}
                        </span>
                      </div>

                      <p className="mt-4 font-sans text-[1rem] leading-7 text-gray-600">{project.summary}</p>
                      <p className="mt-4 font-sans text-[0.98rem] leading-7 text-gray-500">{project.outcome}</p>

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

                      <div id={`project-${project.id}-source`} className="mt-6 rounded-[24px] border border-[#EDE2DE] bg-[#fffaf9] p-4">
                        <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
                          Source notes
                        </p>
                        <p className="mt-2 font-sans text-[0.96rem] leading-7 text-gray-600">{project.note}</p>
                      </div>

                      <div id={`project-${project.id}-detail`} className="mt-4 rounded-[24px] border border-[#eadad6] bg-white p-4">
                        <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
                          Detail
                        </p>
                        <p className="mt-2 font-sans text-[0.96rem] leading-7 text-gray-600">
                          Built to stay relevant with the same burgundy-and-neutral theme, but flexible enough for
                          filters, feature storytelling, and a card-first browsing flow.
                        </p>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        <ActionLink href={`#project-${project.id}-demo`} label="Demo" icon={<ExternalIcon />} />
                        <ActionLink href={`#project-${project.id}-source`} label="Source" icon={<SourceIcon />} />
                        <ActionLink href={`#project-${project.id}-detail`} label="Detail" icon={<DetailIcon />} />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-[28px] border border-[#E8DDD9] bg-white/90 p-8 text-center shadow-sm">
              <p className="font-serif text-[2rem] font-semibold text-gray-950">No projects match this filter.</p>
              <p className="mt-3 font-sans text-gray-600">Try a different category or stack combination.</p>
            </div>
          )}
        </section>

        <section className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[32px] border border-[#E8DDD9] bg-[#4a0810] p-7 text-white shadow-[0_20px_50px_rgba(74,8,16,0.18)]">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                Featured project
              </p>
              <h2 className="mt-3 font-serif text-[clamp(2.3rem,4vw,3.7rem)] leading-[0.96] font-semibold">
                {featuredProject.title}
              </h2>
              <p className="mt-4 font-sans text-[1rem] leading-7 text-white/78">
                {featuredProject.summary}
              </p>
              <p className="mt-4 font-sans text-[0.98rem] leading-7 text-white/70">
                {featuredProject.outcome}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/8 px-3 py-1 font-sans text-xs font-semibold text-white/85"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                <ActionLink href={`#project-${featuredProject.id}-demo`} label="Demo" icon={<ExternalIcon />} />
                <ActionLink href={`#project-${featuredProject.id}-source`} label="Source" icon={<SourceIcon />} />
                <ActionLink href={`#project-${featuredProject.id}-detail`} label="Detail" icon={<DetailIcon />} />
              </div>
            </div>

            <div className="rounded-[32px] border border-[#E8DDD9] bg-white/90 p-7 shadow-[0_18px_48px_rgba(122,15,22,0.06)] backdrop-blur">
              <p className="section-label sm:text-[1.05rem]">Why it matters</p>
              <h2 className="section-heading mt-2 sm:text-[3rem]">Featured perspective</h2>
              <div className="mt-5 grid gap-4">
                <div className="rounded-[24px] border border-[#E8DDD9] bg-[#fffaf9] p-5">
                  <p className="font-sans text-sm font-semibold uppercase tracking-[0.24em] text-gray-500">Outcome</p>
                  <p className="mt-2 font-sans text-[1rem] leading-7 text-gray-600">
                    {featuredProject.outcome}
                  </p>
                </div>
                <div className="rounded-[24px] border border-[#E8DDD9] bg-[#fffaf9] p-5">
                  <p className="font-sans text-sm font-semibold uppercase tracking-[0.24em] text-gray-500">Context</p>
                  <p className="mt-2 font-sans text-[1rem] leading-7 text-gray-600">
                    {featuredProject.note}
                  </p>
                </div>
                <div className="rounded-[24px] border border-[#E8DDD9] bg-[#fffaf9] p-5">
                  <p className="font-sans text-sm font-semibold uppercase tracking-[0.24em] text-gray-500">
                    Focus
                  </p>
                  <p className="mt-2 font-sans text-[1rem] leading-7 text-gray-600">
                    The design keeps the palette relevant to the homepage while giving project details enough room
                    to breathe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8">
          <div className="rounded-[32px] border border-[#E8DDD9] bg-white/90 p-7 shadow-[0_18px_48px_rgba(122,15,22,0.06)] backdrop-blur">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="section-label sm:text-[1.05rem]">Timeline</p>
                <h2 className="section-heading mt-2 sm:text-[3rem]">How the portfolio page came together</h2>
                <p className="mt-3 font-sans text-[1rem] leading-7 text-gray-600">
                  A compact timeline that connects the build story to the final presentation.
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-4 lg:grid-cols-4">
              {projectTimeline.map((item) => (
                <div
                  key={item.phase}
                  className="rounded-[24px] border border-[#E8DDD9] bg-[#fffaf9] p-5"
                >
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-burgundy">
                    Step {item.phase}
                  </p>
                  <h3 className="mt-3 font-serif text-[1.45rem] font-semibold leading-tight text-gray-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-sans text-[0.98rem] leading-7 text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
