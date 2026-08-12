import type { ReactNode } from "react";

/* Image asset used across case-study cards and artifacts. */
export type CaseStudyImage = {
  src: string;
  alt: string;
  caption?: ReactNode;
};

/* Skill chip with theme accent for About hover underlines. */
export type CaseStudySkill = {
  label: string;
  /** CSS color for hover underline */
  accent: string;
};

/* About-section copy, skills, and optional partner marks. */
export type CaseStudyAbout = {
  problem: ReactNode;
  role: ReactNode;
  skills: CaseStudySkill[];
  /** Optional partner logos on the right of About. */
  logoStack?: {
    top: CaseStudyImage;
    bottom: CaseStudyImage;
  };
  /** Optional single collaborator mark (e.g. PSRC). */
  collaboration?: {
    label: string;
    logo: CaseStudyImage;
  };
};

/* Process artifact shown inside an expanded overview card. */
export type CaseStudyArtifact = {
  title: string;
  description: ReactNode;
  image?: CaseStudyImage;
};

/* One overview carousel card (goal, opportunity, etc.). */
export type CaseStudyCard = {
  id: "goal" | "opportunity" | "challenge" | "outcome";
  title: string;
  summary: ReactNode;
  /** unDraw (or similar) SVG for the collapsed card face. */
  illustration?: CaseStudyImage;
  /** Longer copy shown when the card expands. */
  details?: ReactNode;
  /** Process artifacts shown only when expanded. */
  artifacts?: CaseStudyArtifact[];
};

/* Full case-study document consumed by CaseStudyLayout. */
export type CaseStudyContent = {
  about: CaseStudyAbout;
  cards: CaseStudyCard[];
  findOutMore?: {
    intro: ReactNode;
    artifacts: CaseStudyArtifact[];
  };
  /** Optional YouTube (or similar) demo at page bottom. */
  demoVideo?: {
    title?: string;
    youtubeId: string;
    description?: ReactNode;
  };
  /** Optional API CRUD highlights (e.g. AvePass users). */
  crudRoutes?: {
    title?: string;
    intro?: ReactNode;
    routes: CaseStudyCrudRoute[];
  };
};

/* One documented API route in a CRUD strip. */
export type CaseStudyCrudRoute = {
  operation: "CREATE" | "READ" | "UPDATE" | "DELETE";
  method: string;
  path: string;
  what: ReactNode;
  mongo: ReactNode;
  skills: string[];
};
