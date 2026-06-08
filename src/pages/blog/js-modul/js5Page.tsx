import ArticlesLayout, { CodeBlock } from '../ArticlesLayout'

export default function Js5Page() {
  return (
    <ArticlesLayout
      badge="JS Module 5"
      title="DOM Manipulation: When Code Starts Moving the Page"
      date="Jan 2026"
      tags="JavaScript, DOM, Front-End"
      readingTime="10 min read"
      githubUrl="#"
      intro="This is where JavaScript stops being theory and starts touching the screen."
      prev={{
        path: '/blog/js-modul/js4-solutions',
        title: 'Function Mastery — Solutions',
      }}
      next={{
        path: '/blog/js-modul/js5-solutions',
        title: 'DOM Manipulation — Solutions',
      }}
      related={[]}
      conclusion={
        <>
          <h3 className="mb-3 font-bold text-[1.5rem]">
            Key Takeaways
          </h3>

          <ul className="list-disc list-inside">
            <li>DOM connects JavaScript to HTML</li>
            <li>
              <code>querySelector</code> is your main tool
            </li>
            <li>Events make pages interactive</li>
            <li>
              <code>createElement</code> builds dynamic UI
            </li>
            <li>
              This is the foundation of all front-end frameworks
            </li>
          </ul>
        </>
      }
    >
      <section>
        <p className="mb-5">
          Click. Change. React. Welcome to real front-end life.
        </p>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          What Is the DOM?
        </h2>

        <p>
          DOM stands for <strong>Document Object Model</strong>. In simple
          terms:
        </p>

        <ul className="list-disc list-inside">
          <li>The browser turns HTML into a tree of objects</li>
          <li>JavaScript can access and control every branch</li>
        </ul>

        <CodeBlock lang="HTML" langIcon="fab fa-html5">
{`<h1>Hello</h1>`}
        </CodeBlock>

        <p>
          How JavaScript sees it:
        </p>

        <p>
          <code>document → h1 → "Hello"</code>
        </p>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Selecting HTML Elements
        </h2>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          querySelector()
        </h3>

        <p>
          The most-used DOM weapon.
        </p>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`const title  = document.querySelector("h1");
const card   = document.querySelector(".card");
const button = document.querySelector("#btn");`}
        </CodeBlock>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          getElementById()
        </h3>

        <p>
          Fast, simple, ID only.
        </p>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`const submitButton = document.getElementById("submitBtn");`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Editing Content
        </h2>

        <p>
          Change text:
        </p>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`title.textContent = "Hello DOM 👋";`}
        </CodeBlock>

        <p>
          Inject HTML:
        </p>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`title.innerHTML = "<span>Hi</span>";`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          classList & Style
        </h2>

        <p>
          Class control:
        </p>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`title.classList.add("active");
title.classList.remove("active");
title.classList.toggle("active");`}
        </CodeBlock>

        <p>
          Inline style (demo only):
        </p>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`title.style.color = "red";
title.style.fontSize = "32px";`}
        </CodeBlock>

        <p>
          <em>Real projects prefer CSS classes.</em>
        </p>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Event Listeners
        </h2>

        <p>
          Events are the bridge between users and JavaScript.
        </p>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`button.addEventListener("click", () => {
  alert("Button clicked!");
});`}
        </CodeBlock>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submitted");
});`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Creating Elements Dynamically
        </h2>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`const li = document.createElement("li");
li.textContent = "New item";

list.appendChild(li);`}
        </CodeBlock>

        <p>
          This is the core of todo apps, product lists, feeds —
          everything.
        </p>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Mini Project — Todo App
        </h2>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`const input = document.querySelector("#todoInput");
const btn = document.querySelector("#addBtn");
const list = document.querySelector("#todoList");

btn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = input.value;
  list.appendChild(li);
  input.value = "";
});`}
        </CodeBlock>

        <p>
          Click → item appears. Instant dopamine.
        </p>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Mini Project — Light / Dark Mode
        </h2>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});`}
        </CodeBlock>

        <p>
          One click. One vibe.
        </p>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Mini Project — Counter
        </h2>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`let count = 0;

btn.addEventListener("click", () => {
  count++;
  display.textContent = count;
});`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Mini Challenges
        </h2>

        <ul className="list-disc list-inside">
          <li>
            Todo: click to strike-through, double click to delete
          </li>
          <li>
            Counter: add minus button + max/min limit
          </li>
          <li>
            Theme: save mode in localStorage
          </li>
        </ul>
      </section>
    </ArticlesLayout>
  )
}