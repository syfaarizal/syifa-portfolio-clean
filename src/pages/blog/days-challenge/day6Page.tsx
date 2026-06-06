import ArticlesLayout, { CodeBlock, HighlightBox, Output } from '../ArticlesLayout'

export default function Day6Page() {
  return (
    <ArticlesLayout
      badge="Challenge Day 6"
      title="Odd, Even, or Special?"
      date="June 15, 2025"
      tags="JavaScript, Conditions, Logic"
      readingTime="8 min read"
      intro="Today's challenge focuses on number classification with layered logic to sharpen coding reasoning skills, including checking for odd, even, and multiples of 10."
      githubUrl="https://github.com/syfaarizal/js-ganjil-genap"
      prev={{ path: '/blog/days-challenge/day5', title: 'Creative Name Looping' }}
      next={{ path: '/blog/html-modul/html1', title: 'HTML Basics: The Foundation of Web Development' }}
      related={[
        {
          path: '/blog/days-challenge/day5',
          date: 'June 13, 2025',
          title: 'Day 5: Creative Name Looping',
          excerpt: 'Building a simple to-do list application with add, remove, and mark as complete functionality.',
          tags: ['JavaScript', 'Loops', 'Arrays'],
        },
        {
          path: '/blog/html-modul/html1',
          date: 'May 15, 2025',
          title: 'HTML Basics: The Foundation of Web Development',
          excerpt: 'Learn the basic concepts, tags, and structure that make up every webpage on the internet.',
          tags: ['HTML', 'Web Development', 'Basics'],
        },
      ]}
      conclusion={
        <>
          <h3 className="mb-3 font-bold text-[1.5rem]">Key Takeaways</h3>
          <p>
            This challenge taught me how to organize conditional logic,
            validate user input, handle special cases, and create a more
            interactive experience using loops and friendly feedback.
          </p>
        </>
      }
    >
      <section>
        <p className="mb-5">
          The goal of this challenge was to classify numbers as odd, even,
          or special cases such as multiples of 10 while practicing conditional logic.
        </p>

        <CodeBlock lang="Example Output" langIcon="fab fa-js">
{`Enter a number: 27
➡️ 27 is an odd number 🔹

Enter a number: 44
➡️ 44 is an even number 🔸

Enter a number: 30
🎉 30 is an even number & multiple of 10!`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="mt-7 mb-5 font-bold text-[1.8rem]">Challenge Goals</h2>

        <p>
          This challenge focuses on nested conditions, number classification,
          input validation, and creating more user-friendly outputs.
        </p>
      </section>

      <section>
        <h2 className="mt-7 mb-5 font-bold text-[1.8rem]">Basic Implementation</h2>

        <CodeBlock lang="Initial Version" langIcon="fab fa-js">
{`const input = parseInt(prompt("Enter a number:"));

if (isNaN(input)) {
    console.log("Please enter a valid number 😅");
} else if (input % 2 === 0) {
    console.log("This is an even number 👍");
} else {
    console.log("This is an odd number 👌");
}`}
        </CodeBlock>

        <p>
          This version can already distinguish between odd and even numbers,
          but there is still room for improvement.
        </p>
      </section>

      <section>
        <h2 className="mt-7 mb-5 font-bold text-[1.8rem]">Adding a Special Case</h2>

        <HighlightBox>
          <p>
            Multiples of 10 should be checked before the general even-number
            condition because every multiple of 10 is already an even number.
          </p>
        </HighlightBox>

        <CodeBlock lang="Enhanced Condition" langIcon="fab fa-js">
{`else if (input % 10 === 0 && input % 2 === 0)`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="mt-7 mb-5 font-bold text-[1.8rem]">Version With Special Logic</h2>

        <CodeBlock lang="With Special Case" langIcon="fab fa-js">
{`const input = parseInt(prompt("Enter a number:"));

if (isNaN(input)) {
    console.log("Please enter a valid number 😅");
} else if (input % 10 === 0 && input % 2 === 0) {
    console.log("🎉 This is an even number and multiple of 10!");
} else if (input % 2 === 0) {
    console.log("🔸 This is an even number!");
} else {
    console.log("🔹 This is an odd number!");
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="mt-7 mb-5 font-bold text-[1.8rem]">Bonus Challenge: Loop Version</h2>

        <p>
          To make the program more interactive, I added a loop that keeps asking
          for input until the user decides to quit.
        </p>

        <CodeBlock lang="Interactive Version" langIcon="fab fa-js">
{`let input;

while (true) {
    input = prompt("Enter a number (type 'exit' to quit)");

    if (input === "exit") {
        console.log("Goodbye! 👋");
        break;
    }

    const number = parseFloat(input);

    if (isNaN(number)) {
        console.log("❌ Please enter a valid number 😅");
    } else if (number % 10 === 0 && number % 2 === 0) {
        console.log("🎊 This is an even number and multiple of 10!");
    } else if (number % 2 === 0) {
        console.log("🔸 This is an even number!");
    } else {
        console.log("🔹 This is an odd number!");
    }
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="mt-7 mb-5 font-bold text-[1.8rem]">Final Version</h2>

        <CodeBlock lang="Complete Solution" langIcon="fab fa-js">
{`let input;

while (true) {
    input = prompt("Enter a number (type 'exit' to quit)");

    if (input === "exit") {
        console.log("Goodbye! 👋");
        break;
    }

    const number = parseFloat(input);

    if (isNaN(number)) {
        console.log("❌ Please enter a valid number 😅");
    } else if (number < 0) {
        console.log("📉 This is a negative number...");
    } else if (number % 10 === 0 && number % 2 === 0) {
        console.log("🎊 This is an even number and multiple of 10!");
    } else if (number % 2 === 0) {
        console.log("🔸 This is an even number!");
    } else {
        console.log("🔹 This is an odd number!");
    }
}`}
        </CodeBlock>

        <Output>
          Number: 30<br />
          Output: Even number & multiple of 10 🎉
        </Output>
      </section>
    </ArticlesLayout>
  )
}
