import type { ReactNode } from "react";

export type CaseStudyImage = {
  src: string;
  alt: string;
  caption?: ReactNode;
};

export type CaseStudySkill = {
  label: string;
  /** CSS color for hover underline */
  accent: string;
};

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

export type CaseStudyArtifact = {
  title: string;
  description: ReactNode;
  image?: CaseStudyImage;
};

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
};
