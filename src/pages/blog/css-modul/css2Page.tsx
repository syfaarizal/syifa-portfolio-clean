import ArticlesLayout, { CodeBlock } from '../ArticlesLayout'

export default function Css2Page() {
  return (
    <ArticlesLayout
      badge="CSS Module"
      title="CSS Styling: Beyond the Basics"
      date="May 19, 2025"
      tags="CSS, Web Design, Styling"
      readingTime="8 min read"
      intro="Take your CSS skills further by mastering text styling, the box model, backgrounds, and display properties to create visually appealing websites."
      githubUrl="#"
      prev={{ path: '/blog/css-modul/css1', title: 'CSS Basics: Styling the Web' }}
      next={{ path: '/blog/css-modul/css3', title: 'CSS Layout: Positioning and Modern Techniques' }}
      related={[
        {
          path: '/blog/css-modul/css1',
          date: 'May 17, 2025',
          title: 'CSS Basics: Styling the Web',
          excerpt:
            'Learn the fundamentals of styling web pages with colors, fonts, and layouts.',
          tags: ['CSS', 'Web Design', 'Styling'],
        },
        {
          path: '/blog/css-modul/css3',
          date: 'May 22, 2025',
          title: 'CSS Layout: Positioning and Modern Techniques',
          excerpt:
            'Master modern layout techniques with CSS Flexbox and Grid systems.',
          tags: ['CSS', 'Layout', 'Flexbox', 'Grid'],
        },
      ]}
      conclusion={
        <>
          <h3 className="mb-3 font-bold text-[1.5rem]">Key Takeaways</h3>

          <ul className="list-disc list-inside space-y-1">
            <li>Can style text so it's not stiff</li>
            <li>Understand box model & how to manage spacing</li>
            <li>Play with background, border, shadow for aesthetics</li>
            <li>Know the difference between block vs inline vs inline-block</li>
          </ul>
        </>
      }
    >
      <section>
        <p className="mb-5">
          If CSS Basics introduced the fundamentals, this lesson is where we
          start making interfaces look polished. You'll learn how to style text,
          manage spacing, customize backgrounds, and control how elements behave
          on the page.
        </p>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Text Styling
        </h2>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Text Styling Properties
        </h3>

        <table className="tb-blog">
          <thead>
            <tr>
              <th>Property</th>
              <th>Function</th>
            </tr>
          </thead>

          <tbody>
            <tr><td><code>color</code></td><td>Text color</td></tr>
            <tr><td><code>font-size</code></td><td>Font size (px, rem, %, etc)</td></tr>
            <tr><td><code>font-family</code></td><td>Font type</td></tr>
            <tr><td><code>font-weight</code></td><td>Font thickness (normal, bold, 500, etc)</td></tr>
            <tr><td><code>text-align</code></td><td>Alignment (left, right, center, justify)</td></tr>
            <tr><td><code>line-height</code></td><td>Line spacing</td></tr>
            <tr><td><code>letter-spacing</code></td><td>Letter spacing</td></tr>
            <tr><td><code>text-transform</code></td><td>Change case (uppercase/lowercase/capitalize)</td></tr>
          </tbody>
        </table>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Example
        </h3>

        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`p {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  color: #333;
  text-align: justify;
  line-height: 1.8;
  text-transform: capitalize;
}`}
        </CodeBlock>

        <p>
          Your paragraphs won't just be readable, they'll look good too.
        </p>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Box Model: Understanding HTML's Box World
        </h2>

        <p>
          <i>
            "All HTML elements are essentially boxes. CSS helps you arrange
            these boxes like building a layout system."
          </i>
        </p>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Box Model consists of
        </h3>

        <CodeBlock lang="Box Model" langIcon="fas fa-cube">
{`Margin: outer space
Border: edge line
Padding: inner space
Content: actual content`}
        </CodeBlock>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Explanation
        </h3>

        <ul className="list-disc list-inside space-y-1">
          <li><b>Content</b>: main content (text/image)</li>
          <li><b>Padding</b>: space between content and border</li>
          <li><b>Border</b>: element edge line</li>
          <li><b>Margin</b>: space between elements</li>
        </ul>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Styling Example
        </h3>

        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`.box {
  width: 300px;
  height: 200px;
  padding: 20px;
  margin: 40px auto;
  border: 2px solid #ff4d4d;
  background-color: #fff0f5;
}`}
        </CodeBlock>

        <p>
          <strong>Padding</strong> gives content breathing room, while{' '}
          <strong>margin</strong> creates space between elements.
        </p>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Width & Height
        </h2>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Important properties
        </h3>

        <ul className="list-disc list-inside space-y-1">
          <li><code>width</code> → element width</li>
          <li><code>height</code> → element height</li>
        </ul>

        <p className="mt-3">Units you can use:</p>

        <ul className="list-disc list-inside space-y-1">
          <li><code>px</code> → fixed</li>
          <li><code>%</code> → relative to parent</li>
          <li><code>vw</code>/<code>vh</code> → relative to screen size</li>
        </ul>

        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`.card {
  width: 80%;
  height: auto;
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Background Styling
        </h2>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Commonly used properties
        </h3>

        <table className="tb-blog">
          <thead>
            <tr>
              <th>Property</th>
              <th>Function</th>
            </tr>
          </thead>

          <tbody>
            <tr><td><code>background-color</code></td><td>Background color</td></tr>
            <tr><td><code>background-image</code></td><td>Background image</td></tr>
            <tr><td><code>background-size</code></td><td>Image size (cover, contain)</td></tr>
            <tr><td><code>background-repeat</code></td><td>Repeat image or not</td></tr>
            <tr><td><code>background-position</code></td><td>Image position (center, top, etc)</td></tr>
          </tbody>
        </table>

        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`body {
  background-color: #f0f0f0;
  background-image: url('bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Border & Radius
        </h2>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Border properties
        </h3>

        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`.box {
  border: 3px dashed #ff69b4;
  border-radius: 12px;
}`}
        </CodeBlock>

        <ul className="list-disc list-inside space-y-1">
          <li><code>border</code>: edge line (solid, dashed, dotted)</li>
          <li><code>border-radius</code>: makes corners rounded</li>
        </ul>

        <p className="mt-3">
          Perfect for styling cards so they feel more modern and approachable.
        </p>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Box Shadow
        </h2>

        <p>
          Glow effects, depth, and elevation can all be created using box-shadow.
        </p>

        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`.card {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}`}
        </CodeBlock>

        <p>General format:</p>

        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`box-shadow: x-offset y-offset blur color;`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Block vs Inline vs Inline-block
        </h2>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Element display types
        </h3>

        <table className="tb-blog">
          <thead>
            <tr>
              <th>Type</th>
              <th>Effect</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><code>block</code></td>
              <td>Takes full width (like div and p)</td>
            </tr>

            <tr>
              <td><code>inline</code></td>
              <td>Only as wide as content (like span and a)</td>
            </tr>

            <tr>
              <td><code>inline-block</code></td>
              <td>Can set width/height but stays inline</td>
            </tr>
          </tbody>
        </table>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Example
        </h3>

        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`span {
  display: inline-block;
  width: 100px;
  height: 100px;
}`}
        </CodeBlock>
      </section>
    </ArticlesLayout>
  )
}