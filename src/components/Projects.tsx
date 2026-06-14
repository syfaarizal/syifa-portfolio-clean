import { projects } from '../data/projects'
import { navigateWithTransition } from '../lib/navigation'

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.id >= 1 && project.id <= 3)

  return (
    <div id="projects">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="section-label sm:text-[1.2rem]">Featured Projects</p>
          <h2 className="section-heading sm:text-[3rem]">Projects That Solve Real Problems</h2>
          <div className="mt-3 h-0.5 w-10 rounded-full bg-burgundy" />
          <p className="mt-4 max-w-2xl font-sans text-[1rem] leading-7 text-gray-500 sm:text-[1.15rem]">
            A selection of products, tools, and systems I&apos;ve built.
          </p>
        </div>
        <button
          type="button"
          onClick={() => navigateWithTransition('/projects')}
          className="group flex items-center gap-2 self-start font-sans font-medium text-burgundy transition-all duration-200 hover:gap-2.5 lg:pb-2"
        >
          <span className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-burgundy shadow-[0_0_0_0_rgba(122,15,22,0.35)] motion-safe:animate-attention-pulse motion-reduce:animate-none"
            />
            <span className="relative">
              View All Projects
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-burgundy/70 transition-transform duration-300 group-hover:scale-x-100"
              />
            </span>
          </span>
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">
            <ArrowIcon />
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map(({ id, title, desc, tags, img }) => (
          <article
            key={id}
            className="card-base group overflow-hidden transition-shadow duration-200 hover:shadow-card"
          >
            <div className="aspect-[4/3] overflow-hidden bg-gray-100">
              <img src={img} alt={title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
            </div>

            <div className="p-4">
              <h3 className="mb-0.5 font-sans text-[1.05rem] font-semibold text-gray-900 sm:text-[1.25rem]">{title}</h3>
              <p className="mb-3 font-sans text-[0.92rem] text-gray-500 sm:text-[0.95rem]">{desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-[#EAEAEA] bg-gray-100 px-2 py-0.5 font-sans text-[13px] font-medium text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
