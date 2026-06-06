import ArticlesLayout, { CodeBlock, HighlightBox, Output } from '../ArticlesLayout'

export default function Day4Page() {
  return (
    <ArticlesLayout
      badge="Challenge Day 4"
      title="Number Guessing Game"
      date="June 11, 2025"
      tags="JavaScript, Game, Logic"
      readingTime="8 min read"
      intro="Day 4 of this coding challenge focused on building a Number Guessing Game. This project introduced random number generation, user interaction, loops, and conditional logic."
      githubUrl="https://github.com/syfaarizal/js-number-guessing-game"
      prev={{ path: '/blog/days-challenge/day3', title: 'Interactive Calculator' }}
      next={{ path: '/blog/days-challenge/day5', title: 'Creative Name Looping' }}
      related={[
        {
          path: '/blog/days-challenge/day3',
          date: 'June 9, 2025',
          title: 'Day 3: Interactive Calculator',
          excerpt: 'Building a fully functional calculator with interactive user interface and proper error handling.',
          tags: ['JavaScript', 'Function', 'Calculator'],
        },
        {
          path: '/blog/days-challenge/day5',
          date: 'June 13, 2025',
          title: 'Day 5: Creative Name Looping',
          excerpt: 'Building a simple to-do list application with add, remove, and mark as complete functionality.',
          tags: ['JavaScript', 'Loops', 'Arrays'],
        },
      ]}
      conclusion={
        <>
          <h3 className="mb-3 font-bold">Key Takeaways</h3>
          <p>
            This challenge taught me how random number generation works, how to guide users
            with feedback, and how loops can be used to keep a game running until the correct
            answer is found. Small improvements like validation and difficulty modes can also
            make simple projects feel much more interactive.
          </p>
        </>
      }
    >
      <section>
        <p className="mb-5">
          The goal of this challenge was to create a simple Number Guessing Game. The program
          generates a random number and keeps asking the user to guess until the correct answer
          is found.
        </p>

        <CodeBlock lang="Example Output" langIcon="fab fa-js">
{`I'm thinking of a number between 1 and 10.
Take a guess!
Your guess: 4
Too small!
Your guess: 7
Too big!
Your guess: 6
Congratulations! You guessed the number correctly in 3 attempts.`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="mb-5 font-bold">Funny Debugging Moment</h2>

        <p>My first attempt contained a tiny syntax mistake:</p>

        <CodeBlock lang="Initial Mistake" langIcon="fab fa-js">
{`const randomNumber:
Math.floor(Math.random() * 10) + 1:`}
        </CodeBlock>

        <HighlightBox>
          <p>
            I accidentally used <code>:</code> instead of <code>=</code>. A small typo,
            but enough to break the entire program.
          </p>
        </HighlightBox>
      </section>

      <section>
        <h2 className="mb-5 font-bold">Building the Core Logic</h2>

        <p>
          After fixing the syntax issue, I implemented the basic game loop using
          <code> while</code>, <code>prompt()</code>, and conditional statements.
        </p>

        <CodeBlock lang="Working Version" langIcon="fab fa-js">
{`let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempt = 0;
let repeat = true;

while(repeat) {
  const userInput = prompt("I'm thinking of a number between 1 and 10. Take a guess!");
  attempt++;

  const guess = parseInt(userInput);

  if (isNaN(guess)) {
    console.log("Eh? Please enter a number 😄");
  } else {
    if (guess < randomNumber) {
      console.log("Too small 😅");
    } else if (guess > randomNumber) {
      console.log("Too big 😅");
    } else {
      console.log(\`🎉 Congratulations! You guessed the number correctly in \${attempt} attempts.\`);
      repeat = false;
    }
  }
}`}
        </CodeBlock>

        <p>
          This version already worked, but there were still opportunities to improve the user experience.
        </p>
      </section>

      <section>
        <h2 className="mb-5 font-bold">Input Validation</h2>

        <p>
          To prevent invalid input from causing problems, I added validation using
          <code> isNaN()</code>.
        </p>

        <CodeBlock lang="Validation Check" langIcon="fab fa-js">
{`if (isNaN(guess)) {
  console.log("Eh? Please enter a number 😄");
}`}
        </CodeBlock>

        <Output>
          User enters "hello"<br />
          Output: Please enter a number 😄
        </Output>
      </section>

      <section>
        <h2 className="mb-5 font-bold">Adding a Scoring System</h2>

        <p>
          To make the game more rewarding, I added different messages based on how many attempts
          were needed to guess the number.
        </p>

        <CodeBlock lang="Scoring System" langIcon="fab fa-js">
{`if(attempt <= 3) {
  console.log("🔥 Pro move! You guessed it super fast.");
} else if (attempt <= 6) {
  console.log("👍 Not bad! But you can do better.");
} else {
  console.log("😅 Well, needs more practice. Keep trying!");
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="mb-5 font-bold">Hard Mode</h2>

        <p>
          As a bonus challenge, I added a hard mode that expands the guessing range from
          1–10 to 1–50.
        </p>

        <CodeBlock lang="Hard Mode" langIcon="fab fa-js">
{`let hardMode = confirm("Want to play in hard mode? (Numbers 1–50)");
let rangeText = hardMode ? "1 and 50" : "1 and 10";
let randomNumber = Math.floor(Math.random() * (hardMode ? 50 : 10)) + 1;`}
        </CodeBlock>

        <p>
          The prompt message also becomes dynamic depending on the selected difficulty.
        </p>

        <CodeBlock lang="Dynamic Prompt" langIcon="fab fa-js">
{`const userInput = prompt(
  \`I'm thinking of a number between \${rangeText}. Take a guess!\`
);`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="mb-5 font-bold">Final Interactive Version</h2>

        <p>
          The final version combines validation, scoring, difficulty selection, and looping
          into one complete experience.
        </p>

        <CodeBlock lang="Complete Solution" langIcon="fab fa-js">
{`let hardMode = confirm("Want to play in hard mode? (Numbers 1–50)");
let rangeText = hardMode ? "1 and 50" : "1 and 10";
let randomNumber = Math.floor(Math.random() * (hardMode ? 50 : 10)) + 1;
let attempt = 0;
let repeat = true;

// game loop here`}
        </CodeBlock>
      </section>
    </ArticlesLayout>
  )
}
