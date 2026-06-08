import Footer from '../../components/Footer'
import { blogSections, type BlogPost } from '../../data/blog'
import { navigateWithTransition } from '../../lib/navigation'

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <a
      href={post.path}
      className="group flex h-full flex-col rounded-[26px] border border-[#E8DDD9] bg-white p-5 shadow-[0_14px_40px_rgba(122,15,22,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(122,15,22,0.1)]"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-full border border-[#E8DDD9] bg-[#fffaf9] px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-burgundy">
          {post.badge}
        </span>
        <span className="font-sans text-[11px] text-gray-400">{post.date}</span>
      </div>

      <h3 className="mt-4 font-serif text-[1.35rem] font-semibold leading-tight text-gray-950 transition-colors group-hover:text-burgundy">
        {post.title}
      </h3>

      <p className="mt-3 flex-1 font-sans text-[0.98rem] leading-7 text-gray-600">
        {post.excerpt}
      </p>

      <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-burgundy">
        Read more
        <ArrowIcon />
      </div>
    </a>
  )
}

function SectionBlock({ title, posts }: { title: string; posts: BlogPost[] }) {
  return (
    <section className="rounded-[32px] border border-[#E8DDD9] bg-white/90 p-5 shadow-[0_16px_48px_rgba(122,15,22,0.06)] sm:p-6">
      <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="section-label sm:text-[1.05rem]">{title}</p>
          <h2 className="font-serif text-[clamp(2rem,3vw,2.7rem)] leading-none font-semibold text-gray-950">
            {title}
          </h2>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}

export default function BlogPage() {
  return (
    <div className="page-shell page-enter min-h-screen bg-[linear-gradient(180deg,#fffdfc_0%,#fff7f6_100%)] text-gray-900">
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-burgundy/10 blur-3xl" />
          <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-[#e6c7cd]/40 blur-3xl" />
        </div>

        <section className="relative mx-auto max-w-7xl px-6 pb-10 pt-8 sm:px-8 lg:pt-10">
          <div className="mb-8 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => navigateWithTransition('/#blog')}
              className="inline-flex items-center gap-2 rounded-full border border-[#E6DAD7] bg-white/90 px-4 py-2 font-sans text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-burgundy hover:text-burgundy"
            >
              <ArrowIcon />
              Back to Home
            </button>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="relative z-10 max-w-3xl">
              <p className="section-label sm:text-[1.05rem]">Blog Archive</p>
              <h1 className="mt-4 font-serif text-[clamp(3rem,6vw,5.2rem)] leading-[0.92] font-semibold tracking-tight text-gray-950">
                Writing notes, challenges, and frontend lessons.
              </h1>
              <p className="mt-5 max-w-2xl font-sans text-[1.02rem] leading-7 text-gray-600 sm:text-[1.08rem]">
                A structured archive of daily challenges and module-based notes, arranged by topic for easier browsing.
              </p>
            </div>

            <div className="relative z-10 rounded-[28px] border border-white/70 bg-white/85 p-5 shadow-[0_20px_60px_rgba(122,15,22,0.08)] backdrop-blur">
              <p className="font-sans text-sm font-semibold uppercase tracking-[0.24em] text-burgundy">
                Overview
              </p>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {blogSections.map((section) => (
                  <div key={section.key} className="rounded-[20px] border border-[#E8DDD9] bg-[#fffaf9] p-4">
                    <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-gray-400">
                      {section.title}
                    </p>
                    <p className="mt-2 font-serif text-[1.6rem] font-semibold leading-none text-gray-950">
                      {section.posts.length}
                    </p>
                    <p className="mt-1 font-sans text-xs text-gray-500">posts</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 pb-16 sm:px-8">
          <div className="space-y-6">
            {blogSections.map((section) => (
              <SectionBlock key={section.key} title={section.title} posts={section.posts} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
