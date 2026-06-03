export type BlogPost = {
  id: string
  category: 'challenges' | 'html' | 'css' | 'javascript'
  date: string
  badge: string
  title: string
  excerpt: string
  tags: string
  path: string
}

export type BlogSection = {
  key: string
  title: string
  posts: BlogPost[]
}

export const blogSections: BlogSection[] = [
  {
    key: 'challenges',
    title: 'Challenges Day-By-Day',
    posts: [
      {
        id: 'day1',
        category: 'challenges',
        date: 'June 5, 2025',
        badge: 'Template Literals',
        title: 'Day 1: Print Name and Status',
        excerpt:
          'Today I learned about template literals in JavaScript. You know, that thing where you can insert variables directly into strings with backticks...',
        tags: 'javascript template-literals basics',
        path: '/blog/days-challenge/day1',
      },
      {
        id: 'day2',
        category: 'challenges',
        date: 'June 6, 2025',
        badge: 'Calculator',
        title: 'Day 2: Simple Age Calculator',
        excerpt:
          "Today's challenge really made my brain curl 😅 We were asked to create a JavaScript program that calculates age based on birth year...",
        tags: 'javascript calculator age math',
        path: '/blog/days-challenge/day2',
      },
      {
        id: 'day3',
        category: 'challenges',
        date: 'June 9, 2025',
        badge: 'Functions',
        title: 'Day 3: Interactive Calculator',
        excerpt:
          'Day 3 of this coding challenge really made me frown but also smile when I finally got it working. Building an interactive calculator...',
        tags: 'javascript functions calculator',
        path: '/blog/days-challenge/day3',
      },
      {
        id: 'day4',
        category: 'challenges',
        date: 'June 11, 2025',
        badge: 'Game',
        title: 'Day 4: Number Guessing Game',
        excerpt:
          'Day 4 of this coding challenge had a different vibe because I was asked to create a simple game: a number guessing challenge...',
        tags: 'javascript game logic',
        path: '/blog/days-challenge/day4',
      },
      {
        id: 'day5',
        category: 'challenges',
        date: 'July 7, 2025',
        badge: 'Loops',
        title: 'Day 5: Creative Name Looping',
        excerpt:
          "After taking some time off to focus on other projects, I'm finally back to the JS challenges! This time working with loops...",
        tags: 'javascript loops array',
        path: '/blog/days-challenge/day5',
      },
      {
        id: 'day6',
        category: 'challenges',
        date: 'July 15, 2025',
        badge: 'Logic',
        title: 'Day 6: Odd, Even, or Special?',
        excerpt:
          "Yo! Back again with day 6 challenge. Today I'm playing with numbers, but not just checking if they're odd or even...",
        tags: 'javascript conditions logic',
        path: '/blog/days-challenge/day6',
      },
    ],
  },
  {
    key: 'html',
    title: 'HTML',
    posts: [
      {
        id: 'html1',
        category: 'html',
        date: 'May 15, 2025',
        badge: 'Basics',
        title: 'HTML Basics: The Foundation of Web Development',
        excerpt:
          'HTML is the foundation of all web development. Learn the basic concepts, tags, and structure that...',
        tags: 'html web development basics',
        path: '/blog/html-modul/html1',
      },
      {
        id: 'html2',
        category: 'html',
        date: 'May 16, 2025',
        badge: 'Semantics',
        title: 'HTML Intermediate: Structure & Semantics',
        excerpt:
          'Take your HTML skills to the next level by learning about iframes, div vs span, and the importance of semantic HTML structure...',
        tags: 'html layout semantics',
        path: '/blog/html-modul/html2',
      },
    ],
  },
  {
    key: 'css',
    title: 'CSS',
    posts: [
      {
        id: 'css1',
        category: 'css',
        date: 'May 17, 2025',
        badge: 'Styling',
        title: 'CSS Basics: Styling the Web',
        excerpt:
          'CSS is what transforms plain HTML into beautiful, visually appealing websites. Learn the fundamentals of styling web pages with colors, fonts, and layouts....',
        tags: 'css web design styling basics',
        path: '/blog/css-modul/css1',
      },
      {
        id: 'css2',
        category: 'css',
        date: 'May 19, 2025',
        badge: 'Web Design',
        title: 'CSS Styling: Beyond the Basics',
        excerpt:
          'Take your CSS skills further by mastering text styling, the box model, backgrounds, and display properties to create visually appealing websites....',
        tags: 'css web design styling',
        path: '/blog/css-modul/css2',
      },
      {
        id: 'css3',
        category: 'css',
        date: 'May 22, 2025',
        badge: 'Layout',
        title: 'CSS Layout: Positioning and Modern Techniques',
        excerpt:
          'Master modern CSS layout techniques including positioning, Flexbox, Grid systems, and responsive design to create...',
        tags: 'css layout flexbox grid',
        path: '/blog/css-modul/css3',
      },
      {
        id: 'css4',
        category: 'css',
        date: 'May 27, 2025',
        badge: 'Animations',
        title: 'CSS Advanced: Animations, Responsive Design & Best Practices',
        excerpt:
          'Master advanced CSS techniques including animations, transitions, responsive units, and professional...',
        tags: 'css animations responsive design',
        path: '/blog/css-modul/css4',
      },
    ],
  },
  {
    key: 'javascript',
    title: 'JavaScript',
    posts: [
      {
        id: 'js1',
        category: 'javascript',
        date: 'Jan 11, 2026',
        badge: 'Basics',
        title: 'JavaScript Basics: Your First Step Into the Logic World',
        excerpt:
          'If HTML is the skeleton and CSS is the outfit, JavaScript is the brain. Without it, your website is just...',
        tags: 'javascript basics',
        path: '/blog/js-modul/js1',
      },
      {
        id: 'js2',
        category: 'javascript',
        date: 'Jan 11, 2026',
        badge: 'Logic',
        title: 'Logic Brain Gym: Mastering Control Flow',
        excerpt:
          'This is where JavaScript stops being just a language and starts becoming a way of thinking....',
        tags: 'javascript logic control flow',
        path: '/blog/js-modul/js2',
      },
      {
        id: 'js2s',
        category: 'javascript',
        date: 'Jan 12, 2026',
        badge: 'Solutions',
        title: 'Logic Brain Gym — Solutions',
        excerpt:
          "This page contains the official solutions for Module 2. If you haven't tried the challenges yet — stop scrolling.",
        tags: 'javascript logic solutions',
        path: '/blog/js-modul/js2-solutions',
      },
      {
        id: 'js3',
        category: 'javascript',
        date: 'Jan 12, 2026',
        badge: 'Arrays & Objects',
        title: 'Data Exploration: Array & Object',
        excerpt:
          'If JavaScript is a kitchen, arrays and objects are the fridge. Messy data = no cooking...',
        tags: 'javascript array object data',
        path: '/blog/js-modul/js3',
      },
      {
        id: 'js3s',
        category: 'javascript',
        date: 'Jan 12, 2026',
        badge: 'Solutions',
        title: 'Array & Object — Solutions',
        excerpt:
          "Official solutions for Module 3 challenges. If you didn't try first — scroll back.",
        tags: 'javascript array object data solutions',
        path: '/blog/js-modul/js3-solutions',
      },
      {
        id: 'js4',
        category: 'javascript',
        date: 'Jan 12, 2026',
        badge: 'Functions',
        title: 'Function Mastery: From Beginner to Clean Code',
        excerpt:
          "When your code gets long and copy–paste starts spreading, that's your sign: you need functions...",
        tags: 'javascript function cleancode',
        path: '/blog/js-modul/js4',
      },
      {
        id: 'js4s',
        category: 'javascript',
        date: 'Jan 12, 2026',
        badge: 'Solutions',
        title: 'Function Mastery — Solutions',
        excerpt:
          "This page contains the official solutions for Module 4. If you haven't tried the challenges yet — stop scrolling.",
        tags: 'javascript function cleancode solutions',
        path: '/blog/js-modul/js4-solutions',
      },
      {
        id: 'js5',
        category: 'javascript',
        date: 'Jan 13, 2026',
        badge: 'DOM',
        title: 'DOM Manipulation: When Code Starts Moving the Page',
        excerpt:
          'This is where JavaScript stops being theory and starts touching the screen...',
        tags: 'javascript dom front-end',
        path: '/blog/js-modul/js5',
      },
      {
        id: 'js5s',
        category: 'javascript',
        date: 'Jan 13, 2026',
        badge: 'Solutions',
        title: 'DOM Manipulation — Solutions',
        excerpt:
          "Tried the challenges already? Good. Now let's break them down like real front-end devs.",
        tags: 'javascript dom front-end solutions',
        path: '/blog/js-modul/js5-solutions',
      },
      {
        id: 'js6',
        category: 'javascript',
        date: 'Jan 13, 2026',
        badge: 'Async',
        title: 'Asynchronous JavaScript: Keep Your UI Alive',
        excerpt:
          'JavaScript is single-threaded. If your code waits and freezes, your UI dies....',
        tags: 'javascript async fetch api',
        path: '/blog/js-modul/js6',
      },
      {
        id: 'js6s',
        category: 'javascript',
        date: 'Jan 13, 2026',
        badge: 'Solutions',
        title: 'Asynchronous JavaScript — Solutions',
        excerpt:
          "Async is not about speed. It's about control, UX, and resilience.",
        tags: 'javascript async fetch api solutions',
        path: '/blog/js-modul/js6-solutions',
      },
      {
        id: 'js7',
        category: 'javascript',
        date: 'Jan 14, 2026',
        badge: 'Projects',
        title: 'Mini Projects Gallery',
        excerpt:
          'Tutorials teach you how to type. Projects prove you can think and build.',
        tags: 'javascript projects portfolio',
        path: '/blog/js-modul/js7',
      },
    ],
  },
]

export const blogPosts = blogSections.flatMap((section) => section.posts)
