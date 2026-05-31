const PersonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7A0F16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
)

const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7A0F16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
)

const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7A0F16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7A0F16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

const infoCards = [
  {
    icon: PersonIcon,
    title: 'Detail',
    lines: ['Syifa Fauziyah Arizal', 'Front End Developer'],
  },
  {
    icon: CalendarIcon,
    title: 'Experience',
    lines: ['2+ Years', 'Working on Web Projects'],
  },
  {
    icon: LocationIcon,
    title: 'Location',
    lines: ['Indonesia', 'Available Worldwide'],
  },
  {
    icon: MailIcon,
    title: 'Email',
    lines: ['syifaarizal@gmail.com', "Let's connect!"],
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex gap-20 items-start">

          {/* ── Left ── */}
          <div className="flex-1 max-w-xl">
            <p className="section-label">About Me</p>

            {/* Red underline accent */}
            <div className="mb-1">
              <h2 className="section-heading mb-0">
                Crafting Digital Experiences
              </h2>
              <h2 className="section-heading mb-3">with Purpose</h2>
            </div>
            <div className="w-10 h-0.5 bg-burgundy mb-6 rounded-full" />

            <p className="font-sans text-gray-500 text-[0.93rem] leading-relaxed mb-4">
              Saya adalah Front End Developer yang berfokus pada pembuatan
              antarmuka web yang bersih, responsif, dan fungsional. Saya percaya
              bahwa desain yang baik dikombinasikan dengan kode yang rapi
              dapat memberikan pengalaman yang bermakna bagi pengguna.
            </p>

            <button className="mt-4 inline-flex items-center gap-2 border border-[#CCCCCC] rounded-xl px-5 py-2.5 font-sans text-sm font-medium text-gray-700 hover:border-burgundy hover:text-burgundy transition-colors duration-200">
              More About Me <ArrowIcon />
            </button>
          </div>

          {/* ── Right – 2×2 info grid ── */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {infoCards.map(({ icon: Icon, title, lines }) => (
              <div
                key={title}
                className="card-base px-5 py-5 flex flex-col gap-3 hover:shadow-card transition-shadow duration-200"
              >
                {/* Icon circle */}
                <div className="w-9 h-9 rounded-full bg-burgundy-50 flex items-center justify-center flex-shrink-0">
                  <Icon />
                </div>
                <div>
                  <p className="font-sans text-xs text-gray-400 font-medium mb-1 uppercase tracking-wider">
                    {title}
                  </p>
                  {lines.map((line, i) => (
                    <p
                      key={i}
                      className={`font-sans leading-snug ${
                        i === 0
                          ? 'text-gray-900 font-semibold text-sm'
                          : 'text-gray-400 text-xs mt-0.5'
                      }`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
