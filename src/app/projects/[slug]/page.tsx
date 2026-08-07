import Link from "next/link";
import { notFound } from "next/navigation";
import ContigoCaseStudy from "@/components/ContigoCaseStudy";
import DencityCaseStudy from "@/components/DencityCaseStudy";
import {
  getAllProjectSlugs,
  getProjectBySlug,
} from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const caseStudy =
    slug === "contigo" || slug === "dencity";

  return (
    <div className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <Link href="/projects" className="text-sm underline">
          Back to projects
        </Link>
        <div className="mt-6 flex items-start justify-between gap-6">
          <div className="min-w-0 flex-1">
            <h1 className="text-3xl font-semibold tracking-wide">
              {project.title}
            </h1>
            {!caseStudy ? (
              <p className="mt-4 max-w-2xl leading-relaxed">
                {project.summary}
              </p>
            ) : null}
          </div>
          {project.demoStatus === "VIEW" ? (
            <a
              href={
                slug === "dencity"
                  ? "#dencity-demo"
                  : `#${slug}-demo`
              }
              className={
                "shrink-0 rounded-xl border border-black " +
                "px-4 py-2 text-sm font-medium " +
                "tracking-wide transition " +
                "hover:bg-black hover:text-white"
              }
            >
              {project.demoStatus}
            </a>
          ) : (
            <span className="group relative shrink-0">
              <span
                className={
                  "inline-block cursor-default " +
                  "rounded-xl border border-black/30 " +
                  "px-4 py-2 text-sm font-medium " +
                  "tracking-wide text-black/40"
                }
                aria-describedby={
                  project.demoUnavailableReason
                    ? `${project.slug}-demo-reason`
                    : undefined
                }
              >
                {project.demoStatus}
              </span>
              {project.demoUnavailableReason ? (
                <span
                  id={`${project.slug}-demo-reason`}
                  role="tooltip"
                  className={
                    "pointer-events-none absolute " +
                    "right-0 top-full z-10 mt-2 w-max " +
                    "max-w-xs rounded-lg border " +
                    "border-black bg-white px-3 py-2 " +
                    "text-xs leading-relaxed text-black " +
                    "opacity-0 shadow-sm " +
                    "transition-opacity duration-200 " +
                    "group-hover:opacity-100"
                  }
                >
                  {project.demoUnavailableReason}
                </span>
              ) : null}
            </span>
          )}
        </div>
      </div>

      {slug === "contigo" ? (
        <ContigoCaseStudy />
      ) : slug === "dencity" ? (
        <DencityCaseStudy />
      ) : (
        <p
          className={
            "mx-auto mt-8 max-w-5xl px-6 " +
            "text-sm leading-relaxed"
          }
        >
          Detail media and interactive demos will live on
          this page so they do not load on the home route.
        </p>
      )}
    </div>
  );
}
