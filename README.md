# Portfolio Syifa Fauziyah Arizal

Modern professional portfolio website built with **React + TypeScript + Tailwind CSS**.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🗂️ Project Structure

```
portfolio-syifa/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── App.tsx             — Root component, assembles all sections
    ├── main.tsx            — Entry point
    ├── index.css           — Tailwind base + global styles
    ├── assets/
    │   └── syifa.png       — Profile photo (replace to update)
    └── components/
        ├── Navbar.tsx      — Sticky navigation bar
        ├── Hero.tsx        — Hero section with profile photo
        ├── About.tsx       — About + info cards
        ├── Skills.tsx      — Skills grid
        ├── Projects.tsx    — Featured project cards
        ├── Blog.tsx        — Blog article list
        ├── Contact.tsx     — Contact form
        └── Footer.tsx      — Footer with 4-column layout
```

## 🎨 Design Tokens

| Token | Value |
| --- | --- |
| Primary (Burgundy) | `#7A0F16` |
| Border | `#EAEAEA` |
| Text | `#1a1a1a` |
| Muted text | `#9CA3AF` |
| Font Heading | Cormorant Garamond (serif) |
| Font Body | DM Sans (sans-serif) |
| Border radius | 12–16px (rounded-xl/2xl) |

## 🖼️ Replacing the Profile Photo

Simply replace `src/assets/syifa.png` with your new photo.
The file is imported directly in `Hero.tsx`.

## 🌐 Deployment

The project is ready for deployment to:
- **Vercel**: `vercel deploy`
- **Netlify**: drag the `dist/` folder
- **GitHub Pages**: use `gh-pages` package

## 📮 Contact Form Email

The contact form sends messages through a serverless backend endpoint at `api/contact.js`.

Required environment variables:
- `RESEND_API_KEY` - Resend API key for sending email

Optional environment variables:
- `CONTACT_TO_EMAIL` - destination email address for incoming messages
- `CONTACT_FROM_EMAIL` - sender name/address shown in the email

If you deploy to Vercel, you can install Resend from the Vercel Marketplace and let Vercel provision `RESEND_API_KEY` automatically. The form uses the sender email as `reply-to`, so you can reply directly to the visitor.

---
Built with ♥ by Syifa Fauziyah Arizal
