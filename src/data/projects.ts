export type Project = {
  id: number
  title: string
  desc: string
  tags: string[]
  category: string
  img: string
  summary: string
  outcome: string
  note: string
  year: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Login Page Showcase â€” LIBR Brand',
    desc: 'My collection of creative login page templates built with clean and modern front-end code.',
    tags: ['Tailwind CSS', 'TypeScript'],
    category: 'Showcase',
    img: '/assets/projects/showcase-review.png',
    summary:
      'A polished login-page collection that balances visual identity, accessibility, and conversion-focused UI patterns.',
    outcome: 'Built as a flexible reference for brand-led auth screens and fast UI experiments.',
    note: 'Focused on composition, spacing rhythm, and a premium first-impression feel.',
    year: '2025',
  },
  {
    id: 2,
    title: 'CruisePoint Indonesia â€“ Landing Page',
    desc: 'A professional and responsive landing page built for CruisePoint Indonesia.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Landing Page',
    img: '/assets/projects/cruisePoint-preview.png',
    summary:
      'A responsive landing page concept with clear service positioning and structured storytelling.',
    outcome: 'Designed to feel credible, concise, and easy to scan on mobile and desktop.',
    note: 'Strong hierarchy, simple interactions, and a commercial presentation style.',
    year: '2024',
  },
  {
    id: 3,
    title: 'Pomodoro Timer FocusFlow',
    desc: 'Clean and minimalistic UI design for a Pomodoro timer application.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    category: 'Productivity',
    img: '/assets/projects/focusflow-preview.png',
    summary:
      'A minimal productivity interface built to keep the attention on focus sessions and task flow.',
    outcome: 'Creates a calm, low-friction workspace with clear control states and readable timing info.',
    note: 'Designed around focus, contrast, and distraction-free feedback.',
    year: '2024',
  },
]

export const projectCategories = ['All', ...new Set(projects.map((project) => project.category))]
export const projectStacks = ['All', ...new Set(projects.flatMap((project) => project.tags))]

export const projectTimeline = [
  {
    phase: '01',
    title: 'Concept and direction',
    text: 'Define the tone, visual language, and user goals before the first layout pass.',
  },
  {
    phase: '02',
    title: 'Build the showcase',
    text: 'Translate the strongest projects into cards, filters, and a clear browsing hierarchy.',
  },
  {
    phase: '03',
    title: 'Refine the featured story',
    text: 'Highlight one project with more context, stronger contrast, and a more editorial presentation.',
  },
  {
    phase: '04',
    title: 'Polish for release',
    text: 'Tighten responsive behavior, footer consistency, and navigation so the experience feels complete.',
  },
]

export const featuredProject = projects[0]
