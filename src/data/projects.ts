export type DemoStatus = "N/A" | "VIEW";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  demoStatus: DemoStatus;
  /** Shown on hover when a live demo is unavailable. */
  demoUnavailableReason: string | null;
};

export const projects: Project[] = [
  {
    slug: "contigo",
    title: "Contigo",
    summary:
      "AI-powered WhatsApp chatbot for KIND—turning " +
      "immigration and social-service guidance into a " +
      "conversational, multilingual client channel.",
    demoStatus: "N/A",
    demoUnavailableReason: "Live demo under NDA.",
  },
  {
    slug: "dencity",
    title: "Dencity",
    summary:
      "Founded geospatial MVP for middle-housing under " +
      "WA HB 1110—led a four-person team through threat " +
      "modeling, stack design, and PSRC parcel data.",
    demoStatus: "VIEW",
    demoUnavailableReason: null,
  },
  {
    slug: "avepass",
    title: "AvePass",
    summary:
      "REST API features with Node.js and Express, " +
      "including contracts, testing, and release to users.",
    demoStatus: "N/A",
    demoUnavailableReason:
      "App deprecated and not available.",
  },
];

export function getProjectBySlug(
  slug: string,
): Project | undefined {
  return projects.find(
    (project) => project.slug === slug,
  );
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
