import Image from "next/image";
import AnimatedLink from "@/components/AnimatedLink";
import ProjectRoleTag from "@/components/ProjectRoleTag";
import { projects } from "@/data/projects";
import {
  RESUME_DOWNLOAD_NAME,
  RESUME_PDF_PATH,
  RESUME_PREVIEW_IMAGE,
} from "@/data/resume";

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
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h2 className="text-3xl font-semibold tracking-wide">
            Resume
          </h2>
          <a
            href={RESUME_PDF_PATH}
            download={RESUME_DOWNLOAD_NAME}
            className={
              "interactive shrink-0 rounded-xl " +
              "border border-black px-4 py-2 " +
              "text-sm font-medium tracking-wide " +
              "hover:bg-black hover:text-white"
            }
          >
            Download
          </a>
        </div>
        <div
          className={
            "mt-8 overflow-hidden rounded-2xl " +
            "border border-black bg-white"
          }
        >
          <Image
            src={RESUME_PREVIEW_IMAGE}
            alt="Preview of Mason Green resume"
            width={1530}
            height={1980}
            className="h-auto w-full"
            sizes="(max-width: 1024px) 100vw, 64rem"
            priority={false}
          />
        </div>
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
