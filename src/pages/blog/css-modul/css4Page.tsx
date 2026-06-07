import ArticlesLayout, { CodeBlock } from '../ArticlesLayout'

export default function Css4Page() {
  return (
    <ArticlesLayout
      badge="Animations"
      title="CSS Advanced: Animations, Responsive Design & Best Practices"
      date="May 27, 2025"
      tags="CSS, Animations, Responsive Design"
      readingTime="9 min read"
      intro="Master advanced CSS techniques including animations, transitions, responsive units, and professional styling best practices."
      githubUrl="#"
      prev={{ path: '/blog/css-modul/css3', title: 'CSS Layout: Positioning and Modern Techniques' }}
      next={{ path: '/blog/js-modul/js1', title: 'JavaScript Basics: First Step Into the Logic World' }}
      related={[
        {
          path: '/blog/css-modul/css3',
          date: 'May 22, 2025',
          title: 'CSS Layout: Positioning and Modern Techniques',
          excerpt:
            'Master modern layout techniques with CSS Flexbox and Grid systems.',
          tags: ['CSS', 'Layout', 'Flexbox', 'Grid'],
        },
        {
          path: '/blog/days-challenge/day1',
          date: 'June 5, 2025',
          title: 'Day 1: Print Name and Status',
          excerpt:
            'Learn how to print your name and status using JavaScript template literals — clean and cool output!',
          tags: ['JavaScript', 'Template Literals'],
        },
      ]}
      conclusion={
        <>
          <h3 className="mb-3 font-bold text-[1.5rem]">
            CSS Recap Card 4
          </h3>

          <ul>
            <li>
              Know pseudo-class/pseudo-element for cool interactions and effects
            </li>
            <li>
              Can create hover effects and simple animations (without JavaScript!)
            </li>
            <li>
              Familiar with various units (px, rem, %, vw, etc)
            </li>
            <li>
              Responsive layout works through media queries
            </li>
            <li>
              Ready to style like a pro with best practices
            </li>
          </ul>
        </>
      }
    >
      <section>
        <p className="mb-5">
          If HTML is the foundation, CSS Card 4 is like Instagram filters for
          your website. Making it alive, moving, and adaptive.
        </p>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Pseudo-Class & Pseudo-Element
        </h2>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Pseudo-Class (<code>:</code>)
        </h3>

        <p>
          Used to style elements based on their state (when clicked, hovered,
          etc).
        </p>

        <table className="tb-blog">
          <thead>
            <tr>
              <th>Example</th>
              <th>Function</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><code>:hover</code></td>
              <td>When element is touched/hovered</td>
            </tr>
            <tr>
              <td><code>:focus</code></td>
              <td>When element is active (like clicked input)</td>
            </tr>
            <tr>
              <td><code>:first-child</code></td>
              <td>First child of parent</td>
            </tr>
            <tr>
              <td><code>:nth-child(2)</code></td>
              <td>2nd child</td>
            </tr>
          </tbody>
        </table>

        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`button:hover {
  background-color: hotpink;
  color: white;
}`}
        </CodeBlock>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Pseudo-Element (<code>::</code>)
        </h3>

        <p>
          Styles part of an element, not the whole element.
        </p>

        <table className="tb-blog">
          <thead>
            <tr>
              <th>Example</th>
              <th>Function</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><code>::before</code></td>
              <td>Add content before element</td>
            </tr>
            <tr>
              <td><code>::after</code></td>
              <td>Add content after element</td>
            </tr>
            <tr>
              <td><code>::placeholder</code></td>
              <td>Style input placeholder</td>
            </tr>
          </tbody>
        </table>

        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`h1::after {
  content: " 🚀";
  color: orange;
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Transitions & Light Animations
        </h2>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          <code>transition</code>
        </h3>

        <p>
          Creates smooth effects when properties change.
        </p>

        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`.box {
  transition: all 0.3s ease;
}

.box:hover {
  transform: scale(1.1);
  background-color: #00f;
}`}
        </CodeBlock>

        <p>
          Zoom effect on hover. Smooth and soft, not like Harry Potter magic.
        </p>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          <code>animation</code>
        </h3>

        <p>
          Creates repeating/regular movement using keyframes.
        </p>

        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.title {
  animation: fadeIn 1s ease-in;
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Responsive Units
        </h2>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Popular Units
        </h3>

        <table className="tb-blog">
          <thead>
            <tr>
              <th>Unit</th>
              <th>Function</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><code>px</code></td>
              <td>Fixed size</td>
            </tr>
            <tr>
              <td><code>%</code></td>
              <td>Relative to parent element</td>
            </tr>
            <tr>
              <td><code>em</code></td>
              <td>Relative to parent's font size</td>
            </tr>
            <tr>
              <td><code>rem</code></td>
              <td>Relative to root (html)</td>
            </tr>
            <tr>
              <td><code>vw</code> / <code>vh</code></td>
              <td>% of viewport width/height</td>
            </tr>
          </tbody>
        </table>

        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`.container {
  width: 80vw;
  font-size: 1.2rem;
}`}
        </CodeBlock>

        <p>
          <b>Best practice:</b> use <code>rem</code> for text,
          <code> vw</code>/<code>%</code> for layout.
          Responsive layouts become much easier this way.
        </p>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Responsive Design + Media Query
        </h2>

        <p>
          <code>media query</code> = way to create different displays for
          different screen sizes.
        </p>

        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`@media (max-width: 600px) {
  h1 {
    font-size: 24px;
    text-align: center;
  }
}`}
        </CodeBlock>

        <p>
          Mobile user? Display automatically neat.
          Laptop user? Still looks good.
        </p>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Styling Best Practices (Must Know to Go Pro)
        </h2>

        <table className="tb-blog">
          <thead>
            <tr>
              <th>Tip</th>
              <th>Explanation</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                Use classes, avoid styling tags directly like
                <code> &lt;h1&gt;</code>
              </td>
              <td>More flexible</td>
            </tr>

            <tr>
              <td>
                Clear class names (<code>.btn-primary</code>)
              </td>
              <td>Less confusing</td>
            </tr>

            <tr>
              <td>
                Reuse classes, avoid copy-paste styles
              </td>
              <td>DRY: Don't Repeat Yourself</td>
            </tr>

            <tr>
              <td>Use CSS reset/normalize</td>
              <td>Consistent display across browsers</td>
            </tr>

            <tr>
              <td>External CSS &gt; inline/internal</td>
              <td>Cleaner and more scalable</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section
        style={{
          marginTop: '2rem',
          padding: '1.5rem',
          background: 'transparent',
          borderLeft: '5px solid rgb(145, 31, 31)',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(255, 255, 255, 0.05)',
          fontFamily: "'Segoe UI', sans-serif",
          height: 'auto',
        }}
      >
        <h2
          style={{
            marginBottom: '0.8rem',
            color: '#454545',
            fontSize: '1.5rem',
          }}
        >
          Closing Thoughts from Me - LIBR
        </h2>

        <p
          style={{
            marginBottom: '1rem',
            lineHeight: '1.7',
            color: '#454545',
          }}
        >
          Hi! I'm <strong>Syifa</strong>, and all the material I share here is
          what I've learned from <strong>SCRATCH</strong>.
          <br />
          <br />
          I started not knowing what <code>&lt;div&gt;</code> was, why we need
          <code> &lt;head&gt;</code>, or why CSS could change text colors. But
          little by little I learned through videos, articles, and of course,
          lots of trial and error until the errors disappeared.
          <br />
          <br />
          Everything I share here (from <strong>HTML Card Part 1–2</strong> to
          <strong> CSS Card Part 1–4</strong>) is my own recap and
          understanding. I try to explain it in a way I understand and like, so
          readers can feel:
          <em> "Oh, it can be explained this simply."</em>
        </p>

        <blockquote
          style={{
            margin: '1rem 0',
            padding: '1rem',
            backgroundColor: 'rgb(245, 232, 232)',
            borderLeft: '4px solid rgb(145, 31, 31)',
            fontStyle: 'italic',
            color: '#333',
          }}
        >
          I believe:
          <br />
          <strong>
            Learning to code isn't about who's fastest, but who's consistent
            and doesn't give up.
          </strong>
        </blockquote>

        <p
          style={{
            marginBottom: '1.2rem',
            lineHeight: '1.7',
            color: '#454545',
          }}
        >
          If you're also learning HTML & CSS from scratch, I hope this content
          can be your learning companion too.
          <br />
          <br />
          Don't be afraid to start from the bottom, everyone who's good was
          once stuck on just <code>&lt;br&gt;</code>.
        </p>
      </section>
    </ArticlesLayout>
  )
}