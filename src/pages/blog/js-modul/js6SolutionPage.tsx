import ArticlesLayout, { CodeBlock } from '../ArticlesLayout'

export default function Js6SolutionPage() {
  return (
    <ArticlesLayout
      badge="JS Module 6 — Solutions"
      title="Asynchronous JavaScript — Solutions"
      date="Jan 2026"
      tags="JavaScript, Async, Fetch API, Solutions"
      readingTime="9 min read"
      intro="Async is not about speed. It's about control, UX, and resilience."
      githubUrl="#"
      prev={{
        path: '/blog/js-modul/js6',
        title: 'Asynchronous JavaScript: Keep Your UI Alive',
      }}
      next={{
        path: '/blog/js-modul/js7',
        title: 'Mini Projects Gallery',
      }}
      related={[]}
      conclusion={
        <>
          <h3 className="mb-3 font-bold text-[1.5rem]">
            Final Takeaways
          </h3>

          <ul className="list-disc list-inside">
            <li>Always show loading feedback</li>
            <li>Never trust the network</li>
            <li>Refetching is just reusing functions</li>
            <li>Filtering data = better UX</li>
            <li>Async mastery = framework ready</li>
          </ul>
        </>
      }
    >
      <section>
        <p className="mb-5">
          These solutions focus on improving user experience when working with
          APIs. A responsive interface, proper error handling, and reusable
          logic are what separate demos from real applications.
        </p>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Challenge 1 — Loading & Error Handling
        </h2>

        <p>Goals:</p>

        <ul className="list-disc list-inside">
          <li>Show loading text</li>
          <li>Handle errors properly</li>
        </ul>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`const statusText = document.querySelector("#status");
const card       = document.querySelector(".card");

async function fetchUser() {
  statusText.textContent = "Loading...";
  card.innerHTML = "";

  try {
    const res = await fetch("https://randomuser.me/api/");
    if (!res.ok) throw new Error("Network error");

    const data = await res.json();
    const user = data.results[0];

    card.innerHTML = \`
      <img src="\${user.picture.large}">
      <h3>\${user.name.first} \${user.name.last}</h3>
      <p>\${user.email}</p>
    \`;

    statusText.textContent = "";
  } catch (error) {
    statusText.textContent = "Failed to load data";
  }
}

fetchUser();`}
        </CodeBlock>

        <p>
          Loading state keeps users calm. Error handling keeps apps alive.
        </p>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Challenge 2 — Refetch with Button
        </h2>

        <p>Goal:</p>

        <ul className="list-disc list-inside">
          <li>Click button → fetch new data</li>
        </ul>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`const refreshBtn = document.querySelector("#refreshBtn");

refreshBtn.addEventListener("click", () => {
  fetchUser();
});`}
        </CodeBlock>

        <p>Same logic. Different trigger.</p>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Challenge 3 — Filter User by Gender
        </h2>

        <p>Goal:</p>

        <ul className="list-disc list-inside">
          <li>Fetch based on selected gender</li>
          <li>Render filtered data</li>
        </ul>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`const genderSelect = document.querySelector("#gender");

async function fetchUserByGender() {
  const gender = genderSelect.value;
  statusText.textContent = "Loading...";
  card.innerHTML = "";

  try {
    const res = await fetch(
      \`https://randomuser.me/api/?gender=\${gender}\`
    );

    const data = await res.json();
    const user = data.results[0];

    card.innerHTML = \`
      <img src="\${user.picture.large}">
      <h3>\${user.name.first} \${user.name.last}</h3>
      <p>\${user.email}</p>
      <span class="badge">\${user.gender}</span>
    \`;

    statusText.textContent = "";
  } catch {
    statusText.textContent = "Something went wrong";
  }
}

genderSelect.addEventListener(
  "change",
  fetchUserByGender
);`}
        </CodeBlock>

        <p>
          Now your app reacts to user input and API data. This is dynamic UI.
        </p>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Why This Module Is a Big Deal
        </h2>

        <ul className="list-disc list-inside">
          <li>You handled async state</li>
          <li>You protected UI from failures</li>
          <li>You reused logic efficiently</li>
          <li>You filtered real API data</li>
        </ul>

        <p>
          This is no longer tutorial-level code. This is production mindset.
        </p>
      </section>
    </ArticlesLayout>
  )
}