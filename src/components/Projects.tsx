const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

const projects = [
  {
    id: 1,
    title: 'Login Page Showcase — LIBR Brand',
    desc: 'My collection of creative login page templates built with clean and modern front-end code.',
    tags: ['Tailwind CSS', 'TypeScript'],
    img: '/assets/projects/showcase-review.png',
  },
  {
    id: 2,
    title: 'CruisePoint Indonesia – Landing Page',
    desc: 'A professional and responsive landing page built for CruisePoint Indonesia.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    img: '/assets/projects/cruisePoint-preview.png',
  },
  {
    id: 3,
    title: 'Pomodoro Timer FocusFlow',
    desc: 'Clean and minimalistic UI design for a Pomodoro timer application.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    img: '/assets/projects/focusflow-preview.png',
  },
]

export default function Projects() {
  return (
    <div id="projects">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="section-label sm:text-[1.2rem]">Featured Projects</p>
          <h2 className="section-heading sm:text-[3rem]">Projects That Solve Real Problems</h2>
          <div className="mt-3 h-0.5 w-10 rounded-full bg-burgundy" />
          <p className="mt-4 max-w-2xl font-sans text-[1.3rem] leading-6 text-gray-500">
            A selection of products, tools, and systems I've built.
          </p>
        </div>
        <a
          href="#"
          className="flex items-center gap-1.5 self-start font-sans sm:text-[1rem] font-medium text-burgundy transition-all duration-200 hover:gap-2.5 lg:pb-2"
        >
          View All Projects <ArrowIcon />
        </a>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-3 gap-4">
        {projects.map(({ id, title, desc, tags, img }) => (
          <div
            key={id}
            className="card-base overflow-hidden group cursor-pointer hover:shadow-card transition-shadow duration-200"
          >
            {/* Thumbnail */}
            <div className="h-36 bg-gray-100 overflow-hidden">
              <img src={img} alt={title} className="w-full h-full object-cover" />
            </div>

            {/* Info */}
            <div className="p-4">
              <h3 className="font-sans font-semibold text-gray-900 sm:text-[1.25rem] mb-0.5">{title}</h3>
              <p className="font-sans text-gray-400 sm:text-[0.95rem] mb-3">{desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-sans text-[13px] font-medium text-gray-500 bg-gray-100 rounded-md px-2 py-0.5 border border-[#EAEAEA]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
