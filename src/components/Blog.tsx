import { navigateTo } from '../lib/navigation'

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

const posts = [
  {
    id: 1,
    img:  '/assets/blog/blog-day1.png',
    title: 'Day 1: Print Name and Status',
    desc: 'Today I learned about template literals in JavaScript...',
    date: 'June 5, 2025',
    readTime: '5 min read',
  },
  {
    id: 2,
    img: '/assets/blog/blog-day2.png',
    title: 'Day 2: Simple Age Calculator',
    desc: 'Today\'s challenge really made my brain curl...',
    date: 'June 6, 2025',
    readTime: '7 min read',
  },
  {
    id: 3,
    img: '/assets/blog/blog-day3.png',
    title: 'Day 3: Interactive Calculator',
    desc: 'Day 3 of this coding challenge really made me...',
    date: 'June 9, 2025',
    readTime: '9 min read',
  },
]

export default function Blog() {
  return (
    <div id="blog">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="section-label sm:text-[1.2rem]">Latest from Blog</p>
          <h2 className="section-heading sm:text-[3rem]">Recent Articles</h2>
          <div className="mt-3 h-0.5 w-10 rounded-full bg-burgundy" />
          <p className="mt-4 max-w-2xl font-sans text-[1.3rem] leading-6 text-gray-500">
            My blog in learning, building and growing.
          </p>
        </div>
        <button
          type="button"
          onClick={() => navigateTo('/blog')}
          className="flex items-center gap-1.5 self-start font-sans text-[1rem] font-medium text-burgundy transition-all duration-200 hover:gap-2.5 lg:pb-2"
        >
          View All Blog <ArrowIcon />
        </button>
      </div>

      {/* Article cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {posts.map(({ id, img, title, desc, date, readTime }) => (
          <article
            key={id}
            className="group flex gap-4 rounded-2xl border border-[#EAEAEA] bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
          >
            {/* Thumbnail */}
            <div className="h-[94px] w-[96px] flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
              <img src={img} alt={title} className="w-full h-full object-cover" />
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <span className="mb-2 block font-sans text-[10px] uppercase tracking-[0.14em] text-gray-400">
                {date}
              </span>
              <h3 className="mb-2 font-serif text-[1.33rem] leading-tight font-bold text-gray-900 transition-colors group-hover:text-burgundy">
                {title}
              </h3>
              <p className="mb-3 font-sans text-[0.95rem] leading-6 text-gray-500">
                {desc}
              </p>
              <div className="flex items-center gap-2 font-sans text-[0.9rem] font-medium text-burgundy">
                Read article
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
                <span className="ml-1 text-[13px] font-normal text-gray-400">
                  {readTime}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
