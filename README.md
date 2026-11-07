# Portfolio Syifa Fauziyah Arizal

Personal portfolio website — a single-page site with dedicated Projects and Blog sections, code-split per route, built with **React 18 + TypeScript + Tailwind CSS** and deployed on **Vercel**.

Live site: [syifa-arizal.site](https://syifa-arizal.site/)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type-check
npx tsc --noEmit

# Lint
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🗂️ Project Structure

```text
portfolio-syifa/
├── api/
│   └── contact.js         — Vercel serverless endpoint for the contact form (Resend)
├── public/
│   ├── assets/
│   │   ├── blog/          — Blog article images
│   │   ├── cv/            — Downloadable CV (PDF)
│   │   ├── projects/      — Project preview images
│   │   ├── gambar-syifa-nobg.png
│   │   ├── syifa-card.png — Profile card (Hero)
│   │   └── syifa-hero.png
│   ├── favicon.svg
│   ├── logo-libr.png
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── App.tsx             — Root component; routing, lazy loading, loading screen
│   ├── main.tsx            — Entry point
│   ├── index.css           — Tailwind base + global styles
│   ├── components/
│   │   ├── Navbar.tsx      — Sticky navigation bar
│   │   ├── Hero.tsx        — Hero section with profile photo
│   │   ├── About.tsx       — About + info cards
│   │   ├── Skills.tsx      — Skills grid
│   │   ├── Projects.tsx    — Featured project cards (ids 9–11)
│   │   ├── Blog.tsx        — Blog article list
│   │   ├── Contact.tsx     — Contact form
│   │   ├── Footer.tsx      — Footer with 4-column layout
│   │   ├── CvModal.tsx     — CV preview modal
│   │   ├── LoadingScreen.tsx — Animated loading screen with exit transition
│   │   └── ScrollReveal.tsx  — Scroll-triggered reveal wrapper
│   ├── pages/
│   │   ├── projects/
│   │   │   ├── ProjectsPage.tsx      — All projects, filterable by category & stack
│   │   │   └── ProjectDetailModal.tsx — Full project case-study modal
│   │   └── blog/
│   │       ├── BlogPage.tsx          — Blog index
│   │       ├── ArticlesLayout.tsx    — Shared article shell
│   │       ├── days-challenge/       — "30 Days Challenge" articles
│   │       ├── html-modul/           — HTML module articles
│   │       ├── css-modul/            — CSS module articles
│   │       └── js-modul/             — JavaScript module articles
│   ├── data/
│   │   ├── projects.ts     — Project list + full case-study details
│   │   └── blog.ts         — Blog article metadata
│   ├── hooks/
│   │   └── useParallax.ts  — Parallax scroll hook
│   └── lib/
│       └── navigation.ts   — Client-side routing + scroll helpers
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── vercel.json            — SPA rewrites, cache headers, security headers
```

## 🧭 Routing & Code Splitting

There is no router library — routes are matched manually in `App.tsx` against `window.location.pathname`, with a `popstate` listener driving re-renders. Every secondary page is loaded with `React.lazy` and wrapped in `Suspense`, so the initial bundle only carries the home page:

- `/` — home (hero, about, skills, featured projects, blog, contact)
- `/projects` — full project grid with category/stack filters
- `/blog` — blog index
- `/blog/days-challenge/day1…6` — challenge articles
- `/blog/html-modul/html1…2` — HTML module articles
- `/blog/css-modul/css1…4` — CSS module articles
- `/blog/js-modul/js1…7` — JavaScript module articles
- `/blog/js-modul/js2-solutions` … `js6-solutions` — solution write-ups for the JS module

`vercel.json` rewrites all non-`/api` paths to `index.html` so deep links work on refresh.

## 🎨 Design Tokens

| Token | Value |
| --- | --- |
| Primary (Burgundy) | `#7A0F16` (full scale `50`–`950` in `tailwind.config.js`) |
| Border | `#EAEAEA` |
| Text | `#1a1a1a` |
| Muted text | `#9CA3AF` |
| Font Heading | Cormorant Garamond (serif) |
| Font Body | DM Sans (sans-serif) |
| Border radius | 12–16px (rounded-xl/2xl) |
| Shadows | `card`, `float` |

Fonts are loaded from Google Fonts with `font-display: swap` to avoid FOIT, and DM Sans is preloaded since it renders first.

## 🖼️ Replacing the Profile Photo

Replace `public/assets/syifa-card.png` (and `public/assets/syifa-hero.png`) with your new photo. The Hero section references the image via its public path.

## 📝 Adding a Project

Add an entry to `src/data/projects.ts`. Each project needs a `detail` block with `overview`, `challenge`, `solution`, `techStack`, `keyFeatures`, `designProcess`, `lessonsLearned`, `problem`, `process`, and `outcome`. Place the preview image in `public/assets/projects/` and reference it as `/assets/projects/<file>.png`.

`projectCategories` and `projectStacks` are derived from the project list automatically, so filters on the Projects page update themselves.

The three most recent projects (ids 9–11) are shown in the home page's Featured section — see the filter in `src/components/Projects.tsx`.

## 📰 Adding a Blog Article

Add the article metadata to `src/data/blog.ts`, create its page under `src/pages/blog/<module>/`, and register the route in the corresponding array in `src/App.tsx`.

## 📮 Contact Form Email

The contact form posts to a serverless backend endpoint at `api/contact.js`.

Required environment variables:

- `RESEND_API_KEY` - Resend API key for sending email

Optional environment variables:

- `CONTACT_TO_EMAIL` - destination email address for incoming messages
- `CONTACT_FROM_EMAIL` - sender name/address shown in the email

If you deploy to Vercel, you can install Resend from the Vercel Marketplace and let Vercel provision `RESEND_API_KEY` automatically. The form uses the sender email as `reply-to`, so you can reply directly to the visitor.

## 🌐 Deployment

The project is deployed on **Vercel**. `vercel.json` handles the SPA rewrite, long-lived immutable caching for `/assets`, and security headers (`X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`, `Referrer-Policy`).

It also runs on other static hosts:

- **Netlify**: drag the `dist/` folder
- **GitHub Pages**: use `gh-pages` package

---

Built with ♥ by Syifa Fauziyah Arizal
