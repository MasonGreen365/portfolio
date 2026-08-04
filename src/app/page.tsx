export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <section id="about" className="scroll-mt-24 py-16">
        <h1 className="text-3xl font-semibold tracking-wide">About</h1>
        <p className="mt-4 max-w-2xl leading-relaxed">
          Full-stack software engineer with a B.S. in Informatics from the
          University of Washington. Experienced in problem definition, solution
          ideation, and software execution.
        </p>
      </section>

      <section id="projects" className="scroll-mt-24 border-t border-black py-16">
        <h2 className="text-3xl font-semibold tracking-wide">Projects</h2>
        <ul className="mt-8 space-y-8">
          <li>
            <h3 className="text-xl font-medium">Contigo</h3>
            <p className="mt-2 max-w-2xl leading-relaxed">
              Vocabulary-constrained LLM and low-cost WhatsApp service for a
              nonprofit.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-medium">Dencity</h3>
            <p className="mt-2 max-w-2xl leading-relaxed">
              Geospatial web app that converted large ArcGIS datasets into
              interactive feature layers.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-medium">AvePass</h3>
            <p className="mt-2 max-w-2xl leading-relaxed">
              REST API features with Node.js and Express, including contracts,
              testing, and release to users.
            </p>
          </li>
        </ul>
      </section>

      <section id="contact" className="scroll-mt-24 border-t border-black py-16">
        <h2 className="text-3xl font-semibold tracking-wide">Contact Me</h2>
        <p className="mt-4 max-w-2xl leading-relaxed">
          Reach me at{" "}
          <a href="mailto:masongreen511@gmail.com" className="underline">
            masongreen511@gmail.com
          </a>{" "}
          or on{" "}
          <a
            href="https://www.linkedin.com/in/masonlgreen"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            LinkedIn
          </a>
          .
        </p>
      </section>
    </div>
  );
}
