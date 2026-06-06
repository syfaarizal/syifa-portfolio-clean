import { useEffect, useMemo, useRef, type ReactNode } from 'react'
import { navigateWithTransition } from '../../lib/navigation'

type NavLink = {
  path: string
  title: string
}

type RelatedPost = {
  path: string
  date: string
  title: string
  excerpt: string
  tags: string[]
}

type ArticlesLayoutProps = {
  badge: string
  title: string
  date: string
  tags: string
  readingTime: string
  intro: string
  githubUrl: string
  prev?: NavLink
  next?: NavLink
  related: RelatedPost[]
  conclusion: ReactNode
  children: ReactNode
}

type CodeBlockProps = {
  lang: string
  langIcon: string
  children: string
}

export function CodeBlock({ lang, langIcon, children }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!codeRef.current) return

    codeRef.current.textContent = children.trim()
  }, [children])

  const lines = useMemo(() => children.trim().split('\n'), [children])

  function handleCopy() {
    void navigator.clipboard.writeText(children.trim())
  }

  return (
    <div className="overflow-hidden rounded-[24px] border border-[#E6DAD7] bg-[#fffdfc] shadow-[0_16px_40px_rgba(122,15,22,0.06)] my-5">
      <div className="flex items-center justify-between gap-4 border-b border-[#E6DAD7] bg-white/80 px-5 py-4">
        <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#E6DAD7] bg-[#fff7f5] text-burgundy">
            <i className={langIcon} />
          </span>
          <span>{lang}</span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center text-center rounded-full border border-[#E6DAD7] bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-burgundy hover:text-burgundy"
        >
          <i className="fas fa-copy" />
          Copy
        </button>
      </div>

      <pre className="overflow-x-auto px-5 py-5 text-[0.92rem] leading-7 text-gray-800">
        <code ref={codeRef} className="block font-mono">
          {lines.join('\n')}
        </code>
      </pre>
    </div>
  )
}

export function Output({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[22px] border border-dashed border-[#E4D5D0] bg-[#fffaf9] px-5 py-4 font-sans text-[0.98rem] leading-7 text-gray-700 mt-5 mb-1">
      {children}
    </div>
  )
}

export function HighlightBox({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[24px] border border-[#E6DAD7] bg-white p-5 shadow-[0_14px_34px_rgba(122,15,22,0.05)] sm:p-6 mt-3">
      {children}
    </div>
  )
}

export function QuoteBox({ children }: { children: ReactNode }) {
  return (
    <blockquote className="border-l-4 border-burgundy bg-[#fff7f5] px-5 py-4 font-sans text-gray-700">
      {children}
    </blockquote>
  )
}

export default function ArticlesLayout({
  badge,
  title,
  date,
  tags,
  readingTime,
  intro,
  githubUrl,
  prev,
  next,
  related,
  conclusion,
  children,
}: ArticlesLayoutProps) {
  return (
    <div className="page-shell page-enter min-h-screen bg-[linear-gradient(180deg,#fffdfc_0%,#fff7f6_100%)] text-gray-900">
      <div className="sticky top-0 z-30 border-b border-[#EFE3DF]/80 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 sm:px-8">
          <a
            href="/blog"
            onClick={(event) => {
              event.preventDefault()
              navigateWithTransition('/blog')
            }}
            className="inline-flex items-center gap-2 rounded-full border border-[#E6DAD7] bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:border-burgundy hover:text-burgundy"
          >
            <i className="fas fa-arrow-left" />
            Back to Blog
          </a>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#E6DAD7] bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
            <i className="fas fa-clock text-burgundy" />
            <span>{readingTime}</span>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:py-12">
        <article className="overflow-hidden rounded-[32px] border border-[#E8DDD9] bg-white shadow-[0_20px_60px_rgba(122,15,22,0.06)]">
          <header className="border-b border-[#F0E4E0] bg-[linear-gradient(180deg,#fffaf9_0%,#ffffff_100%)] px-6 py-7 sm:px-8 sm:py-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#E6DAD7] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-burgundy">
                {badge}
              </span>
              <span className="text-sm text-gray-400">{date}</span>
            </div>

            <h1 className="mt-4 max-w-4xl font-serif text-[clamp(2.4rem,4.8vw,4.8rem)] leading-[0.95] font-semibold tracking-tight text-gray-950">
              {title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-gray-500">
              <div className="inline-flex items-center gap-2">
                <i className="fas fa-tags text-burgundy" />
                <span>{tags}</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <i className="fas fa-user text-burgundy" />
                <span>Syifa Fauziyah Arizal</span>
              </div>
            </div>

            <p className="mt-6 max-w-3xl font-sans text-[1.02rem] leading-8 text-gray-600">
              {intro}
            </p>
          </header>

          <div className="px-6 py-7 sm:px-8 sm:py-8">
            <div className="prose prose-neutral max-w-none prose-headings:font-serif prose-headings:tracking-tight prose-h2:text-[clamp(1.6rem,2.5vw,2.2rem)] prose-h3:text-[clamp(1.3rem,2vw,1.7rem)] prose-p:font-sans prose-p:text-[1.01rem] prose-p:leading-8 prose-p:text-gray-700 prose-li:font-sans prose-li:text-gray-700 prose-strong:text-gray-900 prose-code:rounded prose-code:bg-[#fff4f1] prose-code:px-1.5 prose-code:py-0.5 prose-code:text-[0.92em] prose-code:font-medium prose-code:text-burgundy">
              {children}
            </div>
          </div>

          <footer className="border-t border-[#F0E4E0] bg-[#fffdfc] px-6 py-7 sm:px-8">
            <div className="rounded-[26px] border border-[#E8DDD9] bg-white p-5 shadow-[0_14px_36px_rgba(122,15,22,0.05)] sm:p-6">
              {conclusion}
            </div>

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-burgundy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5f0f17]"
              >
                <i className="fab fa-github" />
                View Source Code
              </a>
            </div>
          </footer>
        </article>

        <nav className="mt-8 grid gap-4 lg:grid-cols-2">
          {prev ? (
            <a
              href={prev.path}
              onClick={(event) => {
                event.preventDefault()
                navigateWithTransition(prev.path)
              }}
              className="rounded-[26px] border border-[#E8DDD9] bg-white p-5 shadow-[0_14px_36px_rgba(122,15,22,0.05)] transition-transform hover:-translate-y-0.5"
            >
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                Previous
              </div>
              <div className="mt-2 font-serif text-[1.3rem] font-semibold text-gray-950">
                {prev.title}
              </div>
            </a>
          ) : (
            <div className="rounded-[26px] border border-dashed border-[#E8DDD9] bg-white/70 p-5 text-gray-400">
              <div className="text-sm font-semibold uppercase tracking-[0.18em]">Previous</div>
              <div className="mt-2 font-serif text-[1.3rem] font-semibold">No previous post</div>
            </div>
          )}

          {next ? (
            <a
              href={next.path}
              onClick={(event) => {
                event.preventDefault()
                navigateWithTransition(next.path)
              }}
              className="rounded-[26px] border border-[#E8DDD9] bg-white p-5 shadow-[0_14px_36px_rgba(122,15,22,0.05)] transition-transform hover:-translate-y-0.5"
            >
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                Next
              </div>
              <div className="mt-2 font-serif text-[1.3rem] font-semibold text-gray-950">
                {next.title}
              </div>
            </a>
          ) : (
            <div className="rounded-[26px] border border-dashed border-[#E8DDD9] bg-white/70 p-5 text-gray-400">
              <div className="text-sm font-semibold uppercase tracking-[0.18em]">Next</div>
              <div className="mt-2 font-serif text-[1.3rem] font-semibold">No next post</div>
            </div>
          )}
        </nav>

        {related.length > 0 && (
          <section className="mt-8 rounded-[32px] border border-[#E8DDD9] bg-white p-6 shadow-[0_16px_48px_rgba(122,15,22,0.06)] sm:p-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="section-label">Related Posts</p>
                <h2 className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] font-semibold leading-none text-gray-950">
                  More to read
                </h2>
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {related.map((post) => (
                <a
                  key={post.path}
                  href={post.path}
                  onClick={(event) => {
                    event.preventDefault()
                    navigateWithTransition(post.path)
                  }}
                  className="group rounded-[24px] border border-[#E8DDD9] bg-[#fffdfc] p-5 transition-all hover:-translate-y-1 hover:shadow-[0_16px_42px_rgba(122,15,22,0.08)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm text-gray-400">{post.date}</span>
                    <span className="rounded-full border border-[#E6DAD7] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-burgundy">
                      Related
                    </span>
                  </div>
                  <div className="mt-4 font-serif text-[1.35rem] font-semibold leading-tight text-gray-950 transition-colors group-hover:text-burgundy">
                    {post.title}
                  </div>
                  <p className="mt-3 font-sans text-[0.98rem] leading-7 text-gray-600">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#E6DAD7] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
