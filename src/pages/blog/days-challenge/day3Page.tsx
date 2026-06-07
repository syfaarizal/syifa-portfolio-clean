import ArticlesLayout, { CodeBlock, HighlightBox, Output } from '../ArticlesLayout'

export default function Day3Page() {
  return (
    <ArticlesLayout
      badge="Challenge Day 3"
      title="Interactive Calculator"
      date="June 9, 2025"
      tags="JavaScript, Functions, Calculator"
      readingTime="9 min read"
      intro="Today I learned how to build a simple interactive calculator in JavaScript while improving input validation, code structure, and user interaction."
      githubUrl="https://github.com/syfaarizal/js-mini-calculator"
      prev={{ path: '/blog/days-challenge/day2', title: 'Simple Age Calculator' }}
      next={{ path: '/blog/days-challenge/day4', title: 'Number Guessing Game' }}
      related={[
        {
          path: '/blog/days-challenge/day2',
          date: 'June 6, 2025',
          title: 'Day 2: Simple Age Calculator',
          excerpt: 'Creating a JavaScript program that calculates age based on birth year with proper date handling.',
          tags: ['JavaScript', 'Math', 'Calculator'],
        },
        {
          path: '/blog/days-challenge/day4',
          date: 'June 11, 2025',
          title: 'Day 4: Number Guessing Game',
          excerpt: 'Creating an engaging number guessing game with random number generation and user feedback.',
          tags: ['JavaScript', 'Game', 'Logic'],
        },
      ]}
      conclusion={
        <>
          <h3 className="mb-3 font-bold text-[1.5rem]">Key Takeaways</h3>
          <p>
            Converting input using <code>parseFloat()</code>, validating data with
            <code> isNaN()</code>, and separating logic into functions makes programs easier
            to maintain. Adding loops also improves the user experience by allowing repeated
            calculations without restarting the application.
          </p>
        </>
      }
    >
      <section>
        <p className="mb-5">
          Today I worked on a simple interactive calculator. The challenge was not only about
          performing calculations, but also about handling user input correctly and making the
          calculator flexible enough to support multiple operations.
        </p>

        <p>My first attempt looked like this:</p>

        <CodeBlock lang="JavaScript" langIcon="fab fa-js">
{`const num1 = prompt("Enter first number");
const num2 = prompt("Enter second number");
const num1 = prompt("Enter operator (+, -, *, /)");`}
        </CodeBlock>

        <p>
          Looking back, there were already a few mistakes. I reused the variable name
          <code> num1</code>, and the operator input was not stored correctly.
        </p>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">Strings vs Numbers</h2>

        <p>
          Another problem appeared when I started doing calculations. Values returned by
          <code> prompt()</code> are strings, not numbers.
        </p>

        <CodeBlock lang="Number Conversion" langIcon="fab fa-js">
{`const number1 = parseFloat(num1);
const number2 = parseFloat(num2);

let result;`}
        </CodeBlock>

        <p>
          Using <code>parseFloat()</code> allows the calculator to work with decimal numbers,
          making it more flexible than <code>parseInt()</code>.
        </p>

        <Output>
          "2" + "3" = "23"<br />
          2 + 3 = 5
        </Output>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">Refactoring the Calculator</h2>

        <p>
          After fixing the input conversion issue, I implemented the calculation logic using
          conditional statements.
        </p>

        <CodeBlock lang="If Else Implementation" langIcon="fab fa-js">
{`const num1 = prompt("Enter first number");
const num2 = prompt("Enter second number");
const operator = prompt("Enter operator (+, -, *, /)");

const number1 = parseFloat(num1);
const number2 = parseFloat(num2);

let result;

if (operator === "+") {
  result = number1 + number2;
} else if (operator === "-") {
  result = number1 - number2;
} else if (operator === "*") {
  result = number1 * number2;
} else if (operator === "/") {
  result = number1 / number2;
}`}
        </CodeBlock>

        <p>
          This version worked, but the code could still be improved to make it cleaner and easier
          to extend.
        </p>
      </section>

      <section>
        <h3 className="mt-6 mb-1 font-bold text-[1.5rem]">Why do we use <code>parseFloat()</code>?</h3>

        <HighlightBox>
          <p>I wanted the calculator to support decimal numbers too.</p>

          <CodeBlock lang="Conversion Example" langIcon="fas fa-question-circle">
{`const number1 = parseFloat(num1);
const number2 = parseFloat(num2);`}
          </CodeBlock>

          <p>
            Unlike <code>parseInt()</code>, which removes the decimal part,
            <code> parseFloat()</code> preserves it. That means values like
            <code> 10.5</code> can still be calculated correctly.
          </p>
        </HighlightBox>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">Input Validation</h2>

        <p>
          To make the calculator more reliable, I added validation before performing any operation.
        </p>

        <CodeBlock lang="Validation Check" langIcon="fab fa-js">
{`if (isNaN(number1) || isNaN(number2)) {
  console.log("Input is not a valid number!");
}`}
        </CodeBlock>

        <p>
          This prevents unexpected results when users enter letters, symbols, or empty values.
        </p>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">Switch Case Version</h2>

        <p>
          The calculator became cleaner after replacing multiple if-else statements with a
          switch statement.
        </p>

        <CodeBlock lang="Switch Statement" langIcon="fab fa-js">
{`switch(operator) {
  case "+":
    result = number1 + number2;
    break;

  case "-":
    result = number1 - number2;
    break;

  case "*":
    result = number1 * number2;
    break;

  case "/":
    result = number2 === 0
      ? "Error: division by zero"
      : number1 / number2;
    break;
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">Function and Looping</h2>

        <p>
          As a final improvement, I separated the calculation logic into a function and added a
          loop so users could perform multiple calculations without refreshing the page.
        </p>

        <CodeBlock lang="Function + Loop" langIcon="fab fa-js">
{`let continueCalc = true;

while (continueCalc) {

  function calculate(num1, num2, operator) {
    switch (operator) {
      case "+": return num1 + num2;
      case "-": return num1 - num2;
      case "*": return num1 * num2;
      case "/":
        return num2 === 0
          ? "Error: division by zero"
          : num1 / num2;
      default:
        return "Operator not recognized";
    }
  }

  continueCalc = confirm("Want to calculate again?");
}`}
        </CodeBlock>

        <p>
          This approach makes the calculator easier to maintain because the calculation logic is
          stored in a single reusable function.
        </p>
      </section>
    </ArticlesLayout>
  )
}
