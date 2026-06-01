import { useId } from 'react'

type SkillItem = {
  name: string
  description: string
  abbr: string
  accent: string
}

const languages: SkillItem[] = [
  { name: 'HTML5', description: 'Struktur semantik halaman web.', abbr: 'HTML', accent: '#e34f26' },
  { name: 'CSS3', description: 'Layout, responsif, dan visual.', abbr: 'CSS', accent: '#1572b6' },
  { name: 'JavaScript (ES6+)', description: 'Interaksi dan logic UI.', abbr: 'JS', accent: '#f7df1e' },
  { name: 'TypeScript', description: 'Tipe aman untuk skala kode.', abbr: 'TS', accent: '#3178c6' },
]

const frameworks: SkillItem[] = [
  { name: 'React 18', description: 'UI komponen modern dan dinamis.', abbr: 'R18', accent: '#61dafb' },
  { name: 'Next.js', description: 'App routing, SSR, dan SEO.', abbr: 'NXT', accent: '#111111' },
  { name: 'Vue 3', description: 'SPA ringan dan mudah dirawat.', abbr: 'VUE', accent: '#42b883' },
  { name: 'Nuxt', description: 'Framework Vue yang siap produksi.', abbr: 'NUX', accent: '#00dc82' },
  { name: 'Tailwind CSS', description: 'Styling cepat dan konsisten.', abbr: 'TW', accent: '#38bdf8' },
  { name: 'GSAP', description: 'Animasi halus yang presisi.', abbr: 'GSP', accent: '#88ce02' },
  { name: 'Lucide React', description: 'Ikon bersih dan ringan.', abbr: 'LUC', accent: '#111827' },
  { name: 'Discord.js v14', description: 'Bot dan automation Discord.', abbr: 'DJS', accent: '#5865f2' },
]

const platforms: SkillItem[] = [
  { name: 'VS Code', description: 'Editor harian yang fleksibel.', abbr: 'VSC', accent: '#007acc' },
  { name: 'Cursor', description: 'Coding berbantuan AI.', abbr: 'CUR', accent: '#8b5cf6' },
  { name: 'Vite', description: 'Dev server super cepat.', abbr: 'VIT', accent: '#646cff' },
  { name: 'Node.js', description: 'Runtime JavaScript server-side.', abbr: 'NODE', accent: '#339933' },
  { name: 'Git', description: 'Version control sehari-hari.', abbr: 'GIT', accent: '#f05032' },
  { name: 'GitHub', description: 'Repo, review, dan kolaborasi.', abbr: 'GH', accent: '#111827' },
  { name: 'Vercel', description: 'Deploy cepat dan stabil.', abbr: 'VCL', accent: '#111111' },
  { name: 'VPS (Linux)', description: 'Hosting dan server pribadi.', abbr: 'VPS', accent: '#0f172a' },
  { name: 'Notion', description: 'Dokumentasi dan organisasi kerja.', abbr: 'NOT', accent: '#111111' },
  { name: 'CapCut', description: 'Editing konten singkat.', abbr: 'CAP', accent: '#10b981' },
]

const designTools: SkillItem[] = [
  { name: 'Canva', description: 'Desain visual cepat dan praktis.', abbr: 'CAN', accent: '#00c4cc' },
  { name: 'Nano Banana', description: 'Eksplorasi visual dan konsep.', abbr: 'BAN', accent: '#f59e0b' },
]

const aiTools: SkillItem[] = [
  { name: 'OpenAI API', description: 'Integrasi AI ke produk.', abbr: 'OAI', accent: '#10a37f' },
  { name: 'ChatGPT', description: 'Ide, drafting, dan asistensi.', abbr: 'GPT', accent: '#111111' },
  { name: 'Claude', description: 'Reasoning dan penulisan.', abbr: 'CLA', accent: '#b45309' },
  { name: 'Gemini', description: 'Riset dan bantuan multimodal.', abbr: 'GEM', accent: '#7c3aed' },
  { name: 'Grok', description: 'Eksplorasi perspektif alternatif.', abbr: 'GRO', accent: '#0ea5e9' },
]

const rowTop = [...languages, ...frameworks, ...platforms.slice(0, 5)]
const rowBottom = [...platforms.slice(5), ...designTools, ...aiTools]

const SkillGlyph = ({ abbr, accent }: Pick<SkillItem, 'abbr' | 'accent'>) => {
  const gradientId = useId()

  return (
    <svg viewBox="0 0 72 72" width="44" height="44" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={accent} stopOpacity="1" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.18" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="64" height="64" rx="20" fill={`url(#${gradientId})`} />
      <rect x="4" y="4" width="64" height="64" rx="20" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1.2" />
      <path d="M18 49c8-18 18-26 36-30" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="2.4" strokeLinecap="round" />
      <text
        x="50%"
        y="53%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontSize="14"
        fontWeight="700"
        fontFamily="DM Sans, system-ui, sans-serif"
        letterSpacing="0.04em"
      >
        {abbr}
      </text>
    </svg>
  )
}

const SkillCard = ({ skill }: { skill: SkillItem }) => (
  <article className="skill-card group w-[290px] shrink-0 rounded-2xl border border-[#ece4e1] bg-white/90 p-4 shadow-[0_10px_30px_rgba(17,24,39,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
    <div className="flex items-start gap-4">
      <div className="skill-icon-wrap rounded-2xl p-0.5 transition-transform duration-300 group-hover:scale-[1.03]">
        <SkillGlyph abbr={skill.abbr} accent={skill.accent} />
      </div>
      <div className="min-w-0">
        <h3 className="font-sans text-sm font-semibold tracking-wide text-gray-900">
          {skill.name}
        </h3>
        <p className="mt-1 text-sm leading-6 text-gray-500">
          {skill.description}
        </p>
      </div>
    </div>
  </article>
)

const MarqueeRow = ({ items, reverse = false }: { items: SkillItem[]; reverse?: boolean }) => (
  <div className="skill-row group relative overflow-hidden py-2">
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />
    <div className={`marquee-track ${reverse ? 'reverse' : ''} gap-4`}>
      {[...items, ...items].map((skill, index) => (
        <SkillCard key={`${skill.name}-${index}`} skill={skill} />
      ))}
    </div>
  </div>
)

export default function Skills() {
  return (
    <section id="skills" className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-10">
          <p className="section-label">My Skills</p>
          <h2 className="section-heading">Skills &amp; Technologies</h2>
          <div className="mt-3 h-0.5 w-10 rounded-full bg-burgundy" />
          <p className="mt-4 max-w-2xl font-sans text-sm leading-6 text-gray-500">
            Rangkaian skill, tools, dan platform yang saya gunakan untuk membangun produk, mengotomatiskan workflow, dan menjaga kualitas hasil kerja.
          </p>
        </div>

        <div className="space-y-5">
          <MarqueeRow items={rowTop} />
          <MarqueeRow items={rowBottom} reverse />
        </div>
      </div>
    </section>
  )
}
