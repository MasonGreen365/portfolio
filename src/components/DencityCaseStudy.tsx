import CaseStudyLayout from "@/components/CaseStudyLayout";
import DencityMapLazy from "@/components/DencityMapLazy";
import { dencityCaseStudy } from "@/data/dencity";

/* Dencity project page: case study shell plus lazy map demo. */
export default function DencityCaseStudy() {
  return (
    <CaseStudyLayout content={dencityCaseStudy}>
      <DencityMapLazy />
    </CaseStudyLayout>
  );
}
