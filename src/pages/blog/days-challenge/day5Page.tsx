import ArticlesLayout, { CodeBlock, HighlightBox, Output } from '../ArticlesLayout'

export default function Day5Page() {
  return (
    <ArticlesLayout
      badge="Challenge Day 5"
      title="Creative Name Looping"
      date="June 13, 2025"
      tags="JavaScript, Loops, Arrays"
      readingTime="7 min read"
      intro="After taking some time off to focus on other projects, I'm back to the JS challenges! This time with a simple but brain-stimulating challenge: looping names and creating more creative outputs."
      githubUrl="https://github.com/syfaarizal/js-looping-name"
      prev={{ path: '/blog/days-challenge/day4', title: 'Number Guessing Game' }}
      next={{ path: '/blog/days-challenge/day6', title: 'Odd, Even, or Special?' }}
      related={[
        {
          path: '/blog/days-challenge/day4',
          date: 'June 11, 2025',
          title: 'Day 4: Number Guessing Game',
          excerpt: 'Creating an engaging number guessing game with random number generation and user feedback.',
          tags: ['JavaScript', 'Game', 'Logic'],
        },
        {
          path: '/blog/days-challenge/day6',
          date: 'June 15, 2025',
          title: 'Day 6: Odd, Even, or Special?',
          excerpt: 'Creating a weather application that fetches data from an API and displays it beautifully.',
          tags: ['JavaScript', 'Conditions', 'Logic'],
        },
      ]}
      conclusion={
        <>
          <h3 className="mb-3 font-bold">Key Takeaways</h3>
          <p>
            This challenge reinforced the importance of loops, input validation,
            array cycling with modulus, and building more engaging outputs with
            small creative touches.
          </p>
        </>
      }
    >
      <section>
        <p className="mb-5">
          The goal of this challenge was to print a name multiple times based on user input,
          while exploring loops, validation, and some creative enhancements.
        </p>

        <CodeBlock lang="Example Output" langIcon="fab fa-js">
{`1. Syifa Fauziyah Arizal
2. Syifa Fauziyah Arizal
3. Syifa Fauziyah Arizal`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="mt-7 mb-4 font-bold text-[1.8rem]">Understanding N</h2>

        <p>
          Here, <code>n</code> represents how many times the user wants their name
          to be printed.
        </p>
      </section>

      <section>
        <h2 className="mt-7 mb-4 font-bold text-[1.8rem]">First Attempt</h2>

        <CodeBlock lang="Initial Implementation" langIcon="fab fa-js">
{`const input = prompt("How many times do you want to print your name? ");

for (let i = 1; i <= input; i++) {
  console.log(i + ". " + "Syifa Fauziyah Arizal");
}`}
        </CodeBlock>

        <p>This version works, but it still lacks validation.</p>
      </section>

      <section>
        <h2 className="mt-7 mb-4 font-bold text-[1.8rem]">Input Validation</h2>

        <CodeBlock lang="Improved Version" langIcon="fab fa-js">
{`const input = Number(prompt("How many times do you want to print your name? "));

if (!isNaN(input) && input > 0) {
  for (let i = 1; i <= input; i++) {
    console.log(\`\${i}. Syifa Fauziyah Arizal\`);
  }
} else {
  console.log("Please enter a valid number 😅");
}`}
        </CodeBlock>

        <HighlightBox>
          <p>
            Using <code>!isNaN()</code> ensures the input is a valid number,
            while <code>input &gt; 0</code> prevents unnecessary looping.
          </p>
        </HighlightBox>
      </section>

      <section>
        <h2 className="mt-7 mb-4 font-bold text-[1.8rem]">Bonus Challenge</h2>

        <p>
          To make the output more fun, I added emojis and motivational quotes
          that rotate automatically using arrays.
        </p>

        <Output>
          {`1. Syifa 🔥 — Keep going! 
          2. Syifa 💡 — You're learning! 
          3. Syifa 🌱 — Progress every day!`}
        </Output>
      </section>

      <section>
        <h2 className="mt-7 mb-4 font-bold text-[1.8rem]">Using Arrays and Modulus</h2>

        <CodeBlock lang="Arrays Setup" langIcon="fab fa-js">
{`const emojis = ["🔥", "💡", "🌱", "🚀"];
const motivation = [
  "Keep going!",
  "You can do it!",
  "Believe in yourself!"
];`}
        </CodeBlock>

        <HighlightBox>
          <p>
            The modulus operator (<code>%</code>) allows array items to repeat
            safely when the loop count exceeds the array length.
          </p>
        </HighlightBox>
      </section>

      <section>
        <h2 className="mt-7 mb-4 font-bold text-[1.8rem]">Final Solution</h2>

        <CodeBlock lang="Complete Solution" langIcon="fab fa-js">
{`const input = Number(prompt("How many times do you want to print your name? "));

const emojis = ["🔥", "💡", "🌱", "🚀", "🎯", "💪", "🧠", "✨", "🔧", "🎉"];
const motivation = [
    "Keep going!",
    "You can do it!",
    "Believe in yourself!",
    "Stay positive!",
    "Never give up!",
    "Dream big!",
    "Stay focused!",
    "Work hard!",
    "Embrace challenges!",
    "Success is yours!",
];

let result = "";

if (!isNaN(input) && input > 0) {
    for (let i = 0; i < input; i++) {
        const emoji = emojis[i % emojis.length];
        const quote = motivation[i % motivation.length];
        result += \`\${i + 1}. Syifa \`\${emoji} - \`\${quote}\n\`;
    }
    console.log(result);
} else {
    console.log("Please enter a valid number 😅");
}`}
        </CodeBlock>
      </section>
    </ArticlesLayout>
  )
} 
