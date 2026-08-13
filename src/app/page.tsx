import AnimatedLink from "@/components/AnimatedLink";
import ProjectRoleTag from "@/components/ProjectRoleTag";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <section id="about" className="scroll-mt-24 py-16">
        <h1 className="text-3xl font-semibold tracking-wide">
          About
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed">
          Full-stack software engineer with a B.S. in
          Informatics from the University of Washington.
          Experienced in problem definition, solution
          ideation, and software execution.
        </p>
      </section>

      <section className="scroll-mt-24 border-t border-black py-16">
        <h2 className="text-3xl font-semibold tracking-wide">
          Projects
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed">
          Selected work across full-stack apps, APIs, and
          applied AI.
        </p>
        <ul className="mt-8 space-y-4">
          {projects.map((project) => (
            <li key={project.slug}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <AnimatedLink
                  href={`/projects/${project.slug}`}
                  className="text-xl font-medium underline"
                >
                  {project.title}
                </AnimatedLink>
                <ProjectRoleTag
                  role={project.role}
                  accent={project.roleAccent}
                  className="text-sm"
                />
              </div>
              <p className="mt-1 max-w-2xl leading-relaxed">
                {project.summary}
              </p>
            </li>
          ))}
        </ul>
        <AnimatedLink
          href="/projects"
          className="mt-8 underline"
        >
          View all projects
        </AnimatedLink>
      </section>

      <section
        id="resume"
        className="scroll-mt-24 border-t border-black py-16"
      >
        <h2 className="text-3xl font-semibold tracking-wide">
          Resume
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed">
          Resume download coming soon.
        </p>
      </section>

      <section className="scroll-mt-24 border-t border-black py-16">
        <h2 className="text-3xl font-semibold tracking-wide">
          Contact
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed">
          Reach out by email or schedule a meeting.
        </p>
        <AnimatedLink
          href="/contact"
          className="mt-4 underline"
        >
          Go to contact
        </AnimatedLink>
      </section>
    </div>
  );
}
