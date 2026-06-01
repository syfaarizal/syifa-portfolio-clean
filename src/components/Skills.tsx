import type { ReactNode } from 'react'

type SkillItem = {
  name: string
  description: string
  icon: ReactNode
  accent: string
}

type SkillGroup = {
  title: string
  items: SkillItem[]
  reverse?: boolean
  duration: string
}

/* SVG Icons */
const Icons = {
  HTML5: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <path d="M5 3l2.1 23.5L16 29l8.9-2.5L27 3H5z" fill="#e34f26"/>
      <path d="M16 27.1l7.2-2L25 6.5H16v20.6z" fill="#ef652a"/>
      <path d="M16 13.5H11.6l-.3-3.5H16V6.5H7.7l.9 10H16v-3zm0 8.5l-4.8-1.3-.3-3.5H7.5l.6 6.8L16 26.3V22z" fill="white"/>
      <path d="M16 13.5v3h4l-.4 4.5-3.6 1V25.3l7.1-2-.1-1-1-11.8H16z" fill="white"/>
    </svg>
  ),
  CSS3: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <path d="M5 3l2.1 23.5L16 29l8.9-2.5L27 3H5z" fill="#1572b6"/>
      <path d="M16 27.1l7.2-2L25 6.5H16v20.6z" fill="#33a9dc"/>
      <path d="M16 13.5h-4.4l-.3-3.5H16V6.5H7.7l.9 10H16v-3zm0 8.5-4.8-1.3-.3-3.5H7.5l.6 6.8L16 26.3V22z" fill="white"/>
      <path d="M16 13.5v3h3.8l-.4 4.5-3.4 1V25.3l7.1-2-.1-1L24 6.5H16v3h7.3l-.4 4H16z" fill="white"/>
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <rect width="32" height="32" fill="#f7df1e" rx="3"/>
      <path d="M19.5 24.5c.5.9 1.2 1.5 2.4 1.5 1 0 1.7-.5 1.7-1.2 0-.8-.7-1.1-1.8-1.6l-.6-.3c-1.8-.8-3-1.8-3-3.8 0-1.9 1.4-3.3 3.7-3.3 1.6 0 2.7.6 3.5 2l-1.9 1.2c-.4-.7-.9-1-1.6-1-.7 0-1.2.5-1.2 1 0 .7.5 1 1.5 1.5l.6.3c2.1.9 3.3 1.9 3.3 3.9 0 2.3-1.8 3.5-4.2 3.5-2.3 0-3.8-1.1-4.6-2.6l2.3-1.1zM10.5 24.7c.4.6.7 1.2 1.5 1.2.8 0 1.2-.3 1.2-1.5v-8.2h2.5v8.3c0 2.5-1.4 3.6-3.5 3.6-1.9 0-3-1-3.5-2.2l1.8-1.2z" fill="#323330"/>
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <rect width="32" height="32" fill="#3178c6" rx="3"/>
      <path d="M18 17h-3.5v9.5H12V17H8.5v-2.5H18V17zM19 24.3v-2.7c.7.6 1.8 1.1 2.8 1.1 1.3 0 1.9-.5 1.9-1.2 0-.7-.5-1-1.8-1.5l-.5-.2c-1.7-.7-2.8-1.7-2.8-3.6 0-2 1.5-3.2 3.7-3.2 1.4 0 2.4.4 3.2 1.1L25 16.5c-.6-.5-1.4-.8-2.2-.8-1 0-1.6.4-1.6 1.1 0 .7.5 1 1.6 1.4l.5.2c2 .9 3.1 1.8 3.1 3.7 0 2.2-1.7 3.4-4 3.4-1.6.1-2.9-.4-3.4-1.2z" fill="white"/>
    </svg>
  ),
  React: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <circle cx="16" cy="16" r="2.5" fill="#61dafb"/>
      <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61dafb" strokeWidth="1.5" fill="none"/>
      <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61dafb" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)"/>
      <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61dafb" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)"/>
    </svg>
  ),
  NextJS: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <circle cx="16" cy="16" r="14" fill="black"/>
      <path d="M10 22V10l12 14V10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <line x1="10" y1="10" x2="20" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Tailwind: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <path d="M16 7c-3.5 0-5.7 1.75-6.7 5.25C10.6 10.5 11.95 9.875 13.5 10.25c.86.22 1.48.84 2.16 1.53C16.84 12.99 18.22 14.5 21 14.5c3.5 0 5.7-1.75 6.7-5.25-1.3 1.75-2.65 2.375-4.2 2-.86-.22-1.48-.84-2.16-1.53C20.16 8.51 18.78 7 16 7zM9.3 14.5C5.8 14.5 3.6 16.25 2.6 19.75c1.3-1.75 2.65-2.375 4.2-2 .86.22 1.48.84 2.16 1.53 1.18 1.21 2.56 2.72 5.34 2.72 3.5 0 5.7-1.75 6.7-5.25-1.3 1.75-2.65 2.375-4.2 2-.86-.22-1.48-.84-2.16-1.53C13.46 16.01 12.08 14.5 9.3 14.5z" fill="#38bdf8"/>
    </svg>
  ),
  GSAP: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <rect width="32" height="32" fill="#0e0e0e" rx="4"/>
      <path d="M6 16c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#88ce02" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M16 6v4M6 16h4M26 16h-4" stroke="#88ce02" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="16" cy="16" r="2.5" fill="#88ce02"/>
    </svg>
  ),
  Lucide: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <circle cx="16" cy="16" r="13" stroke="#e11d48" strokeWidth="1.5" fill="none"/>
      <path d="M10 16l4 4 8-8" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  DiscordJS: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <path d="M25.5 6.5A22.8 22.8 0 0020 5a16 16 0 00-.7 1.5 21 21 0 00-6.6 0A16 16 0 0012 5a22.9 22.9 0 00-5.5 1.5C3.7 11.5 3 16.4 3.2 21.2a23 23 0 007 3.6 17 17 0 001.5-2.4 15 15 0 01-2.4-1.1l.6-.5a16.5 16.5 0 0014.3 0l.6.5a15 15 0 01-2.4 1.1c.4.8 1 1.6 1.5 2.4a23 23 0 007-3.6c.3-5.4-1-10.3-3.4-14.7zM12 18.4c-1.4 0-2.6-1.3-2.6-2.9s1.1-2.9 2.6-2.9 2.6 1.3 2.6 2.9-1.1 2.9-2.6 2.9zm8 0c-1.4 0-2.6-1.3-2.6-2.9s1.1-2.9 2.6-2.9 2.6 1.3 2.6 2.9-1.1 2.9-2.6 2.9z" fill="#5865f2"/>
    </svg>
  ),
  VSCode: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <path d="M23 4L7 17l4 4 12-7v-6l-3 2-9 6-3-3L23 4z" fill="#007acc"/>
      <path d="M23 4v6l-12 7-4-4L23 4zM23 28V22l-12-7-4 4 16 9z" fill="#1f9cf0"/>
      <path d="M7 17l4 4v-8L7 17z" fill="#0065a9"/>
      <path d="M23 4l3 2.5v19L23 28V4z" fill="#007acc" opacity=".5"/>
    </svg>
  ),
  Cursor: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <rect width="32" height="32" rx="6" fill="#1c1c1c"/>
      <path d="M8 8l16 8-7 2-2 7-7-17z" fill="white"/>
      <path d="M19 18l5 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Vite: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <path d="M29 5.5L16.3 27.7a.8.8 0 01-1.4 0L3 5.5a.8.8 0 01.8-1.2l12.1 2.1 12.3-2.1A.8.8 0 0129 5.5z" fill="#646cff"/>
      <path d="M20.7 4.3l-4.5 8L11.8 5a.4.4 0 01.6-.5l8 .3a.4.4 0 01.3.5z" fill="#ffbd44"/>
    </svg>
  ),
  NodeJS: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <path d="M16 3L4 9.5v13L16 29l12-6.5v-13L16 3z" fill="#339933"/>
      <path d="M16 3v26M4 9.5l12 7M28 9.5l-12 7" stroke="#fff" strokeWidth="1" opacity=".3" fill="none"/>
      <text x="16" y="18" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="700" fontFamily="system-ui">node</text>
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <path d="M29.5 14.8L17.2 2.5a1.7 1.7 0 00-2.4 0L12.4 5l3 3a2 2 0 012.5 2.5l2.9 2.9a2 2 0 012.1 3.3 2 2 0 01-2.7-2.9L17.7 12v7.5a2 2 0 11-2.5.2L12 16.6a2 2 0 10-1 1.7v7.6a2 2 0 101.8.1l3.3 3.3a1.7 1.7 0 002.4 0l12.1-12a1.7 1.7 0 000-2.5z" fill="#f05032"/>
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <path fillRule="evenodd" clipRule="evenodd" d="M16 2a14 14 0 00-4.4 27.3c.7.1 1-.3 1-.7v-2.4c-3.9.8-4.7-1.9-4.7-1.9a3.7 3.7 0 00-1.5-2c-1.2-.8.1-.8.1-.8a3 3 0 012.1 1.4 3 3 0 004 1.1 3 3 0 01.9-1.9c-3.1-.4-6.4-1.6-6.4-7a5.4 5.4 0 011.5-3.8 5.1 5.1 0 01.1-3.7s1.2-.4 3.9 1.5a13.3 13.3 0 017 0c2.7-1.9 3.9-1.5 3.9-1.5a5.1 5.1 0 01.2 3.7 5.4 5.4 0 011.4 3.8c0 5.4-3.3 6.6-6.4 7a3.3 3.3 0 011 2.6v3.8c0 .4.2.8 1 .7A14 14 0 0016 2z" fill="#1b1f23"/>
    </svg>
  ),
  Vercel: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <path d="M16 5L29 27H3L16 5z" fill="black"/>
    </svg>
  ),
  VPS: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <rect x="4" y="5" width="24" height="8" rx="2" stroke="#0f172a" strokeWidth="1.5" fill="none"/>
      <rect x="4" y="15" width="24" height="8" rx="2" stroke="#0f172a" strokeWidth="1.5" fill="none"/>
      <circle cx="8.5" cy="9" r="1.5" fill="#22c55e"/>
      <circle cx="8.5" cy="19" r="1.5" fill="#22c55e"/>
      <line x1="13" y1="9" x2="22" y2="9" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="13" y1="19" x2="22" y2="19" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Notion: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <path d="M6 5.5c1-.8 2.3-.7 3.4-.7l14.7.1c1.5.1 3 .6 4 1.7v18c-.2 1.2-1.2 2-2.4 2.2l-15.2.3c-1.3 0-2.6-.4-3.5-1.4-.7-.8-.9-2-.9-3V7.5c0-.8.4-1.6.9-2zm5.5 2.3L9.8 9.5c-.3.2-.4.5-.4.9v13.7c0 .5.1 1 .5 1.3l.5.3 10.2-.2c1.2-.1 2.1-.8 2.1-2V10c0-.5-.2-1-.7-1.2l-2.2-1.3c-.8-.5-1.8-.5-2.7-.3l-5.6.6z" fill="#111111"/>
      <path d="M12 13h8M12 17h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  CapCut: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <rect width="32" height="32" rx="8" fill="#1c1c1e"/>
      <path d="M9 10v12l5-6-5-6zM15 10v12l5-6-5-6z" fill="white"/>
      <rect x="21" y="10" width="3" height="12" rx="1.5" fill="white"/>
    </svg>
  ),
  Canva: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <circle cx="16" cy="16" r="14" fill="#00c4cc"/>
      <path d="M21 11.5c0-2-1.4-3.5-3.3-3.5a5.5 5.5 0 00-5.2 5.4c0 1.7 1 3 2.4 3.3.1.7.2 1.4.3 2.2.1.5.2 1.3.4 1.7.5 1.3 1.4 2.4 2.7 2.4 1.8 0 3.2-1.8 3.2-3.9 0-.7-.2-1.4-.6-2.1.8-.8 1.1-1.8 1.1-3.1 0-.8-.3-1.6-.8-2.1.4-.4.8-1 .8-1.7v-.6z" fill="white"/>
    </svg>
  ),
  NanoBanana: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <rect width="32" height="32" rx="8" fill="#1c1c1e"/>
      <path d="M8 22C8 14 12 9 20 9" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M12 24C12 17 15 13 23 12" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity=".5"/>
      <circle cx="23" cy="9" r="2.5" fill="#f59e0b"/>
    </svg>
  ),
  OpenAI: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <path d="M29.1 13a8.1 8.1 0 00-.7-6.6 8.2 8.2 0 00-8.8-3.9A8.1 8.1 0 0013.5 1 8.2 8.2 0 005.7 6a8.1 8.1 0 00-5.4 3.9 8.2 8.2 0 001 9.6 8.1 8.1 0 00.7 6.6 8.2 8.2 0 008.8 3.9 8.1 8.1 0 006.1 2.7 8.2 8.2 0 007.8-5.7 8.1 8.1 0 005.4-3.9 8.2 8.2 0 00-1-9.1zm-13.6 9a4.5 4.5 0 01-2.9-1 .1.1 0 010-.1l7.3-4.2.1.2v8.5a4.5 4.5 0 01-4.5-3.4zm-8.8-4.1a4.5 4.5 0 01.5-4.6l7.2 4.2-.1.2H5.8a4.5 4.5 0 01.9-3.8zm-.8-9.4a4.5 4.5 0 012.9-2.2v8.5l-.1.2-7.3-4.2a4.5 4.5 0 014.5-2.3zm10.8 9.1L13 13.5l4.7-2.7 4.7 2.7v5.4l-4.7 2.7zm2.1-9.8a4.5 4.5 0 012.9 1v.1L14.4 13v-.4V4.1a4.5 4.5 0 014.4 3.7zm7.1 8.5h-8.5l-.1-.2 7.2-4.2a4.5 4.5 0 011.4 4.4zm-1.8 4.9l-7.2-4.2.1-.2h8.5a4.5 4.5 0 01-1.4 4.4z" fill="#10a37f"/>
    </svg>
  ),
  ChatGPT: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <rect width="32" height="32" rx="6" fill="#10a37f"/>
      <path d="M16 7c-3.5 0-6.5 2-7.8 5H7a3 3 0 00-3 3v2a3 3 0 003 3h.1A9 9 0 0016 25a9 9 0 009-9 9 9 0 00-9-9zm0 16a7 7 0 01-6.3-4H22.3A7 7 0 0116 23zm-7-6v-2a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1z" fill="white"/>
    </svg>
  ),
  Claude: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <rect width="32" height="32" rx="6" fill="#cc785c"/>
      <path d="M11 22l5-14 5 14M13 18h6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  Gemini: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <path d="M16 4C16 4 11 12 11 16s5 12 5 12 5-8 5-12S16 4 16 4z" fill="#4285f4"/>
      <path d="M4 16c0 0 8-5 12-5s12 5 12 5-8 5-12 5S4 16 4 16z" fill="#db4437"/>
    </svg>
  ),
  Grok: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <rect width="32" height="32" rx="6" fill="#1a1a1a"/>
      <path d="M8 8l10 8-10 8M16 22h8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
}

const groups: SkillGroup[] = [
  {
    title: 'Core Technologies',
    duration: '34s',
    items: [
      { name: 'HTML5', description: 'Semantic and accessible markup for modern web applications.', icon: Icons.HTML5, accent: '#e34f26' },
      { name: 'CSS3', description: 'Responsive layouts, animations, and polished user interfaces.', icon: Icons.CSS3, accent: '#1572b6' },
      { name: 'JavaScript', description: 'Interactive web experiences, APIs, and application logic.', icon: Icons.JavaScript, accent: '#f7df1e' },
      { name: 'TypeScript', description: 'Scalable and maintainable code with strong type safety.', icon: Icons.TypeScript, accent: '#3178c6' },
    ],
  },
  {
    title: 'Front-End Ecosystem',
    reverse: true,
    duration: '38s',
    items: [
      { name: 'React', description: 'Building reusable components and scalable user interfaces.', icon: Icons.React, accent: '#61dafb' },
      { name: 'Next.js', description: 'Full-stack React applications with SSR and modern routing.', icon: Icons.NextJS, accent: '#000000' },
      { name: 'Tailwind CSS', description: 'Rapid UI development with consistent and maintainable styling.', icon: Icons.Tailwind, accent: '#38bdf8' },
      { name: 'GSAP', description: 'Advanced animations and interactive user experiences.', icon: Icons.GSAP, accent: '#88ce02' },
      { name: 'Lucide React', description: 'Clean and consistent icon systems for modern interfaces.', icon: Icons.Lucide, accent: '#e11d48' },
    ],
  },
  {
    title: 'Development & Deployment',
    duration: '42s',
    items: [
      { name: 'Node.js', description: 'Backend services, APIs, automations, and AI integrations.', icon: Icons.NodeJS, accent: '#339933' },
      { name: 'Git', description: 'Version control and collaborative development workflows.', icon: Icons.Git, accent: '#f05032' },
      { name: 'GitHub', description: 'Repository management, code reviews, and project collaboration.', icon: Icons.GitHub, accent: '#1b1f23' },
      { name: 'Vite', description: 'Fast development environment with instant feedback loops.', icon: Icons.Vite, accent: '#646cff' },
      { name: 'Vercel', description: 'Deployment and hosting for modern web applications.', icon: Icons.Vercel, accent: '#000000' },
      { name: 'Linux VPS', description: 'Server management, SSH workflows, and self-hosted deployments.', icon: Icons.VPS, accent: '#0f172a' },
    ],
  },
  {
    title: 'AI & Automation',
    reverse: true,
    duration: '40s',
    items: [
      { name: 'OpenAI API', description: 'Building AI-powered features and intelligent workflows.', icon: Icons.OpenAI, accent: '#10a37f' },
      { name: 'Discord.js', description: 'Creating bots, automations, and community tools.', icon: Icons.DiscordJS, accent: '#5865f2' },
      { name: 'ChatGPT', description: 'Research, ideation, documentation, and productivity support.', icon: Icons.ChatGPT, accent: '#10a37f' },
      { name: 'Claude', description: 'Long-context reasoning and structured content generation.', icon: Icons.Claude, accent: '#cc785c' },
      { name: 'Gemini', description: 'Research assistance and multimodal problem solving.', icon: Icons.Gemini, accent: '#4285f4' },
      { name: 'Grok', description: 'Alternative perspectives and real-time information gathering.', icon: Icons.Grok, accent: '#0ea5e9' },
    ],
  },
  {
    title: 'Design & Productivity',
    duration: '36s',
    items: [
      { name: 'VS Code', description: 'Primary editor for daily development and debugging.', icon: Icons.VSCode, accent: '#007acc' },
      { name: 'Canva', description: 'Creating visual assets, presentations, and marketing materials.', icon: Icons.Canva, accent: '#00c4cc' },
      { name: 'Notion', description: 'Knowledge management, planning, and project documentation.', icon: Icons.Notion, accent: '#111111' },
      { name: 'Cursor', description: 'AI-assisted development and rapid prototyping workflows.', icon: Icons.Cursor, accent: '#8b5cf6' },
      { name: 'CapCut', description: 'Editing short-form content and social media videos.', icon: Icons.CapCut, accent: '#10b981' },
      { name: 'Nano Banana', description: 'Visual exploration and creative concept development.', icon: Icons.NanoBanana, accent: '#f59e0b' },
    ],
  },
]

const SkillCard = ({ skill }: { skill: SkillItem }) => (
  <article
    className="skill-card group w-[286px] shrink-0 rounded-2xl border border-[#ece4e1] bg-white/90 p-4 shadow-[0_10px_30px_rgba(17,24,39,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
  >
    <div className="flex items-start gap-4">
      <div
        className="skill-icon-wrap shrink-0 flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-[1.06]"
        style={{ backgroundColor: `${skill.accent}14`, border: `1.5px solid ${skill.accent}30` }}
      >
        {skill.icon}
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

const MarqueeRow = ({ title, items, reverse = false, duration }: SkillGroup) => (
  <div className="skill-row rounded-[28px] mt-0 bg-[#fffdfd] px-4 shadow-[0_8px_24px_rgba(17,24,39,0.03)] sm:px-5">
    <div className="mb-4 flex items-end justify-between gap-4">
      <div>
        <p className="section-label !mb-1 sm:text-[1.03rem]">{title}</p>
        <div className="h-0.5 w-10 rounded-full bg-burgundy" />
      </div>
      <p className="hidden font-sans text-xs uppercase tracking-[0.18em] text-gray-400 sm:block">
        Smooth auto scroll
      </p>
    </div>

    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#fffdfd] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#fffdfd] to-transparent" />
      <div
        className={`marquee-track ${reverse ? 'reverse' : ''}`}
        style={{ animationDuration: duration }}
      >
        {[...items, ...items].map((skill, index) => (
          <SkillCard key={`${title}-${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  </div>
)

export default function Skills() {
  return (
    <section id="skills" className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-10">
          <p className="section-label sm:text-[1.2rem]">My Skills</p>
          <h2 className="section-heading sm:text-[3rem]">Tech Stack &amp; Expertise</h2>
          <div className="mt-3 h-0.5 w-10 rounded-full bg-burgundy" />
          <p className="mt-4 max-w-2xl font-sans sm:text-[1.3rem] leading-6 text-gray-500">
            I use modern web technologies to build responsive interfaces, scalable products, and efficient workflows.
          </p>
        </div>

        <div className="space-y-5">
          {groups.map((group) => (
            <MarqueeRow key={group.title} {...group} />
          ))}
        </div>
      </div>
    </section>
  )
}
