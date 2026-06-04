import ArticlesLayout, { CodeBlock, HighlightBox, Output } from '../ArticlesLayout'

export default function Day2Page() {
  return (
    <ArticlesLayout
      badge="Challenge Day 2"
      title="Simple Age Calculator"
      date="June 6, 2025"
      tags="JavaScript, Math, Calculator"
      readingTime="7 min read"
      intro="Today I learned how to build a simple age calculator in JavaScript, including converting user input into numbers and handling invalid input safely."
      githubUrl="https://github.com/syfaarizal/js-age-calculator"
      prev={{ path: '/blog/days-challenge/day1', title: 'Print Name and Status' }}
      next={{ path: '/blog/days-challenge/day3', title: 'Interactive Calculator' }}
      related={[
        {
          path: '/blog/days-challenge/day1',
          date: 'June 5, 2025',
          title: 'Day 1: Print Name and Status',
          excerpt: 'Learn how to print your name and status using JavaScript template literals.',
          tags: ['JavaScript', 'Template Literals'],
        },
        {
          path: '/blog/days-challenge/day3',
          date: 'June 9, 2025',
          title: 'Day 3: Interactive Calculator',
          excerpt: 'Building a fully functional calculator with interactive user interface and proper error handling.',
          tags: ['JavaScript', 'Function', 'Calculator'],
        },
      ]}
      conclusion={
        <>
          <h3 className="mb-3 font-bold">Key Takeaways</h3>
          <p>
            User input from <code>prompt()</code> always comes as a string, so converting it with
            <code> parseInt()</code> is important before doing calculations. Adding validation with
            <code> isNaN()</code> and checking for future years also makes the program much more reliable.
          </p>
        </>
      }
    >
      <section>
        <p className="mb-5">
          Today I learned how to create a simple age calculator in JavaScript. The challenge looked easy at
          first, but it introduced an important concept: handling user input correctly before performing any
          calculations.
        </p>

        <p>The goal was to ask for a birth year and calculate the user's age automatically.</p>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`const birthYear = prompt("Enter your birth year: ");
const birth = parseInt(birthYear);

const currentYear = new Date().getFullYear();
const age = currentYear - birth;

console.log(\`You are \${age} years old.\`);`}
        </CodeBlock>

        <p>The output would look something like this:</p>

        <Output>You are 20 years old.</Output>
      </section>

      <section>
        <h2 className="mb-5 font-bold">My First Mistake</h2>

        <p>
          At first, I accidentally mixed browser input methods with Node.js input methods. I tried writing
          something like this:
        </p>

        <CodeBlock lang="Incorrect Example" langIcon="fab fa-js">
{`const readline = prompt();
const birthYear = readline.question("Enter your birth year: ");`}
        </CodeBlock>

        <p>
          This doesn't work because <code>prompt()</code> belongs to the browser, while
          <code> readline.question()</code> belongs to Node.js. They are different environments and cannot
          be combined together.
        </p>
      </section>

      <section>
        <h2 className="mb-5 font-bold">Calculating Age</h2>

        <p>
          After fixing the input logic, I used the current year from JavaScript's Date object and subtracted
          the birth year.
        </p>

        <CodeBlock lang="Age Calculation" langIcon="fab fa-js">
{`const birthYear = prompt("Enter your birth year: ");
const birth = parseInt(birthYear);

const currentYear = new Date().getFullYear();
const age = currentYear - birth;
const nextYear = age + 1;

console.log(\`You were born in \${birthYear}.
The current year is \${currentYear}.
That means you're \${age} years old.
Next year you'll be \${nextYear} years old.\`);`}
        </CodeBlock>

        <p>The result becomes more informative and easier to understand:</p>

        <Output>
          You were born in 2005.<br />
          The current year is 2025.<br />
          That means you're 20 years old.<br />
          Next year you'll be 21 years old.
        </Output>
      </section>

      <section>
        <h3>Why do we use <code>parseInt()</code>?</h3>

        <HighlightBox>
          <p>I was curious why this line was necessary:</p>

          <CodeBlock lang="Number Conversion" langIcon="fas fa-question-circle">
{`const birth = parseInt(birthYear);`}
          </CodeBlock>

          <p>
            The value returned by <code>prompt()</code> is always a string. Since age calculation requires
            numbers, we need to convert the string into a numeric value first.
            <br />
            <br />
            Without conversion, JavaScript may produce unexpected results when performing calculations.
          </p>
        </HighlightBox>
      </section>

      <section>
        <h2 className="mb-5 font-bold">Input Validation</h2>

        <p>
          A calculator should not only work for valid input, but also handle unexpected cases gracefully.
        </p>

        <CodeBlock lang="Future Year Check" langIcon="fab fa-js">
{`if (birth > currentYear) {
  console.log("Are you from the future?");
}`}
        </CodeBlock>

        <CodeBlock lang="Invalid Input Check" langIcon="fab fa-js">
{`if (isNaN(birth)) {
  console.log("Invalid input. Please enter a valid birth year.");
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="mb-5 font-bold">Final Code</h2>

        <CodeBlock lang="Complete Solution" langIcon="fab fa-js">
{`const birthYear = prompt("Enter your birth year: ");
const birth = parseInt(birthYear);

const currentYear = new Date().getFullYear();
const age = currentYear - birth;
const nextYear = age + 1;

if (isNaN(birth)) {
  console.log("Invalid input. Please enter a valid birth year.");
} else if (birth > currentYear) {
  console.log("Are you from the future?");
} else {
  console.log(\`You were born in \${birthYear}.\nThe current year is \${currentYear}.\nThat means you're \${age} years old.\nNext year you'll be \${nextYear} years old.\`);
}`}
        </CodeBlock>
      </section>
    </ArticlesLayout>
  )
}
