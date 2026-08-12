import CaseStudyLayout from "@/components/CaseStudyLayout";
import { contigoCaseStudy } from "@/data/contigo";

/* Contigo project page: wires Contigo content into CaseStudyLayout. */
export default function ContigoCaseStudy() {
  return <CaseStudyLayout content={contigoCaseStudy} />;
}
