const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

const BlogThumb1 = () => (
  <svg viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="80" height="60" fill="#e8eaf6" rx="6"/>
    <rect x="8" y="10" width="30" height="5" rx="2.5" fill="#7A0F16" opacity="0.7"/>
    <rect x="8" y="20" width="64" height="4" rx="2" fill="#9e9e9e" opacity="0.5"/>
    <rect x="8" y="28" width="54" height="4" rx="2" fill="#9e9e9e" opacity="0.4"/>
    <rect x="8" y="38" width="16" height="14" rx="4" fill="#7A0F16" opacity="0.15"/>
    <rect x="28" y="38" width="16" height="14" rx="4" fill="#7A0F16" opacity="0.25"/>
    <rect x="48" y="38" width="16" height="14" rx="4" fill="#7A0F16" opacity="0.4"/>
  </svg>
)

const BlogThumb2 = () => (
  <svg viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="80" height="60" fill="#e3f2fd" rx="6"/>
    <rect x="8" y="8" width="64" height="5" rx="2.5" fill="#1565c0" opacity="0.3"/>
    <rect x="8" y="18" width="64" height="32" rx="4" fill="#fff" opacity="0.7"/>
    <rect x="14" y="24" width="40" height="3" rx="1.5" fill="#9e9e9e" opacity="0.5"/>
    <rect x="14" y="31" width="52" height="3" rx="1.5" fill="#9e9e9e" opacity="0.4"/>
    <rect x="14" y="38" width="36" height="3" rx="1.5" fill="#7A0F16" opacity="0.5"/>
    <circle cx="60" cy="32" r="10" fill="#7A0F16" opacity="0.2"/>
  </svg>
)

const BlogThumb3 = () => (
  <svg viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="80" height="60" fill="#f3e5f5" rx="6"/>
    <rect x="8" y="8" width="24" height="24" rx="5" fill="#7A0F16" opacity="0.2"/>
    <rect x="12" y="12" width="16" height="16" rx="3" fill="#7A0F16" opacity="0.4"/>
    <rect x="38" y="8" width="34" height="7" rx="3.5" fill="#9e9e9e" opacity="0.4"/>
    <rect x="38" y="20" width="28" height="5" rx="2.5" fill="#9e9e9e" opacity="0.3"/>
    <rect x="8" y="40" width="64" height="4" rx="2" fill="#9e9e9e" opacity="0.25"/>
    <rect x="8" y="48" width="48" height="4" rx="2" fill="#9e9e9e" opacity="0.2"/>
  </svg>
)

const posts = [
  {
    id: 1,
    Thumb: BlogThumb1,
    title: 'Membangun UI yang Konsisten dengan Design System',
    desc: 'Design system membantu menjaga konsistensi UI/UX dalam proyek skala besar.',
    date: '12 Mei 2024',
    readTime: '5 min read',
  },
  {
    id: 2,
    Thumb: BlogThumb2,
    title: 'Tips Optimasi Performa Website untuk Pengalaman Terbaik',
    desc: 'Optimasi performa adalah kunci untuk menjaga pengguna tetap engaged.',
    date: '5 Mei 2024',
    readTime: '6 min read',
  },
  {
    id: 3,
    Thumb: BlogThumb3,
    title: 'Mengapa Saya Memilih Next.js untuk Project Saya',
    desc: 'Next.js memberikan banyak keuntungan untuk developer dan klien.',
    date: '28 Apr 2024',
    readTime: '4 min read',
  },
]

export default function Blog() {
  return (
    <div id="blog">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="section-label sm:text-[1.2rem]">Latest Insights</p>
          <h2 className="section-heading sm:text-[3rem]">My Blog</h2>
          <div className="mt-3 h-0.5 w-10 rounded-full bg-burgundy" />
          <p className="mt-4 max-w-2xl font-sans text-[1.1rem] leading-6 text-gray-500">
            Writing About Development, AI, and Product Building
          </p>
        </div>
        <a
          href="#"
          className="flex items-center gap-1.5 self-start font-sans text-sm font-medium text-burgundy transition-all duration-200 hover:gap-2.5 lg:pb-2"
        >
          View All Blog <ArrowIcon />
        </a>
      </div>

      {/* Article list */}
      <div className="flex flex-col gap-0 divide-y divide-[#EAEAEA] border border-[#EAEAEA] rounded-2xl overflow-hidden">
        {posts.map(({ id, Thumb, title, desc, date, readTime }) => (
          <article
            key={id}
            className="flex gap-4 p-4 bg-white hover:bg-burgundy-50 transition-colors duration-200 cursor-pointer group"
          >
            {/* Thumbnail */}
            <div className="w-20 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
              <Thumb />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="font-sans font-semibold text-gray-900 text-sm leading-snug mb-1 group-hover:text-burgundy transition-colors line-clamp-2">
                {title}
              </h3>
              <p className="font-sans text-gray-400 text-xs leading-relaxed mb-2 line-clamp-2">
                {desc}
              </p>
              <div className="flex items-center gap-3">
                <span className="font-sans text-[10px] text-gray-400">{date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span className="font-sans text-[10px] text-gray-400">{readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
