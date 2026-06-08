import ArticlesLayout, { CodeBlock } from '../ArticlesLayout'

export default function Js7Page() {
  return (
    <ArticlesLayout
      badge="JS Module 7"
      title="Mini Projects Gallery"
      date="Jan 2026"
      tags="JavaScript, Projects, Portfolio"
      readingTime="8 min read"
      intro="Tutorials teach you how to type. Projects prove you can think and build."
      githubUrl="#"
      prev={{
        path: '/blog/js-modul/js6-solutions',
        title: 'Asynchronous JavaScript — Solutions',
      }}
      next={undefined}
      related={[
        {
          path: '/blog/html-modul/html1',
          date: 'May 15, 2025',
          title: 'HTML Basics: The Foundation of Web Development',
          excerpt:
            'Learn the basic concepts, tags, and structure that make up every webpage on the internet.',
          tags: ['HTML', 'Web Development', 'Basics'],
        },
        {
          path: '/blog/css-modul/css1',
          date: 'May 10, 2025',
          title: 'CSS Fundamentals: The Basics You Must Know',
          excerpt:
            'CSS is what makes your HTML go from boring black text to a stunning visual experience.',
          tags: ['CSS', 'Basics', 'Fundamentals'],
        },
        {
          path: '/blog/days-challenge/day1',
          date: 'June 5, 2025',
          title: 'Day 1: Print Name and Status',
          excerpt: 'Learn how to print your name and status using JavaScript template literals.',
          tags: ['JavaScript', 'Template Literals'],
        },
        {
          path: '/blog/js-modul/js1',
          date: 'Jun 2026',
          title: 'JavaScript Basics',
          excerpt:
            'Learn the fundamentals of JavaScript programming.',
          tags: ['JavaScript', 'Front-End', 'Logic'],
        },
      ]}
      conclusion={
        <>
          <h3 className="mb-3 font-bold text-[1.5rem]">
            Final Takeaways
          </h3>

          <ul className="list-disc list-inside">
            <li>Projects matter more than theory</li>
            <li>Small but finished beats big but abandoned</li>
            <li>Every project here can be expanded</li>
            <li>This proves real front-end readiness</li>
          </ul>
        </>
      }
    >
      <section>
        <p className="mb-5">
          This module is different. Less theory. More building.
        </p>

        <ul className="list-disc list-inside">
          <li>Every project is small but real</li>
          <li>Each one trains a specific skill</li>
          <li>All of them belong in your portfolio</li>
        </ul>

        <p className="mt-5">
          This is where your blog starts to feel alive.
        </p>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Project 1 — Stopwatch
        </h2>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Focus Skills
        </h3>

        <ul className="list-disc list-inside">
          <li>
            <code>setInterval</code> &amp; <code>clearInterval</code>
          </li>
          <li>DOM manipulation</li>
          <li>Simple state management</li>
        </ul>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`let time = 0;
let interval;

function start() {
  interval = setInterval(() => {
    time++;
    display.textContent = time;
  }, 1000);
}

function stop() {
  clearInterval(interval);
}

function reset() {
  time = 0;
  display.textContent = time;
}`}
        </CodeBlock>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Upgrade Ideas
        </h3>

        <ul className="list-disc list-inside">
          <li>Minute : second format</li>
          <li>Lap time</li>
          <li>Small animation for smooth UI</li>
        </ul>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Project 2 — Weather App
        </h2>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Focus Skills
        </h3>

        <ul className="list-disc list-inside">
          <li>Fetch API</li>
          <li>async / await</li>
          <li>Error handling</li>
          <li>DOM rendering</li>
        </ul>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`async function getWeather(city) {
  const res = await fetch(
    \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=API_KEY&units=metric\`
  );

  const data = await res.json();

  console.log(data.main.temp);
}`}
        </CodeBlock>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Upgrade Ideas
        </h3>

        <ul className="list-disc list-inside">
          <li>Weather icons</li>
          <li>Loading state</li>
          <li>City search history</li>
          <li>Geolocation support</li>
        </ul>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Project 3 — Password Generator
        </h2>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Focus Skills
        </h3>

        <ul className="list-disc list-inside">
          <li>Function logic</li>
          <li>Randomization</li>
          <li>Event handling</li>
        </ul>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`function generatePassword(length) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$";

  let password = "";

  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  return password;
}`}
        </CodeBlock>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Upgrade Ideas
        </h3>

        <ul className="list-disc list-inside">
          <li>Toggle symbols / numbers</li>
          <li>Password strength indicator</li>
          <li>Copy to clipboard</li>
        </ul>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Project 4 — Notes App
        </h2>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Focus Skills
        </h3>

        <ul className="list-disc list-inside">
          <li>CRUD logic</li>
          <li>LocalStorage</li>
          <li>Dynamic rendering</li>
        </ul>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`function saveNote(note) {
  let notes =
    JSON.parse(localStorage.getItem("notes")) || [];

  notes.push(note);

  localStorage.setItem(
    "notes",
    JSON.stringify(notes)
  );
}`}
        </CodeBlock>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Upgrade Ideas
        </h3>

        <ul className="list-disc list-inside">
          <li>Edit &amp; delete notes</li>
          <li>Search notes</li>
          <li>Tags system</li>
          <li>Dark mode</li>
        </ul>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Project 5 — Quiz App
        </h2>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Focus Skills
        </h3>

        <ul className="list-disc list-inside">
          <li>Array of objects</li>
          <li>State management</li>
          <li>Conditional rendering</li>
        </ul>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`const questions = [
  {
    question: "What is DOM?",
    options: [
      "Database",
      "Document Object Model",
      "Framework"
    ],
    answer: 1
  }
];`}
        </CodeBlock>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Upgrade Ideas
        </h3>

        <ul className="list-disc list-inside">
          <li>Score system</li>
          <li>Timer</li>
          <li>Randomized questions</li>
          <li>Result summary</li>
        </ul>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          How to Display This on Your Blog
        </h2>

        <ul className="list-disc list-inside">
          <li>One card per project</li>
          <li>Preview (GIF or screenshot)</li>
          <li>Tech stack</li>
          <li>Main features</li>
          <li>Demo link</li>
          <li>Source code link</li>
        </ul>

        <p className="mt-3">
          This turns your blog into a clickable portfolio.
        </p>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Challenge Mode
        </h2>

        <ul className="list-disc list-inside">
          <li>Beginner</li>
          <li>Intermediate</li>
          <li>Advanced</li>
        </ul>

        <p className="mt-3">
          Or simply:
          <strong> "Build this without a tutorial."</strong>
          Recruiters love this energy.
        </p>
      </section>
    </ArticlesLayout>
  )
}