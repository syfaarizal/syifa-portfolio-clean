export type ProjectDetail = {
  overview: string
  challenge: string
  solution: string
  techStack: string[]
  keyFeatures: string[]
  designProcess: string
  lessonsLearned: string
  problem: string
  process: string
  outcome: string
}

export type Project = {
  id: number
  title: string
  desc: string
  tags: string[]
  category: string
  img: string
  year: string
  demoUrl: string
  sourceUrl: string
  detail: ProjectDetail
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'KIHS — Hospitality School Marketing & Admissions Platform',
    desc: 'A full marketing website and lead-generation platform for a hospitality education institution, featuring an animated single-page homepage, multi-step student registration with document upload, and automated email notifications.',
    tags: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion'
    ],
    category: 'Web Development / Education',
    img: '/assets/projects/kihs-preview.png',
    year: '2026',
    demoUrl: 'https://kihsglobal.com/',
    sourceUrl: '',
    detail: {
      overview:
        'KIHS is the official marketing website and lead-generation platform for Karawang International Hotel School, a hospitality education institution in West Java, Indonesia. The site combines a premium, animation-rich marketing front end with serverless backend functions that capture and route admissions and brochure-download leads directly into the school\'s inbox — including a full student registration flow with document upload and dual email confirmations.',

      challenge:
        'The client\'s previous website had a broken student registration form that could not actually receive submissions, meaning every prospective student inquiry was silently lost. The existing UI was also outdated and not properly responsive, creating a poor first impression for an institution competing for enrollments. On top of the technical rebuild, the client was not tech-savvy, so every requirement, decision, and update had to be communicated in plain, non-technical language throughout the project.',

      solution:
        'Rebuilt the website from the ground up with React, TypeScript, and Tailwind CSS, delivering a fully responsive, animation-rich interface across every page. Replaced the non-functional registration system with a working multi-step form — complete with file upload, validation, and Vercel Serverless Functions on the backend — so every submission reliably reaches the admissions team via Nodemailer, with a confirmation email sent back to the applicant.',

      techStack: [
        'React 18',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'Framer Motion',
        'React Router v6',
        'Node.js',
        'Vercel Serverless Functions',
        'Nodemailer',
        'Formidable'
      ],

      keyFeatures: [
        'Animated single-page homepage (hero, statistics, about, partnerships, programs, alumni, testimonials, CTA)',
        'Dedicated program detail pages (Food & Beverage, Housekeeping)',
        'Information hub: news & articles, announcements, photo gallery with lightbox, FAQ',
        'Multi-step student registration with document upload (KTP, photo) and file-size validation',
        'Dual email notifications on registration: admin alert + applicant confirmation',
        'Brochure download lead-capture form with instant PDF delivery and graceful fallback',
        'Stateless serverless backend with CORS protection scoped to trusted origins',
        'Built-in /api/health diagnostic endpoint for safe post-deployment verification',
        'Fully responsive across mobile, tablet, and desktop',
        'Global instant scroll-reset on every route change'
      ],

      designProcess:
        'Development began by fixing the core business problem — the broken registration pipeline — before layering on visual polish. Once the API layer for registration and brochure requests was reliable, the front end was rebuilt page by page with a navy-and-gold premium visual identity suited to an academic, hospitality-industry brand. Motion design was kept restrained and purposeful: fade-up reveals and subtle hover lifts rather than heavy animation, to keep the site feeling premium rather than flashy.',

      lessonsLearned:
        'Beyond the technical rebuild, this project was a strong exercise in client communication. Working with a non-technical client meant translating concepts like "serverless function," "CORS," or "SMTP delivery" into plain language the client could actually make decisions from — explaining why the old form was silently failing, what a Gmail App Password is and why it\'s needed, and how to verify the new system was working without needing to understand the code behind it. That experience reinforced how much of freelance development is really about clear, patient explanation, not just writing code.',

      problem:
        'The client\'s existing website had a registration form that looked functional but never actually delivered submissions anywhere — a critical failure for an admissions-driven institution. The UI was also visually dated and broke on smaller screens, undermining trust in the school\'s brand.',

      process:
        'I audited the existing site to confirm the registration form had no working backend, then rebuilt the entire front end in React, TypeScript, and Tailwind CSS with Framer Motion for restrained, premium motion design. On the backend, I built Vercel Serverless Functions handling multi-step registration (with file upload via Formidable), brochure-lead capture, and a diagnostic health endpoint — wired to Nodemailer for reliable, branded transactional emails. Throughout, I kept the client informed in non-technical terms at every milestone, from initial audit to final deployment verification.',

      outcome:
        'The final product is a fully responsive, animation-rich marketing website with a registration system that actually works — every student inquiry and brochure request now reliably reaches the admissions team, with confirmation emails sent automatically. The project strengthened my skills in serverless architecture and lead-generation systems, and specifically in explaining technical work clearly to a non-technical client — turning what could have been a frustrating collaboration into a smooth one.'
    }
  },
  {
    id: 2,
    title: 'Shopi — Modern Full-Stack E-Commerce Platform',
    desc: 'A modern e-commerce platform featuring authentication, shopping cart, wishlist, admin dashboard, product management, payments, and order tracking.',
    tags: [
      'React',
      'Tailwind CSS',
      'FastAPI',
      'MongoDB'
    ],
    category: 'Web Development / E-Commerce',
    img: '/assets/projects/shopi-preview.png',
    year: '2026',
    demoUrl: 'https://shopi-lime.vercel.app/',
    sourceUrl: 'https://github.com/syfaarizal/shopi',
    detail: {
      overview:
        'Shopi is a modern full-stack e-commerce platform designed to provide a complete online shopping experience. The application includes user authentication, product discovery, wishlist management, shopping cart functionality, checkout flow, payment simulation, order tracking, and an administrative dashboard for managing products, users, and orders.',

      challenge:
        'Building an e-commerce application requires managing multiple interconnected systems such as authentication, product catalogs, order processing, payments, user roles, and administrative tools while maintaining a seamless user experience across desktop and mobile devices.',

      solution:
        'Developed a scalable full-stack architecture using React for the frontend and FastAPI for the backend. The platform integrates authentication, state management, product CRUD operations, payment workflows, image uploads, and role-based access control into a unified marketplace experience.',

      techStack: [
        'React',
        'Tailwind CSS',
        'React Router',
        'Zustand',
        'TanStack Query',
        'FastAPI',
        'MongoDB',
        'JWT Authentication',
        'Motor',
        'Python',
        'Vite'
      ],

      keyFeatures: [
        'User authentication with JWT',
        'Role-based access control (User & Admin)',
        'Product catalog and search filters',
        'Wishlist management',
        'Shopping cart system',
        'Checkout and order management',
        'Dummy payment gateway simulation',
        'Admin dashboard',
        'Product CRUD operations',
        'Image upload support',
        'Order status management',
        'Responsive design with dark mode'
      ],

      designProcess:
        'The application was designed following a marketplace-first approach. Development started with the customer experience, including product browsing, cart management, and checkout flow. Administrative features such as product management, order monitoring, image uploads, and user role management were then implemented to create a complete e-commerce ecosystem. The architecture separates frontend state management, API services, authentication, and database operations to improve maintainability and scalability.',

      lessonsLearned:
        'Building Shopi provided valuable experience in designing full-stack systems where frontend and backend responsibilities must work together seamlessly. The project highlighted the importance of state management, API design, authentication security, role-based authorization, and scalable application architecture.',

      problem:
        'Many e-commerce platforms require a combination of customer-facing features and internal management tools. Without proper architecture, handling products, orders, payments, user roles, and administration can quickly become difficult to maintain and extend.',

      process:
        'I developed the frontend using React, Tailwind CSS, Zustand, and TanStack Query to create a responsive shopping experience. On the backend, FastAPI and MongoDB were used to build REST APIs for authentication, products, orders, wishlist management, payments, and user profiles. Administrative functionality was implemented through dedicated dashboard modules, including product CRUD operations, image uploads, order status updates, and role-based access control.',

      outcome:
        'The final product is a fully functional e-commerce platform featuring authentication, product discovery, cart and wishlist management, checkout workflows, payment simulation, order tracking, and a comprehensive admin dashboard. Shopi demonstrates practical experience in full-stack development, API architecture, database integration, state management, authentication systems, and modern e-commerce application design.'
    }
  },
  {
    id: 3,
    title: 'Kichi — AI-Powered Discord Companion',
    desc: 'An AI companion for Discord with memory, reminders, voice support, and conversational intelligence.',
    tags: ['Node.js', 'Discord.js', 'OpenRouter API', 'Piper TTS'],
    category: 'AI / Productivity',
    img: '/assets/projects/kichi-preview.png',
    year: '2026',
    demoUrl: 'https://www.kichi.web.id/',
    sourceUrl: 'https://github.com/syfaarizal/pirate-discord-bot',
    detail: {
      overview:
        'Kichi is an AI-powered Discord companion designed to feel less like a bot and more like a real server member. It combines conversational AI, per-user memory, automated reminders, voice interaction, and utility tools into a single experience.',
      challenge:
        'Most Discord bots are command-driven and transactional. The challenge was creating a companion that feels personal, remembers users, supports voice interactions, and remains useful without overwhelming server members.',
      solution:
        'Built a modular Discord application powered by AI, memory management, automated scheduling, voice capabilities, and utility features. Kichi combines natural conversations, contextual memory, reminders, and voice support into a unified experience.',
      techStack: [
        'Node.js',
        'Discord.js v14',
        'OpenRouter API',
        'Piper TTS',
        'JSON Database',
        'Linux VPS',
        'PM2'
      ],
      keyFeatures: [
        'Per-user conversational memory',
        'AI-powered chat assistant',
        'Natural language reminder creation',
        'Custom server reminder system',
        'Voice channel integration',
        'Offline text-to-speech',
        'Lyrics search system',
        'Anti-spam protection',
        'Persistent VPS deployment',
        'Personalized user profiles'
      ],
      designProcess:
        'The system was designed around the idea of companionship rather than command execution. Features were developed in layers: conversational AI, memory persistence, reminder automation, voice interaction, and utility tools. The architecture was separated into commands, services, utilities, and providers to keep future feature expansion manageable.',
      lessonsLearned:
        'Building conversational products requires more than AI integration. User memory, response timing, personality consistency, and interaction design have a major impact on how human and engaging the experience feels.',
      problem:
        'Discord communities often rely on multiple bots for reminders, utility commands, music-related tasks, and AI conversations. This creates fragmented experiences and inconsistent interactions for users.',
      process:
        'I developed Kichi using Discord.js and OpenRouter AI, implemented per-user memory storage, built an automated reminder scheduler, integrated offline text-to-speech through Piper, deployed the system on a Linux VPS, and optimized interaction flow with cooldowns, typing simulation, and personalized responses.',
      outcome:
        'The result is a persistent AI companion capable of remembering users, creating reminders through natural language, joining voice channels, speaking through TTS, retrieving lyrics, and maintaining engaging conversations. Kichi demonstrates practical AI integration, system architecture design, API orchestration, and real-world deployment experience.'
    }
  },
    {
    id: 4,
    title: 'Login Page Showcase',
    desc: 'LIBR brand login concepts with a clean front-end presentation.',
    tags: ['Tailwind CSS', 'TypeScript'],
    category: 'Showcase',
    img: '/assets/projects/showcase-review.png',
    year: '2025',
    demoUrl: 'https://libr-showcase.vercel.app/',
    sourceUrl: 'https://github.com/syfaarizal/showcase-login-page',
    detail: {
      overview: 'A polished login-page showcase built around a brand-first visual direction and clean UI hierarchy.',
      challenge: 'Make the first-screen auth experience feel premium while keeping the layout simple and fast to scan.',
      solution: 'Use strong contrast, balanced spacing, and a focused structure that makes the brand feel memorable.',
      techStack: ['Next.js', 'Tailwind CSS', 'TypeScript'],
      keyFeatures: ['Brand-led layout', 'Responsive composition', 'Clean auth states', 'Simple conversion flow'],
      designProcess: 'Started from the brand tone, then refined spacing, typography, and panel balance until the screen felt calm and intentional.',
      lessonsLearned: 'Small adjustments in spacing and hierarchy have a large impact on perceived quality.',
      problem: 'The screen needed to feel modern and trustworthy without becoming visually noisy.',
      process: 'I iterated on layout balance, reduced unnecessary elements, and tuned the visual rhythm.',
      outcome: 'The final result reads as a premium login experience that is easy to extend into future auth flows.',
    },
  },
  {
    id: 5,
    title: 'CruisePoint Indonesia',
    desc: 'Designed to improve user engagement and showcase tourism services effectively.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Landing Page',
    img: '/assets/projects/cruisePoint-preview.png',
    year: '2024',
    demoUrl: 'https://syfaarizal.github.io/cruishpoint-indonesia/',
    sourceUrl: 'https://github.com/syfaarizal/cruishpoint-indonesia',
    detail: {
      overview: 'A landing page designed for CruisePoint Indonesia with a simple commercial story and clear brand cues.',
      challenge: 'Present a travel service in a way that feels credible, tidy, and easy to navigate on mobile.',
      solution: 'Use a clean hero, structured sections, and direct calls to action that keep the page easy to scan.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      keyFeatures: ['Responsive layout', 'Service highlights', 'Direct CTA flow', 'Mobile-friendly structure'],
      designProcess: 'The page was shaped around readability first, then refined with spacing and visual accents to keep it professional.',
      lessonsLearned: 'Travel and service landing pages work best when they stay clear and avoid over-decoration.',
      problem: 'The page needed to communicate trust and service value without a heavy interface.',
      process: 'I kept the layout focused, improved hierarchy, and adjusted the flow for responsive browsing.',
      outcome: 'The result is a straightforward landing page that feels polished and business-ready.',
    },
  }
]

export const projectCategories = ['All', ...new Set(projects.map((project) => project.category))]
export const projectStacks = ['All', ...new Set(projects.flatMap((project) => project.tags))]

export const featuredProject = projects[0]
