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
    title: 'RasaKita — Modern Food & Beverage Ecommerce',
    desc: 'A modern ecommerce website for food & beverage businesses with responsive design, product catalog, and conversion-focused user experience.',
    tags: ['Next.js 15', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion'],
    category: 'Web Development / Ecommerce',
    img: '/assets/projects/rasakita-preview.png',
    year: '2026',
    demoUrl: 'https://rasa-kita-ten.vercel.app/',
    sourceUrl: 'https://github.com/syfaarizal/client-rasa-kita-web',
    detail: {
      overview:
        'RasaKita is a modern ecommerce website concept built for food and beverage businesses, including local snacks, frozen food, healthy catering, and trendy beverages. The project focuses on delivering a clean shopping experience with responsive layouts, modern UI, and scalable architecture.',

      challenge:
        'Many small and medium food businesses still rely on outdated websites or social media catalogs that provide inconsistent shopping experiences. The challenge was designing an ecommerce interface that feels modern, trustworthy, mobile-friendly, and ready for future backend integration.',

      solution:
        'Built using Next.js App Router with TypeScript and Tailwind CSS, the website features a modular architecture, reusable components, responsive layouts, animated interactions, and centralized data management, making future API or CMS integration straightforward.',

      techStack: [
        'Next.js 15',
        'React 19',
        'TypeScript',
        'Tailwind CSS v4',
        'Framer Motion',
        'Swiper',
        'Lucide React',
        'shadcn/ui'
      ],

      keyFeatures: [
        'Responsive desktop & mobile design',
        'Modern ecommerce landing page',
        'Product catalog & category browsing',
        'Reusable UI component system',
        'Smooth page animations',
        'Scalable App Router architecture',
        'Centralized product data',
        'Ready for API integration',
        'SEO-friendly structure',
        'Fast performance optimization'
      ],

      designProcess:
        'The project started by identifying the needs of modern food businesses and translating them into a clean ecommerce experience. The design emphasizes readability, product presentation, strong call-to-actions, and mobile usability. Components were built modularly to simplify maintenance and future feature expansion.',

      lessonsLearned:
        'This project strengthened my understanding of scalable frontend architecture using the Next.js App Router, component-driven development, responsive UI implementation, performance optimization, and designing interfaces that balance aesthetics with business conversion goals.',

      problem:
        'Many food businesses struggle to present their products professionally online, resulting in fragmented customer journeys and limited scalability. They need an ecommerce platform that is visually appealing, responsive, and prepared for future business growth.',

      process:
        'I designed the interface, developed reusable UI components, organized project data into centralized modules, implemented responsive layouts for multiple screen sizes, added smooth animations using Framer Motion, and structured the application to support future backend or CMS integration without major refactoring.',

      outcome:
        'The final result is a modern ecommerce website that showcases products professionally across desktop and mobile devices. It demonstrates practical frontend engineering skills, responsive web development, reusable component architecture, performance-conscious implementation, and production-ready code organization.'
    }
  },
  {
    id: 5,
    title: 'Klinik Sehat — Modern Healthcare Clinic Website',
    desc: 'A modern healthcare clinic website with responsive design, doctor directory, medical services, health articles, and a seamless appointment experience.',
    tags: ['Next.js 15', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion'],
    category: 'Web Development / Healthcare',
    img: '/assets/projects/klinik-sehat-preview.png',
    year: '2026',
    demoUrl: 'https://kliniksehat.vercel.app/',
    sourceUrl: 'https://github.com/syfaarizal/client-klinik-sehat-web',
    detail: {
      overview:
        'Klinik Sehat is a modern healthcare website built for medical clinics to showcase doctors, healthcare services, health articles, and online appointment information. The project emphasizes responsive design, clean user experience, and a scalable frontend architecture ready for future CMS or backend integration.',

      challenge:
        'Many healthcare clinics still rely on outdated websites that make it difficult for patients to find doctors, browse services, or access health information efficiently. The challenge was creating a modern, trustworthy, and mobile-friendly experience that improves accessibility while remaining easy to maintain and expand.',

      solution:
        'Built with Next.js App Router, TypeScript, and Tailwind CSS, the website uses reusable UI components, centralized content management, responsive layouts, and modular architecture. This makes future integration with APIs, booking systems, or CMS platforms straightforward.',

      techStack: [
        'Next.js 15',
        'React 19',
        'TypeScript',
        'Tailwind CSS v4',
        'Framer Motion',
        'shadcn/ui',
        'Lucide React'
      ],

      keyFeatures: [
        'Responsive desktop & mobile design',
        'Modern healthcare landing page',
        'Doctor directory & profile pages',
        'Medical services catalog',
        'Health articles & blog pages',
        'Testimonials & trust sections',
        'Online reservation & contact page',
        'Reusable component architecture',
        'Centralized content management',
        'SEO-friendly structure'
      ],

      designProcess:
        'The design process focused on building a clean healthcare experience that prioritizes trust, readability, and accessibility. Each section was carefully structured to guide visitors from discovering medical services to exploring doctor profiles, reading health articles, and making appointments. Components were designed to be reusable and scalable for future expansion.',

      lessonsLearned:
        'This project strengthened my understanding of scalable frontend architecture with the Next.js App Router, component-driven development, responsive interface design, structured data management, and creating user experiences tailored to healthcare services.',

      problem:
        'Patients often struggle with clinic websites that provide limited information, poor navigation, and inconsistent user experiences. Healthcare providers need a modern platform that presents services professionally while remaining flexible for future digital transformation.',

      process:
        'I designed the user interface, developed reusable UI components, centralized all content into structured data files, implemented responsive layouts, added smooth animations with Framer Motion, and organized the application to support future CMS or backend integration with minimal refactoring.',

      outcome:
        'The final result is a modern healthcare website that delivers an intuitive experience across desktop and mobile devices. It showcases practical frontend engineering skills, scalable project architecture, reusable component systems, responsive implementation, and production-ready code organization.'
    }
  },
  {
    id: 6,
    title: 'Kopinusa Coffee & Eatery — Modern Restaurant Website',
    desc: 'A modern restaurant and coffee shop website featuring menu showcase, online reservations, promotions, blog articles, and a responsive customer experience.',
    tags: [
      'Next.js 15',
      'TypeScript',
      'Tailwind CSS v4',
      'Framer Motion'
    ],
    category: 'Web Development / Restaurant',
    img: '/assets/projects/kopinusa-preview.png',
    year: '2026',
    demoUrl: 'https://kopinusa.vercel.app/',
    sourceUrl: 'https://github.com/syfaarizal/kopinusa',
    detail: {
      overview:
        'Kopinusa Coffee & Eatery is a modern restaurant website designed for coffee shops and food businesses to showcase menus, promotions, gallery, blog articles, and reservation information. The project focuses on delivering an elegant user experience with responsive layouts, fast performance, and a scalable frontend architecture.',

      challenge:
        'Many restaurants still rely heavily on social media, making it difficult for customers to browse menus, discover promotions, or access complete business information. The challenge was creating a modern website that strengthens brand identity while providing a seamless browsing experience across all devices.',

      solution:
        'Built with Next.js App Router, TypeScript, and Tailwind CSS, the website leverages reusable UI components, centralized content management, responsive layouts, and modular architecture. The structure is prepared for future integration with CMS, ordering systems, or backend APIs.',

      techStack: [
        'Next.js 15',
        'React 19',
        'TypeScript',
        'Tailwind CSS v4',
        'Framer Motion',
        'Swiper',
        'shadcn/ui',
        'Lucide React'
      ],

      keyFeatures: [
        'Responsive desktop & mobile design',
        'Restaurant landing page',
        'Interactive food & beverage menu',
        'Category filtering & product pages',
        'Gallery & promotional sections',
        'Blog & article pages',
        'Reservation & contact page',
        'Reusable component architecture',
        'SEO-ready structure',
        'Fast performance optimization'
      ],

      designProcess:
        'The design process centered on creating a premium digital experience that reflects the atmosphere of a modern coffee shop. The interface prioritizes visual storytelling, menu presentation, intuitive navigation, and strong call-to-action sections while maintaining consistency through reusable UI components.',

      lessonsLearned:
        'This project enhanced my understanding of scalable frontend architecture with Next.js App Router, reusable component design, responsive layouts, structured content management, and building engaging user experiences for restaurant and hospitality businesses.',

      problem:
        'Many restaurants lack a professional website that effectively showcases their menu, promotions, and brand identity. Customers often experience fragmented journeys between social media platforms and messaging apps, limiting engagement and future scalability.',

      process:
        'I designed the complete user interface, developed reusable UI components, centralized business content into structured data modules, implemented responsive layouts, integrated smooth animations using Framer Motion, and organized the project for future CMS or backend integration with minimal refactoring.',

      outcome:
        'The final result is a modern restaurant website that provides an engaging browsing experience across desktop and mobile devices. It demonstrates practical frontend engineering skills, scalable architecture, reusable component systems, responsive implementation, performance optimization, and production-ready code organization.'
    }
  },
  {
    id: 7,
    title: 'Luxora Hotel — Premium Hotel Landing Page',
    desc: 'A premium hotel landing page template featuring online booking, room showcase, facilities, gallery, and a luxury guest experience with scalable architecture.',
    tags: [
      'Next.js 15',
      'TypeScript',
      'Tailwind CSS v4',
      'Framer Motion'
    ],
    category: 'Web Development / Hotel',
    img: '/assets/projects/luxora-preview.png',
    year: '2026',
    demoUrl: 'https://hotelluxora.vercel.app/',
    sourceUrl: 'https://github.com/syfaarizal/client-luxora-hotel-web',
    detail: {
      overview:
        'Luxora Hotel is a premium hotel landing page template built for hotels, resorts, villas, and hospitality businesses. Designed with a luxurious visual style, the project includes room showcases, booking functionality, facilities, galleries, testimonials, and a highly reusable architecture that can be rebranded without modifying UI components.',

      challenge:
        'Many hotel websites are difficult to customize, tightly coupled to specific branding, or lack scalability for future business needs. The challenge was building a premium landing page that delivers an exceptional guest experience while remaining flexible enough to support different hospitality brands through simple configuration changes.',

      solution:
        'Built with Next.js App Router, React 19, TypeScript, and Tailwind CSS v4, the template uses a configuration-driven architecture, reusable UI components, centralized content management, and a service layer prepared for CMS and backend integration. Branding, colors, typography, and content can all be updated without touching component code.',

      techStack: [
        'Next.js 15',
        'React 19',
        'TypeScript',
        'Tailwind CSS v4',
        'Framer Motion',
        'Swiper',
        'React Hook Form',
        'Zod',
        'shadcn/ui',
        'Lucide React'
      ],

      keyFeatures: [
        'Responsive desktop & mobile design',
        'Luxury hotel landing page',
        'Online booking search bar',
        'Room showcase & pricing carousel',
        'Premium facilities & gallery',
        'Testimonials & newsletter section',
        'Reusable configuration-driven architecture',
        'CMS & backend ready',
        'Advanced SEO optimization',
        'High performance & accessibility'
      ],

      designProcess:
        'The design process focused on creating a premium hospitality experience through elegant layouts, refined typography, immersive imagery, and intuitive booking flows. Every section was built as an independent, reusable component while all business content, branding, and configuration were centralized to maximize maintainability and future scalability.',

      lessonsLearned:
        'This project deepened my understanding of enterprise-grade frontend architecture, configuration-driven development, scalable design systems, reusable component patterns, SEO optimization, accessibility best practices, and building templates that can easily adapt to multiple business domains.',

      problem:
        'Hospitality businesses often need websites that are visually premium, easy to customize, and prepared for long-term growth. Traditional landing pages usually require extensive code changes for branding updates, making maintenance slower and less scalable.',

      process:
        'I designed the complete interface, developed reusable UI components, separated business content into centralized configuration and data modules, implemented responsive layouts, integrated animations with Framer Motion, optimized SEO and accessibility, and structured the application with a service layer ready for CMS or backend integration.',

      outcome:
        'The final result is a production-ready hotel landing page template that delivers a premium user experience across all devices. It demonstrates advanced frontend engineering, reusable architecture, configuration-driven development, responsive implementation, performance optimization, SEO best practices, and long-term scalability.'
    }
},
  {
    id: 8,
    title: 'Casio Classic Collection — Premium Product Landing Page',
    desc: 'A premium product landing page recreating Casio’s "Timeless Elegance" campaign with smooth animations, responsive layouts, and SEO optimization.',
    tags: [
      'React',
      'Tailwind CSS',
      'TypeScript',
      'Framer Motion'
    ],
    category: 'Web Development / Landing Page',
    img: '/assets/projects/casio-preview.png',
    year: '2026',
    demoUrl: 'https://casio-landing.vercel.app/',
    sourceUrl: 'https://github.com/syfaarizal/casio-landing',
    detail: {
      overview:
        'Casio Classic Collection is a premium product landing page inspired by Casio’s "Timeless Elegance" campaign. The project recreates a modern luxury watch showcase with pixel-accurate layouts, smooth scroll animations, responsive design, and SEO best practices while delivering a polished user experience across all devices.',

      challenge:
        'The main challenge was accurately recreating a premium product landing page while maintaining clean code architecture, responsive layouts, smooth animations, and high performance. Every section required careful attention to spacing, typography, image composition, and interaction details to preserve the luxury aesthetic.',

      solution:
        'Built the landing page using React, TypeScript, Tailwind CSS, and Framer Motion with reusable components and animation utilities. The application incorporates responsive layouts, bidirectional scroll animations, optimized image loading, structured SEO metadata, and modular project architecture for maintainability and scalability.',

      techStack: [
        'React 19',
        'TypeScript',
        'Tailwind CSS v4',
        'Framer Motion',
        'Vite',
        'Lucide React',
        'ESLint',
        'Prettier'
      ],

      keyFeatures: [
        'Pixel-perfect responsive layout',
        'Smooth scroll reveal animations',
        'Interactive hover micro-interactions',
        'Horizontal image gallery with pagination',
        'Reusable UI component architecture',
        'SEO optimization with Open Graph & JSON-LD',
        'Optimized image loading',
        'Reduced motion accessibility support',
        'Fast performance using Vite',
        'Clean and scalable project structure'
      ],

      designProcess:
        'Development began by analyzing the reference design to accurately reproduce its visual hierarchy, spacing, typography, and composition. The interface was then divided into reusable components such as the Hero, Features, Gallery, Quote Section, Navbar, and Footer. Finally, smooth animations, responsive behavior, accessibility improvements, and SEO enhancements were integrated to deliver a polished production-ready landing page.',

      lessonsLearned:
        'This project strengthened my understanding of translating static UI designs into responsive, production-ready web applications. It also improved my skills in component architecture, animation design, performance optimization, accessibility considerations, and SEO implementation using modern frontend technologies.',

      problem:
        'Luxury product landing pages require a balance between visual appeal, performance, accessibility, and maintainable code. Achieving a pixel-accurate recreation while ensuring responsiveness and smooth user interactions can be challenging without a well-structured frontend architecture.',

      process:
        'I developed the landing page using React, TypeScript, and Tailwind CSS while organizing the UI into reusable components. Framer Motion was implemented to create smooth scroll-based animations and interactive micro-interactions. Images were optimized for performance, SEO metadata was added using Open Graph and structured data, and accessibility features such as reduced-motion support were included to improve the overall user experience.',

      outcome:
        'The final result is a modern, responsive, and production-ready product landing page that closely recreates the original Casio campaign. The project demonstrates strong frontend development skills in responsive design, reusable component architecture, animation implementation, performance optimization, accessibility, and SEO best practices.'
    }
  },
  {
    id: 9,
    title: 'FocusForge — Personal Focus Timer App for Android',
    desc: 'A native Android focus app built with React and Capacitor: pick a task, set a duration, and lock into the session with a Focus Lock that blocks distractions.',
    tags: [
      'React',
      'Capacitor',
      'Vite',
      'JavaScript'
    ],
    category: 'Mobile App / Productivity',
    img: '/assets/projects/focusforge-preview.png',
    year: '2026',
    demoUrl: 'https://focusforge-libr.vercel.app/',
    sourceUrl: 'https://github.com/syfaarizal/focusforge-libr',
    detail: {
      overview:
        'FocusForge is a personal focus app for Android that turns a to-do list into actual focused time. Pick a task, set a duration, and the app locks you into the session until the timer ends — no accounts, no backend, no cloud sync, everything stays on the device. The web version is live as a demo, while the native build ships as a signed release APK through GitHub Actions.',
      challenge:
        'Most focus apps are either a plain timer with no accountability or a bloated productivity suite that demands onboarding, subscriptions, and a constant internet connection. The challenge was building something that actually keeps a person on task — the app has to be fast, work fully offline, survive being backgrounded without losing timer accuracy, and be able to physically prevent the user from abandoning the session on a phone full of distractions.',
      solution:
        'Built the app in React 19 and wrapped it as a native Android app with Capacitor 8, keeping the entire codebase local-first with data persisted to localStorage. Solved timer drift by storing a start timestamp plus accumulated pause time instead of counting ticks, and solved session abandonment by shipping a native Focus Lock: a custom Capacitor plugin that disables the Android back button, keeps the screen on, and optionally enables Android screen pinning to block Home and Recents. A signed release APK is produced automatically by a GitHub Actions workflow.',
      techStack: [
        'React 19',
        'Vite',
        'Capacitor 8',
        'Capacitor Local Notifications',
        'Capacitor Share & Filesystem',
        'Lucide React',
        'Custom Capacitor Plugin (Java)',
        'GitHub Actions',
        'localStorage'
      ],
      keyFeatures: [
        'Work Time timer with task selection, duration presets, pause, and early finish',
        'Focus Lock session screen with the Android back button disabled',
        'Android screen pinning to block Home and Recents',
        '5-second hold emergency exit with confirmation, session logged as cancelled',
        'Task list with categories (Work, Study, Personal, Other), time targets, and notes',
        'Tracker and history with daily, weekly, and monthly totals and a goal ring',
        'Category filters, per-item delete with undo, and clear all',
        'Stats screen with 7-day, 30-day, and custom ranges, bar chart, and period comparison',
        'Session completion rate and time-per-category breakdowns',
        'JSON backup and CSV export through the system share sheet',
        'Local notification fired when a session ends',
        'Fully offline with no account or backend'
      ],
      designProcess:
        'Design started from the core loop — pick, set, lock — and every screen was shaped around keeping the user inside that loop rather than adding more features. The visual direction is a dark, minimal interface with a single glowing accent, so the timer is always the focal point and nothing competes with it. The Focus Lock screen deliberately strips away navigation: one number, one status, one way out that requires holding a button for five seconds. Stats and tracker views were designed to read as a reflection on the day rather than a dashboard of numbers.',
      lessonsLearned:
        'The biggest lesson was that "native" features are a separate engineering discipline from the React app itself. Writing a custom Capacitor plugin in Java taught me how the WebView boundary really works, and how a CI patch script can inject a native module into a generated Android project without committing the whole Android tree to Git. On the frontend side, learning to derive statistics from a session list instead of storing aggregates separately — and to persist time as timestamps rather than counters — made the app resilient to backgrounding and WebView pauses in ways that a naive implementation would not be.',
      problem:
        'Focus tools usually fail in one of two directions: they are too weak to create real commitment, or they are too heavy to start using. On top of that, timer-based apps are notoriously inaccurate once the app is backgrounded, and most web apps cannot do anything about an Android user simply pressing Home.',
      process:
        'I built the React interface in Vite with a small external store using useSyncExternalStore, persisted to localStorage, keeping all statistics derived from the session list rather than duplicated. For the timer, I stored a start timestamp with accumulated pause time so it stays correct when the app is backgrounded, and finalizes sessions that ended in the background the moment the app returns. For Focus Lock, I wrote a custom Capacitor plugin in Java wrapping startLockTask() and FLAG_KEEP_SCREEN_ON, and wrote a patch script that registers it in the generated Android project so no Android project files need to be committed. Finally, I set up a GitHub Actions workflow that builds the web app, generates the Android project, icons and splash, then builds and signs a release APK.',
      outcome:
        'The result is a working Android focus app that is genuinely hard to abandon — the screen stays on, the back button does nothing, and leaving early requires a deliberate five-second hold. It installs directly as a signed APK with no account, no backend, and no network requirement, while the web build remains available as a live demo. The project strengthened my skills in React Native-adjacent mobile architecture, native plugin interop, CI-driven release pipelines, and designing software around commitment rather than convenience.'
    }
  },
  {
    id: 10,
    title: 'Mall Permata Dian Anyar — Resident Catalog PWA',
    desc: 'A resident-oriented catalog PWA for a housing complex, where UMKM sellers publish their products and orders are handed off through structured WhatsApp messages instead of a custom order database.',
    tags: [
      'React',
      'TypeScript',
      'Tailwind CSS v4',
      'Supabase',
      'PWA'
    ],
    category: 'Web Development / E-Commerce',
    img: '/assets/projects/mpda-preview.png',
    year: '2026',
    demoUrl: 'https://mall-pda.vercel.app/',
    sourceUrl: 'https://github.com/syfaarizal/mall-permata-dian-anyar',
    detail: {
      overview:
        'Mall Permata Dian Anyar is a catalog PWA built for the residents and small business owners of the Dian Anyar housing complex. Sellers open their own shops, publish photographed products, and mark stock as ready or sold out. Buyers browse a photo-first catalog, filter by what is available right now, keep a cart per store, and complete checkout by sending a structured WhatsApp message to the seller. There is deliberately no order table in the database — the system is a catalog and discovery layer, and the actual transaction stays on WhatsApp where the seller and buyer already live.',
      challenge:
        'Small vendors in the complex were selling through scattered WhatsApp group chats and informal posts. The catalog was effectively unusable: product photos scrolled away, prices and availability drifted between messages, new arrivals were impossible to find, and a buyer could not tell which of the dozens of sellers was actually open today. On top of that, a shared housing complex means the platform has to handle real privacy concerns — addresses, phone numbers, and delivery locations for specific households — and it has to work for residents who are not technical, on phones with limited connectivity, without asking them to adopt yet another account system.',
      solution:
        'Built the catalog as an installable PWA with React, Vite, TypeScript, and Tailwind CSS v4 on Supabase for Postgres, Auth, and file storage. Products are photo-first, searchable, and filterable by a "Ready sekarang" state so buyers see only what is actually available today. Each store keeps its own cart, and checkout composes a consistent, scannable WhatsApp message with items, total, payment method, and delivery address — so the seller receives a structured order without the platform ever needing to store one. Authentication uses a custom phone-number-plus-PIN scheme mapped to internal Supabase email accounts, and all access rules are enforced in the database through Row Level Security, triggers, and security-definer functions rather than hidden only in the UI.',
      techStack: [
        'React 19',
        'Vite',
        'TypeScript',
        'Tailwind CSS v4',
        'React Router',
        'TanStack Query',
        'Supabase (PostgreSQL, Auth, Storage)',
        'Supabase Row Level Security',
        'Supabase Edge Functions',
        'vite-plugin-pwa',
        'Vitest',
        'Vercel'
      ],
      keyFeatures: [
        'Installable PWA with offline banner and lazy-loaded routes',
        'Maroon-and-gold themed resident catalog, photo-first browsing',
        'Search and "Ready sekarang" (available right now) filtering',
        'Store pages with cover, opening hours, and delivery area',
        'Per-store shopping carts',
        'Structured WhatsApp checkout messages and a QRIS payment page',
        'Seller panel: open a shop, shop settings, photographed products, ready/sold-out toggles, open/close business',
        'Store approval workflow with admin confirmation',
        'Resident registration, login, delivery addresses, and protected routes',
        'Phone number + 6-digit PIN authentication with invitation codes',
        'Admin panel for stores, users, community settings, categories, phone verification, and PIN resets',
        'Three admin roles: owner, community admin, and operational admin',
        'Optional scheduled daily stock reset via pg_cron',
        'Prepared migration path from PIN auth to phone OTP'
      ],
      designProcess:
        'The design was shaped around the assumption that residents open this on their phone, standing in a kitchen, deciding what to order in the next ten minutes. That ruled out dense catalogs and long forms: the home screen leads with a large search field and photos, current delivery address, and category chips, and the "Ready sekarang" filter is a first-class control rather than a buried option. The visual identity uses a maroon-and-gold theme sourced from a single design-token file so the whole community platform reads as one place. The seller side deliberately shares the same components and spacing rhythm as the buyer side, so a vendor can post a product without learning a second interface.',
      lessonsLearned:
        'The most valuable lesson was that access control is a database concern, not a UI concern. Building the permission matrix in PostgreSQL — RLS policies, triggers, and security-definer functions — taught me to enforce rules where they cannot be bypassed, and to keep the UI matrix and the server matrix in sync deliberately rather than letting them drift. Designing the custom phone-and-PIN login was another lesson in thinking about what a real community needs versus what an off-the-shelf auth provider offers, and in being honest about its limits: a six-digit PIN is genuinely weak, and the mitigation had to come from rate limiting, invitation codes, and admin approval rather than pretending otherwise. Above all, the no-order-table decision proved that a product does not need to own the transaction to own the experience — being a good catalog and a good handoff is enough.',
      problem:
        'UMKM sellers around the complex were selling through WhatsApp group chats, which is flexible for quick conversations but not for commerce. Posts got buried, prices and stock status drifted, product photos were hard to browse, buyers had to message every seller individually to ask what was available, and there was no way to discover a new seller or a new product. At the same time, a community platform handling household addresses and phone numbers needed a trusted, permissioned environment rather than an open marketplace.',
      process:
        'I built the foundation first — a maroon-and-gold theme with a single token source, PWA support, and unit-tested pure functions for phone handling, store status, WhatsApp message formatting, and address formatting. Then I designed the database with ordered SQL migrations covering schema, admin functions, and RLS plus storage policies, seeding initial categories and the media bucket. On top of that I implemented the account layer: resident registration with invitation codes, phone-plus-PIN login mapped to internal email accounts, delivery addresses, session handling, and a RequireAuth route guard. The seller panel came next with shop creation, settings, photo-first product management, ready/sold-out toggles, and an approval workflow feeding the admin verification step. For buyers I built the photo-centric home screen, store pages, search, the availability filter, subscriptions, per-store carts, and the structured WhatsApp checkout with a QRIS page. Finally I added the admin panel for stores, users, community settings, categories, phone verification, and PIN resets — backed by a three-tier role matrix — plus polish: shop covers, PWA install prompts, an offline banner, an error boundary, lazy-loaded routes, and an optional pg_cron job for automatic morning stock resets.',
      outcome:
        'The result is a working resident catalog that replaces scrolling through group chats with a searchable, photo-first storefront where buyers can filter to what is actually available right now and check out in a couple of taps via WhatsApp. Sellers manage their own shops and stock without help, and every admin action is enforced by the database rather than the interface. Beyond the catalog itself, the project delivered a full Supabase-native stack — RLS, triggers, security-definer functions, Edge Functions, and scheduled jobs — plus a hard lesson in what a community platform owes its users in terms of privacy and trust.'
    }
  }
]

export const projectCategories = ['All', ...new Set(projects.map((project) => project.category))]
export const projectStacks = ['All', ...new Set(projects.flatMap((project) => project.tags))]

export const featuredProject = projects[0]
