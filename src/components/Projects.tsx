const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

/* Project thumbnail SVGs */
const LibrThumbnail = () => (
  <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="320" height="200" fill="#1a1a2e"/>
    <rect x="20" y="16" width="60" height="8" rx="4" fill="#7A0F16"/>
    <rect x="20" y="32" width="140" height="16" rx="4" fill="#ffffff" opacity="0.9"/>
    <rect x="20" y="56" width="100" height="10" rx="4" fill="#ffffff" opacity="0.4"/>
    <rect x="20" y="74" width="80" height="10" rx="4" fill="#ffffff" opacity="0.4"/>
    <rect x="20" y="100" width="90" height="28" rx="6" fill="#7A0F16"/>
    <rect x="120" y="100" width="90" height="28" rx="6" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.6"/>
    <circle cx="240" cy="80" r="60" fill="#7A0F16" opacity="0.15"/>
    <circle cx="240" cy="80" r="44" fill="#7A0F16" opacity="0.2"/>
    <text x="216" y="84" fill="white" fontSize="12" fontFamily="sans-serif" opacity="0.6">Portfolio</text>
    <text x="18" y="170" fill="#7A0F16" fontSize="18" fontWeight="bold" fontFamily="serif">Elevate Your</text>
    <text x="18" y="188" fill="#7A0F16" fontSize="18" fontWeight="bold" fontFamily="serif">Digital Presence</text>
  </svg>
)

const EcommerceThumbnail = () => (
  <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="320" height="200" fill="#f5f0eb"/>
    <rect x="16" y="14" width="288" height="172" rx="8" fill="#fff" stroke="#eaeaea" strokeWidth="1"/>
    <rect x="28" y="26" width="60" height="8" rx="4" fill="#7A0F16"/>
    <rect x="28" y="40" width="120" height="6" rx="3" fill="#e0e0e0"/>
    <rect x="28" y="54" width="100" height="6" rx="3" fill="#e0e0e0"/>
    <rect x="28" y="72" width="70" height="24" rx="6" fill="#7A0F16"/>
    <rect x="160" y="20" width="130" height="160" rx="8" fill="#e8d5c0" opacity="0.6"/>
    <circle cx="225" cy="90" r="44" fill="#c4a882" opacity="0.5"/>
    <circle cx="225" cy="90" r="32" fill="#a0836a" opacity="0.6"/>
  </svg>
)

const TaskflowThumbnail = () => (
  <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="320" height="200" fill="#f8faff"/>
    <rect x="14" y="14" width="88" height="172" rx="8" fill="#fff" stroke="#eaeaea" strokeWidth="1"/>
    <rect x="22" y="26" width="72" height="8" rx="4" fill="#e8eaf6"/>
    <rect x="22" y="42" width="72" height="6" rx="3" fill="#7A0F16" opacity="0.7"/>
    <rect x="22" y="56" width="72" height="6" rx="3" fill="#e0e0e0"/>
    <rect x="22" y="70" width="72" height="6" rx="3" fill="#e0e0e0"/>
    <rect x="22" y="84" width="72" height="6" rx="3" fill="#e0e0e0"/>
    <rect x="108" y="14" width="198" height="80" rx="8" fill="#fff" stroke="#eaeaea" strokeWidth="1"/>
    <rect x="116" y="24" width="60" height="8" rx="4" fill="#e8eaf6"/>
    <rect x="116" y="40" width="172" height="40" rx="6" fill="#f0f4ff"/>
    <rect x="108" y="100" width="95" height="86" rx="8" fill="#fff" stroke="#eaeaea" strokeWidth="1"/>
    <rect x="116" y="112" width="40" height="6" rx="3" fill="#7A0F16" opacity="0.7"/>
    <rect x="116" y="126" width="79" height="48" rx="6" fill="#e8f5e9"/>
    <rect x="208" y="100" width="98" height="86" rx="8" fill="#fff" stroke="#eaeaea" strokeWidth="1"/>
    <rect x="216" y="112" width="40" height="6" rx="3" fill="#e0e0e0"/>
    <rect x="216" y="126" width="82" height="48" rx="6" fill="#fff3e0"/>
  </svg>
)

const projects = [
  {
    id: 1,
    title: 'LIBR Portfolio',
    desc: 'Personal Portfolio Website',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    Thumbnail: LibrThumbnail,
  },
  {
    id: 2,
    title: 'E-Commerce',
    desc: 'Modern E-Commerce Website',
    tags: ['React', 'Redux', 'Tailwind CSS'],
    Thumbnail: EcommerceThumbnail,
  },
  {
    id: 3,
    title: 'TaskFlow',
    desc: 'Task Management Dashboard',
    tags: ['React', 'TypeScript', 'Chart.js'],
    Thumbnail: TaskflowThumbnail,
  },
]

export default function Projects() {
  return (
    <div id="projects">
      {/* Header row */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <p className="section-label">Featured Projects</p>
          <h2 className="font-serif text-[1.9rem] font-semibold text-gray-900">Selected Work</h2>
        </div>
        <a
          href="#"
          className="font-sans text-sm font-medium text-burgundy flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200"
        >
          View All Projects <ArrowIcon />
        </a>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-3 gap-4">
        {projects.map(({ id, title, desc, tags, Thumbnail }) => (
          <div
            key={id}
            className="card-base overflow-hidden group cursor-pointer hover:shadow-card transition-shadow duration-200"
          >
            {/* Thumbnail */}
            <div className="h-36 bg-gray-100 overflow-hidden">
              <Thumbnail />
            </div>

            {/* Info */}
            <div className="p-4">
              <h3 className="font-sans font-semibold text-gray-900 text-sm mb-0.5">{title}</h3>
              <p className="font-sans text-gray-400 text-xs mb-3">{desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-sans text-[10px] font-medium text-gray-500 bg-gray-100 rounded-md px-2 py-0.5 border border-[#EAEAEA]"
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
