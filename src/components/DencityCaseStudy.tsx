import CaseStudyLayout from "@/components/CaseStudyLayout";
import DencityMapLazy from "@/components/DencityMapLazy";
import { dencityCaseStudy } from "@/data/dencity";

export default function DencityCaseStudy() {
  return (
    <CaseStudyLayout content={dencityCaseStudy}>
      <DencityMapLazy />
    </CaseStudyLayout>
  );
}
