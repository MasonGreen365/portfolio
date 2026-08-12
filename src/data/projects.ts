/* Whether a project has a viewable demo on its detail page. */
export type DemoStatus = "N/A" | "VIEW";

/* Portfolio project teaser used on home and /projects index. */
export type Project = {
  slug: string;
  title: string;
  role: string;
  /** CSS color for role underline hover. */
  roleAccent: string;
  summary: string;
  demoStatus: DemoStatus;
  /** External or on-page URL for VIEW CTA. */
  demoUrl?: string | null;
  /** Hover note on the demo CTA (cold start, NDA, etc.). */
  demoUnavailableReason: string | null;
};

/* Ordered list of featured portfolio projects. */
export const projects: Project[] = [
  {
    slug: "contigo",
    title: "Contigo",
    role: "Technical Project Manager + SWE",
    roleAccent: "var(--palette-olive)",
    summary:
      "Led a 5-person, company-sponsored UW Info " +
      "Capstone that shipped an MVP communication " +
      "tool to answer questions and raise issues to " +
      "case managers.",
    demoStatus: "N/A",
    demoUnavailableReason: "Live demo under NDA.",
  },
  {
    slug: "dencity",
    title: "Dencity",
    role: "Founder + SWE",
    roleAccent: "var(--palette-forest)",
    summary:
      "Researched problem domain, collaborated with industry experts, and recruited Informatics students to build a geospatial MVP that supports middle-housing development in King County.",
    demoStatus: "VIEW",
    demoUrl: "https://dencity-1xsi.onrender.com/",
    demoUnavailableReason: "Site may take 50 seconds or longer to load.",
  },
  {
    slug: "avepass",
    title: "AvePass",
    role: "Backend Developer",
    roleAccent: "var(--palette-ochre)",
    summary:
      "Onboarded as a new developer to a student start-up, built REST API features with Node.js and Express, " +
      "including contracts, testing, and release to users. Worked on data storage, API authentication, and user management.",
    demoStatus: "N/A",
    demoUnavailableReason:
      "App deprecated and not available.",
  },
];

/* Look up one project by its URL slug. */
export function getProjectBySlug(
  slug: string,
): Project | undefined {
  return projects.find(
    (project) => project.slug === slug,
  );
}

/* Slugs for static generation of /projects/[slug]. */
export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
