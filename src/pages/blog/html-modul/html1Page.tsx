import ArticlesLayout, { CodeBlock, HighlightBox, Output } from '../ArticlesLayout'

export default function Html1Page() {
  return (
    <ArticlesLayout
      badge="HTML Module"
      title="HTML Basics: The Foundation of Web Development"
      date="May 15, 2025"
      tags="HTML, Web Development, Basics"
      readingTime="8 min read"
      intro="HTML is the foundation of all web development. Learn the basic concepts, tags, and structure that make up every webpage on the internet."
      githubUrl="#"
      prev={{ path: '/blog/days-challenge/day6', title: 'Odd, Even, or Special?' }}
      next={{ path: '/blog/html-modul/html2', title: 'HTML Intermediate: Structure & Semantics' }}
      related={[
        {
          path: '/blog/days-challenge/day6',
          date: 'June 15, 2025',
          title: 'Day 6: Odd, Even, or Special?',
          excerpt: 'Creating a weather application that fetches data from an API and displays it beautifully.',
          tags: ['JavaScript', 'Conditions', 'Logic'],
        },
        {
          path: '/blog/html-modul/html2',
          date: 'May 16, 2025',
          title: 'HTML Intermediate: Structure & Semantics',
          excerpt: 'Learning about iframes, div vs span, and the importance of semantic HTML structure.',
          tags: ['HTML', 'Web Development', 'Semantics'],
        },
      ]}
      conclusion={
        <>
          <h3 className="mb-3 font-bold">Key Takeaways</h3>
          <p>
            HTML is the foundation of all web development. Understanding structure,
            tags, attributes, links, images, and tables will make learning CSS and
            JavaScript much easier later on.
          </p>
        </>
      }
    >
      <section>
        <p className="mb-5">
          HTML (HyperText Markup Language) is the backbone of every website.
          It provides the structure that browsers use to display content.
        </p>
      </section>

      <section>
        <h2 className="mt-7 mb-5 font-bold text-[1.8rem]">What is HTML?</h2>

        <p>
          HTML is not a programming language. It is a markup language used to
          structure content on web pages.
        </p>

        <p>
          HTML tells the browser what each piece of content represents,
          such as headings, paragraphs, images, links, and buttons.
        </p>

        <HighlightBox>
          <p>
            HTML provides structure, CSS provides styling, and JavaScript
            provides interactivity.
          </p>
        </HighlightBox>
      </section>

      <section>
        <h2 className="mt-7 mb-5 font-bold text-[1.8rem]">Basic HTML Terms</h2>

        <CodeBlock lang="HTML Example" langIcon="fab fa-html5">
{`<p>Hello World</p>`}
        </CodeBlock>

        <p>
          Some important concepts include Elements, Tags, Attributes,
          Properties, and Content.
        </p>
      </section>

      <section>
        <h2 className="mt-7 mb-5 font-bold text-[1.8rem]">Meta Tags</h2>

        <CodeBlock lang="HTML" langIcon="fab fa-html5">
{`<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
        </CodeBlock>

        <p>
          Meta tags provide important information to browsers before
          the page content is displayed.
        </p>
      </section>

      <section>
        <h2 className="mt-7 mb-5 font-bold text-[1.8rem]">Text Formatting</h2>

        <CodeBlock lang="HTML" langIcon="fab fa-html5">
{`<b>Bold</b>
<i>Italic</i>
<u>Underline</u>`}
        </CodeBlock>

        <p>
          HTML provides several tags to emphasize and format text.
        </p>
      </section>

      <section>
        <h2 className="mt-7 mb-5 font-bold text-[1.8rem]">Anchor Tags</h2>

        <CodeBlock lang="HTML" langIcon="fab fa-html5">
{`<a href="https://google.com" target="_blank">
  Search on Google
</a>`}
        </CodeBlock>

        <p>
          Anchor tags allow users to navigate between pages and websites.
        </p>
      </section>

      <section>
        <h2 className="mt-7 mb-5 font-bold text-[1.8rem]">Images</h2>

        <CodeBlock lang="HTML" langIcon="fab fa-html5">
{`<img src="image.jpg" alt="Cute Cat Picture">`}
        </CodeBlock>

        <p>
          The <code>src</code> attribute specifies the image source,
          while <code>alt</code> provides alternative text.
        </p>
      </section>

      <section>
        <h2 className="mt-7 mb-5 font-bold text-[1.8rem]">Tables</h2>

        <CodeBlock lang="HTML" langIcon="fab fa-html5">
{`<table>
  <tr>
    <th>Name</th>
    <th>Role</th>
  </tr>

  <tr>
    <td>Syifa</td>
    <td>Developer</td>
  </tr>
</table>`}
        </CodeBlock>

        <p>
          Tables help organize information into rows and columns.
        </p>

        <Output>
          Name: Syifa<br />
          Role: Developer
        </Output>
      </section>
    </ArticlesLayout>
  )
}
