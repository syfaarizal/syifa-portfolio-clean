import ArticlesLayout, { CodeBlock } from '../ArticlesLayout'

export default function Css3Page() {
  return (
    <ArticlesLayout
      badge="Layout"
      title="CSS Layout: Positioning and Modern Techniques"
      date="May 22, 2025"
      tags="CSS, Layout, Flexbox, Grid"
      readingTime="9 min read"
      intro="Master modern CSS layout techniques including positioning, Flexbox, Grid systems, and responsive design to create professional web layouts."
      githubUrl="#"
      prev={{ path: '/blog/css-modul/css2', title: 'CSS Styling: Beyond the Basics' }}
      next={{ path: '/blog/css-modul/css4', title: 'CSS Advanced: Animations, Responsive Design & Best Practices' }}
      related={[
        {
          path: '/blog/css-modul/css2',
          date: 'May 19, 2025',
          title: 'CSS Styling: Beyond the Basics',
          excerpt:
            'Master text styling, box model, backgrounds, and display properties.',
          tags: ['CSS', 'Web Design', 'Styling'],
        },
        {
          path: '/blog/css-modul/css4',
          date: 'May 27, 2025',
          title:
            'CSS Advanced: Animations, Responsive Design & Best Practices',
          excerpt:
            'Bring your websites to life with smooth animations and interactive transitions.',
          tags: ['CSS', 'Animations', 'Responsive Design'],
        },
      ]}
      conclusion={
        <>
          <h3 className="mb-3 font-bold text-[1.5rem]">
            Key Takeaways
          </h3>

          <ul>
            <li>
              Know all <code>position</code> types and how to use them
            </li>
            <li>
              Can control layers with <code>z-index</code>
            </li>
            <li>
              Flexbox = easy layouts, centered without stress
            </li>
            <li>
              CSS Grid = create complex magazine-like layouts
            </li>
            <li>
              Media query = responsive layouts automatically
            </li>
          </ul>
        </>
      }
    >
      <section>
        <p className="mb-5">
          Now that the design looks good, it's time to arrange the layout.
          In this lesson you'll learn how to position elements properly,
          build layouts using Flexbox and Grid, and create responsive
          experiences for different screen sizes.
        </p>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Positioning: Keeping Elements in Place
        </h2>

        <p>
          CSS has the <code>position</code> property to control how elements
          "stick" to the page.
        </p>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Types of Position
        </h3>

        <table className="tb-blog">
          <thead>
            <tr>
              <th>Type</th>
              <th>Brief Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><code>static</code></td>
              <td>Default (follows HTML flow)</td>
            </tr>
            <tr>
              <td><code>relative</code></td>
              <td>Offset relative to initial position</td>
            </tr>
            <tr>
              <td><code>absolute</code></td>
              <td>Sticks to nearest positioned parent</td>
            </tr>
            <tr>
              <td><code>fixed</code></td>
              <td>Sticks to viewport (doesn't scroll)</td>
            </tr>
            <tr>
              <td><code>sticky</code></td>
              <td>Hybrid of relative + fixed (sticks when scrolling)</td>
            </tr>
          </tbody>
        </table>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Example
        </h3>

        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`.box {
  position: relative;
  top: 20px;
  left: 30px;
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          z-index: Who's On Top?
        </h2>

        <p>
          <code>z-index</code> controls the stacking order of elements
          (z-axis). Higher value = more forward.
        </p>

        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`.card {
  position: absolute;
  z-index: 10;
}`}
        </CodeBlock>

        <p>
          Useful so popups/modals don't get covered by other content.
          Think of it like Photoshop layers.
        </p>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Flexbox: Stress-Free Layouts & Centering
        </h2>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Important Container Properties
        </h3>

        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}`}
        </CodeBlock>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Important Item Properties
        </h3>

        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`.item {
  flex-grow: 1;
}`}
        </CodeBlock>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Simple Flexbox Example
        </h3>

        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`.flexbox {
  display: flex;
  gap: 20px;
  justify-content: space-between;
}`}
        </CodeBlock>

        <CodeBlock lang="HTML" langIcon="fab fa-html5">
{`<div class="flexbox">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>`}
        </CodeBlock>

        <table className="tb-blog">
          <thead>
            <tr>
              <th>Property</th>
              <th>Function</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><code>justify-content</code></td>
              <td>
                Horizontal position (start, center, end, space-between)
              </td>
            </tr>
            <tr>
              <td><code>align-items</code></td>
              <td>
                Vertical position (start, center, stretch, end)
              </td>
            </tr>
            <tr>
              <td><code>flex-direction</code></td>
              <td>Layout order: row / column</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          CSS Grid: For More Complex Layouts
        </h2>

        <p>
          <i>
            Grid is like Flexbox's "matrix" version — perfect for 2D layouts
            (rows & columns).
          </i>
        </p>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Basic Example
        </h3>

        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}`}
        </CodeBlock>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Important Properties
        </h3>

        <table className="tb-blog">
          <thead>
            <tr>
              <th>Property</th>
              <th>Function</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><code>grid-template-columns</code></td>
              <td>Number & width of columns</td>
            </tr>
            <tr>
              <td><code>grid-template-rows</code></td>
              <td>Number & height of rows</td>
            </tr>
            <tr>
              <td><code>gap</code></td>
              <td>Space between elements</td>
            </tr>
            <tr>
              <td><code>grid-column / row</code></td>
              <td>For merging columns/rows (span)</td>
            </tr>
          </tbody>
        </table>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          CSS Grid Example
        </h3>

        <CodeBlock lang="HTML" langIcon="fab fa-html5">
{`<div class="grid-container">
  <div class="grid-item">A</div>
  <div class="grid-item">B</div>
  <div class="grid-item">C</div>
</div>`}
        </CodeBlock>

        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}`}
        </CodeBlock>

        <p>
          <i>
            1fr = 1 fraction of available space. Think of it as:
            1 slot out of 3 equally divided slots.
          </i>
        </p>
      </section>

      <section>
        <h2 className="mt-6 mb-1 font-bold text-[1.8rem]">
          Responsive Layout
        </h2>

        <p>
          Use <code>@media query</code> to create responsive layouts based on
          screen size.
        </p>

        <h3 className="mt-5 mb-3 font-bold text-[1.5rem]">
          Basic Media Query Example
        </h3>

        <CodeBlock lang="CSS" langIcon="fab fa-css3-alt">
{`@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}`}
        </CodeBlock>

        <p>
          Meaning: when screen ≤ 768px (tablet/mobile), change flex to
          vertical.
        </p>
      </section>
    </ArticlesLayout>
  )
}