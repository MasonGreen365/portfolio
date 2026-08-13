import AnimatedLink from "@/components/AnimatedLink";
import ProjectRoleTag from "@/components/ProjectRoleTag";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-wide">
        Projects
      </h1>
      <p className="mt-4 max-w-2xl leading-relaxed">
        Explore selected software projects. Open a project for
        more detail.
      </p>
      <ul className="mt-10 space-y-8">
        {projects.map((project) => (
          <li
            key={project.slug}
            className={
              "border-t border-black pt-8 " +
              "first:border-t-0 first:pt-0"
            }
          >
            <h2
              className={
                "flex flex-wrap items-baseline " +
                "gap-x-3 gap-y-1 text-xl font-medium"
              }
            >
              <AnimatedLink
                href={`/projects/${project.slug}`}
                className="underline"
              >
                {project.title}
              </AnimatedLink>
              <ProjectRoleTag
                role={project.role}
                accent={project.roleAccent}
                className="text-sm font-normal"
              />
            </h2>
            <p className="mt-2 max-w-2xl leading-relaxed">
              {project.summary}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
