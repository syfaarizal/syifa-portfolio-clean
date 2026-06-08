import ArticlesLayout, { CodeBlock } from '../ArticlesLayout'

export default function Js6Page() {
  return (
    <ArticlesLayout
      badge="JS Module 6"
      title="Asynchronous JavaScript: Keep Your UI Alive"
      date="Jan 2026"
      tags="JavaScript, Async, Fetch API"
      readingTime="12 min read"
      intro="JavaScript is single-threaded. If your code waits and freezes, your UI dies."
      githubUrl="#"
      prev={{
        path: '/blog/js-modul/js5-solutions',
        title: 'DOM Manipulation — Solutions',
      }}
      next={{
        path: '/blog/js-modul/js6-solutions',
        title: 'Asynchronous JavaScript — Solutions',
      }}
      related={[
        {
          path: '/blog/js-modul/js5',
          date: 'Jan 2026',
          title: 'DOM Manipulation: When Code Starts Moving the Page',
          excerpt:
            'This is where JavaScript stops being theory and starts touching the screen.',
          tags: ['JavaScript', 'DOM', 'Front-End'],
        },
        {
          path: '/blog/js-modul/js6-solutions',
          date: 'Jan 2026',
          title: 'Asynchronous JavaScript — Solutions',
          excerpt:
            'Solutions to the asynchronous JavaScript challenges.',
          tags: ['JavaScript', 'Async', 'Solutions'],
        },
      ]}
      conclusion={
        <>
          <h3 className="mb-3 font-bold text-[1.5rem]">
            Key Takeaways
          </h3>

          <ul className="list-disc list-inside">
            <li>Async keeps the UI responsive</li>
            <li>Callbacks → Promises → async/await</li>
            <li>Fetch API connects your app to the world</li>
            <li>Error handling is not optional</li>
            <li>Data + DOM = real applications</li>
          </ul>
        </>
      }
    >
      <section>
        <p className="mb-5">
          Modern applications constantly communicate with servers, APIs, and
          databases. The challenge is making sure users don't experience a frozen
          interface while waiting for data to arrive.
        </p>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Sync vs Async
        </h2>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Synchronous
        </h3>

        <p>Runs line by line. No patience.</p>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`console.log("A");
console.log("B");
console.log("C");`}
        </CodeBlock>

        <p>Output: A → B → C</p>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Asynchronous
        </h3>

        <p>Waits without blocking.</p>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`console.log("A");

setTimeout(() => {
  console.log("B");
}, 2000);

console.log("C");`}
        </CodeBlock>

        <p>Output: A → C → B</p>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Callback
        </h2>

        <p>A callback is a function called later.</p>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`function loadData(callback) {
  setTimeout(() => {
    callback("Data loaded");
  }, 2000);
}

loadData((result) => {
  console.log(result);
});`}
        </CodeBlock>

        <p>
          Works — but too many callbacks lead to <strong>callback hell</strong>.
        </p>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Promise
        </h2>

        <p>A promise represents a value that will exist later.</p>

        <ul className="list-disc list-inside">
          <li>pending</li>
          <li>fulfilled</li>
          <li>rejected</li>
        </ul>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`const getData = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Data loaded");
  } else {
    reject("Failed to load data");
  }
});

getData
  .then(result => console.log(result))
  .catch(error => console.log(error));`}
        </CodeBlock>

        <p>Cleaner than callbacks. Still readable.</p>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          async / await
        </h2>

        <p>Looks synchronous. Works asynchronously.</p>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`async function fetchData() {
  try {
    const result = await getData;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}`}
        </CodeBlock>

        <p>This is the modern standard.</p>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Fetch API
        </h2>

        <p>Fetch is how JavaScript talks to the internet.</p>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`fetch("https://api.example.com/data")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));`}
        </CodeBlock>

        <p>Cleaner with async/await:</p>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`async function getData() {
  const res  = await fetch("https://api.example.com/data");
  const data = await res.json();
  console.log(data);
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Mini Project — Quote Generator
        </h2>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`async function getQuote() {
  const res  = await fetch("https://api.quotable.io/random");
  const data = await res.json();

  console.log(data.content);
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Mini Project — Random User
        </h2>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`async function getUser() {
  const res  = await fetch("https://randomuser.me/api/");
  const data = await res.json();

  const user = data.results[0];
  console.log(user.name.first, user.email);
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Mini Project — Display User Card
        </h2>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`async function showUser() {
  const res  = await fetch("https://randomuser.me/api/");
  const data = await res.json();
  const user = data.results[0];

  const card = document.querySelector(".card");

  card.innerHTML = \`
    <img src="\${user.picture.large}">
    <h3>\${user.name.first} \${user.name.last}</h3>
    <p>\${user.email}</p>
  \`;
}`}
        </CodeBlock>

        <p>
          JavaScript + DOM + API = the complete front-end combination.
        </p>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Mini Challenges
        </h2>

        <ul className="list-disc list-inside">
          <li>Add loading text and error handling</li>
          <li>Add a button to refetch data</li>
          <li>Filter users by gender and display the result</li>
        </ul>
      </section>
    </ArticlesLayout>
  )
}