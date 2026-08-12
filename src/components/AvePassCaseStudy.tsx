import CaseStudyLayout from "@/components/CaseStudyLayout";
import { avepassCaseStudy } from "@/data/avepass";

/* AvePass case study: about, overview cards, user CRUD strip. */
export default function AvePassCaseStudy() {
  return <CaseStudyLayout content={avepassCaseStudy} />;
}
