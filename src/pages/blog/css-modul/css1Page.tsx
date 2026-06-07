import ArticlesLayout, { CodeBlock } from '../ArticlesLayout'

export default function Css1Page() {
  return (
    <ArticlesLayout
      badge="CSS Module"
      title="CSS Basics: Styling the Web"
      date="May 17, 2025"
      tags="CSS, Web Design, Styling"
      readingTime="7 min read"
      intro="CSS is what transforms plain HTML into beautiful, visually appealing websites. Learn the fundamentals of styling web pages with colors, fonts, and layouts."
      githubUrl="#"
      prev={{ path: '/blog/html-modul/html2', title: 'HTML Intermediate: Structure & Semantics' }}
      next={{ path: '/blog/css-modul/css2', title: 'CSS Styling: Beyond the Basics' }}
      related={[
        {
          path: '/blog/html-modul/html2',
          date: 'May 16, 2025',
          title: 'HTML Intermediate: Structure & Semantics',
          excerpt:
            'Learning about iframes, div vs span, and the importance of semantic HTML structure.',
          tags: ['HTML', 'Web Development', 'Semantics'],
        },
        {
          path: '/blog/css-modul/css2',
          date: 'May 19, 2025',
          title: 'CSS Styling: Beyond the Basics',
          excerpt:
            'Master text styling, box model, backgrounds, and display properties.',
          tags: ['CSS', 'Web Design', 'Styling'],
        },
      ]}
      conclusion={
        <>
          <h3 className="mb-3 font-bold text-[1.5rem]">Key Takeaways</h3>

          <ul className="list-disc list-inside space-y-1">
            <li>CSS = Outfit for HTML</li>
            <li>Can be written: inline, internal, external</li>
            <li>
              Selectors: tag, class <code>.</code>, id <code>#</code>
            </li>
            <li>Properties: control colors, fonts, sizes, positions</li>
            <li>External CSS = Most recommended way!</li>
          </ul>
        </>
      }
    >
      <section>
        <h2 className="mb-1 font-bold text-[1.8rem]">
          What is CSS?
        </h2>

        <p>
          CSS (Cascading Style Sheets) is a styling language used to control the
          appearance of HTML elements. If HTML is the skeleton, CSS is the outfit
          that makes sure your website doesn't look outdated.
        </p>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          What can CSS do?
        </h3>

        <ul className="list-disc list-inside space-y-1">
          <li>Colors, font sizes and types</li>
          <li>Spacing between elements</li>
          <li>Layout positioning</li>
          <li>Hover effects, animations, and much more</li>
        </ul>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          How to Use CSS in HTML
        </h2>

        <p>There are 3 ways to apply CSS to your HTML page:</p>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          1. Inline CSS
        </h3>

        <p>Add style directly in the HTML tag.</p>
        <p>Only for testing, not for serious projects.</p>

        <CodeBlock lang="HTML" langIcon="fab fa-html5">
{`<p style="color: blue; font-size: 20px;">Hello CSS!</p>`}
        </CodeBlock>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          2. Internal CSS
        </h3>

        <p>
          Written inside <code>&lt;style&gt;</code> tags in the{' '}
          <code>&lt;head&gt;</code> section.
        </p>

        <CodeBlock lang="HTML" langIcon="fab fa-html5">
{`<head>
  <style>
    p {
      color: green;
    }
  </style>
</head>`}
        </CodeBlock>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          3. External CSS
        </h3>

        <p>
          CSS in a separate file, then linked to the HTML.
        </p>

        <CodeBlock lang="HTML" langIcon="fab fa-html5">
{`<!-- HTML -->
<link rel="stylesheet" href="style.css">`}
        </CodeBlock>

        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`/* style.css */
p {
  color: purple;
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          CSS Selectors
        </h2>

        <p>
          Selectors are how you tell CSS which elements should receive styling.
        </p>

        <table className="tb-blog">
          <thead>
            <tr>
              <th>Selector Type</th>
              <th>Example</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Tag</td>
              <td><code>{'p {}'}</code></td>
              <td>Styles all &lt;p&gt; tags</td>
            </tr>

            <tr>
              <td>Class</td>
              <td><code>{'.title {}'}</code></td>
              <td>
                Styles all elements with <code>class="title"</code>
              </td>
            </tr>

            <tr>
              <td>ID</td>
              <td><code>{'#hero {}'}</code></td>
              <td>
                Styles the element with <code>id="hero"</code>
              </td>
            </tr>
          </tbody>
        </table>

        <p>
          <strong>Classes</strong> can be used multiple times, while{' '}
          <strong>IDs</strong> should remain unique.
        </p>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Properties & Values
        </h2>

        <p>CSS follows this pattern:</p>

        <CodeBlock lang="CSS Syntax" langIcon="fab fa-css3-alt">
{`selector {
  property: value;
}`}
        </CodeBlock>

        <p>Real example:</p>

        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`h1 {
  color: red;
  font-size: 36px;
  text-align: center;
}`}
        </CodeBlock>

        <table className="tb-blog">
          <thead>
            <tr>
              <th>Property</th>
              <th>Meaning</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><code>color</code></td>
              <td>Text color</td>
            </tr>

            <tr>
              <td><code>font-size</code></td>
              <td>Text size</td>
            </tr>

            <tr>
              <td><code>font-family</code></td>
              <td>Font type</td>
            </tr>

            <tr>
              <td><code>text-align</code></td>
              <td>Text alignment (left, center, etc)</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          CSS Comments
        </h2>

        <p>
          Comments are for notes and won't appear in the browser.
        </p>

        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`/* This is a comment - safe for your secrets */
h1 {
  color: pink;
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Complete Example (Internal CSS)
        </h2>

        <CodeBlock lang="HTML with CSS" langIcon="fab fa-html5">
{`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>CSS Example</title>

    <style>
      body {
        background-color: #f7f7f7;
        font-family: 'Poppins', sans-serif;
      }

      h1 {
        color: #ff3366;
        text-align: center;
      }

      p {
        font-size: 18px;
        line-height: 1.6;
        color: #333;
      }

      .highlight {
        background-color: yellow;
        font-weight: bold;
      }

      #mainTitle {
        font-size: 40px;
      }
    </style>
  </head>

  <body>
    <h1 id="mainTitle">Welcome!</h1>

    <p>
      This is an example of
      <span class="highlight"> Internal CSS </span>
      in a web page.
    </p>
  </body>
</html>`}
        </CodeBlock>
      </section>
    </ArticlesLayout>
  )
}